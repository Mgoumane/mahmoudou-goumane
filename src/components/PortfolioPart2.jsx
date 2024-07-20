import imageAlohaScan1 from "../images/alohaScan1.webp"
import logoBootstrap from "../images/logoBootstrap.png"
import logoPhp from "../images/logoPhp.png"
import logoMysql from "../images/logoMysql.png"
import logoLaravel from "../images/logoLaravel.png"
import imageTuktukProjet from "../images/tuktukProjet.png"
import imageTuktukProjetMobileSize from "../images/tuktukProjetMobileSize.png"
import "../styles/PortfolioPart2.css"
function PortfolioPart2 () {

    return (
        <div className="row mt-5">
            <div className="col-lg-6 text-center text-lg-start mt-5">
                <h2> Tuktuk in Paris </h2>
                <p> Ce site web permet aux touristes de réserver un Tuktuk afin de pouvoir visiter la ville de Paris ! L’utilisateur peut se connecter, se déconnecter, voir les prestations et réserver si possible. Il
                    peut également accéder à un espace utilisateur où il pourra consulter sa réservation et l’annuler s’il le souhaite.
                </p>
                <p>J’ai développé l’application en Laravel avec une base de données MySQL.</p>
                <a className="btn btn-success mx-auto" href="https://github.com/Mgoumane/tuktuk_paris">Voir le repository </a>
                <div className="row mt-5">
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoLaravel} alt="" />
                    </div>
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoMysql} alt="" />
                    </div>
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoPhp} alt="" />
                    </div>
                    <div className="col-lg-3 d-flex">
                        <img className="technologiesLogoSize my-2 mx-auto" src={logoBootstrap} alt="" />
                    </div>
                </div>
            </div> 

            <div className="col-lg-6  text-lg-start d-flex">
                <img className="rounded-4 m-2 mx-auto d-none d-lg-block" src={imageTuktukProjet} alt="" />
                <img className="rounded-4 mt-5 mx-auto d-lg-none imageTuktukProjetMobileSize" src={imageTuktukProjetMobileSize} alt="" />
            </div>
        </div>
    )
}

export default PortfolioPart2;