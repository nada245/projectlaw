 import React, { useState, useEffect } from 'react';
import './slider.css'; 

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="slider">
              <div className='animatedText'>
                <h1 className='pt-5'>لماذا تختارنا وبكل ثقة؟</h1>
                <p className='my-3'>يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات التي تسيّر آلية العمل داخل مكتبناء بالإضافة إلى مبادئ
                    المحامين والشركاء العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي والقانوني سعيا منهم لتحويل مكتبنا
                    الشركة محاماة دولية في مصر. فقد شهد عملاؤنا بقوة مكتبنا وثقة التعامل معنا والمبادئ التالية ما ستجدها عند التعامل معنا:</p>
            </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
