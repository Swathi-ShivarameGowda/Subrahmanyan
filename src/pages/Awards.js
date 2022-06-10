import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../img/homenew.png'
import award from '../img/award.png'

export default function Awards() {
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
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Awards</div>
                <br></br>
                <div>
                <div style={{ display: 'inline', float:'right', width:'30%', marginLeft:'20px' }} >
                            <img src={award} height={400} width={300} />
                            <div style={{fontSize:'12px'}}>Subrahmanyan receiving the Padma Shri medal from Dr.Rajendra Prasad, the then president of India</div>
                            <br></br>
                        </div>
                    <div className="earlylifepara" >Subrahmanyan received the Sen medal from the Institution of Chemists , the Rafi Ahmed Kidwai Award for work on the development of baby food and the Padma Shri in 1960. In 1961 he again received the Raffi Ahmed Kidwai prize for development of technique of wax coating of fruits and vegetables to increase their shelf life. In 1962 he received the Babcock Hart Award from the Institute of Food Technologists USA for work on the development of the Indian Multi-Purpose Food. Dr. V. Subrahmanyan was awarded the first "Friesland" Award by Cooperative Milk Products Factory On September 10, 1963, on the occasion of their 50th anniversary of the founding of their factory. He received the K.G. Naik medal for distinguished contributions to biochemistry in 1964 from the University of Baroda. In July 1986, Subrahmanyan was given an award from the National Institute of Science and Technology, Philippines. </div>
                    <br></br>
                </div>
                <div className="earlylifepara" >The Plaque reads:</div>
                <div className="earlylifepara" >“In recognition of his outstanding contribution in coconut technology while consultant to the Institute thereby opening up new and unlimited possibilities of the coconut, both as an article of trade and commerce and as a food commodity.</div>
                <div className="earlylifepara" >In appreciation of his dedication, zealousness and devotion to his work and thereby exemplifying among his colleagues the true spirit of a researcher</div>
                <div className="earlylifepara" >For his understanding and generosity which has generated cooperation among his co-workers and endeared him as well to his friends and associates: and</div>
                <div className="earlylifepara" >For his avowed primary object to ameliorate the standard of living of the common man through advancement in food technology and industry</div>
                <div className="earlylifepara" >Given on July 18 in the year of our Lord 1966 at the City of Manilla, Philippines.</div>
                <div className="earlylifepara" >CAUTO G MANUEL</div>
                <div className="earlylifepara" >Commissioner”</div>
                <br></br>
                <div className="earlylifepara" >on 28th July 1966 at Cotabato City in the Philippines he received a citation for "his unselfish and dedicated efforts in the upliftment of the welfare of the coconut farmers of Cotabato province by his research and the final farm application of the treatment of coconut kernels with chemicals to produce quality copra" from the Moru Gulf Coconut Planters Association.</div>
                <br></br>
                <div className="earlylifepara" >The Annual Report of the National Institute of Sciences of India (Indian National Science Academy) for the year 1938 mentions that Prof.M.N.Saha was president and Prof.S.S. Bhatnagar was vice president and  Prof. V.Subrahmanyan as professor of Biochemistry,  foundation fellow and council member. He also was in the chemistry committee. He was a comittee member of the INSA in 1952-1954 and 1959-1960 also.</div>
                <br></br>
                <div className="earlylifepara" >The Indian Academy of Sciences' was registered under the Society Registration Act, 1860 on 27 April 1934 at Bangalore, which was then administered with a Governing Council consisting of Sir C.V. Raman, Prof. C.R. Narayana Rao, Dr. Subba Rao and Prof.B. Venkatesachar as members and Profs. L. Rama Rao,V. Subrahmanyan and B.K. Narayana Rao as council members. The Academy was inaugurated by Sir Mirza M.Ismail, the Dewan of Mysore 31 July 1934. V. Subrahmanyan was elected Animal Science Section into this society in 1934 and was treasurer from 1934-1937.</div>
                <br></br>
                <div className="earlylifepara" >The Society of Biological Chemists (India)" was founded in 1930, with its Head Quarters at Indian Institute of Science, Bangalore. It was registered under the Societies Act in the then Princely State of Mysore and the memorandum of registration was signed by the Profs V Subramanian, V Pattawardhan and C V Natarajan, Dr. G. J. Fowler was president in 1931 and from 1946-1948. V.Subrahmanyan was president in 1950-1951</div>
                <br></br>
                <div className="earlylifepara" >The Association of Food Technologists (AFT) was founded in 1957 in the Campus of the C.F.T.R.I. It was renamed in 1968 as the Association of Food Scientists and Technologists (AFST). Dr. Subrahmanyan was president of the association from 1957 to1963..  The V.Subrahmanyan Industrial Achievement award was instituted by the Association of Food Science and Technologists India. Awardees of the The V.Subrahmanyan Industrial Achievement award include Dr.H.S.R. Deiskachar (1975), Dr. G.S. Siddapa (1977), Mr. C. P.Natarajan (1981), and M. R Chandrasehkar (2000) who were at one time associates of V.Subrahmanyan.</div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}