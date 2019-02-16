import React, { Component } from 'react';
import styled from 'styled-components';

import Heading from '../components/common/Heading';
import InputWrapper from '../components/InputWrapper';
import isEmpty from '../utils/is-empty';
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

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  background: ${props => props.theme.listItem.background};
  margin: ${props => props.theme.listItem.margin};
  padding: ${props => props.theme.listItem.padding};
  text-align: left;
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemText: '',
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Update the state on every change.
   * @param {Object} event
   */
  handleSubmit = e => {
    e.preventDefault();

    const { items, itemText } = this.state;

    this.setState({
      items: [...items, itemText],
      itemText: '',
    });
  };

  /**
   * Update the state on every change.
   * @param {Object} event
   */
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

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
          <InputWrapper>
            <StyledList>
              {items.map(item => (
                <StyledListItem>{item}</StyledListItem>
              ))}
            </StyledList>
            {isEmpty(items) && <div>There are no items yet...</div>}
          </InputWrapper>
        </form>
      </ViewWrapper>
    );
  }
}

export default Home;