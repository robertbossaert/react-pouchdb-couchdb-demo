import React from 'react';
import ReactDOM from 'react-dom';
import ReactFocusTrap from 'focus-trap-react';
import styled from 'styled-components';

/**
 * Styling of the component.
 *
 * @type {Object}
 */
const StyledModalContent = styled(ReactFocusTrap)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999; /* This must be at a higher index to the rest of your page content */
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.8);
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.5em 1.5em 1.5em 1.5em;
  background-color: #ffffff;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 500px) {
    left: 50%;
    top: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    max-width: 30em;
    max-height: calc(100% - 1em);
  }
`;

const StyledModalClose = styled.button`
  align-items: center;
  border: 0;
  box-shadow: 0;
  color: ${props => props.theme.modalClose.color};
  cursor: pointer;
  display: flex;
  font-size: ${props => props.theme.modalClose.fontSize};
  font-weight: ${props => props.theme.modalClose.fontWeight};
  line-height: 1;
  padding: 0.5em;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledIcon = styled.span`
  background: url("${props => props.theme.modalClose.infoIcon}") no-repeat;
  background-size: contain;
  height: 30px;
  display: inline-block;
  width: 30px;
`;

const StyledModalBody = styled.div`
  padding-top: 0.25em;
`;

const ModalContent = ({
  ariaLabel,
  buttonRef,
  content,
  modalRef,
  onClickAway,
  onClose,
  role = 'dialog',
}) =>
  ReactDOM.createPortal(
    <StyledModalContent
      aria-label={ariaLabel}
      aria-modal="true"
      className="c-modal-cover"
      focusTrapOptions={{ onDeactivate: onClose }}
      onClick={onClickAway}
      role={role}
      tag="aside"
    >
      <StyledModal ref={modalRef}>
        <StyledModalClose
          aria-labelledby="close-modal"
          onClick={onClose}
          ref={buttonRef}
          type="button"
        >
          <StyledIcon /> Close
        </StyledModalClose>
        <StyledModalBody>{content}</StyledModalBody>
      </StyledModal>
    </StyledModalContent>,
    document.body
  );

export default ModalContent;
