import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../img/homenew.png'

export default function Contact() {

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
                <div className="earlylife" >CONTACT</div>
                <br></br>
                <div className="earlylifepara" >subraroc@gmail.com</div>
                <br></br>
                <div className="backbutton" ><Button size="small" style={{color:'white'}} onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}