import React from 'react';
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     value: 5,
  //   };
  // }

  static defaultProps = {
    initValue: 0,
  };

  state = {
    value: this.props.initValue,
  };

  handlerIncrement = () => {
    this.setState(parFar => ({
      value: parFar.value + 1,
    }));
  };

  handlerDecrement = () => {
    this.setState(parFar => ({
      value: parFar.value - 1,
    }));
  };

  render() {
    // const { value } = this.state;

    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handlerIncrement}
          onDecrement={this.handlerDecrement}
        />
      </div>
    );
  }
}

export default Counter;
