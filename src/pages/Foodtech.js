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
                <div className="earlylife" >Soil Science</div>
                <br></br>
                <div className="earlylifepara" >Subrahmanyan was born to Vaidyanathan and Bagirathi at Sirkazhi, Thanjavur on September 16th 1902. Bagirathi fell before the horse of the collector, stating that she was poor and her son who was brilliant deserved a scholarship (probably extending from school to college) and this apparently was granted. Vaidyanathan was Revenue Inspector. </div>
                <br></br>
            </div>
        </>
    )
}