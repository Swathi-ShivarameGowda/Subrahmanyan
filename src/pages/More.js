import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../img/stjoseph.jpg'

export default function More() {
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
                <div className="earlylife" >Soil Science</div>
                <br></br>
                <div className="earlylifepara" >Subrahmanyan was born to Vaidyanathan and Bagirathi at Sirkazhi, Thanjavur on September 16th 1902. Bagirathi fell before the horse of the collector, stating that she was poor and her son who was brilliant deserved a scholarship (probably extending from school to college) and this apparently was granted. Vaidyanathan was Revenue Inspector. </div>
                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}