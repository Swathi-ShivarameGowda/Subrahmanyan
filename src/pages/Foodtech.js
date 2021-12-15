import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ABOUTUS from '../img/ABOUTUS.png'

export default function Foodtech() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg" style={{ backgroundImage: "url(" + ABOUTUS + ")"}} />
            <div className="container" >
                <br></br>
                <div className="earlylife" >JOURNEY - From IISC to IIFPT</div>
                <br></br>
                <div className="earlylifepara" >To Dr Subrahmanyan work was the breath and stuff of life. He liked to end each day like Long Fellow's Village Blacksmith:</div>
                <div className="earlylifepara" style={{ fontWeight: 'bold', fontStyle:'italic' }} >"Something's been attempted, something's been done, And I've earned a good night's rest"</div>
                <div className="earlylifepara" >He attempted and did many things in his lifetime before he left the planet. He left many of his ideas and inventions behind, for the world to carry forward. </div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}