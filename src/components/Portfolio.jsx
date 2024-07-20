import PortfolioPart1 from "./PortfolioPart1";
import PortfolioPart2 from "./PortfolioPart2";

function Portfolio () {

    return(
        <> 
            <section id="portfolio" className="container margeEntreSection">
                <p className='sectionTitle text-center'> PORTFOLIO </p>
                <PortfolioPart1></PortfolioPart1>
                <PortfolioPart2></PortfolioPart2>
            </section>
        </>
    )
}

export default Portfolio;