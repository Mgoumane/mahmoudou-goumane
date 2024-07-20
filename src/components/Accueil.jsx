import '../styles/Accueil.css';

function Accueil (  ) {

    return (
        <section className="container margeEntreSection">
            <div className="row">
                <div className="col-md-6 text-center text-md-start">
                    <p> 
                        <span className="bigText">Hi !</span> <br/>
                        <span className="bigText">I'm Mahmoudou </span> <br/> 
                        <span className="bigText"> A Software Developer !</span> 
                    </p>
                    <p className='phraseEnDegrade'>Bienvenue sur mon portfolio ! Découvrez mon univers à travers mes projets et réalisations. Bonne visite !</p>
                </div>
            </div>
        </section>
    )
}
export default Accueil;