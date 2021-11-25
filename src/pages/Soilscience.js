import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto3 from '../img/headerphoto3.jpg'
import davidezragreen from '../img/davidezragreen.jpg'

export default function Soilscience() {

    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg">
                <img src={headerphoto3} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                    <br></br>
                <div className="earlylife" >Soil Science</div>
                    <br></br>
                <div className="earlylifepara" >Subrahmanyan started his career in the department of biochemistry at IISC and developed an interest in soil science. He secured a scholarship from J.N. Tata Endowment for higher studies in Great Britain. He then started his work in Agricultural Research station at Rothamsted, England on problem related to water-logged soils and nutrition of the rice plant. The study earned him the D.Sc. degree from University of London in 1927. </div>
                <br></br>
                <div className="earlylife" >His love for soil science</div>
                <br></br>
                <div className="earlylifepara" >Soil science was his first love in the early researches in the Department of Biochemistry at the IISc. Beginning with a small nucleus of research associates he soon built up a prominent school of research in soil science. The influence of manurial and cultural conditions as also of trace nutrients on soil structure, plant growth and crop yields provided the themes. Another important line of investigation related to the chemurgic treatment of sanitary wastes from towns. An aerobic process (known as the Activated Sludge Process) for the conversion of sewage into an inoffensive and innocuous effluent on the one hand and on the other a sludge of organic nutrients which could serve as manure for various types of crops. In more recent times the utilization of sewage for algal culture for food protein production has received considerable attention. An anaerobic process for fermentation of vegetable garbage and night-soil in deep pits for producing useful compost was also developed. It was suitable for adoption in villages as well as in towns and cities and found nationwide application. </div>
                <br></br>
                <div className="earlylifepara" >After his return form UK, he joined IISC as assistant professor. After two years he became the first Indian Head of Bio chemistry lab department and served for 19 years. Later he flew back to England to work on an Enzymatic Process for the removal of tissue adherents to the skeleton of rats. </div>
                <br></br>
                <div className="earlylife" >Again in England</div>
                <br></br>
                <div>
                    <img style={{float:'left', marginRight:'15px'}} src={davidezragreen} height={200} width={150} />
                    <div className="earlylifepara" style={{marginTop: '10px' }} >Subrahmanyan worked at the Rowlett Institute in Aberdeen, Scotland with Dr. Godden, on an enzymatic process (trypsin or papain) for the removal of tissue adherents to the bony skeleton of rats. At Oxford, he worked on the diffusion of chloride and glucose into frog muscle, noting that diffusion of chlorides into muscle was continuous over a much longer period than that of glucose whose level saturated earlier. <font style={{fontStyle:'italic'}}>In Picture: David E. Green</font></div>
                </div>
                <div className="earlylifepara" >At Cambridge, he worked with Dr. D.E. Green and enzymes of the glycolytic pathway with purification and characterization of an aldolase from muscle (which they called Zymohexase) which was involved in the breakdown of fructose bi phosphate. They used acetaldehyde to take the breakdown products of fructose 1,6 phosphate to completion. The presence of an isomerase, another enzyme that could interfere, was eliminated by using Iodine and then measuring the alkalilabile phosphorus (it was always half the level, as expected). </div>
                <div className="earlylifepara" >It would appear from the acknowledgements that Dr. Godden and Miss Simson from the Rowlett Institute were involved in this part of the work. Dr. Godden and V. Subrahmanyan have a paper on skeletal cleaning using enzymes. The ratio of triose phosphate to hexose phosphate produced with muscle extracts and with the purified enzyme to distinguish between aldolase and aldose isomerase where different indicating that the two enzymes where different from each other. An enzyme that broke down pyruvic acid to release carbon dioxide was isolated as a magnesium thiamine pyrophosphate (A Vitamin). This enzyme (Pyruvate decarboxylase) is important during the aerobic fermentation of yeast where the enzyme provides for production of alcohol or energy.</div>
                <div className="earlylifepara" > It may be surmised that this work began Subrahmanyan's later entry into nutrition as two of the enzymes that he studied where those that had vitamins as cofactors, A review written by D.E. Green (1941) deals with the relation between enzymes and prosthetic groups.</div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}