import React from 'react';
import logo from '../../images/img_path334.svg';
import './client.css';
 import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import image1 from '../../images/img_rectangle_448.png';
import image2 from '../../images/img_rectangle_448_299x278.png';
import image3 from '../../images/img_rectangle_448_390x361.png';
import image4 from '../../images/img_rectangle_448_390x361.png';
import image5 from '../../images/img_rectangle_448_390x361.png';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
  
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Clients = () => (
  <div>
    <div className='container4'>
      <h1>فريق العمل </h1>
      <img src={logo} alt='' className='logo' />
      <div>
        <p className='pargraph'>تتكون الهيكلة الإدارية للمجموعة التجارية والبحرية من أشهر محامين مصر أصحاب الخبرات في تخصصات القضايا المحلية والدولية المختلفة. حيث يضم المحامي محمد أبو ضيف الرئيس التنفيذي- مجموعة من الكوادر البشرية المتخصصة في مجالات القانون المختلفة. ولأن الجودة والسرعة هي شعارنا نعمل بروح الفريق لدمج الخبرات والمعرفة المتراكمة في دعم عملائنا الكرام على تحقيق أهدافهم القانونية.</p>
      </div>
       

          <div className="cards-container2">
          <div className="card2">
            <img src={image1} alt="" />
            <div className="card-content2">
              <p>رمضان رزق</p>
              <p>رمضان رزق</p>
            </div>
          </div>
          <div className="card2">
            <img src={image4} alt="" />
            <div className="card-content2">
              <p>رمضان رزق</p>
              <p>رمضان رزق</p>
            </div>
          </div>
          <div className="card2 middle-card2">
            <img src={image2} alt="Card 2" />
            <div className="card-content2">
              <p>حلول قانونية سريعة</p>
              <p>حلول قانونية سريعة</p>
            </div>
          </div>
          <div className="card2">
            <img src={image3} alt="Card 3" />
            <div className="card-content2">
              <p>حفظ أسرار العملاء</p>
              <p>حفظ أسرار العملاء</p>
            </div>
          </div>
          <div className="card2">
            <img src={image5} alt="Card 3" />
            <div className="card-content2">
              <p>حفظ أسرار العملاء</p>
              <p>حفظ أسرار العملاء</p>
            </div>
          </div>
        </div>
    </div>
  </div>
)

export default Clients;
