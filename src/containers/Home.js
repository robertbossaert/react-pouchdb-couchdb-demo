import React, { Component } from 'react';
import styled from 'styled-components';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import DbContainer from '../store/state';
import InputWrapper from '../components/InputWrapper';
import Heading from '../components/common/Heading';
import List from '../components/common/List';
import TextInput from '../components/common/TextInput';
import ViewWrapper from '../components/ViewWrapper';

/**
 * Styling of the component.
 *
 * @type {Object}
 */
const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0 0 20px;
`;

const notificationOptions = {
  insert: 'top',
  container: 'bottom-right',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  dismiss: { duration: 5000 },
  dismissable: { click: true },
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.dbContainer = new DbContainer('react-pouchdb-couchdb-demo');

    this.state = {
      items: [],
      itemText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDbChange = this.handleDbChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  componentDidMount() {
    const { localDB } = this.dbContainer;

    localDB
      .allDocs({ include_docs: true })
      .then(results => {
        this.setState({
          items: results.rows.map(row => row.doc),
        });
      })
      .catch(err => console.warn(err));

    if (this.dbContainer.remoteDB) {
      this.syncToRemote();
    }

    localDB
      .changes({
        live: true,
        include_docs: true,
      })
      .on('change', this.handleDbChange);
  }

  /**
   * Update the state on every submit.
   * @param {Object} event
   */
  handleSubmit = e => {
    e.preventDefault();

    const { localDB } = this.dbContainer;
    const { itemText } = this.state;

    if (itemText) {
      // Save item to the database
      localDB.post({ value: itemText }).catch(console.log.bind(console, 'Error inserting'));

      // Clear the input field
      this.setState({
        itemText: '',
      });
    }
  };

  /**
   * Update the state on every change.
   * @param {Object} event
   */
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  /**
   * Update on local db changes
   * @param {Object} event
   */
  handleDbChange = change => {
    const { doc } = change;

    if (!doc) {
      return;
    }

    if (doc._deleted) {
      this.removeItem(doc);
    } else {
      this.addItem(doc);
    }
  };

  /**
   * Update the state on every click.
   * @param {Object} event
   */
  handleClick = oldItem => {
    const { localDB } = this.dbContainer;

    localDB.remove(oldItem).catch(console.log.bind(console, 'Error removing'));
  };

  addItem(newItem) {
    const { items } = this.state;

    if (items.find(item => item._id === newItem._id)) return;

    this.setState({
      items: [...items, newItem],
    });
  }

  removeItem(oldItem) {
    const { items } = this.state;

    this.setState({
      items: items.filter(doc => doc._id !== oldItem._id),
    });
  }

  /**
   * Synchronize local PouchDB with a remote CouchDB
   */
  syncToRemote() {
    const { localDB, remoteDB } = this.dbContainer;

    localDB
      .sync(remoteDB, {
        live: true,
        retry: true,
      })
      .on('change', () => {
        // this.handleDbChange();
      })
      .on('paused', () => {
        this.notificationDOMRef.current.addNotification({
          title: 'Paused',
          message: 'replication paused (e.g. replication up to date, user went offline)',
          type: 'info',
          ...notificationOptions,
        });
      })
      .on('active', () => {
        this.notificationDOMRef.current.addNotification({
          title: 'Active',
          message: 'replicate resumed (e.g. new changes replicating, user went back online)',
          type: 'success',
          ...notificationOptions,
        });
      })
      .on('denied', () => {
        this.notificationDOMRef.current.addNotification({
          title: 'Denied',
          message: 'a document failed to replicate (e.g. due to permissions)',
          type: 'danger',
          ...notificationOptions,
        });
      })
      .on('complete', info => {
        this.notificationDOMRef.current.addNotification({
          title: 'Complete',
          message: `${info}`,
          type: 'success',
          ...notificationOptions,
        });
      })
      .on('error', err => {
        this.notificationDOMRef.current.addNotification({
          title: 'Error',
          message: `${JSON.stringify(err)}`,
          type: 'danger',
          ...notificationOptions,
        });
      });
  }

  render() {
    const { items, itemText } = this.state;

    return (
      <ViewWrapper center>
        <Heading center size={2} title="Enter some text!" />
        <StyledParagraph>Follow the instructions inside the info tab above.</StyledParagraph>
        <form onSubmit={this.handleSubmit}>
          <InputWrapper>
            <TextInput
              name="itemText"
              onChange={this.handleChange}
              placeholder="Some text"
              type="text"
              value={itemText}
            />
          </InputWrapper>
          <List items={items} handleClick={this.handleClick} />
        </form>

        <ReactNotification ref={this.notificationDOMRef} />
      </ViewWrapper>
    );
  }
}

export default Home;
