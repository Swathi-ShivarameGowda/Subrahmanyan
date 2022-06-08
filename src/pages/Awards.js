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
                    <img style={{ float: 'right', margin: '15px' }} src={award} height={400} width={300} />
                    <div className="earlylifepara" >Subrahmanyan received the  Sen medal from the Institution of Chemists, the Rafi Ahmed Kidwai Award for work on the development of baby food and Padma Shri from the then President of India Dr.Rajendra Prasad in the year 1960 (see picture). In 1961 he again received the Raffi Ahmed Kidwai prize  for  development of technique of wax coating of fruits and vegetables to increase their shelf life. In 1962 he received the Babcock Hart Award from the Institute of Food Technologists USA for work on the devlopment of the Indian Multi-Purpose Food. Dr. V. Subrahmanyan was awarded the first "Friesland" Award by Cooperative Milk Products Factory On September 10, 1963, on the occasion of their 50th anniversary of the  founding of their factory. He recieved the the K.G. Naik medal for distinguished contributions to biochemistry in 1964 from the University of Baroda. He received a citation and plaque from the National. </div>
                    <br></br>
                </div>
                <div className="earlylifepara" >Institute of Science and Technology, Philippines on July 18, 1966 and  on 28th July 1966 at Cotabato City in the Philippines he received a citation for "his unselfish and dedicated efforts in the upliftment of the welfare of the coconut farmers of Cotabato province by his research and the final farm application of the treatment of coconut kernels with chemicals to produce quality copra" from the Moru Gulf Coconut Planters Association.</div>
                <br></br>
                <div className="earlylifepara" >The Annual Report  of the National institute of Sciences of India (Indian National Science Academy) for the year 1938 mentions that Prof.M.N.Saha was president and Prof.S.S. Bhatnagar was vice president. Prof. V.Subrahmanyan  as professor of biochemistry and foundation fellow and council member. He also was in the chemistry committee.</div>
                <div className="earlylifepara" >The Indian Academy of Sciences' was registered under the Society Registration Act, 1860 on 27 April 1934 at Bangalore, which was then admistered with a Governing Council consisting of Sir C.V. Raman, Prof. C.R. Narayana Rao, Dr. Subba Rao and Prof.B. Venkatesachar as members and Profs. L. Rama Rao,V. Subrahmanyan and B.K. Narayana Rao as council members. The Academy was inaugurated by Sir Mirza M.Ismail, the Dewan of Mysore 31 July 1934. V. Subrahmanyan was elected Animal Science Section  into this society in 1934 and was treasurer from 1934-1937.</div>
                <br></br>
                <div className="earlylifepara" >The Society Of Biological Chemists (India)" was founded in 1930, with its Head Quarters at Indian Institute of Science, Bangalore. It was registered under the Societies Act in the then Princely State of Mysore and the memorandum of registration was signed by the Profs V Subramanian, V Pattawardhan and C V Natarajan, Dr. G. J. Fowler  was president in 1931 and from 1946-1948. V.Subrahmanyan was president  in  1950-1951</div>
                <br></br>
                <div className="earlylifepara" >The Association of Food Technologists (AFT) was founded in 1957 in the Campus of the C.F.T.R.I.  It was renamed  in 1968 as the Association of Food Scientists and Technologists (AFST). Dr. Subrahmanyan  was president of the association from 1957 to1963.. An award was The V.Subrahmanyan Industrial Achievement award was instituted by the Association of Food Science and Technologists India. Awardees of the The V.Subrahmanyan Industrial Achievement award include  Dr.H.S.R. Deiskachar, Dr. G.S.  Siddapa, Mr. C. P.Natarajan, and M. R Chandrasehkar  who were associates of V.Subrahmanyan.</div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}