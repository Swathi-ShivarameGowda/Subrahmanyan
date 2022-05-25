import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto2 from '../../img/headerphoto2.jpg';
import SCPillai from '../../img/SCPillai.png';
import epistylis from '../../img/epistylis.png';
import Carchesium from '../../img/Carchesium.png';

export default function SoilScienceAndSanitation() {
    const history = useHistory();
    const onClickBack = (event) => {
        history.push("/rothamsted");
    }
    const onClickNext = (event) => {
        history.push("/vitamins-enzymes");
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
                <div className="earlylife" >Soil Science and Sanitation</div>
                <br></br>
                <div className="earlylifepara" >In 1929 when he was 27 years old, he was appointed Professor and head of department on the retirement of Norris (1924-29). Subrahmanyan continued work work initiated by Dr. Fowler on sanitation and on soil Actinomycetes (These are small organisms allied to Bacteria and are present in soil), developing media for their cultivation from soil; work which had been initiated before he had departed for Rothamsted. (1,2,3). He was also an author of a paper with Norris, on the proteins of the pigeon pea (4). Dr. Norris has had a paper with another author on the proteins of Eleusine coracana (5). </div>
                <br></br>
                <div className="earlylifepara" >The influence of manurial and cultural conditions as also of trace nutrients on soil structure, plant growth and crop yields provided the themes (6,8) An interesting series of papers published at that time relates to the uptake of silicon by the rice plant. A suggestion was then made that the need for silicon is what drives the large water requirements of the plant and that the use of soluble silicates could help in reducing the need for water. (8,11) </div>
                <br></br>
                <div className="earlylifepara" >Another important line of investigation related to treatment of sanitary wastes from towns (9,12) </div>
                <br></br>
                <div className="earlylifepara" >An aerobic process (known as the Activated Sludge Process and which was developed by Prof. Fowler) for the conversion of sewage into an inoffensive and innocuous effluent was further developed.  “The sewage farm, attached to the Indian Institute of Science, Bangalore, was started by Prof. G.J. Fowler in 1922 and has since been in continuous service. The researches conducted threat relate to : (a) the effect of continuous  sewage treatment on soil conditions, (b) response of different market gardens, fruit, grain and fodder crops to sewage irrigation, (c) relative fertilizing values of different types of sewage sludges, raw sewage, effluents from activated sludge and septic tanks and dilutions therof, (d) physiological response of crops raised on sewage, (e) study of plant diseases associated with sewage farming, and (f) the nature of the morphological and physiological transformations that attend the pathogenic and putrefactive organisms normally present in sewage under conditions relating to sewage farming.” (10).</div>
                <br></br>
                <div className="earlylifepara" >“At the suggestion of Dr.Gilber J. Fowler, a systematic investigation into the possibilities of various food and flower plants in the activated sludge plant at the Indian Institute of Science was undertaken. The growth of rice, ragi, tomatoes, chillies, roses, tuberoses and marigold by the system of “Hanging Gardens” has been studied and in certain cases, highly promising results have been obtained.” (16)</div>
                <br></br>
                <div className="earlylifepara" >Sewage contains nitrogen but its direct application to soil can induce Soil sickness wherein the oxidative formation of nitrate is hindered and the soil is unable to support plant growth. However, dilution of sewage, external aeration and development of “sludge” which can be recovered by a simple filtration device were treatments meted before they could be used to grow plants. Elephant grass, Lucerne, Barley, and Cabbage, Cauliflower, tomato, lettuce, Amaranthus, sorghum, plantain, papaya and coconut grew well. But due to the presence of pathogenic microorganism in the sewage it was recommended that food for animal be grown on the diluted sewage (10). During the last few years of his stay at the Indian Institute he had a project from the Indian Council of Agricultural Research (also the C.S.I.R.)   to treat and use effluents from cities and from particularly the textile industries of Ahmedabad, particularly as manure for various types of crops. (21).</div>
                <br></br>
                <div className="earlylifepara" >Sundaram and Subrahmanyan in 1950 (22) write that they had completed a four-year project funded by the Council of Scientific and Industrial Research. They state that there was very little treatment of Industrial wastes those days, particularly of those from textile industries. These industries produced one million gallons of waste every day. Sodium bicarbonate, Caustic Alkali and cotton and its degraded products partly in solution and partly is suspension were the major ingredients. The pH of the effluent was between 8-11. Since the amount of organic matter was high the ability to take up oxygen was high (high BOD). The authors developed a process for treating this effluent, firstly by adding gypsum, then by sand filtration of the neutralized supernatant, dilution of the treated effluent with sewage water. This was then used, during the last three years prior to their report, for cultivation of sugar cane in and around Ahmedabad.  Ten and out of seventy mills had adopted the above process (22).</div>
                <br></br>
                <div className="earlylifepara" >A paper by Pillai (7) implicated a Pseudomonas bacterium in the rusting of iron water pipes (7). An interesting discovery was the role of protozoa and bacteria that are associated with them in this process and in natural purification of sewage.(15,17,18,19,20). It was shown that it was the protozoan, which concentrated nitrogen in sewage water in the sludge. The action of bacteria was however to reduce the amount of nitrogen in sludge even in the activated sludge process where aeration is only for a few hours and where new sewage is brought in while an effluent is taken out (14)</div>
                <br></br>
                <div className="earlylifepara" >This work was extended by S.C. Pillai at the I.I.Sc. after V. Subrahmanyan left for Mysore.</div>
                <br></br>
                <div className="earlylifediv" >
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={SCPillai} height={200} width={300} />
                            <div className="earlylifedesc" >S.C. Pillai (20-01-1914-10-06-1984)</div>
                            <br></br>
                        </div>
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={epistylis} height={200} width={300} />
                            <div className="earlylifedesc" >Epistylis</div>
                            <br></br>
                        </div>
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={Carchesium} height={200} width={300} />
                            <div style={{ fontSize: '12px' }}>Carchesium</div>
                            <br></br>
                        </div>
                </div>
                <br></br>
                <div className="earlylifepara" >Protozoa occurring abundantly at the points of purification of flowing sewage at Bangalore    (taken from Pillai et al 1953; 23)</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}