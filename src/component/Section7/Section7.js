import React from 'react'
import '../Section7/Section7.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import { Mousewheel, EffectCoverflow } from 'swiper/modules';
import img1 from "../Section7/Frame 47863.png"
import img2 from "../Section7/Frame 47862.png"
import img3 from "../Section7/Frame 47863 (1).png"
import img4 from "../Section7/Frame 47861.png"
const Section7 = () => {
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
                        <img style={{ width: "370px", height: "250px" }} src={img1} alt='' />
                        <div className="company-setup-container " >
                            <p className="company-setup-text">
                                <h5 style={{color:"#845F38"}}> محامي  في مصر</h5>
                                28 يناير. 9 دقائق<br />
                                على مر السنين وقد تم الاعتراف بالمحامي المصري كونه<br />
                                أحد أجدر رجال القانون في تولي المسائل<br />
                                القانونية، فقد عُرف بعقليته الاستراتيجية<br />
                                العالية وامتلاكه المقدرة الفائقة في إدارة<br />
                                الأزمات وفض المنازعات المحلية والدولية<br />
                            </p>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "100px", height: "70px" }} >
                        <img style={{ width: "370px", height: "290px" }} src={img2} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5 style={{color:"#845F38"}}>  تاسيس شركه في السعوديه</h5>

                                28 يناير .9 دقائق
                                <br />

                                هي خطوة جوهرية للعديد من رواد الأعمال<br />

                                والمستثمرين الراغبين في استغلال الفرص<br />

                                الاقتصادية المتاحة في البلاد ، حيث تعد<br />

                                المملكة العربية السعودية واحدة من أكبر<br />

                                الاقتصادات في الشرق الأوسط وتتمتع<br />

                                ببيئة استثمارية مشجعة ومتطورة.<br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "100px", height: "90px" }} >
                        <img style={{ width: "370px", height: "280px" }} src={img3} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5 style={{ textAlign: "end",color:"#845F38" }}>تسجيل العلامه التجاريه</h5>
                                28 يناير .9 دقائق
                                <br />                                يمثل أحد أهم الإجراءات القانونية المهمة لأي فرد أو<br />

                                شركة ترغب في حماية هويتها التجارية وحقوقها<br />

                                الفكرية ، حيث يضمن القانون حقوق الملكية الفكرية<br />

                                للشركات والأفراد في استخدام أسماء تجارية<br />

                                شعارات تجارية وتصاميم المنتجات الخاصة بهم<br />

                                وذلك من خلال الاستعانة بمحامى علامات تجارية<br />
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ width: "100px", height: "80px" }} >
                        <img style={{ width: "370px", height: "300px" }} src={img4} alt='' />
                        <div className="company-setup-container">

                            <p className="company-setup-text">
                                <h5 style={{color:"#845F38"}}>   حمايه الملكيه الفكريه  </h5>
                                28 يناير .9 دقائق
                                <br />
                                تعد أحد أفرع الملكية حيث لا تقتصر على كونها<br />

                                ملكية مادية فقط خاصة بالعقارات ، ويندرج تحتها<br />

                                براءات الاختراع وحقوق النشر والعلامات التجارية<br />

                                ؛ لذا وقد باتت الحاجة تتطلب توكيل المحامي المختص<br />

                                بحماية الملكية الفكرية.
                            </p>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='infoSwiper'>
                <h1 style={{ marginBottom: "50px", textAlign: "end" }}> احدث المقالات<br /></h1>
                <p style={{ textAlign: "end" }}>
                    تعلم أكثر من المكتبة القانونية المتكاملة وامتلك معرفة<br />

                    أوسع وأعمق في البيئة القانونية من خلال استكشاف<br />

                    أحدث التطورات والمستجدات، واستفد من مجموعة<br />

                    متنوعة من المصادر القانونية المتكاملة.<br /><br />

                </p>
            </div>
        </div>

    )
}

export default Section7