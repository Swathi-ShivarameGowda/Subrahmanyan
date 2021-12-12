import React from "react";
import './Navbar.css';

function Navbar() {

    return (
        <>
        <div className="homeheader" >
              <h1>DR.V. SUBRAHMANYAN</h1>
              <h3>A man who dedicated his life to research about food science and a founder of many great institutes.</h3>
            </div>
            
        <div className="wrapper">
                <nav>
                <input type="checkbox" id="show-menu" />
                <label for="show-menu" className="menu-icon"><i className="fa fa-bars"></i></label>
                    <div className="content">
                        <ul className="links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/early-life">Early Life</a></li>
                        <li>
                            <a href="/soil-science" className="desktop-link">Soil Science</a>
                            <input type="checkbox" id="show-features" />
                            <div style={{ display: 'flex' }} ><a href="/soil-science" className="mobile-link" >Soil Science</a>
                            <label for="show-features" ><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                <ul>
                                    <li><a href="/iisc">IISC</a></li>
                                    <li><a href="/rothamsted">Rothamsted</a></li>
                                </ul>
                        </li>
                        <li>
                            <a href="/food-tech" className="desktop-link">Food Technology</a>
                            <input type="checkbox" id="show-services" />
                            <div style={{ display: 'flex' }} ><a href="/food-tech" className="mobile-link" >Food Technology</a>
                                <label for="show-services"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                    <ul>
                                <li><a href="/cftri" className="desktop-link">CFTRI</a>
                                    <input type="checkbox" id="show-items" />
                                    <div style={{ display: 'flex' }} ><a href="/cftri" className="mobile-link" >CFTRI</a>
                                        <label for="show-items"><i style={{ marginLeft: '20px' }} className="fa fa-caret-down"></i></label></div>
                                            <ul>
                                                <li><a href="/infant-food">Infant Food</a></li>
                                                <li><a href="/tapioca-cassava">Tapioca/Cassava</a></li>
                                                <li><a href="/spices">Spices</a></li>
                                            <li><a href="/pencillin-glucanate-and-soluble-casein" ><div>Pencillin, Glucanate and Soluble Casein</div></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/philippines">The Philippines</a></li>
                                        <li><a href="/pprc-iiftp">PPRC - IIFTP</a></li>
                                    </ul>
                        </li>
                        <li><a href="/awards">Awards</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li>
                            <a className="desktop-link">More</a>
                            <input type="checkbox" id="show-more" />
                            <label for="show-more">More</label>
                            <ul>
                                <li><a href="/site-map">Site Map</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
                </div>
                
            </>
    );
}
 export default Navbar;