import React from 'react';
import stjoseph from '../img/stjoseph.jpg'

export default function Foodtech() {

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
                <div className="earlylife" >JOURNEY - From IISC to IIFPT</div>
                <br></br>
                <div className="earlylifepara" >To Dr Subrahmanyan work was the breath and stuff of life. He liked to end each day like Long Fellow's Village Blacksmith:</div>
                <div className="earlylifepara" style={{ fontWeight: 'bold' }} >"Something's been attempted, something's been done, And I've earned a good night's rest"</div>
                <div className="earlylifepara" >He attempted and did many things in his lifetime before he left the planet. He left many of his ideas and inventions behind, for the world to carry forward. </div>
                <br></br>
            </div>
        </>
    )
}