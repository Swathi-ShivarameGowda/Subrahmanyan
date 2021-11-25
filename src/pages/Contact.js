import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto1 from '../img/headerphoto1.jpg'

export default function Contact() {

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
                <div className="earlylife" >CONTACT</div>
                <br></br>
                <div className="earlylifepara" >subraroc@gmail.com</div>
                <br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}