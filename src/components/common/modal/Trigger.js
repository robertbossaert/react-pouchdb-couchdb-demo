import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Styling of the component.
 *
 * @type {Object}
 */
const StyledButton = styled.button`
  background: transparent;
  border: 0;
  color: ${props => props.theme.modalTrigger.color};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.modalTrigger.fontSize};
  font-weight: ${props => props.theme.modalTrigger.fontWeight};
`;

const ModalTrigger = ({ buttonRef, onOpen, text }) => (
  <StyledButton type="button" onClick={onOpen} ref={buttonRef}>
    {text}
  </StyledButton>
);

ModalTrigger.propTypes = {
  buttonRef: PropTypes.instanceOf(Object),
  onOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

ModalTrigger.defaultProps = {
  buttonRef: null,
};

export default ModalTrigger;
