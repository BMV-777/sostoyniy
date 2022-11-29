import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOption: 2,
  };

  setActiveIndex = index => {
    this.setState({ activeOption: index });
  };

  makeOptionClassName = index => {
    const optionsClass = ['ColorPicker__option'];

    if (index === this.state.activeOption) {
      optionsClass.push('ColorPicker__option--action');
    }
    return optionsClass.join(' ');
  };

  render() {
    const { activeOption } = this.state;
    const { options } = this.props;
    const { label } = options[activeOption];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title"> Color Picker</h2>
        <p>Выбран {label} цвет</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
