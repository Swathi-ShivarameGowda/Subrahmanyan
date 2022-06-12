import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import aryanschoolcertificate from '../img/aryanschoolcertificate.jpg'
import graduationfromcollege from '../img/graduationfromcollege.jpg'
import highschoolcertificate from '../img/highschoolcertificate.jpg'
import subrahmanyansaraswati from '../img/subrahmanyansaraswati.jpg'
import staffatstjosephscollege from '../img/staffatstjosephscollege.jpg'
import homenew from '../img/homenew.png';
import './Earlylife.css';

export default function Earlylife() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/acetone-fermentation");
    }
    const onClickBack = (event) => {
        history.push("/");
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
                <div className="earlylife" >Early Life</div>
                    <br></br>
                <div className="earlylifepara" >Subrahmanyan was born to Vaidyanathan and Bagirathi at Sirkazhi, Thanjavur on September 16th 1902. . Vaidyanathan had three brothers and one sister and Bagirathi had two sisters. Bagirathi fell before the horse of the collector, stating that she was poor and her son who was brilliant deserved a scholarship and this apparently was granted. Vaidyanathan was Revenue Inspector. </div>
                    <br></br>

                <div className="earlylife" style={{fontSize: "22px"}} >Education</div>
                    <br></br>
                <div style={{ display: 'inline' }} >
                    
                    <div className="earlylifepara">He studied at Aryan Secondary School, Trichy and then did his Intermediate and B.A Chemistry from St. Joseph's College. He passed B.A with distinction securing highest marks in Chemistry for the Madras Presidency in 1922. The head of department of Chemistry at St.Joseph.'s College was Father Hazz, S.J.</div>
                    
                    <br></br>
                    <div className="earlylifediv" >
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={highschoolcertificate} height={200} width={300} />
                            <div className="earlylifedesc" >Matriculation Certificate</div>
                            <br></br>
                        </div>
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={graduationfromcollege} height={200} width={300} />
                            <div className="earlylifedesc" >Graduation from St.Joseph’s. Subrahmanyan, encircled figure</div>
                            <br></br>
                        </div>
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={aryanschoolcertificate} height={200} width={300} />
                            <div className="earlylifedesc" >Certificate from School</div>
                            <br></br>
                        </div>
                    </div>
                    <div className="earlylifeiyer" style={{ marginTop: '30px'}} >
                    <div style={{ display: 'inline', float:'right', width:'30%', marginLeft:'30px', marginTop:'10px' }} >
                            <img src={staffatstjosephscollege} height={200} width={300} />
                            <div style={{fontSize:'12px'}}>St. Jospeh's College (1920~), Ramamswamy Iyer (third from Left), Fr.Hazz. Thanks to Raji Heyrovska</div>
                        </div>
                        <div className="earlylifepara">P.Ramaswamy Iyer, a member of the department of Chemistry, St. Josephs College, Trichy, had spent some time (12.5.1919 to 20.6.1919) in the Department of General Chemistry, Indian Institute of Science working with Prof. Sudburough who was head of the department at that time. Mr P. Ramaswamy Iyer then became faulty at the Organic Chemistry department, Indian Institute of Science. K.V.Sundaram also from the Chemistry Department, St.Joseph's College visited  in the  “Department of Applied Chemistry  (Changed to Department of Biochemistry) on 3.5.1920. It is probable that Mr. P. Ramaswamy Iyer influenced Subrahmanyan to apply for a fellowship at IISC.</div>
                    </div>
                </div>
                <br></br>
                <br></br>
            
                <div className="earlylife" style={{ fontSize: "22px" }} >Family</div>
                <br></br>
                
                <div className="earlylifeiyer" >
                <div style={{ display: 'inline', float:'left', width:'30%', marginTop:'10px', marginLeft:'10px'}} >
                            <img src={subrahmanyansaraswati} height={370} width={250} />
                            <div style={{fontSize:'12px'}}>Saraswathi and Subrahmanyan</div>
                            <br></br>
                        </div>
                    <div className="earlylifepara" style={{whiteSpace: 'pre-line' }} >Subrahmanyan was married to Saraswathi in 1922. She was very young about eleven then. She used to talk about her father who was “Sub Collector” at Bapatla (She could speak Telegu all her life) asked her whether she would marry a dark man. Her reply was that as her father was dark so could her husband be. Seshadri Iyer who became an ICS officer, later, was also a suitor.</div>
                    <div className="earlylifepara" style={{whiteSpace: 'pre-line' }} >They had seven children. Ramarathnam 1928 (deceased early), Leela (1930), Sulochana (1932), Sundaram (1934), Santhanam (1936), Saroja (1941), Venkatesh (1946). Leela, Sulochana and Saroja were named by their car driver, Sheik Mohammed after popular actresses of the time. Sundaram was named after the bridge at Rameshwaram.</div>
                </div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}