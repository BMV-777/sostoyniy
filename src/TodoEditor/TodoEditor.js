import React, { Component } from 'react';

class TodoEdition extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handlerSubmit = e => {
    e.preventDefault();

    console.log(this.state);

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handlerSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button className="TodoEditor__button" type="submit">
          Seve
        </button>
      </form>
    );
  }
}

export default TodoEdition;
