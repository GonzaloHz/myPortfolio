import Style from "./NavBar.module.css"
import ProfileB from "../../images/probando12.png"
import ProfileW from "../../images/probando11.png"
// import ProfileTA from "../../images/probando3.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Link } from "react-scroll";
import { useScrollPosition } from "../UseScrollPosition/UseScrollPosition";

export default function NavBar({booleanValue}){
    const [menuIcon, setMenuIcon] = useState(false)
    const scrollPosittion = useScrollPosition();
    // console.log(scrollPosittion)
    function barbarbar(){
        setMenuIcon(!menuIcon)
    }
    return(
    <div className={Style.container}>

            <ul className={booleanValue ? Style.List : scrollPosittion>10 ? Style.AlternativeList : Style.List}>
               
                <img className={Style.imageBlack} src={ProfileB} alt="black"/>
                {scrollPosittion<=10 && <img className={Style.imageWhite} src={ProfileW} alt="white"/>}
                {scrollPosittion>10 && !booleanValue && <img className={Style.imageAlternative} src={ProfileB} alt="white"/>}
                {scrollPosittion>10 && booleanValue && <img className={Style.imageAlternative} src={ProfileW} alt="white"/>}
                {menuIcon===true &&
                <div className={Style.MobileList}>
                <li className={Style.aStyles}><Link to='justHome' smooth={true}>Home</Link></li>
                <li className={Style.aStyles}><Link to='justAbout' smooth={true}>About</Link></li>
                <li className={Style.aStyles}><Link to='justWork' smooth={true}>Work</Link></li>
                <li className={Style.aStyles}><Link to='justContact' smooth={true}>Contact</Link></li>                 
                </div>}
                {menuIcon===false?<div className={Style.MobileIcon}><MenuIcon sx={{color:"black"}} fontSize="large" onClick={()=>barbarbar()}/></div>:<div className={Style.MobileIcon}><CloseIcon fontSize="large" onClick={()=>barbarbar()}/></div>}
            
                <div className={Style.PcList}>
                <li className={ booleanValue ? Style.aStyles : scrollPosittion>10 ? Style.AlternativeaStyles : Style.aStyles }><Link to='justHome' smooth={true} spy={true}>Home</Link></li>
                <li className={ booleanValue ? Style.aStyles : scrollPosittion>10 ? Style.AlternativeaStyles : Style.aStyles }><Link to='justAbout' smooth={true} spy={true}>About</Link></li>
                <li className={ booleanValue ? Style.aStyles : scrollPosittion>10 ? Style.AlternativeaStyles : Style.aStyles }><Link to='justWork' smooth={true} spy={true}>Work</Link></li>
                <li className={ booleanValue ? Style.aStyles : scrollPosittion>10 ? Style.AlternativeaStyles : Style.aStyles }><Link to='justContact' smooth={true} spy={true}>Contact</Link></li>  
                </div>
            </ul>
        {/* </div> */}
    </div>
    )
}