import React, { useEffect }  from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto2 from '../../img/headerphoto2.jpg'
import rothamstedannualreport from '../../img/rothamstedannualreport.png'
import rothamstedlab from '../../img/rothamstedlab.png'
import './Rotamsted.css';

export default function Rothamsted() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/soil-science-sanitation");
    }
    const onClickBack = (event) => {
        history.push("/acetone-fermentation");
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="headerimg">
                <img src={headerphoto2} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Rothamsted</div>
                <br></br>
                <div className="earlylifepara" >Subrahmanyan was selected for a Tata scholarship, to work at Rothamsted, in Nov 1923. Dr.R.V.Noris was appointed as Professor of Biochemistry vacated by Prof. G. J. Fowler in June 1924 and it has been mentioned in the annual report for that year that work on the actinomyces of soil was discontinued as V.Subramanian (Jr) was on his way to London. (Please note the official spelling was still Subramanian).</div>
                <br></br>
                <div className="earlylifepara" >His work at Rothamsted concentrated on changes that occur in waterlogged soil, a condition seen during the cultivation of rice. Waterlogging of soil resulted in  distinct increase in the free and saline ammonia content, significant though only slight diminution in the nitric nitrogen. Release of nitrogen resulted in increased soil in alkalinity. Formation of ammonia was probably due to a deaminase present in soils and this activity in soils was important in the  plant nutrition. The quantities of ammonia present in the medium increased initially, decreasing thereafter. Increase in nitrate occurs after a month of water logging and depends on proportion of Carbon and Nitrogen in soil. This work was accompanied by a paper detailing the development of an improved method for the estimation of dissolved oxygen in water. The work then turned towards biochemical changes that occur in both dry and waterlogged soil after the addition of carbohydrates. It was shown that in the presence of fermentable carbohydrates there was depletion of nitrates with out release of nitrogen, indicating assimilation into microorganism while the carbohydrates themselves were converted to lactic acid and then acetic acid and butyric acids by the consortium of bacteria. This paper was followed by one on development of methods for the determination of minute quantities of soluble carbohydrate, lactic acid, butyric and lactic acids was described. These papers, except perhaps the one on dissolved oxygen, formed part of the dissertation for which he was awarded the D.Sc. degree from the London university in 1927 and a the Research Medal from the Royal Agricultural Society of England in 1926. The papers acknowledge H.J. Page, H.G.Thornton and John Russel. The work continues to be relevant as much of fertilizer added to paddy is wasted as released ammonia. The field of soil enzymology has grown. The paper on deaminase has been quoted in Magid, H. and  Tabatabai, M. (1991). Amide nitrogen transformation in waterlogged soil. The Journal of Agricultural Science, 116(2), 281-285. Many years later a thief stole the medal and some jewels and tried to sell the medal thinking it was gold. The smith to whom it had been offered promptly called the police and the medal and Jewels were recovered.</div>
                <div className="rothamsteddiv" >
                    <div style={{ display: 'inline', marginTop: '40px' }} >
                        <img src={rothamstedannualreport} height={400} width={400} />
                        <div style={{ fontSize: '12px', textAlign: 'center' }}>Staff list taken from Rothamsted Annual report 1924-25</div>
                    </div>
                    <div className="rothamstedpic" >
                        <img src={rothamstedlab} height={400} width={400} />
                        <div style={{ fontSize: '12px', textAlign: 'center' }}>The New Rothamsted Laboratories erected 1914-16</div>
                    </div>
                    <br></br>
                </div>
                <br></br>
                <div className="earlylifepara" ><Link to="/references" style={{ textDecoration: 'none' }} ><font color="#3819e9">References</font></Link></div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}