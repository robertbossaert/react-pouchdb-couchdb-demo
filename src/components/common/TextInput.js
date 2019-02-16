import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: ${props => props.theme.input.width};
  height: ${props => props.theme.input.height};
  padding: ${props => props.theme.input.padding};
  font-family: ${props => props.theme.input.fontFamily};
  font-size: ${props => props.theme.input.fontSize};
  font-weight: ${props => props.theme.input.fontWeight};
  outline: none;
  border-radius: ${props => props.theme.input.borderRadius};
  border: 1px solid
    ${props => (props.error ? props.theme.input.borderError : props.theme.input.borderColor)};
  background: ${props => props.theme.input.background};
  transition: all 0.3s ease;
  color: #000;
`;

class TextInput extends PureComponent {
  render() {
    const { name, onChange, placeholder, type, value } = this.props;

    return (
      <StyledInputGroup>
        <StyledInput
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </StyledInputGroup>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  placeholder: null,
};

export default TextInput;
