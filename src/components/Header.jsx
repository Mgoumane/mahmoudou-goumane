import '../styles/header.css';
;

function Header () {

    return (
        
        <nav className="navbar navbar-expand-lg m-lg-4 mt-3">

            <div className="container">
                <a className="navbar-brand" href="#" style={{color : "#0EB1E6"}}>Mahmoudou GOUMANE </a>
                <button className=" navbar-toggler border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link py-3" aria-current="page" href="#aboutMe" >ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3" href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3" href="#recommandations">RECOMMANDATIONS</a>
                        </li>
                        <li className="nav-item">
                            <button className="buttonDegrade nav-link mx-3 px-5 py-3">
                                <a href="#contact" className='text-white ' style={ {textDecoration: "none" }}>CONTACT</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}

export default Header;