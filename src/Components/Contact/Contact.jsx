import Style from "./Contact.module.css"
import Form from "./Form"
import LinkedinLogo from "../../images/linkedinlogo.webp";
import GitHubLogo from "../../images/githublogo.png"
import EmailLogo from "../../images/1532537150_839363_1532539331_noticia_normal.jpg"

export default function Contact(){
    return(<div className={Style.divSuperContainer} name='justContact'>hola
    <div className={Style.container}>
        <h1>Contact Me</h1>
        <div className={Style.divContainer}>
            <div className={Style.sendMenssage}>
                <Form/>
            </div>
            <div className={Style.getTouch}>
                <strong className={Style.subTitle}>Get In Touch</strong>
                <p>
                Whether you want to get in touch, talk about a project collaboration,
                or just say hi, I'd love to hear from you.
                Simply fill the form and send me an email.
                </p>
                <div className={Style.imageDiv}>
                <a rel="noreferrer" href="mailto: gonzalo.hernandez1@hotmail.com " target="_blank">
                <img className={Style.imageDefault} src={EmailLogo} alt='not found'/>
                </a>
                <a rel="noreferrer" href="https://github.com/gonzalohz" target="_blank">
                <img className={Style.imageDefault} src={GitHubLogo} alt='not found'/>
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/gonzalo-hernandez-8161b9237/" target="_blank">
                <img className={Style.imageDefault} src={LinkedinLogo} alt='not found'/>
                </a>
                </div>
            </div>
        </div>
    </div>
    </div>)
}