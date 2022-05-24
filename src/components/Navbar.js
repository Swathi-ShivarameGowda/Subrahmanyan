import React from "react";
import { useHistory } from "react-router-dom";
import './Navbar.css';

function Navbar() {

    const history = useHistory();

    const callEarlyLife = (event) => {
        history.push("/early-life");
    }

    const callSoilScience = (event) => {
        history.push("/soil-science");
    }

    const callIisc = (event) => {
        history.push("/iisc");
    }

    const callRothamsted = (event) => {
        history.push("/rothamsted");
    }

    const callFoodTech = (event) => {
        history.push("/food-tech");
    }

    const callCftri = (event) => {
        history.push("/cftri");
    }

    const callInfantFood = (event) => {
        history.push("/infant-food");
    }

    const callTapioca = (event) => {
        history.push("/tapioca-cassava");
    }

    const callSpices = (event) => {
        history.push("/spices");
    }

    const callPencillin = (event) => {
        history.push("/pencillin-glucanate-and-soluble-casein");
    }

    const callPhilippines = (event) => {
        history.push("/philippines");
        
    }

    const callPprc = (event) => {
        history.push("/pprc-iiftp");
        
    }

    const callAwards = (event) => {
        history.push("/awards");
        
    }

    const callContact = (event) => {
        history.push("/contact");
        
    }

    const callSitemap = (event) => {
        history.push("/site-map");
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
                                    <li><a data-cy="menu-iisc" onClick={callIisc}>Acetone Fermentation</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Rothamsted</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Soil Science and Sanitation</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Vitamins and Enzymes</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Soya Milk: School Feeding Program</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Pencilin and Caesin</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>C.V.Raman and Subrahmanyan</a></li>
                                </ul>
                            </li>
                            <li>
                                <a data-cy="menu-food" className="desktop-link">C.F.T.R.I</a>
                                <input type="checkbox" id="show-services" />
                                <div style={{ display: 'flex' }} ><a data-cy="menu-food1" className="mobile-link" >C.F.T.R.I</a>
                                    <label htmlFor="show-services"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a data-cy="menu-philippines" onClick={callInfantFood}>Cheluvamba Mansion</a></li>
                                    <li><a data-cy="menu-philippines" onClick={callPhilippines}>Inaugaration of C.F.T.R.I</a></li>
                                    <li><a data-cy="menu-cftri" className="desktop-link">Infant food</a>
                                        <input type="checkbox" id="show-items" />
                                        <div style={{ display: 'flex' }} ><a data-cy="menu-cftri1" className="mobile-link" >Infant food</a>
                                            <label htmlFor="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                        <ul>
                                            <li><a data-cy="menu-infant" onClick={callInfantFood}>Developmental History</a></li>
                                            <li><a data-cy="menu-tapioca" onClick={callTapioca}>Process</a></li>
                                            <li><a data-cy="menu-spices" onClick={callSpices}>Biographies of those involved</a></li>
                                        </ul>
                                    </li>
                                    <li><a data-cy="menu-cftri" className="desktop-link">Tapioca/Cassava</a>
                                        <input type="checkbox" id="show-items" />
                                        <div style={{ display: 'flex' }} ><a data-cy="menu-cftri1" className="mobile-link" >Tapioca/Cassava</a>
                                            <label htmlFor="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                        <ul>
                                            <li><a data-cy="menu-infant" onClick={callInfantFood}>Sago</a></li>
                                            <li><a data-cy="menu-tapioca" onClick={callTapioca}>Tapioca Macaroni</a></li>
                                            <li><a data-cy="menu-spices" onClick={callSpices}>Mysore flour and Indian Multipurpose food</a></li>
                                        </ul>
                                    </li>
                                    <li><a data-cy="menu-philippines" onClick={callInfantFood}>Rice</a></li>
                                    <li><a data-cy="menu-cftri" className="desktop-link">Spices</a>
                                        <input type="checkbox" id="show-items" />
                                        <div style={{ display: 'flex' }} ><a data-cy="menu-cftri1" className="mobile-link" >Spices</a>
                                            <label htmlFor="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                        <ul>
                                            <li><a data-cy="menu-infant" onClick={callInfantFood}>Oleoresins</a></li>
                                            <li><a data-cy="menu-tapioca" onClick={callTapioca}>Garlic powder</a></li>
                                        </ul>
                                    </li>
                                    <li><a data-cy="menu-philippines" onClick={callPhilippines}>Coffee and Tea</a></li>
                                    <li><a data-cy="menu-pprc" onClick={callPprc}>Fruits</a></li>
                                    <li><a data-cy="menu-pprc" onClick={callPprc}>Infestation</a></li>
                                </ul>
                            </li>
                            <li><a data-cy="menu-sitemap" onClick={callSitemap}>The Philippines</a></li>
                            <li>
                                <a data-cy="menu-soil" className="desktop-link">PPRC – IIFPT</a>
                                <input type="checkbox" id="show-features" />
                                <div style={{ display: 'flex' }} ><a data-cy="menu-soil1" className="mobile-link" >PPRC – IIFPT</a>
                                    <label htmlFor="show-features" ><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a data-cy="menu-iisc" onClick={callIisc}>Research</a></li>
                                    <li><a data-cy="menu-rothamsted" onClick={callRothamsted}>Post – Harvest Technology</a></li>
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