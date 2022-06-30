import Style from "./Slider.module.css"
// import WineEcommerce from "../../images/wineEcommerceImage.png"
// import myPortfolio from "../../images/myPortfolioImage2.png"
// import PokeApp from "../../images/pokemonAppImage.png"
import { 
    useEffect,
     useState } from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
// import { useScrollPosition } from "../UseScrollPosition/UseScrollPosition";
import { scroller } from "react-scroll";


export default function Slider({ images3, links3, handleOnHand3
    // , conditions 
}){
    const imag2=images3
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const [ selectecImage, setSelectedImage ] = useState(imag2[0])
    // const scrollPosittion = useScrollPosition();
    
    const previous = ()=>{
        const condition = selectedIndex > 0;
        const nextIndex = condition ? Number(selectedIndex) -1 : imag2.length-1 ;
        setSelectedImage(imag2[nextIndex]);
        setSelectedIndex(nextIndex);
    }
    const next = ()=>{
        const condition = selectedIndex < imag2.length-1;
        const nextIndex = condition ? Number(selectedIndex) +1 : 0 ;
        setSelectedImage(imag2[nextIndex]);
        setSelectedIndex(nextIndex);
    }
    const scrollType = {
        duration: 500,
        delay: 50,
        smooth: true, 
        offset: -150,
     };
    useEffect(()=>{
        scroller.scrollTo("justSlider", scrollType)
    },[])

    return(
        <div className={Style.container}>
            <div name="justSlider" className={Style.DivTitle}><CloseIcon sx={{color:'white', fontSize: '3rem'}} onClick={()=>handleOnHand3("close")}/></div>
            
            <div className={Style.DivDescription}>
                <div><ArrowBackIosNewIcon sx={{color:'white', fontSize: 'xx-large'}} onClick={()=>previous()}/></div>
                
                <img src={selectecImage} alt='not found'/>
                
                <div><ArrowForwardIosIcon sx={{color:'white', fontSize: 'xx-large'}} onClick={()=>next()}/></div>
            </div>
            <a rel="noreferrer" href={links3} target="_blank">Ver Deploy</a>

       
    </div>)
}