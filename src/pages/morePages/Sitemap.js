import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg'

export default function Sitemap() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div style={{
                backgroundImage: "url(" + stjoseph + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '155px'
            }} />
            <div className="container" >
                <br></br>
                <div className="earlylife" >Content</div>
                <br></br>
                <div className="earlylifepara" ><a href="/" style={{ textDecoration: 'none', color: '#3819e9' }} >Home</a></div>

                <div className="earlylifepara" ><a href="/early-life" style={{ textDecoration: 'none', color: '#3819e9' }} >Early Life</a></div>

                <div className="earlylifepara" ><a href="/soil-science" style={{ textDecoration: 'none', color: '#3819e9' }} >Soil Science</a></div>
                <div className="earlylifepara" ><a href="/iisc" style={{ textDecoration: 'none', color: '#3819e9' }} >IISC</a></div>
                <div className="earlylifepara" ><a href="/gjfowler" style={{ textDecoration: 'none', color: '#3819e9' }} >G.J.Fowler</a></div>
                <div className="earlylifepara" ><a href="/rothamsted" style={{ textDecoration: 'none', color: '#3819e9' }} >Rothamsted</a></div>

                <div className="earlylifepara" ><a href="/food-tech" style={{ textDecoration: 'none', color: '#3819e9' }} >Food Technology</a></div>
                <div className="earlylifepara" ><a href="/cftri" style={{ textDecoration: 'none', color: '#3819e9' }} >CFTRI</a></div>
                <div className="earlylifepara" ><a href="/cheluvajamanni" style={{ textDecoration: 'none', color: '#3819e9' }} >Maharani of Mysore</a></div>
                <div className="earlylifepara" ><a href="/infant-food" style={{ textDecoration: 'none', color: '#3819e9' }} >Amul Milk Powder</a></div>
                <div className="earlylifepara" ><a href="/biographies" style={{ textDecoration: 'none', color: '#3819e9' }} >Biographies</a></div>
                <div className="earlylifepara" ><a href="/infant-food-paper1" style={{ textDecoration: 'none', color: '#3819e9' }} >Infant Food Paper1</a></div>
                <div className="earlylifepara" ><a href="/infant-food-paper2" style={{ textDecoration: 'none', color: '#3819e9' }} >Infant Food Paper2</a></div>
                <div className="earlylifepara" ><a href="/tapioca-cassava" style={{ textDecoration: 'none', color: '#3819e9' }} >Tapioca/Cassava</a></div>
                <div className="earlylifepara" ><a href="/spices" style={{ textDecoration: 'none', color: '#3819e9' }} >Spices</a></div>
                <div className="earlylifepara" ><a href="/philippines" style={{ textDecoration: 'none', color: '#3819e9' }} >The Philippines</a></div>
                <div className="earlylifepara" ><a href="/pprc-iiftp" style={{ textDecoration: 'none', color: '#3819e9' }} >PprcIiftp</a></div>
                <div className="earlylifepara" ><a href="/pprc-research" style={{ textDecoration: 'none', color: '#3819e9' }} >Research</a></div>
                <div className="earlylifepara" ><a href="/post-harvest-tech" style={{ textDecoration: 'none', color: '#3819e9' }} >Post-Harvest Technology</a></div>
                <div className="earlylifepara" ><a href="/complete-list" style={{ textDecoration: 'none', color: '#3819e9' }} >Complete List</a></div>
                
                <div className="earlylifepara" ><a href="/awards" style={{ textDecoration: 'none', color: '#3819e9' }} >Awards</a></div>
                <div className="earlylifepara" ><a href="/contact" style={{ textDecoration: 'none', color: '#3819e9' }} >Contact</a></div>
                <div className="earlylifepara" ><a href="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >Reference</a></div>
                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}