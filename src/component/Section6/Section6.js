import React from 'react'
import '../Section6/Section6.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Mousewheel, EffectCoverflow } from 'swiper/modules';
import img1 from "../Section6/img_rectangle_440_316x510.png"
import img4 from "../Section6/Rectangle 440.png"
import img3 from "../Section6/القضايا الدولية.png"
import img2 from "../Section6/img_rectangle_440_71x510.png"
import img5 from "../Section6/القضايا الدولية.png"
const Section6 = () => {
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
                        <img style={{ width: "280px", height: "200px" }} src={img1} alt='' />
                        <div className="company-setup-container " >
                            <p className="company-setup-text">
                                <h5>القضايا التجاريه</h5>
                                تتطلب القضايا التجارية إلى محامين أصحاب معارف وخبرات طويلة، لذا يعد توكيل محامي تجاري من القرارات المهمة لضمان حقوق الموكل. ومع خبرة تفوق الـ 30 عامًا في القضايا التجارية، نضمن لك النصرة في هذا النوع من القضايا والذي يساعدك على تحقيق أهدافك التجارية.
                            </p>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "100px", height: "70px" }} >
                        <img style={{ width: "280px", height: "250px" }} src={img2} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5>القضايا الجنائيه</h5>

                                هل تبحث عن محامي جنائي يقوم بالدفاع والمرافعة أمام المحاكم الجنائية متعهدًا على نصرتك؟ مع المجموعة التجارية والبحرية سندعمك بأفضل محامي جنايات يتولى أمر القضايا الجنائية ويقوم بحضور التحقيقات أمام النيابة العامة ويركز جهده وخبرته على تحقيق النصر في قضيتك.

                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "100px", height: "90px" }} >
                        <img style={{ width: "280px", height: "280px" }} src={img3} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5>  القضايا الدوليه
                                </h5>

                                نقدم الدعم الكافي من الدراسات والاستشارات لجميع عملائنا المحليين والدوليين في التقاضي عبر المحاكم الدولية. فمن خلال الخبرة في القانون الدولي، سندعمك بمحامي دولي متمرس مستعد لتولي قضاياك الدولية والعمل على تحقيق غاياتك في التحكيم التجاري الدولي.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "100px", height: "80px" }} >
                        <img style={{ width: "280px", height: "250px" }} src={img4} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5> القضايا المدنيه</h5>

                                لدى مكتبنا محامون متخصصون في القضايا المدنية مستعدون لتولي كافة أنواع القضايا الناشئة عن العقود والمعاملات المدنية مع تقديم الدعم الكافي من المرافعة والدفاع أمام المحاكم لنصرة موكلينا. فمن خلال التعاقد معنا، سيتولى أشهر محامي مدني في مكتبنا قضيتك ويحقق لك النصر من خلال خبراته ومعارفه.
                            </p>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "100px", height: "80px" }} >
                        <img style={{ width: "280px", height: "250px" }} src={img5} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5> القضايا العقاريه</h5>
                                تقدم المجموعة التجارية والبحرية خدمات قانونية رائدة حول المشكلات القانونية المتعلقة بالعقارات مثل قضايا التعويضات والحيازات العقارية وغيرها. سنقوم بدعمك بأفضل محامي عقارات بمكتبنا ليتولى قضيتك ويحقق أهدافك القانونية في القضايا العقارية وفي مجال التطوير العقاري داخل وخارج مصر.
                            </p>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='infoSwiper'>
                <h1 style={{ marginBottom: "50px", textAlign: "end" }}> محامين خبراء في مجالات <br />القانون والقضايا المختلفة<br /></h1>
                <p style={{ textAlign: "end" }}>ما يميز مكتبنا عن مكاتب المحاماة الأخرى، هو انفرادنا<br />

                    بالتخصصات القانونية التي تتطلب خبرة قانونية وفكر<br />

                    استراتيجي من الدرجة الأولى حيث نفخر بوجود شركائنا<br />

                    المتخصصين في مجالات القانون المختلفة، والمستعدون<br />

                    لدعم عملائنا الكرام بكل السبل الممكنة لتحقيق أهدافهم<br />

                    بأسرع وقت وبأعلى جودة ممكنة؛ سعياً منا لنصبح أفضل<br />

                    شركة محاماة في مصر في المستقبل القريب.<br /><br />

                    <a href="/">اطلب الأن أستشارة فورية</a>

                </p>
            </div>
        </div>
    )
}

export default Section6