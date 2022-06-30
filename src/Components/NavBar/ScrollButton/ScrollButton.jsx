import Styles from "./ScrollButton.module.css";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useScrollPosition } from "../../UseScrollPosition/UseScrollPosition";

export default function ScrollButton({handleOnMessage}){
    const scrollPosittion = useScrollPosition();
    const handleDown=()=>{
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
    }
    return(<div className={Styles.container} onClick={handleOnMessage}>
        {scrollPosittion>10 && <KeyboardArrowUpOutlinedIcon sx={{backgroundColor:'#047aff',color:'white', fontSize: '3rem', borderRadius:'50px'}} onClick={()=>handleDown()}/>}
    </div>)
}