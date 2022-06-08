import React from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../img/homenew.png'

export default function Sitemap() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }


    return (
        <>
            <div className="headerimg">
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
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
                                    <td style={{ width: "25%" }} >
                                        <div><Link to="/" style={{ textDecoration: 'none', color: '#3819e9' }} >Home</Link></div>
                                        <div><Link to="/early-life" style={{ textDecoration: 'none', color: '#3819e9' }} >Early Life</Link></div>
                                        <div><Link to="/acetone-fermentation" style={{ textDecoration: 'none', color: '#3819e9' }} >Acetone Fermentation</Link></div>
                                        <div><Link to="/rothamsted" style={{ textDecoration: 'none', color: '#3819e9' }} >Rothamsted</Link></div>
                                        <div><Link to="/soil-science-sanitation" style={{ textDecoration: 'none', color: '#3819e9' }} >Soil Science and Sanitation</Link></div>
                                        <div><Link to="/vitamins-enzymes" style={{ textDecoration: 'none', color: '#3819e9' }} >Vitamins and Enzymes</Link></div>
                                        <div><Link to="/soyabean-milk" style={{ textDecoration: 'none', color: '#3819e9' }} >Soya Milk: School Feeding Program</Link></div>
                                        <div><Link to="/pencillin-glucanate-and-soluble-casein" style={{ textDecoration: 'none', color: '#3819e9' }} >Pencilin and Caesin</Link></div>
                                        <div><Link to="/cvraman-subrahmanyan" style={{ textDecoration: 'none', color: '#3819e9' }} >C.V.Raman and Subrahmanyan</Link></div>
                                    </td>
                                <td style={{ width: "25%" }} >
                                        <div><Link to="/cheluvajamanni" style={{ textDecoration: 'none', color: '#3819e9' }} >Cheluvamba Mansion</Link></div>
                                        <div><Link to="/cftri" style={{ textDecoration: 'none', color: '#3819e9' }} >Inaugaration of C.F.T.R.I</Link></div>
                                        <div><Link to="/development-amul-food" style={{ textDecoration: 'none', color: '#3819e9' }} >Development of Amul Baby food</Link></div>
                                        <div><Link to="/process" style={{ textDecoration: 'none', color: '#3819e9' }} >Process of making Amul Baby food</Link></div>
                                        <div><Link to="/biographies" style={{ textDecoration: 'none', color: '#3819e9' }} >Biographies of those involved</Link></div>
                                        <div><Link to="/sago" style={{ textDecoration: 'none', color: '#3819e9' }} >Sago</Link></div>
                                        
                                </td>
                                    <td style={{ width: "20%" }} >
                                        <div><Link to="/philippines" style={{ textDecoration: 'none', color: '#3819e9' }} >The Philippines</Link></div>
                                        <div><Link to="/pprc" style={{ textDecoration: 'none', color: '#3819e9' }} >The Establishment of PPRC</Link></div>
                                        <div><Link to="/research" style={{ textDecoration: 'none', color: '#3819e9' }} >Research</Link></div>
                                        <div><Link to="/post-harvest-tech" style={{ textDecoration: 'none', color: '#3819e9' }} >Post - Harvest Technology</Link></div>
                                        <div><Link to="/awards" style={{ textDecoration: 'none', color: '#3819e9' }} >Awards</Link></div>
                                        <div><Link to="/gjfowler" style={{ textDecoration: 'none', color: '#3819e9' }} >Dr.G.J.Fowler</Link></div>
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