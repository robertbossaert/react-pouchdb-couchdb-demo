import React, { Component } from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';

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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemText: '',
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Update the state on every change.
   * @param {Object} event
   */
  handleChange = e => {
    const { name, value } = e.target;

    console.warn(name, value);

    this.setState({ [name]: value });
  };

  /**
   * Update the state on every click.
   * @param {Object} event
   */
  handleClick = index => {
    const { items } = this.state;

    this.setState({
      items: items.filter((el, i) => i !== index),
    });
  };

  /**
   * Update the state on every submit.
   * @param {Object} event
   */
  handleSubmit = (e, db) => {
    e.preventDefault();

    const { items, itemText } = this.state;

    if (itemText) {
      db.saveItem({ itemText });
      this.setState({
        items: [...items, itemText],
        itemText: '',
      });
    }
  };

  render() {
    const { items, itemText } = this.state;

    return (
      <ViewWrapper center>
        <Heading center size={2} title="Enter some text!" />
        <StyledParagraph>Follow the instructions inside the info tab above.</StyledParagraph>
        <Subscribe to={[DbContainer]}>
          {db => (
            <form onSubmit={e => this.handleSubmit(e, db)}>
              <InputWrapper>
                <TextInput
                  name="itemText"
                  onChange={this.handleChange}
                  placeholder="Some text"
                  type="text"
                  value={itemText}
                />
              </InputWrapper>
              <List items={items} handleClick={() => this.handleClick} />
            </form>
          )}
        </Subscribe>
      </ViewWrapper>
    );
  }
}

export default Home;
