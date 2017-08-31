import React, { Component } from 'react';
import Slider from 'react-slick';
import './ReactSlickDemo.css';

export default class ReactSlickDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstLine: true,
      isSecondLine: false,
    }
  }

  componentDidMount() {
    const { isFirstLine, isSecondLine } = this.state;
    const focusBox = document.getElementById('focus-box');
    document.addEventListener('keydown', (e) =>{
      if (e.keyCode === 37) {
        isFirstLine && !isSecondLine ? this.slider.slickPrev() : this.slider2.slickPrev();
      } else if (e.keyCode === 39) {
        isFirstLine && !isSecondLine ? this.slider.slickNext() : this.slider2.slickNext();
      } else if (e.keyCode === 40) {
        if (!focusBox.classList.contains('second')) {
          focusBox.classList.add('second');
        }
        this.setState({
          isFirstLine: false,
          isSecondLine: true,
        })
      }  else if (e.keyCode === 38) {
        if (focusBox.classList.contains('second')) {
          focusBox.classList.remove('second');
        }
        this.setState({
          isFirstLine: true,
          isSecondLine: false,
        })
      }
    });
  }

  render() {
    var settings = {
      infinite: true,
      speed: 150,
      slidesToShow: 8,
      arrows: false,
      useCSS: true,
    }
    return (
      <div className='container'>
        <Slider
          {...settings}
          ref={n => this.slider = n }
          className="slider-bar"
        >
          <div><img src='http://placekitten.com/g/200/200' alt="1" /></div>
          <div><img src='http://placekitten.com/g/200/200' alt="2" /></div>
          <div><img src='http://placekitten.com/g/200/200' alt="3" /></div>
          <div><img src='http://placekitten.com/g/200/200' alt="4" /></div>
        </Slider>
        <Slider
          {...settings}
          ref={n => this.slider2 = n }
          className="slider-bar"
        >
          <div><img src='http://placekitten.com/g/200/200' /></div>
          <div><img src='http://placekitten.com/g/200/200' /></div>
          <div><img src='http://placekitten.com/g/200/200' /></div>
          <div><img src='http://placekitten.com/g/200/200' /></div>
        </Slider>
        <div id="focus-box" className='focus' />
      </div>
    );
  }
}