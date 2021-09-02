import { Carousel } from 'antd';

export default function MainCarousel(){
    return(
        <Carousel autoplay>
            <div className="slider_Wrapper">
                <img src={process.env.PUBLIC_URL + "/assets/slider_1.png"} alt=""/>
            </div>
            <div className="slider_Wrapper">
                <img src={process.env.PUBLIC_URL + "/assets/slider_4.png"} alt=""/>
            </div>
            <div className="slider_Wrapper">
                <img src={process.env.PUBLIC_URL + "/assets/slider_3.png"} alt=""/>
            </div>
            <div className="slider_Wrapper">
                <img src={process.env.PUBLIC_URL + "/assets/slider_2.png"} alt=""/>
            </div>
        </Carousel>
    )
}