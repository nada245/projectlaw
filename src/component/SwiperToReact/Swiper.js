import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SwipeToSlide.css";
import image1 from '../../images/img_delta_1.png';
import image2 from '../../images/img_download_5.png';
import image3 from '../../images/img_download_3.png';
import image4 from '../../images/img_download_4.png';
import image5 from '../../images/img_download_2.png';
import image6 from '../../images/img_images.png';
function SwipeToSlide() {
  const settings = {
    className: "center",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    }
  };

  return (
    <div className="sliderContainer ps-5 py-4 ms-5">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" className='image' />
        </div>
        <div>
          <img src={image2} alt="Slide 2" className='image' />
        </div>

        <div>
          <img src={image3} alt="Slide 3" className='image' />
        </div>
        <div>
          <img src={image4} alt="Slide 4" className='image' />
        </div>
        <div>
          <img src={image5} alt="Slide 5" className='image' />
        </div>
        <div>
          <img src={image6} alt="Slide 6" className='image' />
        </div>

      </Slider>
    </div>
  );
}

export default SwipeToSlide;
