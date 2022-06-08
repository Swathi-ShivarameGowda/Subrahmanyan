import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png'

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
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Acetone Fermentation</div>
                <br></br>
                <div className="earlylifepara" >After his graduation, he then joined the Department of Biochemistry at the Indian Institute of Science, (IISc), Bangalore. There were two V.Subramanians at that time at the Institute of science. One was an Institute scholar (V.Subramanian Jr) and the other a Madras government scholar (V.Subramanian Sr.). V.Subramanian Jr (Subrahmanyan) worked as Institute scholar from 28.07.1922 to 01.09.1924, during which period he worked with Prof. Gilbert Fowler. </div>
                <div className="earlylifepara" ><Link to="/gjfowler" style={{ textDecoration: 'none' }} ><font color="#3819e9">More about Dr. G.J.Fowler</font></Link></div>
                <br></br>
                <div className="earlylifepara" ><Link to="/gjfowler" style={{ textDecoration: 'none' }} ><font color="#3819e9">Gilbert Fowler</font></Link>, the then professor of Biochemistry at the Tata Institute of science had initiated work on the Industrial production of acetone through a fermentation process. Acetone was a key ingredient of cordite, an explosive. An acetone factory was set up, first at the institute and then at Nashik, during the first world war and large quantities of acetone was manufactured in India and elsewhere by fermenting cereals with a bacterium which had been isolated by <a href="https://en.wikipedia.org/wiki/Chaim_Weizmann" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Dr.Weizmann</a> (with whom Dr.Fowler was associated when both were  at Manchester and who, later, became the first president of Israel) in England. Subrahmanyan was probably not involved in this work initially but in the later stages after end of the war.  Gilbert Fowler and Subrahmanyan Jr. characterized a bacterium which was seen as short thin mobile rods and which could grow on cereal mash. A paper in the Journal of the Indian Institute of Science reports studies with isolation of other organisms particularly from soil where paddy has been cultivated and from potatoes (1,2). The next paper in the journal is by A. G. Gokhale (who appears to have been much involved in development of the process) wherein fresh mahua with addition of sorghum (Jowari) mash, was best for reduction of fermentation time and yield of acetone (3,4,5).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >References</div>
                <br></br>
                <div className="referencepara" >(1) Subramanyam.V. (1924), Studies in the physiology of the Acetone organism in Some Studies in Biochemistry by Some Students of  Gilbert Fowler. The Phoenix Printing House, Bangalore. (2) Fowler and Subramanyan, V. (1925), Studies relating to Acetone producing organisms. Journal of the Indian of Institute of Science, 8A, 71-83. (3) Gokhale,A.G.(1925), Mahua Flowers as Raw material for the acetone-fermentation process. Journal of the Indian of Institute of Science, 8A, 84-87. (4) Gokhale,A.G. (1924), The manufacture of acetone in India by fermentation process in Some Studies in Biochemistry by Some Students of Gilbert Fowler. The Phoenix Printing House, Bangalore. (5) Fowler, G.F.,Wad,Y.D.Gokhale, A.G.(1921) Research Notes on the Acetone process in India Journal of the Indian of Institute of Science (1921).4A:1-15.</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}