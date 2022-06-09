import React, {useEffect} from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png'
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
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Pencillin, Glucanate and Soluble Casein</div>
                <br></br>
                <div className="earlylifepara" >This is a short account of three processes developed under the guidance of V.Subrahmanyan. It is not clear whether the work on penicillin and hormones were used commercially. It would appear that there was some use in the medical institutions of Madras (Chennai). Again, whether the gluconate, protein and the soluble casein product was commercialized is not clear. However, Calcium caseinate is still in vogue. It is not clear how it is made. The drugs and pharmaceutical committee constituted by the C.S.I.R. in 1940 with Dr.Jivraj N.Mehta as chairman reviewed a project funded by the C.S.I.R. to Prof.V.Subrahmanyan (initiated 1944) on making penicillin more efficient and on the chemistry of penicillin. The project also involved production of extracts hormones from adrenals, pituitary and islets of Langerhans. A sum of Rs.55,831 had been sanctioned for the purpose (1).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Calcium Gluconate</div>
                <br></br>
                <div className="earlylifepara" >Balasundaram <font style={{fontStyle:'Italic'}}>et al</font> (2,3) developed an electrolytic method for preparation of calcium gluconate from glucose and from invert sugar produced by acid hydrolysis. using sodium bromide, sodium chloride and calcium carbonate. Graphite electrodes were used.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Soluble Calcium Caseinate</div>
                <br></br>
                <div>
                <div style={{ display: 'inline', float:'left', width:'30%' }} >
                            <img src={pencillin} height={200} width={250} />
                            <div style={{fontSize:'12px'}}>Soluble Casein marketed in India by Glaxo</div>
                            <br></br>
                        </div>
                    <div className="earlylifepara">One part of casein by weight was added to 3 parts volume of water (70{'\u00b0'}C) in a stainless-steel and washed repeatedly.  A Warring blender was used to blend the casein now suspended in 6N ammonia (80ml per 500g of casein). A thick solution at pH 10 was obtained. Calcium hydroxide solution equivalent to 1% of casein was added and kept aside for 2hr at room temperature prior to being rum dried at 50lb steam pressure. The flaky material (87 percent protein and about 6% sucrose) was powdered by passing through a 30-mesh sieve and was comparable with pharmaceutical calcium caseinate. It was highly acceptable organoleptically with good water dispersibility and attained pH of 5.8 when in water solution.  Addition of sucrose to calcium hydroxide increased the amount of calcium that could be incorporated. It was noted that the addition of calcium to fish protein extracts helped eliminate odor. In this product (drum- dried preparation of calcium caseinate)  the calcium protein bond, could withstand drumdrying at 50lb/in2 while preserving  easy water dispersiblity and lack of odour (4,6). This process was the subject of an Indian patent (7).  A nutrtional study, with nine  children who appeared to have symptoms of gross malnutrition using the cacium casienate as protein source, showed marked improvement (5). </div>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >References</div>
                <br></br>
                <div className='referencepara'>1.Council of Scientific and Industrial Research : A review by Director, Scientific and Industrial Research, (1948). 2. Balasundaram ,S. R. K. Hirani , R.K. and  Subrahmanyan,V  (1950) Studies on Calcium Gluconate : Part I -Production from Dextrose Journal of Scientific & Industrial Research, 9B : 295-298. 3. Balasundaram ,S. R. K. Hirani , R.K. and  Subrahmanyan,V  1951 Studies on Calcium Gluconate : Part II - Preparation from Cane Sugar Journal of Scientific & Industrial Research ,.10B :22 -24. 4.Srinvasan,M., Achutamurthy, P. and Subrahmanyan,V. (1962) Calcium Hydroxide in Sucrose Solution as a Reagent for the Preparation of Water-dispersible Calcium Proteinates. Nature, 196:1313–1314 .https://doi.org/10.1038/1961313a0. 5. Doraiswamy,T.R., Kripanidhi, I., Kantha, J., Srinivasan,M., Swaminahtan,M., Sreenivsan,A. and Subrahmanyan,V. (1962) Use of  Calcium Caseinate in the treatment of protein malnutrition in children. Indian.J.of Pediatrics, 29:226-231. 6.Srinvasan,M., Achutamurthy, P. Sreenivasan,A. and Subrahmanyan,V (1963) Preparation of calcium caseinate with calcium hydroxide in sucrose solution. Food Technology, 17:112-113. 7. Srinivasan, M. (1961) Indian Patent Application No. 79596 of 1-12-1961.</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}