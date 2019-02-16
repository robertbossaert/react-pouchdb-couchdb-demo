import React, { Component, Fragment } from 'react';

import ModalTrigger from './Trigger';
import ModalContent from './Content';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  onOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus();
    });
    this.addScrollLock();
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus();
    this.removeScrollLock();
  };

  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose();
  };

  addScrollLock = () => document.querySelector('html').classList.add('u-lock-scroll');

  removeScrollLock = () => document.querySelector('html').classList.remove('u-lock-scroll');

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, triggerText, role } = this.props;

    return (
      <Fragment>
        <ModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => (this.openButtonNode = n)}
          text={triggerText}
        />
        {isOpen && (
          <ModalContent
            ariaLabel={ariaLabel}
            buttonRef={n => (this.closeButtonNode = n)}
            modalRef={n => (this.modalNode = n)}
            content={children}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            role={role}
          />
        )}
      </Fragment>
    );
  }
}

export default Modal;
