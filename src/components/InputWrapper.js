import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Styling of the component.
 *
 * @type {Object}
 */
const StyledWrapper = styled.div`
  margin: ${props => props.theme.inputWrapper.margin};
`;

const InputWrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputWrapper;
