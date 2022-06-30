import { useState } from "react";
import Style from "./Form.module.css";

export default function Form(){
    const [, setInput] =  useState({
        name:"",
        email: "",
        subject: "",
        message: ""
    })
    const handleOnChange=(e)=>{
        e.preventDefault();
        // console.log(e.target.value)
        setInput((state)=>{
            const newState={
                ...state,
                [e.target.name]: e.target.value
            }
            return newState
        })
    }
        // console.log(input)
    // const handleReset=(e)=>{
    //     e.preventDefault();
    //     setInput({
    //         name:"",
    //         email: "",
    //         subject: "",
    //         message: ""
    //     })
    //     console.log(input)
    // }
    return(
    <div >
        <strong className={Style.subTitle}>Send A Message</strong>
        <form 
        className={Style.from}
        method='POST'
        // action="https://getform.io/f/7430b101-272a-4bf2-9e4d-4188d2766d7e"
        action="https://formspree.io/f/mbjweljl"
        // 
        >
            <input type='text' placeholder='Your Name' name="name" 
            onChange={(e)=>handleOnChange(e)}
            />
            <input type='text' placeholder='Your Email' name="email"  
            onChange={(e)=>handleOnChange(e)}
            />
            <input type='text' placeholder='Subject' name="subject"  
            onChange={(e)=>handleOnChange(e)}
            />
            <textarea placeholder='Message' name="message"  
            onChange={(e)=>handleOnChange(e)}
            />
            <button type="submit" 
            className={Style.buttom}
            // onSubmit={handleReset}
            >Send Message</button>
        </form>
    </div>)
}