import React, { Component } from 'react';
import Slider from 'react-slick';
import isEqual from 'lodash/isEqual';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      infinite: true,
      speed: 150,
      slidesToShow: 6,
      arrows: false,
      useCSS: true,
    }
    this.state = {
      slides: this.props.slides || [],
    }
  }

  componentWillReceviceProps(nextProps) {
    if (!isEqual(this.state.slides, nextProps.slides)) {
      this.setState({ slides: nextProps.slides })
    }
  }

  render() {
    return (
      <Slider
        {...this.settings}
        ref={this.props.reference}
        className="slider-bar"
      >
        {this.state.slides.map((it, index) =>
          <div key={index} style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute', top: 10, left: 10,
                zIndex: 1,
                color: 'white',
              }}
            >{it.alt}</span>
            <img src={it.src} alt={it.alt} />
          </div>
        )}
      </Slider>
    );
  }
}