import React from 'react';
import { Samy, SvgProxy } from 'react-samy-svg';
import styled from 'styled-components';

const SvgArea = styled.div`
  width: 50%;
`;

const Button = styled.button`
  font-size: 36px;
`;

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
        <SvgArea>
          <Samy path="../../svg/sample.svg">
            <SvgProxy
              selector="#Image image"
              transform={`$ORIGINAL translate(${this.state.translateX}, ${this.state.translateY})`}
            />
          </Samy>
        </SvgArea>
        <Button onClick={() => this.handleClick('up')}>Up</Button>
        <Button onClick={() => this.handleClick('down')}>Down</Button>
        <Button onClick={() => this.handleClick('right')}>Right</Button>
        <Button onClick={() => this.handleClick('left')}>Left</Button>
      </div>
    );
  }
}
