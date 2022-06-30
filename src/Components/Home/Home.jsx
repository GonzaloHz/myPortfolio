import Style from "./Home.module.css"
// import Moon from "../../images/MoonVideoHD.mp4"
// import MoonTA from "../../images/moonvideoTA.mp4"
import Slider from "../Work/Slider"
import { scroller } from "react-scroll";
// works Multimedia
import Portfolio1 from "../../images/works-Portfolio/portfolio1.png"
import Portfolio2 from "../../images/works-Portfolio/portfolio2.png"
import Portfolio3 from "../../images/works-Portfolio/portfolio3.png"
import Portfolio4 from "../../images/works-Portfolio/portfolio4.png"
import Portfolio5 from "../../images/works-Portfolio/portfolio5.png"
import Portfolio6 from "../../images/works-Portfolio/portfolio6.png"
import Vinoteca1 from "../../images/works-Portfolio/Vinoteca1.png"
import Vinoteca2 from "../../images/works-Portfolio/Vinoteca2.png"
import Vinoteca3 from "../../images/works-Portfolio/Vinoteca3.png"
import Vinoteca4 from "../../images/works-Portfolio/Vinoteca4.png"
import Vinoteca5 from "../../images/works-Portfolio/Vinoteca5.png"
import Vinoteca6 from "../../images/works-Portfolio/Vinoteca6.png"
import Vinoteca7 from "../../images/works-Portfolio/Vinoteca7.png"
import Vinoteca8 from "../../images/works-Portfolio/Vinoteca8.png"
import Vinoteca9 from "../../images/works-Portfolio/Vinoteca9.png"
import Vinoteca10 from "../../images/works-Portfolio/Vinoteca10.png"
import Pokemon1 from "../../images/works-Portfolio/Pokemon1.png"
import Pokemon2 from "../../images/works-Portfolio/Pokemon2.png"
import Pokemon3 from "../../images/works-Portfolio/Pokemon3.png"
import Pokemon4 from "../../images/works-Portfolio/Pokemon4.png"
import Pokemon5 from "../../images/works-Portfolio/Pokemon5.png"
import Pokemon6 from "../../images/works-Portfolio/Pokemon6.png"
import Pokemon7 from "../../images/works-Portfolio/Pokemon7.png"
import Pokemon8 from "../../images/works-Portfolio/Pokemon8.png"

export default function Home({handleOnHand3, booleanValue, conditions}){
    const images1 = [ Pokemon1, Pokemon2, Pokemon3, Pokemon4, Pokemon5, Pokemon6, Pokemon7, Pokemon8 ]
    const links1 = "https://vimeo.com/manage/videos/722710172"
    const images2 = [ Vinoteca1, Vinoteca2, Vinoteca3, Vinoteca4, Vinoteca5, Vinoteca6, Vinoteca7, Vinoteca8, Vinoteca9, Vinoteca10 ]
    const links2 = "https://wine-ecommercew.vercel.app/"
    const images3 = [ Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6 ]
    const links3 = "youtube.com"
    const scrollType = {
    duration: 1000,
    delay: 50,
    smooth: true, 
    offset: 0,
    };
    const handleWorks=()=>{
        scroller.scrollTo("justWork", scrollType)
    }
    return(
    <div name='justHome' className={Style.container}>
    {booleanValue && conditions==="uno" ? <Slider images3={images1} links3={links1} handleOnHand3={handleOnHand3} conditions={conditions}/>
    : booleanValue && conditions==="dos" ? <Slider images3={images2} links3={links2} handleOnHand3={handleOnHand3} conditions={conditions}/>
    : booleanValue && conditions==="tres" && <Slider images3={images3} links3={links3} handleOnHand3={handleOnHand3} conditions={conditions}/>}
        <div>
        <div className={Style.TextPresentation}><div>Hello, I am Gonzalo</div><div className={Style.SubTitle}>Full Stack Developer</div><button onClick={()=>handleWorks()}>View My Work</button></div>
        <video autoPlay loop muted
        className={Style.Video}>
        <source src={
            // Moon
            "https://res.cloudinary.com/gxwgonza/video/upload/v1656561783/MoonVideoHD_u9q0mg.mp4"} type="video/mp4"/> 
        {/*Video para pc*/}
        </video>
        <video autoPlay loop muted
        className={Style.VideoMobile}>
        <source src={
            // MoonTA
            "https://res.cloudinary.com/gxwgonza/video/upload/v1656562519/moonvideoTA_mv4ja6.mp4"} type="video/mp4"/> {/*Video para mobile*/}
        </video>
        </div>
    </div>
    )
}