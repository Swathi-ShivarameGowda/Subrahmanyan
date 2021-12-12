import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import aryanschoolcertificate from '../img/aryanschoolcertificate.jpg'
import graduationfromcollege from '../img/graduationfromcollege.jpg'
import highschoolcertificate from '../img/highschoolcertificate.jpg'
import subrahmanyansaraswati from '../img/subrahmanyansaraswati.jpg'
import staffatstjosephscollege from '../img/staffatstjosephscollege.jpg'
import stjoseph from '../img/stjoseph.jpg'
import EARLYLIFE from '../img/EARLYLIFE.png'
import './Earlylife.css';

export default function Earlylife() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="headerimg">
                <img src={EARLYLIFE} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                    <br></br>
                <div className="earlylife" >Early Life</div>
                    <br></br>
                <div className="earlylifepara" >Subrahmanyan was born to Vaidyanathan and Bagirathi at Sirkazhi, Thanjavur on September 16th 1902. Bagirathi fell before the horse of the collector, stating that she was poor and her son who was brilliant deserved a scholarship (probably extending from school to college) and this apparently was granted. Vaidyanathan was Revenue Inspector. </div>
                    <br></br>

                <div className="earlylife" style={{fontSize: "22px"}} >Education</div>
                    <br></br>
                <div style={{ display: 'inline' }} >
                    <div>
                        <img style={{float:'right', marginLeft:'15px'}} src={aryanschoolcertificate} height={200} width={200} />
                        <div className="earlylifepara">Subrahmanyan studied at Aryan Secondary School in Trichy and then did his Intermediate and B.A in Chemistry from St. Joseph's College. He passed B.A with distinction securing highest marks in Chemistry for the Madras Presidency in 1922. The head of the department of Chemistry at St.Joseph's College was Father Hazz, S.J. <font style={{fontStyle:'italic'}}>In Picture: Aryan School Certificate</font></div>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="earlylifediv" >
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={highschoolcertificate} height={200} width={300} />
                            <div className="earlylifedesc" >High School Certificate</div>
                            <br></br>
                        </div>
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={stjoseph} height={200} width={300} />
                            <div className="earlylifedesc" >St.Joseph's College</div>
                            <br></br>
                        </div>
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={staffatstjosephscollege} height={200} width={300} />
                            <div style={{ fontSize: '12px' }}>St.Jospeh's College (1920~), Ramamswamy Iyer(third from Left), Fr.Hazz. Image Courtesy: Raji Heyrovska</div>
                            <br></br>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px'}} >
                        <img style={{ float: 'right', marginLeft: '20px', marginTop: '30px' }} src={graduationfromcollege} height={200} width={200} />
                        <div className="earlylifepara">P.Ramaswamy Iyer, a member of the department of Chemistry, St. Josephs College, Trichy, had spent some time (12.5.1919 to 20.6.1919) in the Department of General Chemistry, Indian Institute of Science working with Prof. Sudburough who was head of the department at that time. Mr P. Ramaswamy Iyer then became faulty at the Organic Chemistry department, Indian Institute of Science. K.V.Sundaram also from the Chemistry Department, St.Joseph's College visited  in the  Department of Applied Chemistry  (Changed to Department of Biochemistry) on 3.5.1920. It is very likely that P.Ramaswamy iyer should have guided Subrahmanyan towards IISc. <font style={{fontStyle:'italic'}} >In picture: St.Joseph's Graduate</font></div>
                        
                    </div>
                </div>
                <br></br>
                <br></br>
            
                <div className="earlylife" style={{ fontSize: "22px" }} >Family</div>
                <br></br>
                <br></br>
                <div>
                    <img style={{float:'left', marginRight:'15px'}} src={subrahmanyansaraswati} height={370} width={250} />
                    <div className="earlylifepara" style={{whiteSpace: 'pre-line' }} >Subrahmanayan was married to Saraswathi in 1922. She was very young about eleven then. She used to talk about her father, who was Sub Collector at Bapatla, (She could speak Telugu all her life) who asked her whether she would marry a dark man? Her reply was "as her father was dark so could her husband be". Seshadri Iyer, who became an ICS officer , later, was also a suitor. {"\n"} They had seven children. Ramarathnam 1928 (deceased early ), Leela (1930), Sulochana (1932), Sundaram (1934), Santhanam (1936), Saroja (1941), Ventakesh (1946). Leela, Sulochana and Saroja were named by their car driver, Sheik Mohammed after popular actresses of the time. Sundaram was named after the bridge at Rameshwaram.</div>
                </div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}