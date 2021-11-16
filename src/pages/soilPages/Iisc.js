import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg'

export default function Iisc() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div style={{
                backgroundImage: "url(" + stjoseph + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '155px'
            }} />
            <div className="container" >
                <br></br>
                <div className="earlylife" >IISC</div>
                <br></br>
                <div className="earlylifepara" >After his graduation, he then joined the Department of Biochemistry at the Indian Institute of Science, (IISc), Bangalore.  Dr. G.J Fowler, then the Professor and Head of the Department, initiated him into research with some investigations on acetone fermentation. Soon his interests extended into soil science.  </div>
                <div className="earlylifepara" ><a href="/gjfowler" style={{ textDecoration: 'none' }} ><font color="#3819e9">More about Dr. G.J.Fowler</font></a></div>
                <br></br>
                <div className="earlylifepara" >In 1925 he secured a scholarship from the J.N.Tata Endowment for higher studies. It was not easy back then for an Indian to go to Great Britain and in addition to that, since all his siblings had died due to health issues and he also had some health issues, the British people did not consider him healthy enough to send him away for a long distance journey in a Ship and his case was rejected. His mother pleaded to the senior officers again and told them, "Can't my son become like any of you". This again moved them and made them reconsider the decision and gave him permission to study abroad.</div>
                <br></br>
                <div className="earlylifepara" >He proceeded to work at the Agricultural Research Station in Rothamsted, England on problems related to water-logged soils and nutrition of the rice plant under the inspiring guidance of Sir John Russel. These studies earned him the D.Sc. degree of the University of London in 1927.</div>
                <br></br>
                <div className="earlylifepara" >After his return from UK, he joined IISC as Assistant Professor and after two years, he became the first Indian Head of Department in Bio Chemistry Lab, where he served for 19 years. CV Raman was the Director of IISC, while he was there.</div>
                <br></br>
                <div className="earlylifepara" ><a href="/gjfowler" style={{ textDecoration: 'none' }} ><font color="#3819e9">Gilbert Fowler</font></a>, the then professor of Biochemistry at the Tata Institute of science initiated a method of using a bacterial isolate from England (<a href="https://en.wikipedia.org/wiki/Clostridium_acetobutylicum" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">Clostridium acetobutylicum</font></a>, the Weizmann organism) and locally isolated and newer isolates using sorghum (jowari) base, for the production of acetone. This was a key ingredient of cordite, an explosive. An acetone factory was set up, first at the institute at <a href="https://scientificardour.wordpress.com/2016/10/05/early-translational-research-at-iisc-the-acetone-factory/" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9" >Nashik</font></a>. Gokale was very much part of the initial work. Subrahmanyan was probably not involved initially but in the later stages after end of the first world war. During the war, large quantities of acetone was manufactured in India and elsewhere by fermenting cereals with a bacterium which was isolated by Dr.Weizmann in England. The authors Gilbert Fowler and Subrahmanyan Jr characterized this bacteria as short thin rod which is mobile and which could grow on cereal mash. A paper in the Journal of the Indian Institute of science reports further studies  with isolation of other organisms particularly from soil where paddy has been cultivated and from potatoes. The next paper in the journal is by A. G. Gokhale wherein fresh mahua with addition of sorghum (Jowari) mash was best for reduction of fermentation time and yield of acetone. Many years later, interest in the organism that produces acetone and butanol is now being revived. </div>
                <br></br>
                <div className="earlylifepara" >There were two V.Subramanian at that time at the institue of science. One was an Institute scholar (V.Subramanian Jr) and the other a Madras government scholar (V.Subramanian Sr.).  V.Subramanainan Jr worked as Institute scholar from 28.07.1922 to 01.09.1924. He was selected for a Tata scholarship to work at Rothamsted in Nov 1923. Dr.R.V.Noris was appointed as Professor of Biochemistry vacated by G J Fowler in June 1924 and it has been mentioned in the annual report for that year that work on the actinomyces of soil was discontinued as V.Subramanian (Jr) was on his way to London.</div>
                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}