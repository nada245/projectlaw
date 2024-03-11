import React from 'react'
import '../Section5/Section5.css'
import img1 from "../Section5/óÜ½n½ ƒT¼¬Fƒó.png"
import img2 from "../Section5/Rectangle 440.png"
import img3 from "../Section5/ƒ½óúO¬ sn O¡¬.png"
import img4 from "../Section5/Rectangle 440(1).png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import { Mousewheel, EffectCoverflow } from 'swiper/modules';
const Section5 = () => {
    return (
        <div className='mainSwiper'>
            <div >
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    spaceBetween={100}
                    mousewheel={true}
                    speed={1900}
                    modules={[Mousewheel, EffectCoverflow]}
                    className="mySwiper"
                    effect={'slide'}
                    freeMode={false}
                >
                    
                    <SwiperSlide style={{ width: "100px", height: "70px" }} >
                        <img style={{ width: "290px", height: "200px" }} src={img1} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                            <h5>تاسيس الشركات</h5>
                                هل ترغب في تأسيس شركة في مصر؟ نعمل على<br />

                                تقديم الدعم لأعمال الشركات المختلفة بمستوى مميز<br />

                                من الأداء. حيث نقدم الدعم في تأسيس الشركات في<br />

                                مصر والسعودية والإمارات بمختلف أنواعها، وإعداد<br />

                                عقود التأسيس واللوائح الداخلة، بالإضافة إلى مساعدة<br />

                                العملاء على اختيار نوع الشركة وتوفير الدعم في<br />

                                كافة مراحل التأسيس والإعداد.<br /><br />
                                <br />
                                <a href="/" style={{ color: "white" }}>الذهاب الى الصفحة  </a>
                            
                            </p>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "100px", height: "70px" }} >
                        <img style={{ width: "290px", height: "200px" }} src={img2} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5>الاستشارات القانونيه</h5>

                                نفخر بتقديم الاستشارات القانونية من مستشار قانوني محنك مع دعم من أكبر محامين مصر المتخصصين في مجالات القانون المختلفة<br />

                                والمستعدين لتقديم المشورة والرأي القانوني حول القضايا المختلفة للأفراد والشركات مع تقديم أفضل الحلول الموثوقة لمشكلاتهم القانونية<br />

                                وهذه الخدمة لكل من يبحث عن رقم محامي للاستشارة.<br /><br />

                                <a href="/" style={{ color: "white" }}>الذهاب الى الصفحة  </a>
                            </p>

                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide style={{ width: "100px", height: "70px" }} >
                        <img style={{ width: "290px", height: "200px" }} src={img3} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                            <h5>  استثمر في مصر</h5>

استثمار في مصر يعد فرصة مثيرة بفضل موقعها<br />

الاستراتيجي، واقتصادها المتنامي، وجهودها في<br />

تحسين بيئة الاستثمار. تقدم الحكومة دعمًا وتسهيلات<br />

للمستثمرين والسوق المصري يوفر فرصا متنوعة<br />

وواسعة للعملاء المحتملين.<br /><br />

<a href="/" style={{ color: "white" }} >الذهاب الى الصفحة    </a>
                            </p>

                        </div>
                    </SwiperSlide>

                

<SwiperSlide style={{ width: "100px", height: "70px" }} >
                        <img style={{ width: "290px", height: "200px" }} src={img4} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                            <h5>  توكيل محامي  </h5>

توكيل المحامي هو اتفاق قانوني يمنح شخصًا آخر<br />

صلاحية تمثيلك أو تنفيذ الإجراءات القانونية<br />

نيابة عنك. يعتمد على الثقة والثقة المتبادلة<br />

ويتضمن توثيقًا رسميًا لتحديد نطاق الصلاحيات<br />

الممنوحة.<br /><br />

<a href="/" style={{ color: "white" }} >الذهاب الى الصفحة    </a>
                            </p>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='infoSwiper'>
                <h1 style={{ marginBottom: "50px", textAlign: "end" }}> محامين خبراء في مجالات <br />القانون والقضايا المختلفة<br /></h1>
                <p style={{ textAlign: "end" }}>ما يميز مكتبنا عن مكاتب المحاماة الأخرى، هو انفرادنا<br />

                يمكن تقديم هذه الخدمات على أنها مكونة من أكثر من 30 خدمة<br/> قانونية بخبرات عالمية وفهم واسع للبيئة القانونية.<br/> لتقديم أفضل مستوى من الحلول القانونية على الصعيد المحلي والدولي  يمكن استخدام مكتبة <br/>مكونة من مكونات مستقلة لتطوير تطبيقات ويب وأنظمة معلومات وتطبيقات أخرى.<br/> يمكن استخدام هذه المكتبة لتطوير تطبيقات متكاملة مع مكتب محامي مصر الأول<br/> وتقديم خدمات قانونية عالمية ومستوى فاعلية ممتاز في الجودة والوقت
                 <br/>   <a href="/">اطلب الأن أستشارة فورية</a>

                </p>
            </div>
        </div>
    )
}

export default Section5



