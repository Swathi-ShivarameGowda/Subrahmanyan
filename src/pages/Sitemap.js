import React from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import SITEMAP from '../img/SITEMAP.png'

export default function Sitemap() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }


    return (
        <>
            <div className="headerimg">
                <img src={SITEMAP} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Content</div>
                <br></br>
                <div>
                    <table style={{width:'100%'}}>
                        <tbody>
                            <tr>
                                <div class="earlylifepara" >
                                    <td style={{ width: "16%" }} >
                                        <div><Link to="/" style={{ textDecoration: 'none', color: '#3819e9' }} >Home</Link></div>
                                        <div><Link to="/early-life" style={{ textDecoration: 'none', color: '#3819e9' }} >Early Life</Link></div>
                                        <div><Link to="/awards" style={{ textDecoration: 'none', color: '#3819e9' }} >Awards</Link></div>
                                        <div><Link to="/contact" style={{ textDecoration: 'none', color: '#3819e9' }} >Contact</Link></div>
                                    </td>
                                <td style={{ width: "20%" }} >
                                        <div><Link to="/food-tech" style={{ textDecoration: 'none', color: '#3819e9' }} >Food Technology</Link></div>
                                        <div><Link to="/cftri" style={{ textDecoration: 'none', color: '#3819e9' }} >CFTRI</Link></div>
                                        <div><Link to="/philippines" style={{ textDecoration: 'none', color: '#3819e9' }} >The Philippines</Link></div>
                                        <div><Link to="/pprc-iiftp" style={{ textDecoration: 'none', color: '#3819e9' }} >PPRC-IIFTP</Link></div>
                                        <div><Link to="/infant-food" style={{ textDecoration: 'none', color: '#3819e9' }} >Amul Milk Powder</Link></div>
                                        <div><Link to="/tapioca-cassava" style={{ textDecoration: 'none', color: '#3819e9' }} >Tapioca/Cassava</Link></div>
                                        <div><Link to="/spices" style={{ textDecoration: 'none', color: '#3819e9' }} >Spices</Link></div>
                                        <div><Link to="/cheluvajamanni" style={{ textDecoration: 'none', color: '#3819e9' }} >Maharani of Mysore</Link></div>
                                        <div><Link to="/pprc-research" style={{ textDecoration: 'none', color: '#3819e9' }} >Research</Link></div>
                                        <div><Link to="/post-harvest-tech" style={{ textDecoration: 'none', color: '#3819e9' }} >Post-Harvest Technology</Link></div>
                                        <div><Link to="/biographies" style={{ textDecoration: 'none', color: '#3819e9' }} >Biographies</Link></div>
                                        
                                </td>
                                    <td style={{ width: "20%" }} >
                                        <div><Link to="/soil-science" style={{ textDecoration: 'none', color: '#3819e9' }} >Soil Science</Link></div>
                                        <div><Link to="/iisc" style={{ textDecoration: 'none', color: '#3819e9' }} >IISC</Link></div>
                                        <div><Link to="/gjfowler" style={{ textDecoration: 'none', color: '#3819e9' }} >G.J.Fowler</Link></div>
                                        <div><Link to="/rothamsted" style={{ textDecoration: 'none', color: '#3819e9' }} >Rothamsted</Link></div>
                                        <div><Link to="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >Reference</Link></div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}