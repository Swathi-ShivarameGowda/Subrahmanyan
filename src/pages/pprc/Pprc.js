import React, {useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png'
import iiftp from '../../img/iiftp.png'
import thiyagaraja from '../../img/thiyagaraja.png'
import pprcTeam from '../../img/pprcTeam.png'
import paddyprocessing from '../../img/paddyprocessing.png'
import lastdayshouse from '../../img/lastdayshouse.png'
import newspaper from '../../img/newspaper.png'
import './Pprc.css';

export default function Pprc() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/research");
    }
    const onClickBack = (event) => {
        history.push("/philippines");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg">
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >The Establishment of PPRC</div>
                <br></br>
                <div className="earlylifepara" >On his return from the Phillipines, from 1966-1969 Subrahmanyan was Adviser, Subsidiary Foods and Nutrition, Ministry of Food and Agriculture, Community Development and Cooperation, New Delhi. He worked with Shri C. Subramaniam then, minister, Food and Agriculture (1964-66) and that of Food and Agriculture, Community Development and Cooperation (1966-69). Between 1952 and 1957 C.Subramanian was Minister Food,  Finance, Education, Information and Publicity in the ministries of both C.Ragopalachari and Mr. Kamraj in the erstwhile state of Madras. During this period the mid-day meal (developed and formulated at the C.F.T.R.I. when V.Subrahmanyan was Director) supplement to feed 1.5 million children per day was undertaken  (5). C. Subramanian was involved in the green revolution and the white revolution and there is evidence that he supported the growth of food industry in the country.</div>
                <br></br>
                <img className="paddyimg" src={iiftp}  />
                <br></br>
                <div className="earlylifepara" >In April 1963, the Ford foundation surveyed problems that existed with rice milling. Based on their recommendations, the Government of India decided to set up six modern rice mills in the cooperative sector and one in the public sector. The first mill set up was at Thiruvarur under the Thanjavur Cooperative Marketing Federation (TCMF). V. S. Thiyagaraja Mudaliar (1916-1982) was President at that time. He was a leading landlord who had shifted from paddy cultivation to sugarcane on about 5 acres of their own land. They had established a sugar factory called The Arooran Sugars. The TCMF rice mill could process 4 tons per hour and had a parboiling unit, a paddy cleaning unit, silo storage, mechanical dryers and rubber rollers for shelling.</div>
                <br></br>
                <div className="earlylifeiyer">
                <div style={{ display: 'inline', float:'left', width:'25%', marginTop:'10px', marginLeft:'10px'}} >
                            <img src={thiyagaraja} height={200} width={200} />
                            <div style={{fontSize:'12px'}}>Vadapathimangalam S. Thiygaraja Mudaliar (1916-1982)</div>
                            <br></br>
                        </div>
                    <div className="earlylifepara" >V.S. Thiygaraja Mudaliar invited Dr.Subramanyan who was both  emeritus  CSIR fellow   and  advisor at the ministry  of Food, Government of India to initiate  Research and Development at Thirvarur in 1967 at the Modern Rice Mill complex of  the  TCMF. The main objective of starting the R& D lab was the salvage of high moisture paddy especially for farmers, modernization of rice milling industry and improvement  in rice processing technology. The lab at TCMF was initially supported by the TCMF.</div>
                </div>
                <br></br><br></br>
                <div className="earlylifeiyer">
                <div style={{ display: 'inline', float:'left', width:'35%', marginTop:'10px', marginLeft:'10px'}} >
                            <img src={paddyprocessing} height={200} width={300} />
                            <div style={{fontSize:'12px'}}>Paddy Processing Research Centre, Thirvarur-1972</div>
                        </div>
                    <div className="earlylifepara" >In 1971, The Food Corporation of India stepped in with funds and deputed a deputy manager, assistant manager, assistant engineer, quality inspector and proposed an Advisory Committee for this Laboratory with Joint Secretary (Policy) of Ministry .of Agriculture Government of India   as Chairman. The Lab which hitherto had been referred to as the Research and Development Laboratory of the TCMF, was named as the Paddy Processing Research Center (PPRC) in 1972. Funding was from a consortium consisting of the Food corporation of India,   Department of Food   Government of India, National Co-operative Development Corporation (NCDC) and  Govt. of Tamil Nadu through the Tamil Nadu Civil Supply Corporation. The Food Corporation of India deputed a person to work in the PPRC , the Ministry of Food deputed an Assistant Technical Adviser, the NCDC,  a Research Associate and Tamil Nadu Government deputed  workshop engineer from the Tamil Nadu Civil Supply Corporation. Later the NCDC withdrew from this consortium. Dr. V. Subrahmanyan was the Project Head of PPRC. </div>
                </div>
                <br></br>
                <div>
                    <img className="pprcteam" style={{marginTop:'10px'}} src={pprcTeam} />
                    <div className="earlylifepara" >R. Chandrashekarn and B.S. Vasan joined the TCMF Lab was it was then called. B.S. Iengar was recruited as engineer. Yousuf was an engineer with the TCMF who worked with the Subrahmanyan group. C.V.Subramanian , C.S. Shivanna and N.S. Gangadhar where deputed from the ministry of Food. Mr. Baskar came from the NCDC. P.Pillaiyar was from the Food Corporation of India</div>
                    <div className="earlylifepara" >After his demise of Subrahmanyan on January 30th 1979, initially Dr. S.M.Ilyas , Research Engineer acted as Project Head then Mr B.S.Vasan was the Project Head in charge . The center was managed by the Tamil Nadu Civil Supplies Corporation and then from1981 by the Tamil Nadu Agricultural University.  On1.12.1984 the PPRC was registered as PPRC society under Tamil Nadu Societies registration act of 1975. The entire budget PPRC was provided by the Ministry of Food, the Food corporation of India and the Tamil Nadu Civil services corporation and later solely by Ministry of Food Processing Industries, Government of India. </div>
                    <div className="earlylifepara" >The Institute was moved to its current location at Thanjavur in 1984. The Project Head designation was changed to that of Director who heads and manages the institute along with Executive Committee members and Board of Directors. The Ministry of Food Processing Industries (MFPI) took over the funding and management of the PPRC and renamed it as the Indian Institute of Crop Processing Technology in 2008. The Directors who managed the PPRC and the  IICPT are Dr.V.Subramanian from  Tamil Nadu Agriculture University, Dr. A. Dahshinamoorthy from ICAR, Dr. A Alagusundaram from TNAU, Dr K.Singaravadivel, from PPRC and presently,  Dr. Anandharamakrishnan from CFTRI.</div>
                </div>
                <br></br>
                <div className="earlylifepara" >Dr.S.V. Pingle who once had been at the C.F.T.R.I. when Dr.V. Subrhmanyan was its Director had become Director (Quality Control)  at the Food Corporation of India. He was definitely  instrumental in helping in the formation of the paddy processing research center at the time when FCI rpovded manpower and partial funding. Dr.P.Krishna  Kymal was Executive Director, Food and Nutrition Board, Min of Agriculture Government of India , New Delhi  from  1965. B.S. Raghavan and T.U. Vijayasekharan who were at times, Secretary to the Ministry of Food and Agriculture, Government of India where very much involved in the council and activities of the PPRC.  Dr.H.S.R. Desikachar of the C.F.T.R.I., Mysore  was for years on the executive committee of the PPRC and would visit the laboratory monthly to discuss research. It would appear that Dr.M.S.Swaminathan and Subrahmanyan where in correspondence when the former  was Director General of the ICAR. </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >The Last days of Subrahmanyan</div>
                <br></br>
                <div className="earlylifeiyer">
                <div style={{ display: 'inline', float:'left', width:'30%', marginRight:'30px',marginTop:'10px', marginLeft:'10px'}} >
                            <img src={lastdayshouse} height={250} width={300} />
                            <div style={{fontSize:'12px'}}>New Building at the same location of the guest house where Subrahmanyan stayed till his demise</div>
                            <br></br>
                        </div>
                    <div className="earlylifepara" >Dr.Subrahmanyan used to live in the travelers, bungalow at Thrivarur and in the evening complained of pain.</div>
                    <div className="earlylifepara" >He was shifted to the hospital at Tanjavur. . It was a full moon light and he wondered even in his pain as to why moon light could not be used as a source of power. He was operated at the hospital because his intestines had become twisted. Dr. Ramanathan was his surgeon during an operation for the similar ailment, a year previously. Dr.L.Sivaram was the surgeon at the Thanjvur Government hospital. He passed away on the t morning of 30-1-79.</div>
                </div>
                <br></br>
                <div>
                    <img style={{width:"300px", height:"250px", float:"left", marginRight:"30px", marginTop:'10px'}} src={newspaper} />
                    <div className="earlylifepara" >Thanks are due to many who worked with Dr.V.Subrahmanyan and provided various inputs  : Dr.Singaravadivel (for reprints, photographs and editing) , Dr.Pillaiyar, Mr. B.S. Vasan (who provided the photograph of Thygaraja Mudaliar, the guest house where Subrahmnayn once stayed  and a recount of Subrahmanyan’s last days) and  Dr. Ananthakrishnan, Director IIFPT, Thanjavur.</div>
                    <br></br>
                </div>
                <br></br><br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}