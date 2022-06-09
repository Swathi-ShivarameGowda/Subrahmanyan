import React from "react";
import { useHistory } from "react-router-dom";
import './Navbar.css';

function Navbar() {

    const history = useHistory();

    const callEarlyLife = (event) => {
        history.push("/early-life");
    }

    const callAcetone = (event) => {
        history.push("/acetone-fermentation");
    }
    
    const callRothamsted = (event) => {
        history.push("/rothamsted");
    }

    const callSoilScienceSanitation = (event) => {
        history.push("/soil-science-sanitation");
    }

    const callVitaminsAndEnzymes = (event) => {
        history.push("/vitamins-enzymes");
    }

    const callSoyaBeanMilk = (event) => {
        history.push("/soyabean-milk");
    }

    const callPencillin = (event) => {
        history.push("/pencillin-glucanate-and-soluble-casein");
    }

    const callCheluvambaMansion = (event) => {
        history.push("/cheluvajamanni");
    }

    const callCftri = (event) => {
        history.push("/cftri");
    }


    const callDevelopmentAmulFood = (event) => {
        history.push("/development-amul-food");
    }

    const callProcess = (event) => {
        history.push("/process");
    }

    const callBiography = (event) => {
        history.push("/biographies");
    }

    const callSago = (event) => {
        history.push("/sago");
    }


    const callPhilippines = (event) => {
        history.push("/philippines");
        
    }

    const callPprc = (event) => {
        history.push("/pprc");
        
    }

    const callResearch = (event) => {
        history.push("/research");
        
    }

    const callPostHarvestTech = (event) => {
        history.push("/post-harvest-tech");
        
    }

    const callAwards = (event) => {
        history.push("/awards");
        
    }


    return (
        <>
            <div className="homeheader" >
                <h1>DR.V. SUBRAHMANYAN</h1>
                <h3>A Man who dedicated his life to the development of Food Science and Food Technology</h3>
            </div>

            <div className="wrapper">
                <nav>
                    <input type="checkbox" id="show-menu" />
                    <label htmlFor="show-menu" className="menu-icon"><i className="fa fa-bars"></i></label>
                    <div className="content">
                        <ul className="links">
                            <li><a data-cy="menu-home" href="/">Home</a></li>
                            <li><a data-cy="menu-early" onClick={callEarlyLife} >Early Life</a></li>
                            <li>
                                <a data-cy="menu-soil" className="desktop-link">IISC</a>
                                <input type="checkbox" id="show-features" />
                                <div style={{ display: 'flex' }} ><a data-cy="menu-soil1" className="mobile-link" >IISC</a>
                                    <label htmlFor="show-features" ><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a data-cy="menu-iisc" onClick={callAcetone}>Acetone Fermentation</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Rothamsted</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callSoilScienceSanitation}>Soil Science and Sanitation</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callVitaminsAndEnzymes}>Vitamins and Enzymes</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callSoyaBeanMilk}>Soya Milk: School Feeding Program</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callPencillin}>Pencilin and Caesin</a></li>
                                    
                                </ul>
                            </li>
                            <li>
                                <a data-cy="menu-food" className="desktop-link">C.F.T.R.I</a>
                                <input type="checkbox" id="show-services" />
                                <div style={{ display: 'flex' }} ><a data-cy="menu-food1" className="mobile-link" >C.F.T.R.I</a>
                                    <label htmlFor="show-services"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a data-cy="menu-philippines" onClick={callCheluvambaMansion}>Cheluvamba Mansion</a></li>
                                    <li><a data-cy="menu-philippines" onClick={callCftri}>Inaugaration of C.F.T.R.I</a></li>
                                    <li><a data-cy="menu-cftri" className="desktop-link">Infant food</a>
                                        <input type="checkbox" id="show-items" />
                                        <div style={{ display: 'flex' }} ><a data-cy="menu-cftri1" className="mobile-link" >Infant food</a>
                                            <label htmlFor="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                        <ul>
                                            <li><a data-cy="menu-infant" onClick={callDevelopmentAmulFood}>Development of Amul Baby food</a></li>
                                            <li><a data-cy="menu-tapioca" onClick={callProcess}>Process of making Amul Baby food</a></li>
                                            <li><a data-cy="menu-spices" onClick={callBiography}>Biographies of those involved</a></li>
                                        </ul>
                                    </li>
                                    <li><a data-cy="menu-cftri" className="desktop-link">Tapioca/Cassava</a>
                                        <input type="checkbox" id="show-items" />
                                        <div style={{ display: 'flex' }} ><a data-cy="menu-cftri1" className="mobile-link" >Tapioca/Cassava</a>
                                            <label htmlFor="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                        <ul>
                                            <li><a data-cy="menu-infant" onClick={callSago}>Sago</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a data-cy="menu-sitemap" onClick={callPhilippines}>The Philippines</a></li>
                            <li>
                                <a data-cy="menu-soil" className="desktop-link">PPRC</a>
                                <input type="checkbox" id="show-features" />
                                <div style={{ display: 'flex' }} ><a data-cy="menu-soil1" className="mobile-link" >PPRC</a>
                                    <label htmlFor="show-features" ><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a data-cy="menu-iisc" onClick={callPprc}>The Establishment of PPRC</a></li>
                                    <li><a data-cy="menu-iisc" onClick={callResearch}>Research</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callPostHarvestTech}>Post - Harvest Technology</a></li>
                                </ul>
                            </li>
                            <li><a data-cy="menu-awards" onClick={callAwards}>Awards</a></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    );
}
export default Navbar;