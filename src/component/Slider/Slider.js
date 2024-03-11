import React from 'react'
import '../Slider/Slider.css'
import img1 from '../Slider/img_path398.svg'
import img2 from '../Slider/img_path406.svg'
import img3 from '../Slider/img_group_47866.svg'
import arrowleft from '../ButtonFooter/img_arrow_left.svg'
const Slider = () => {
    return (
        <div id="carouselExampleAutoplaying" className="mainSlider carousel slide carousel-fade py-5" data-bs-ride="carousel">
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <div className='infoSlider'>
                        <h1 style={{ color: "white", textAlign: "end",margin:'10vh 7vw 0 0', fontWeight: "bold" }}>استشارات قانونية بمعايير<br /> عالمية المستوى</h1>
                        <p style={{ color: "white", textAlign: "end",margin:'10vh 7vw 0 0' }}>بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي نخبة من أكفأ المحامين <br />المتمرسين وأفضل الشركاء  بمستوى جديد من الحلول القانونية المتكاملة. اطلب الآن استشارة<br /> قانونية فورية وتواصل مع أفضل مستشار قانوني واحصل على الدعم القانوني لحل قضاياك <br />وتحقيق أهدافك</p>
                    </div>
                    <div className='imgSlider'>
                        <img style={{ position: "relative", top: "-150px", right: "-100px" }} src={img1} alt="" />
                    </div>

                </div>
                <div className="carousel-item">
                    <div className='infoSlider'>
                        <h1 style={{ color: "white", textAlign: "end", margin: "70px", fontWeight: "bold" }}>استشارات قانونية بمعايير<br /> عالمية المستوى</h1>
                        <p style={{ color: "white", textAlign: "end", margin: "70px" }}>بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي نخبة من أكفأ المحامين <br />المتمرسين وأفضل الشركاء  بمستوى جديد من الحلول القانونية المتكاملة. اطلب الآن استشارة<br /> قانونية فورية وتواصل مع أفضل مستشار قانوني واحصل على الدعم القانوني لحل قضاياك <br />وتحقيق أهدافك</p>
                    </div>
                    <div className='imgSlider'>
                        <img style={{ position: "relative", top: "-150px", right: "-100px" }} src={img2} alt="" />
                    </div>

                </div>
                <a style={{ background: "#0e152c", color: "white", outline: "none", textDecoration: "none", position: "relative", top: "80%", left: "1250px",fontWeight:"bold",margin:'0 -7vw 0 0' }} href='/'>اطلب الان استشاره فوريه</a>
                <img src={arrowleft} style={{ position: "relative", top: "80%", left: "75%" }} alt="" />
            </div>
            <button className="carousel-control-prev" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev" >
                <span className="visually-hidden" >Previous</span>
            </button>
            <button className="carousel-control-next" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span className="visually-hidden" >Next</span>
            </button>
            <img style={{ position: "relative", top: "5px", right: "-800px" }} src={img3} alt="" />
        </div>
    )
}

export default Slider