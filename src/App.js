import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Provider } from 'unstated';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import DbContainer from './store/state';
import Header from './components/Header';
import Home from './containers/Home';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background-color: ${props => props.theme.document.background};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.document.fontFamily};
    font-size: ${props => props.theme.document.fontSize};
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
    color: ${props => props.theme.document.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  /**
   * Modal - Lock the scroll position by adding this class to the '<html>' element.
   */
  .u-lock-scroll {
    overflow: hidden !important;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const notificationOptions = {
  insert: 'top',
  container: 'bottom-right',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  dismiss: { duration: 5000 },
  dismissable: { click: true },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.dbContainer = new DbContainer('react-pouchdb-couchdb-demo');
    this.notificationDOMRef = React.createRef();
  }

  /**
   * If a remote DB is intialized, synchronize local CouchDB with a remote CouchDB
   */
  componentDidMount() {
    if (this.dbContainer.remoteDB) {
      this.syncToRemote();
    }
  }

  /**
   * Synchronize local PouchDB with a remote CouchDB
   */
  syncToRemote() {
    const { localDB, remoteDB } = this.dbContainer;

    this.dbContainer.getItems().then(items => this.dbContainer.updateState(items));

    localDB
      .sync(remoteDB, {
        live: true,
      })
      .on('change', () => {
        this.dbContainer.getItems().then(items => this.dbContainer.updateState(items));
      })
      .on('paused', () => {
        // console.log('paused', err);
        this.notificationDOMRef.current.addNotification({
          title: 'Paused',
          message: 'replication paused (e.g. replication up to date, user went offline)',
          type: 'info',
          ...notificationOptions,
        });
      })
      .on('active', () => {
        // console.log('active');
        this.notificationDOMRef.current.addNotification({
          title: 'Active',
          message: 'replicate resumed (e.g. new changes replicating, user went back online)',
          type: 'success',
          ...notificationOptions,
        });
      })
      .on('denied', () => {
        // console.log('denied', err);
        this.notificationDOMRef.current.addNotification({
          title: 'Denied',
          message: 'a document failed to replicate (e.g. due to permissions)',
          type: 'danger',
          ...notificationOptions,
        });
      })
      .on('complete', info => {
        // console.log('complete', info);
        this.notificationDOMRef.current.addNotification({
          title: 'Complete',
          message: `${info}`,
          type: 'success',
          ...notificationOptions,
        });
      })
      .on('error', err => {
        // console.log('error');
        // console.log(JSON.stringify(err));
        this.notificationDOMRef.current.addNotification({
          title: 'Error',
          message: `${JSON.stringify(err)}`,
          type: 'danger',
          ...notificationOptions,
        });
      });
  }

  render() {
    return (
      <Provider inject={[this.dbContainer]}>
        <StyledContainer>
          <GlobalStyle />
          <Header />
          <Home />
          <ReactNotification ref={this.notificationDOMRef} />
        </StyledContainer>
      </Provider>
    );
  }
}

export default App;
