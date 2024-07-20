import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Contact () {

    return (
        <section id='contact' className="container margeEntreSection">

            <p className='sectionTitle text-center'> CONTACT </p>
            <div className="row ">
                <div className="col-lg-6">
                    <p>
                        <a href="mailto:Goumane.mahmoudou@gmail.com" className='text-white'><FontAwesomeIcon icon={faEnvelope} className='mx-3' />Goumane.mahmoudou@gmail.com</a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/mamoudou-goumane-6ba9811a7/" className='text-white'><FontAwesomeIcon icon={faLinkedin} className='mx-3'/>Linkedin</a>
                    </p>
                    <p> 
                        <a href="https://github.com/Mgoumane?tab=repositories" className='text-white'><FontAwesomeIcon icon={faGithub} className='mx-3'/>Repository Git</a>
                    </p>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <p> <a href="/pdf/cv.pdf" className='text-white'><FontAwesomeIcon icon={faDownload} className='mx-3'/>Télécharge mon CV </a>  </p>
                </div>
            </div>
        </section>
    )
}

export default Contact;