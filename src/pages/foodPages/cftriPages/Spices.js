import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../../img/stjoseph.jpg'

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
                <div className="earlylife" >Spices</div>
                <br></br>
                <div className="earlylifepara" >Spices India is reputed for the production of major spices like pepper, cardamom, ginger, chillies and turmeric. Other spices like clove, nutmeg, cinnamon, cassia, celery, fennel, fenugreek, coriander, cumin, and saffron, are also produced to a smaller extent. India has been traditionally exporting only spices and these were processed in the developed countries to make products like spice oils and oleoresins. No large-scale manufacture of spice oils and oleoresins were undertaken in India earlier because of lack of know-how for making products conforming to the specifications imposed by the importing countries. The CFTRI has developed the technical know-how for the manufacture of spice oils and oleoresins. The know-how has been released to those manufacturing spice extractives. Based on CFTRI know-how many industries have started production of spice oils and oleoresins and are exporting these products. </div>
                <div className="earlylifepara" >The spices red pepper (chillies), turmeric, black pepper and their respective active principles capsaicin, curcumin and piperine were investigated for their influence on growth, blood constituents, various organs and nitrogen balance in albino rats. Red pepper, black pepper and their active principles fed to rats at levels close to human intake were found to be quite safe. Turmeric and curcumin when fed to rats at levels even higher than the normal human intake did not cause any adverse effects. Preliminary investigations have indicated that both red pepper and capsaicin may influence beneficially the transport and metabolism of lipids. Ingestion of curcumin reduced the blood and liver cholesterol levels in experimental rats fed a hyptr- chlolesterolemic diet. Capsaicin fed to rats or rabbits is not excreted as such in the feces or urine. Rabbits fed capsaicin excrete more of glucuronides than sulphates as conjugates. Rats fed curcumin absorb it to the extent of 50 per cent and excrete more of sulphate than glucuronides as conjugates in the urine. </div>
                <div className="earlylifepara" >Dr.V.Subrahmanyan was a pioneer and a prophet of science. It is for the younger generation of scientists, now working in the Discipline of Microbiology at C.F.T.R.I., Mysore to further Dr Subrahmanyan's vision, by dedicated and motivated work. </div>
                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}