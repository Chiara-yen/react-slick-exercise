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

const imgHeight = 200;

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
    this.focusBox = document.getElementById('focus-box');
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const currIndex = CarouselNames.findIndex(name => name === this.state.isActived);

    switch (e.keyCode) {
      case KeyMap.left:
        this[this.state.isActived].slickPrev();
        break;

      case KeyMap.right:
        this[this.state.isActived].slickNext();
        break;

      case KeyMap.up:
        const nextIndexUp = currIndex - 1 < 0 ? 0 : currIndex - 1;
        this.focusBox.classList = `focus ${CarouselNames[nextIndexUp]}`;
        this.setState({
          isActived: CarouselNames[nextIndexUp],
        })
        break;

      case KeyMap.down:
        const nextIndexDown = currIndex + 1 > MaxIndex ? MaxIndex : currIndex + 1;
        this.focusBox.classList = `focus ${CarouselNames[nextIndexDown]}`;
        this.setState({
          isActived: CarouselNames[nextIndexDown],
        })
        break;

      default:
        console.log('keyCode : ', e.keyCode);
    }
  }

  getFocusBoxTop = ({ hasPadding = false } = {}) => {
    const index = CarouselNames.findIndex(name => name === this.state.isActived);
    const base = index * (imgHeight + 20 * 2) + (index + 1) * 40;
    return hasPadding ? base + 20 : base;
  }

  render() {
    return (
      <div className='container' style={{ top: - this.getFocusBoxTop() }}>
        <Carousel reference={n => this.slider = n} slides={makefakeData('slider')} />
        <Carousel reference={n => this.slider2 = n} slides={makefakeData('slider2')} />
        <Carousel reference={n => this.slider3 = n} slides={makefakeData('slider3')} />
        <div
          id="focus-box"
          className='focus'
          style={{ top: this.getFocusBoxTop({ hasPadding: true }) }}
        />
      </div>
    );
  }
}