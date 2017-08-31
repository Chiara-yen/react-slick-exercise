import React, { Component } from 'react';
import Slider from 'react-slick';
import './ReactSlickDemo.css';

export default class ReactSlickDemo extends Component {
   componentDidMount() {
      document.addEventListener('keydown', e =>{
      if ((e.keyCode) === 37) {
         this.slider.slickPrev();
      } else if ((e.keyCode) === 39) {
        this.slider.slickNext();
       } else {

       }
     });
   }

   render() {
    var settings = {
       infinite: true,
       speed: 150,
       slidesToShow: 2,
       arrows: false,
       useCSS: true,
     }
     return (
      <div className='container'>
        <Slider ref={n => this.slider = n } {...settings}>
          <div><img src='http://placekitten.com/g/400/200' alt="1" /></div>
          <div><img src='http://placekitten.com/g/400/200' alt="2" /></div>
          <div><img src='http://placekitten.com/g/400/200' alt="3" /></div>
          <div><img src='http://placekitten.com/g/400/200' alt="4" /></div>
         </Slider>
         <div className='focus' />
       </div>
     );
   }
}