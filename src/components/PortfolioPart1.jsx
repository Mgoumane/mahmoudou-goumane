import imageAlohaScan1 from "../images/alohaScan1.webp"
import imageAlohaScan2 from "../images/alohaScan2.webp"
import logoIonic from "../images/logoIonic.png"
import logoTypeScript from "../images/logoTypeScript.webp"
import logoAngular from "../images/logoAngular.png"
import logoBootstrap from "../images/logoBootstrap.png"
import "../styles/PortfolioPart1.css"
function PortfolioPart1 () {

    return (

        <div className="row mt-5">

            <div className="col-lg-6  text-lg-start ">
                <div className="row">
                    <div className="col-lg-6 d-flex">
                        <img className="rounded-4 m-2 mx-auto" src={imageAlohaScan1} alt="imageAlohaScan1" />
                    </div>
                    <div className="col-lg-6 d-flex">
                        <img className="rounded-4 m-2 mx-auto" src={imageAlohaScan2} alt="imageAlohaScan2" />
                    </div>
                </div>
            </div>

            <div className="col-lg-6 text-center text-lg-start mt-5">
                <h2> Aloha Check-in</h2>
                <p> L'application Aloha Checkin est une application qui permet aux organisateurs de salon de pouvoir scanner les badges des visiteurs se présentant au salon et de vérifier leur conformité.
                </p>
                <p>
                    Lors de mon stage chez Mediactive, j'ai eu l'opportunité de contribuer au développement de cette application. J'ai été chargé de développer la partie front de l'application sur des téléphones Android. 
                </p>
                <a className="btn btn-success mx-auto" href="https://apps.apple.com/fr/app/aloha-check-in/id6467421451">Télécharger  l'application </a>

                <div className="row mt-5">
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoIonic} alt="" />
                    </div>
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoTypeScript} alt="" />
                    </div>
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoAngular} alt="" />
                    </div>
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoBootstrap} alt="" />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default PortfolioPart1;