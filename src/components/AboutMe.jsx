import {useTranslation} from 'react-i18next';
import maPhoto from '../images/ma-photo.jpg';
import '../styles/AboutMe.css'
import '../traduction/i18next'


function AboutMe () {
    const {t, i18n} = useTranslation();

    const changerDeLangue = (langue) => {
        i18n.changeLanguage(langue);
    } 

    return (

        <section id='aboutMe' className="container margeEntreSection">

            <div className="row mt-5">

                <div className="col-lg-6  text-lg-start  d-flex">
                    <img id='maPhoto'  className='mx-auto' src={maPhoto} alt="ma-photo" />
                    <div id='borderDecale' className='d-none d-lg-block'></div>
                </div>

                <div className="col-lg-6 text-center text-lg-start mt-5">
                    <p className='sectionTitle'> ABOUT ME</p>
                    <p> {t('aboutMe')} </p>
                    <div className='d-flex justify-content-around mt-5'>
                        <button onClick={ () =>  changerDeLangue('fr')}  className=" nav-link px-5 py-3 buttonDegrade" >Français</button>
                        <button onClick={ () => changerDeLangue('en')} id='button2' className=" nav-link  px-5 py-3" >English</button>
                    </div>
                </div> 

            </div>
        </section>
    )
}

export default AboutMe;