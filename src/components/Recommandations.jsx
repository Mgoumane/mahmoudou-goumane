import imageRecommandation1 from "../images/recommandation1.jpg";
import imageRecommandation2 from "../images/recommandation2.jpg";
import imageRecommandation3 from "../images/recommandation3.jpg";
import imageRecommandation4 from "../images/recommandation4.jpeg";
import "../styles/Recommandations.css";

function Recommandations() {

    return(

        <section id="recommandations" className="container margeEntreSection">

                <p className='sectionTitle text-center'> RECOMMANDATIONS </p>
                <div className="row ">
                    <div className="col-lg-6 my-5 d-flex">
                        <img className="recommandationsImages rounded-5 mx-auto" src={imageRecommandation1} alt="" />
                    </div>
                    <div className="col-lg-6 my-5 d-flex">
                        <img className="recommandationsImages rounded-5 mx-auto" src={imageRecommandation2} alt="" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 my-5 my-5 d-flex">
                        <img className="recommandationsImages rounded-5 mx-auto" src={imageRecommandation3} alt="" />
                    </div>
                    <div className="col-lg-6 my-5 d-flex">
                        <img className="recommandationsImages rounded-5 mx-auto" src={imageRecommandation4} alt="" />
                    </div>
                </div>
        </section>
    )
};

export default Recommandations;