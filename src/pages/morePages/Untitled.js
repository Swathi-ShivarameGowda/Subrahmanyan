import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg'

export default function Untitled() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div className="headerimg" style={{backgroundImage: "url(" + stjoseph + ")"}} />
            <div className="container" >
                <br></br>
                <div className="earlylife" >Untitled</div>
                <br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}