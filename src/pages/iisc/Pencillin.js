import React, {useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ABOUTUS from '../../img/ABOUTUS.png'
import pencillin from '../../img/pencillin.jpg'

export default function Pencillin() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/cvraman-subrahmanyan");
    }
    const onClickBack = (event) => {
        history.push("/soyabean-milk");
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="headerimg">
                <img src={ABOUTUS} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Pencillin, Glucanate and Soluble Casein</div>
                <br></br>
                <div className="earlylifepara" >This is a short account of three processes developed under the guidance of V.Subrahmanyan. It is not clear whether the work on penicillin and hormones were used commercially. It would appear that there was some use in the medical institutions of Madras (Chennai). Again whether the gluconate protein and the soluble casein product was commercialized is not clear. However Calcium casienate is still in vogue. It is not clear how it is made . The drugs and pharmaceutical comitte  constituted by the C.S.I.R. in 1940 with Dr.Jivray N.Mehta as chairman reviewed a project funded by the C.S.I.R. to Prof.V.Subrahmanyan (initiated 1944) on making pencillin more efficient and on the chemistry of pencillin. The project also involved production of extracts hormones from adrenals, pituatry and islets of Langerhans. A sum of Rs.55,831 had been  sanctioned for the purpose1.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Calcium Gluconate</div>
                <br></br>
                <div className="earlylifepara" >Balasundaram et al (19502,19513) developed an electrolytic method for preparation of calcium gluconate from glucose and from invert sugar produced by acid hydrolysis . using sodium bromide, sodium chloride  and calcium carbonate. Graphite electrodes were used</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Soluble Calcium Caseinate</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', marginRight: '20px'}} src={pencillin} height={200} width={200} />
                    <div className="earlylifepara">One part of casein by weight was added to 3 parts volume of water (70oC) in a stainless-steel and washed repeadetly.  A Waring blender was used to blend the casein now suspended in 6N ammonia (80ml per 500g of  casein. A thick solution of  pH 10 was obtained . Calcium hydroxide solution equivalent to 1% of casein was added and  kept aside for 2hr at roon temperature prior to being rum dried at 50lb steam pressure. The flaky matrial ( 87 percent protein and about 6% sucrose)  was powdered by passing through a 30 mesh sieve and  was comparable with pharmaceutical calcium caseinate. It was highly acceptable organleptically with  good water dispersability and attained pH of 5.8 when in water solution.  Addition of sucrose to calcium hydroxide increased the amount of calcium that could be incorporated. It was noted that the addition of calcium to fish protein extracts helped eliminate odour. In this product (drum- dried preparation of calcium caseinate)  the calcium protein bond, could withstand drun drying at 50lb/in2 while preserving  easy water dispersiblity and lack of odour (Srinivasan et al 19624; Srinivasan et al 19635). This process was the subject of an Indian patent5. <font style={{ fontStyle: 'italic' }} >In picture: Soluble Casein marketed in India by Glaxo</font></div>
                </div>
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