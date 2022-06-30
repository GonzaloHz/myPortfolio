import Style from "./About.module.css"
import JSlogo from "../../images/jslogo.svg"
import CSS from "../../images/cssLogo.svg"
import EXPRESS from "../../images/expressLogo.svg"
import NodeJs from "../../images/nodeLogo.svg"
import React from "../../images/ReactLogo.svg"
import Redux from "../../images/ReduxLogo.svg"
import htmlLogo from "../../images/htmllogo2.png"
import gitLogo from "../../images/gitLogo2.jpg"
import SequelizeLogo from "../../images/sequelizeLogo.png"


export default function About(){
    return(<div name='justAbout' className={Style.divSuperContainer}>hola
    <div className={Style.container}>
        <h1>About</h1>
        <div className={Style.divContainer}>
            <div className={Style.percentTitle}>
            <strong className={Style.subTitle}>Skills</strong>
            <div className={Style.percentage}>
                <div className={Style.atribute}><div>JavaScript</div>
                <div><img className={Style.imageDefault} src={JSlogo} alt='not found'/></div>
                </div>

                <div className={Style.atribute}><div>HTML5</div>
                <img className={Style.imageDefault} src={htmlLogo} alt='not found'/>
                </div>
                <div className={Style.atribute}><div>CSS3</div>
                <img className={Style.imageDefault} src={CSS} alt='not found'/>
                </div>
                <div className={Style.atribute}><div>React</div>
                <img className={Style.imageDefault} src={React} alt='not found'/>
                </div>
                <div className={Style.atribute}><div>Redux</div>
                <img className={Style.imageDefault} src={Redux} alt='not found'/>
                </div>
                <div className={Style.atribute}><div>GIT</div>
                <img className={Style.imageDefault} src={gitLogo} alt='not found'/>
                </div>
                <div className={Style.atribute}><div>NodeJs</div>
                <img className={Style.imageDefault} src={NodeJs} alt='not found'/>
                </div>
                <div className={Style.atribute}><div>Express</div>
                <img className={Style.imageDefault} src={EXPRESS} alt='not found'/>
                </div>
                <div className={Style.atribute}>
                    <div>Sequelize</div>
                <img className={Style.imageDefault} src={SequelizeLogo} alt='not found'/>
                </div>
            </div>

            </div>

            <div className={Style.divText}>
                <strong className={Style.subTitle}> Me </strong>
                <p>My name is Gonzalo Hernández, I'm a Front End oriented
                Full Stack Web Developer. </p>
                <p>My interest in computing
                comes from childhood and increased when I met
                professionals who guided me on the path of
                programming.</p>
                <p>Today I develop projects using JavaScript,
                HTML, CSS, React, Redux, Material UI, NodeJS, Express,
                Postgre SQL and Sequelize. I have knowledge in GIT,
                SCRUM, TRELLO and C++.</p>
            <p>I am passionate about accessibility, user experience and web performance
            </p>
            </div> 
        </div>
    </div>
    </div>)
}