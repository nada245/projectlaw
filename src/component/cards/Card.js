import React from 'react';
import './card.css';
import imageUrl from '../../images/img_ellipse_2.png';
import image2 from '../../images/img_image_6.png'
import image3 from '../../images/img_rectangle_448_299x278.png'
import image4 from '../../images/img_rectangle_448.png'
import logo from '../../images/img_path334.svg'
import arrow from '../../images/img_back_arrow_2_1.svg'
const MyComponent = () => {
  return (
    <div className='container1'>
    <h1>اراء عملائنا الكرام</h1>
    <img src={logo} alt='' className='logo'/>
    <div className="my-component">
       <div className='card1'>
         <div className='flex1'>
      <img src={imageUrl} alt="Description" className='image1'/>
            <div>
      <h6 className="title">المهندس حسام منصور   </h6>
      <p className="description">
مهندس اماراتي خبير </p></div>
</div>
<div className='description1'>
    <img src='../../images/img_.svg' alt='' className='image3'/>
    <p>جهود إستثنائية في دعم
الموكلين والعمل على خطاهم.
سعيد بتعاملي مع المجموعة
التجارية والبحرية وممتن لما
قدموه لي من خدمات</p>
</div>
       </div>
      
       <div className='card1'>
        
<div className='description2'>
    <p>جهود إستثنائية في دعم
الموكلين والعمل على خطاهم.
سعيد بتعاملي مع المجموعة
التجارية والبحرية وممتن لما
قدموه لي من خدمات</p>
</div>
 <div className='flex1'>
      <img src={image3} alt="Description" />
            <div>
      <h6 className="title">أستاذ أحمد سليم   </h6>
      <p className="description">
مستثمر ورجل أعمال      </p></div>
</div>
       </div>
        <div className='card1'>
         <div className='flex1'>
      <img src={image2} alt="Description" />
            <div>
      <h6 className="title">أستاذة فاطمة عيسي   </h6>
      <p className="description">
رائدة أعمال       </p></div>
</div>
<div className='description1'>
    <p>جهود إستثنائية في دعم
الموكلين والعمل على خطاهم.
سعيد بتعاملي مع المجموعة
التجارية والبحرية وممتن لما
قدموه لي من خدمات</p>
</div>
       </div>
       <div className='card1'>
       
<div className='description2'>
    <p>جهود إستثنائية في دعم
الموكلين والعمل على خطاهم.
سعيد بتعاملي مع المجموعة
التجارية والبحرية وممتن لما
قدموه لي من خدمات</p>
</div>
  <div className='flex1'>
      <img src={image4} alt="Description" />
            <div>
      <h6 className="title">أستاذ هشام الشيمي   </h6>
      <p className="description">
مدير ماليات       </p></div>
</div>
       </div>
    </div>
    <h4> <img src={arrow} alt='' className='arrowImage'/>مشاهدة كامل الاراء</h4>
    </div>
  );
};

export default MyComponent;