import React from 'react';
import stjoseph from '../img/stjoseph.jpg'

export default function Contact() {
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
                <div className="earlylife" >CONTACT</div>
                <br></br>
                <div className="earlylifepara" >subraroc@gmail.com</div>
                <br></br>
            </div>
        </>
    )
}