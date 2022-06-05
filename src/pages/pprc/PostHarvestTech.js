import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ABOUTUS from '../../img/ABOUTUS.png'
import postharvesttech from '../../img/postharvesttech.png'
import postharvesttech1 from '../../img/postharvesttech1.png'
import postharvesttech2 from '../../img/postharvesttech2.png'
import './PostHarvestTech.css';

export default function PostHarvestTech() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/awards");
    }
    const onClickBack = (event) => {
        history.push("/research-continued");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg">
                <img src={ABOUTUS} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Centre for Post-Harvest Technology of Rice based crops and Rural Development</div>
                <br></br>
                <div className="earlylifepara" >Dr. Subrahmanyan envisaged that the activities of PPRC would expand into different areas of food. What follows is a description of his ideas.</div>
                <div className="earlylifepara" >On 23/4/1977 Subrahmanyan delivered a seminar organized by the Association of Food Scientists and Technologists in collaboration with some of the Departments of state and the Food Corporation of India. He then submitted a paper on the subject of rural poverty and it’s alleviation to Dr. M.S. Swaminathan on 8/5/77. The matter of the paper was further elaborated as a proposal to convert the Paddy Processing Research Center to a Centre for Post-Harvest Technology of Rice based crops and rural development to be funded by the ICAR or the FAO.</div>
                <div className="earlylifepara" >The proposal begins with a description of the condition in Thanjavur district about 1910. “Even in the early days, several lakhs of acres of the land was mostly owned by a small section of the population. This inevitably led to the establishment of a feudal systems, with a hierarchy, which with exceptions, led to an easy life, which was not a good example to others.” There was no industry and what little rice milling and export of rice disappeared during the war years. The family size was large and education poor. This was summarized in a few tables, some of which are presented below.</div>
                <div className="earlylifepara" >Agricultural production and population in Thanjavur District in 1910 and 1977</div>
                <br></br>
                <div style={{height:'1850px'}}>
                    <img className="postharvesttech" src={postharvesttech} />
                    <img className="postharvesttech" src={postharvesttech1} />
                    <img className="postharvesttech1" src={postharvesttech2} />
                </div>
                <div className="earlylifepara" >The review mentions that “they (the farmers) live mostly on what they earn during that period (only during certain seasons) and remain largely idle during the remaining part of the year” and “heavy indebtedness has long been the tradition and continues to be so even at the present time.” And that the farmer’s practice “of trying to get something out of nothing is bringing a poor return”</div>
                <div className="earlylifepara" >Many suggestions were then made including the growing of grasses (mixed farming) as fodder for the cattle a improvement in inland fishing methods. There is discussion on consumer preferences wherein “We have plenty of people with poor purses; but there is no such thing as low income tastes. Taste is important and this must be given importance.” The production of protein concentrates that are odor free was suggested</div>
                <br></br>
                <div className="earlylifepara" >The role of medical practitioners in extension and n developmental programs was suggested Shortage of oil within the rural community was talked about. While oil and oil seeds are exported from the village to be sold elsewhere, rice bran “which has not yet found efficient use”. In Tamil Nadu for instance, the potential for producing at least half a lakh tonnes of edible rice oil was emphasized. The importance of government intervention for production of rice bran was delineated. Developments of new technology simpler in form was suggested. The recovery and use of the rice germ was discussed. Propagation of potato was suggested. Tapioca could be grown and then preserved in moist soil. “In this condition, the tuber remains viable for at least two months and is even capable of sprouting”. the tuber could also be used as animal food. Varieties of sweet potato grown in Far Eastern countries which are larger in size, have a bland taste and less fibrous may be tried in Thanjavur district. Such varieties could also be used as animal food. The need to use millets, ragi or Jowar for both human and animals was stressed. There was need to increase yield of green and black gram which are dry season crops. The possibility of using soyabean as both oil seed and cattle feed was suggested. The need to increase yield of coconuts and  prevention of water logging and pests was recommended. A technology for “the drying the coconut kernels without infection and then to extract the major part of the oil with acceptable white shreds which could used for food preparation in the same way as fresh coconut” was developed at Tiruvarur and the C.F.T.R.I. at Trivandrum . Finally work needed to be carried out on rice, pulses, coconut, palmyra, tamarind, Mago, chilli, millets, oil seeds, potato and market vegetables was suggested.</div>
                <div className="earlylifepara" >Vasan and Venakatesan (37) punctured the eye of the coconut, drained out the water and then steamed the kernel at 5-8 psi pressure for 45 minutes. The coconuts were cooled, with  water at room temperature, for 5 minutes. On breaking the coconut with a rod, the kernel came out intact as a ball. This is in contrast to the Kraft-Maffei procedure where the coconuts are heated in shell at 40 psi.</div>
                
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}