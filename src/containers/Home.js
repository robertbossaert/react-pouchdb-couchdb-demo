import React, { Component } from 'react';

import ViewWrapper from '../components/ViewWrapper';
import Heading from '../components/common/Heading';
import InputWrapper from '../components/InputWrapper';
import TextInput from '../components/common/TextInput';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Update the state on every change.
   * @param {Object} event
   */
  handleChange = e => {
    console.warn('changed!');
  };

  render() {
    return (
      <ViewWrapper center>
        <Heading center size={2} title="Enter some text!" />
        <p>
          Fill the field, <strong>hit ENTER</strong> and see it synchronized with PouchDB.
        </p>
        <p>
          When you go offline, enter and submit text and go back online, it should 
        </p>
        <InputWrapper>
          <TextInput
            name="address"
            onChange={this.handleChange}
            placeholder="Some text"
            type="text"
            value="Test"
          />
        </InputWrapper>
      </ViewWrapper>
    );
  }
}

export default Home;
