import React, { Component } from 'react';
import './ReactSlickDemo.css';
import Carousel from './Carousel';

const KeyMap = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

const CarouselNames = [ 'slider', 'slider2', 'slider3' ];
const MaxIndex = CarouselNames.length - 1;

const makefakeData = (name) => Array(8).fill(1).map((it, i) => {
  return {
    id: i,
    src: 'http://placekitten.com/g/200/200',
    alt: `${name}_${i + 1}`,
  };
})

export default class ReactSlickDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActived: CarouselNames[0],
    }
  }

  componentDidMount() {
    const focusBox = document.getElementById('focus-box');
    document.addEventListener('keydown', (e) => {

      switch (e.keyCode) {
        case KeyMap.left:
          this[this.state.isActived].slickPrev();
          break;

        case KeyMap.right:
          this[this.state.isActived].slickNext();
          break;

        case KeyMap.up:
          const currIndexUp = CarouselNames.findIndex(name => name === this.state.isActived);
          const nextIndexUp = currIndexUp - 1 < 0 ? 0 : currIndexUp - 1;
          focusBox.classList = `focus ${CarouselNames[nextIndexUp]}`;
          this.setState({
            isActived: CarouselNames[nextIndexUp],
          })
          break;

        case KeyMap.down:
          const currIndexDown = CarouselNames.findIndex(name => name === this.state.isActived);
          const nextIndexDown = currIndexDown + 1 > MaxIndex ? MaxIndex : currIndexDown + 1;
          focusBox.classList = `focus ${CarouselNames[nextIndexDown]}`;
          this.setState({
            isActived: CarouselNames[nextIndexDown],
          })
          break;

        default:
      }
    });
  }

  render() {
    const index = CarouselNames.findIndex(name => name === this.state.isActived);
    return (
      <div className='container' style={{ top: -(index * 240) }}>
        <Carousel referance={n => this.slider = n} slides={makefakeData('slider')} />
        <Carousel referance={n => this.slider2 = n} slides={makefakeData('slider2')} />
        <Carousel referance={n => this.slider3 = n} slides={makefakeData('slider3')} />
        <div id="focus-box" className='focus' style={{ top: index * 240 + 20 }} />
      </div>
    );
  }
}