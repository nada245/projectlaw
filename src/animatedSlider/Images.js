// Cards.js
import React from 'react';
import './slider.css'; // Import your CSS file with styles for the cards
import image1 from "../images/img_untitled_1_02_02_372x400.png"
import image2 from "../images/img_untitled_1_02_02_257x212.png"
import image3 from "../images/img_untitled_1_02_02.png"
const Image = () => {
  return (
    <div className='container6'>
      <div className='animatedText'>
        <h1 className='pt-5'>لماذا تختارنا وبكل ثقة؟</h1>
        <p className='my-3 para'>يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات التي تسيّر آلية العمل داخل مكتبناء بالإضافة إلى مبادئ
          المحامين والشركاء العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي والقانوني سعيا منهم لتحويل مكتبنا
          الشركة محاماة دولية في مصر. فقد شهد عملاؤنا بقوة مكتبنا وثقة التعامل معنا والمبادئ التالية ما ستجدها عند التعامل معنا</p>

        <div className="cards-container">
          <div className="card">
            <img src={image1} alt="" />
            <div className="card-content">
              <p>إرضاء العميل أولوياتنا</p>
            </div>
          </div>
          <div className="card middle-card ">
            <img src={image2} alt="Card 2" />
            <div className="card-content">
              <p>حلول قانونية سريعة</p>
            </div>
          </div>
          <div className="card">
            <img src={image3} alt="Card 3" />
            <div className="card-content">
              <p>حفظ أسرار العملاء</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
