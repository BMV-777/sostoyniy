import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.modul.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нужно закрыть окно!!!');

      this.props.onClose();
    }
  };

  handelBackdropClock = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modall__bacdrop" onClick={this.handelBackdropClock}>
        <div className="Modall__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
