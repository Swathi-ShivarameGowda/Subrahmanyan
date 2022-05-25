import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto2 from '../../img/headerphoto2.jpg'

export default function AcetoneFermentation() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/rothamsted");
    }
    const onClickBack = (event) => {
        history.push("/early-life");
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
                <div className="earlylife" >Acetone Fermentation</div>
                <br></br>
                <div className="earlylifepara" >After his graduation, he then joined the Department of Biochemistry at the Indian Institute of Science, (IISc), Bangalore. There were two V.Subramanians at that time at the Institute of science. One was an Institute scholar (V.Subramanian Jr) and the other a Madras government scholar (V.Subramanian Sr.). V.Subramanian Jr (Subrahmanyan) worked as Institute scholar from 28.07.1922 to 01.09.1924, during which period he worked with Prof. Gilbert Fowler. </div>
                <div className="earlylifepara" ><Link to="/gjfowler" style={{ textDecoration: 'none' }} ><font color="#3819e9">More about Dr. G.J.Fowler</font></Link></div>
                <br></br>
                <div className="earlylifepara" >In 1925 he secured a scholarship from the J.N.Tata Endowment for higher studies. It was not easy back then for an Indian to go to Great Britain and in addition to that, since all his siblings had died due to health issues and he also had some health issues, the British people did not consider him healthy enough to send him away for a long distance journey in a Ship and his case was rejected. His mother pleaded to the senior officers again and told them, <font style={{fontStyle:'italic'}} >"Can't my son become like any of you"</font>. This again moved them and made them reconsider the decision and gave him permission to study abroad.</div>
                <br></br>
                <div className="earlylifepara" >He proceeded to work at the Agricultural Research Station in Rothamsted, England on problems related to water-logged soils and nutrition of the rice plant under the inspiring guidance of Sir John Russel. These studies earned him the D.Sc. degree of the University of London in 1927.</div>
                <br></br>
                <div className="earlylifepara" >After his return from UK, he joined IISC as Assistant Professor and after two years, he became the first Indian Head of Department in Bio Chemistry Lab, where he served for 19 years. CV Raman was the Director of IISC, while he was there.</div>
                <br></br>
                <div className="earlylifepara" ><Link to="/gjfowler" style={{ textDecoration: 'none' }} ><font color="#3819e9">Gilbert Fowler</font></Link>, the then professor of Biochemistry at the Tata Institute of science had initiated work on the Industrial production of acetone through a fermentation process. Acetone was a key ingredient of cordite, an explosive. An acetone factory was set up, first at the institute and then at Nashik, during the first world war and large quantities of acetone was manufactured in India and elsewhere by fermenting cereals with a bacterium which had been isolated by Dr.Weizmann  (with whom Dr.Fowler was associated when both were  at Manchester and who, later, became the first president of Israel) in England. Subrahmanyan was probably not involved in this work initially but in the later stages after end of the war.  Gilbert Fowler and Subrahmanyan Jr. characterized a bacterium which was seen as short thin mobile rods and which could grow on cereal mash. A paper in the Journal of the Indian Institute of Science reports studies with isolation of other organisms particularly from soil where paddy has been cultivated and from potatoes (1,2). The next paper in the journal is by A. G. Gokhale (who appears to have been much involved in development of the process) wherein fresh mahua with addition of sorghum (Jowari) mash, was best for reduction of fermentation time and yield of acetone (3,4,5). 1. Subramanyam.V. (1924), Studies in the physiology of the Acetone organism in Some Studies in Biochemistry by Some Students of  Gilbert Fowler. The Phoenix Printing House,  Bangalore. 2. Fowler and Subramanyan, V. (1925), Studies relating to Acetone producing organisms. Journal of the Indian of Institute of Science,  8A, 71-83. 3.Gokhale,A.G.(1925), Mahua Flowers as Raw material for the acetone-fermentation process.  Journal of the Indian of Institute of Science,  8A, 84-87. 4. Gokhale,A.G. (1924), The manufacture of acetone in India by fermentation process in Some Studies in Biochemistry by Some Students of Gilbert Fowler. The Phoenix Printing House, Bangalore. 5. Fowler, G.F.,Wad,Y.D.  Gokhale, A.G.(1921)  Research Notes on the Acetone process in India Journal of the Indian of Institute of Science (1921).4A:1-15.</div>
                <br></br>
                <div className="earlylifepara" >There were two V.Subramanian at that time at the institute of science. One was an Institute scholar (V.Subramanian Jr) and the other a Madras government scholar (V.Subramanian Sr.).  V.Subramanainan Jr worked as Institute scholar from 28.07.1922 to 01.09.1924. He was selected for a Tata scholarship to work at Rothamsted in Nov 1923. Dr.R.V.Noris was appointed as Professor of Biochemistry vacated by G J Fowler in June 1924 and it has been mentioned in the annual report for that year that work on the actinomyces of soil was discontinued as V.Subramanian (Jr) was on his way to London.</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}