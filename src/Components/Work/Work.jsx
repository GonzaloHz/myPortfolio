import Style from "./Work.module.css";
// import Example from "../../images/pikachu2_1-1.jpg";
import WineEcommerce from "../../images/wineEcommerceImage.png"
import myPortfolio from "../../images/myPortfolioImage2.png"
import PokeApp from "../../images/pokemonAppImage.png"

export default function Work({handleOnHand3}){

    
    return(<div className={Style.divSuperContainer}  name='justWork'>hola
    <div className={Style.container} >
        <h1>My Projects</h1>
        <div className={Style.divBasic}>
            <div className={Style.divCard}>
                <img className={Style.imageExample} src={PokeApp} alt="not found"/>
                <div className={Style.imageDescription}>
                    <div className={Style.descriptionContainer}>
                        <div className={Style.descriptionTitle}><strong>PokeApp</strong></div>
                        <p>JavaScript, HTML, CSS, React, Redux, </p>
                        <p>NodeJS, Express, Sequelize, PostgreSQL</p>  
                    </div>  
                    <div>
                        <button className={Style.buttom} onClick={()=>handleOnHand3("uno")}>+</button>
                    </div>
                </div>
            </div>
            <div className={Style.divCard}>
                <img className={Style.imageExample} src={WineEcommerce} alt="not found"/>
                <div className={Style.imageDescription}>
                    <div className={Style.descriptionContainer}>
                        <div className={Style.descriptionTitle}><strong>WineEcommerce</strong></div>
                        <p>JavaScript, HTML, CSS, React, Redux, </p>
                        <p>Material UI, NodeJS, MongoDB, Express</p>  
                    </div>  
                    <div>
                        <button className={Style.buttom} onClick={()=>handleOnHand3("dos")}>+</button>
                    </div>
                </div>
            </div>
            <div className={Style.divCard}>
            <img className={Style.imageExample} src={myPortfolio} alt="not found"/>
                <div className={Style.imageDescription}>
                    <div className={Style.descriptionContainer}>
                        <div className={Style.descriptionTitle}><strong>MyPortfolio</strong></div>
                        <p>JavaScript, HTML, CSS,   </p>
                        <p>React, Material UI</p>  
                    </div>  
                    <div>
                        <button className={Style.buttom} onClick={()=>handleOnHand3("tres")}>+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>)
}