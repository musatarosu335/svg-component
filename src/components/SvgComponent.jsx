import React from 'react';
import { Samy, SvgProxy } from 'react-samy-svg';

export default class SvgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
      translateY: 0,
    };
  }

  handleClick(scaling) {
    switch (scaling) {
      case 'up':
        this.setState({
          translateY: this.state.translateY - 100,
        });
        break;
      case 'down':
        this.setState({
          translateY: this.state.translateY + 100,
        });
        break;
      case 'right':
        this.setState({
          translateX: this.state.translateX + 100,
        });
        break;
      case 'left':
        this.setState({
          translateX: this.state.translateX - 100,
        });
        break;
      default:
        this.setState({
          translateX: 0,
          translateY: 0,
        });
    }
  }

  render() {
    return (
      <div>
        <Samy path="../../svg/sample.svg">
          <SvgProxy
            selector="#Image image"
            transform={`$ORIGINAL translate(${this.state.translateX}, ${this.state.translateY})`}
          />
        </Samy>
        {/* ボタンエリア */}
        <button onClick={() => this.handleClick('up')}>Up</button>
        <button onClick={() => this.handleClick('down')}>Down</button>
        <button onClick={() => this.handleClick('right')}>Right</button>
        <button onClick={() => this.handleClick('left')}>Left</button>
      </div>
    );
  }
}
