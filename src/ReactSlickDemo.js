import React, { Component } from 'react';
import './ReactSlickDemo.css';
import Carousel from './Carousel';

const KeyMap = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

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
      isFirstLine: true,
      isSecondLine: false,
    }
    this.settings = {
      infinite: true,
      speed: 150,
      slidesToShow: 8,
      arrows: false,
      useCSS: true,
    }
  }

  componentDidMount() {
    const focusBox = document.getElementById('focus-box');
    document.addEventListener('keydown', (e) => {
      const { isFirstLine, isSecondLine } = this.state;

      switch (e.keyCode) {
        case KeyMap.left:
          isFirstLine && !isSecondLine ? this.slider.slickPrev() : this.slider2.slickPrev();
          break;

        case KeyMap.right:
          isFirstLine && !isSecondLine ? this.slider.slickNext() : this.slider2.slickNext();
          break;

        case KeyMap.up:
          if (focusBox.classList.contains('second')) {
            focusBox.classList.remove('second');
          }
          this.setState({
            isFirstLine: true,
            isSecondLine: false,
          })
          break;

        case KeyMap.down:
          if (!focusBox.classList.contains('second')) {
            focusBox.classList.add('second');
          }
          this.setState({
            isFirstLine: false,
            isSecondLine: true,
          })
          break;

        default:
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <Carousel referance={n => this.slider = n} slides={makefakeData('slider')} />
        <Carousel referance={n => this.slider2 = n} slides={makefakeData('slider2')} />
        <div id="focus-box" className='focus' />
      </div>
    );
  }
}