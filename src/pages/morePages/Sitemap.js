import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto1 from '../../img/headerphoto1.jpg'

export default function Sitemap() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div className="headerimg">
                <img src={headerphoto1} style={{ height: '155px', width: '100%' }} />
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
                                        <div><a href="/" style={{ textDecoration: 'none', color: '#3819e9' }} >Home</a></div>
                                        <div><a href="/early-life" style={{ textDecoration: 'none', color: '#3819e9' }} >Early Life</a></div>
                                        <div><a href="/awards" style={{ textDecoration: 'none', color: '#3819e9' }} >Awards</a></div>
                                        <div><a href="/contact" style={{ textDecoration: 'none', color: '#3819e9' }} >Contact</a></div>
                                    </td>
                                <td style={{ width: "20%" }} >
                                        <div><a href="/food-tech" style={{ textDecoration: 'none', color: '#3819e9' }} >Food Technology</a></div>
                                        <div><a href="/cftri" style={{ textDecoration: 'none', color: '#3819e9' }} >CFTRI</a></div>
                                        <div><a href="/philippines" style={{ textDecoration: 'none', color: '#3819e9' }} >The Philippines</a></div>
                                        <div><a href="/pprc-iiftp" style={{ textDecoration: 'none', color: '#3819e9' }} >PPRC-IIFTP</a></div>
                                        <div><a href="/infant-food" style={{ textDecoration: 'none', color: '#3819e9' }} >Amul Milk Powder</a></div>
                                        <div><a href="/tapioca-cassava" style={{ textDecoration: 'none', color: '#3819e9' }} >Tapioca/Cassava</a></div>
                                        <div><a href="/spices" style={{ textDecoration: 'none', color: '#3819e9' }} >Spices</a></div>
                                        <div><a href="/cheluvajamanni" style={{ textDecoration: 'none', color: '#3819e9' }} >Maharani of Mysore</a></div>
                                        <div><a href="/pprc-research" style={{ textDecoration: 'none', color: '#3819e9' }} >Research</a></div>
                                        <div><a href="/post-harvest-tech" style={{ textDecoration: 'none', color: '#3819e9' }} >Post-Harvest Technology</a></div>
                                        <div><a href="/biographies" style={{ textDecoration: 'none', color: '#3819e9' }} >Biographies</a></div>
                                        
                                </td>
                                    <td style={{ width: "20%" }} >
                                        <div><a href="/soil-science" style={{ textDecoration: 'none', color: '#3819e9' }} >Soil Science</a></div>
                                            <div><a href="/iisc" style={{ textDecoration: 'none', color: '#3819e9' }} >IISC</a></div>
                                            <div><a href="/gjfowler" style={{ textDecoration: 'none', color: '#3819e9' }} >G.J.Fowler</a></div>
                                            <div><a href="/rothamsted" style={{ textDecoration: 'none', color: '#3819e9' }} >Rothamsted</a></div>
                                            <div><a href="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >Reference</a></div>
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