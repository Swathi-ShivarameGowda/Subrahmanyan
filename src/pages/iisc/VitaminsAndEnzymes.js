import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png';
import davidezragreen from '../../img/davidezragreen.jpg';

export default function VitaminsAndEnzymes() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/soyabean-milk");
    }
    const onClickBack = (event) => {
        history.push("/soil-science-sanitation");
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
                <div className="earlylife" >Vitamins and Enzymes</div>
                <br></br>
                <div className="earlylifepara" >“It has long been recognized that agricultural products can be characterized by certain properties which can be collectively described as quality. In some cases, the quality can be defined in terms of certain physical characters such as size, shape, color or behavior on milling or cooking. In others, it depends largely on properties such as taste and flavor which are rather difficult to define but are nevertheless, quite real. In recent years there has also been increasing realization of the importance of constituents such as vitamins, proteins, calcium and phosphorus which are essential to nutrition and in, consequence is of great value in assessing the quality of food” wrote Sreenivasan and Subrahmanyan in 1935(1)</div>
                <br></br>
                <div className="earlylifepara" >“The Department of Biochemistry has been under the charge of Prof. V. Subrahmanyan. He was in study leave in 1938 and Mr. Banerjee became Acting Head of Department. In 1940, the post of Professor of Biochemistry was readvertised. Prof. Subrahmanyan was reappointed and held that post until August 1948. He is now engaged in a government assignment but at his own option may take up his assignment at the Institute again.” (8). This would indicate that Subrahmanyan was in England again during the years 1938-1940.</div>
                <br></br>
                <div className="earlylifepara" >Subrahmanyan worked at the Rowlett Institute in Aberdeen, Scotland with Dr. Godden, on an enzymatic process (trypsin or papain) for the removal of tissue adherents to the bony skeleton of rats (2). At Oxford, he worked on the diffusion of chloride and glucose into frog muscle, noting that diffusion of chlorides into muscle was continuous over a much longer period than that of glucose whose level saturated earlier (3). </div>
                <br></br>
                <div style={{ marginTop: '30px'}} >
                        <img style={{ float: 'left', marginRight: '20px', marginTop: '20px' }} src={davidezragreen} height={200} width={150} />
                        <div className="earlylifepara">At Cambridge, he worked with Dr. D.E. Green and enzymes of the glycolytic pathway. He was involved in purification and characterization of an aldolase from muscle (which they called Zymohexase) which is involved in the breakdown of fructose bi phosphate. They used acetaldehyde to take the breakdown products of fructose 1,6 phosphate to completion (otherwise there is some reversibility of the reaction). The presence of an isomerase, another enzyme that could interfere with assay, was eliminated using Iodine and then the alkali labile phosphorus was measured. The ratio of triose phosphate to hexose phosphate produced by muscle extracts and with the purified enzyme to distinguish between aldolase and aldose isomerase were different indicating that the two enzymes were different from each other. (6)</div>
                        
                </div>
                <br></br>
                <div className="earlylifepara" >The enzyme that converts acetaldehyde to its corresponding acid, the Aldehyde oxidase, was shown for the first time to be an enzyme requiring a form of riboflavin (Vitamin B2) for its activity (4). The properties of this enzyme were studied in depth (5).  An enzyme that breaks down pyruvic acid to release carbon dioxide, was isolated as a magnesium thiamine pyrophosphate  (Vitamin B1) associated enzyme. This enzyme (Pyruvate decarboxylase) is important during the aerobic fermentation of yeast where the enzyme provides for production of alcohol or energy (7). </div>
                <br></br>
                <div className="earlylifepara" >A review written by Green in 1941 (7) deals with the relation between enzymes and prosthetic groups (These are groups that help in the activity of the enzymes and are often derived from vitamins). The importance of all this work on the future of Biochemistry and nutrition is described in a Memoir dedicated to D.E. Green. (9).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >References</div>
                <br></br>
                <div className='referencepara'>(1) Srinivasan, A.and Subrahmanyan, V.  (1935) Quality in Foods Current Science, 4: 378-384. (2) Subrahmanyan V, Duckworth J. and  Godden W. (1939) The quantitative separation of the skeleton of small animals. Biochem Journal,. 97:1421-1424. (3) Fisher R.B. and  Subrahmanyan V. (1939) The diffusion of chloride and glucose into frog muscle. J Physiol. 97: 233-237. (4) Subrahmanyan,V., Green,D. and Gordon, A.H.(1939) Isolation of a Catalytically Active Flavoprotein from Liver. Nature, 144:1016. (5) Gordon, A.H., Green, D.E. and  Subrahmanyan V.(1940) Liver aldehyde oxidase. Biochem J.,34: 764-774. (6) Herbert, D., Gordon,A.H. and Subrahmanyan V., Green D.E.(1940)  Zymohexase: With an Addendum by E. C. Bate-Smith. Biochem J., 34: 1108-1123. (7) Green, D. E.,  Herbert, D., Subrahmanyan, V. (1940) On the isolation and properties of carboxylase Journal of Biological Chemistry., 135:795-796.  (8) Green, D.E (1941)  Enzymes and Trace Substances Advances in enzymology Volume 1 Eds. Nord,F.F. and Werkman,C.H. Interscience Publishers, New York. 8. Egerton,A. (1948 ) Report of the Reviewing Committee of the Indian Institute of Science 1948. Government of India Press, New Delhi. (9) Beinert,H., Stumpff,P.K. and Wakil,S.L. (2004) David Erza Green  in Biographical Memoirs of the National Academies of Sciences Vol. 84. The National Academies Press, Washington,D.C.</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}