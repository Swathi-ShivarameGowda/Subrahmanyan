import React, {useEffect} from 'react';
import { useHistory} from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../../img/homenew.png';

export default function TapiocaMacaroni() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/mysore-flour");
    }
    const onClickBack = (event) => {
        history.push("/sago");
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="headerimg">
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Tapioca Macaroni</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}