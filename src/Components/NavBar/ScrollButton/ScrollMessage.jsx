import Styles from "./ScrollMessage.module.css";
import { Link } from "react-scroll";

export default function ScrollMessage({message, handleOnMessage}){
    return(<div className={Styles.container}>
        {message && <Link to='justContact' smooth={true}><button onClick={()=> handleOnMessage("msg")}>Do you want to talk? Write me:D</button></Link>}
        </div>)
}