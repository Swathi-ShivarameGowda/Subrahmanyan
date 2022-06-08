import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png';
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
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
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
                            <img src={SCPillai} height={200} width={200} />
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
                <div className="earlylifepara" >Protozoa occurring abundantly at the points of purification of flowing sewage at Bangalore (taken from Pillai <font style={{fontStyle:'Italic'}}>et al</font> 1953; 23)</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >References</div>
                <br></br>
                <div className="referencepara" > (1) Subrahmanyan V. and Norris.R.V. (1928) Studies on soil Actinomyces Part 1. Introduction . Journal of the Indian  Institute of Science, 12 :53-56. (2) Subrahmanyan, V. 1928) Studies on soil Actinomyces. Part II. Their mode of occurrence in the soil. Journal of the Indian Institute of Science, 12: 57-68. (3) Ganesha, R.M. and V. Subrahmanyan, V. (1928) Studies on soil Actinomyces. Part III. Standardisation of a plate method of counting soil Actinomyces. Journal of the Indian Institute of Science, 12 : 253-273. (4) Narayan,N. and Norris,R. (1928) Studies on the proteins of Indian Foodstuffs. Part1. The proteins of Ragi (Eleusine coracana). Eleusin, the alcohol soluble protein. Journal of the Indian Institute of Science, 12 :91-95.  (5) Sundaram, P. S., Norris,R.V., and V. Subrahmanyan,V. (1928) Studies in the proteins of Indian Foodstuffs..05.Part II. The Proteins of the Pigeon Pea (Cajanus Indicus). Journal of the Indian  Institute of Science, 12 :193-205. (6) Narayana Pillai,T.R. and Subrahmanyan,V. (1931) The origin nature of the peaty soils of Travancore. Journal of the Indian Institute of Science,1 4 : 99-117.  (7) Pillai, S. C. (1935)  Tuberculation of Water Pipes. Current Science,  4: 410 411.  (8) Sreenivasan, A. and  Subrahmanyan, V. (1935). Biochemistry of water-logged soils. Part IV. Carbon and nitrogen transformations.  The Journal of Agricultural Science, 25: 6-21.  (9) Rao, J.J. and Subrahmanyan,V. (1935) A Hygienic Method of Composting Refuse with Night-Soil. Ind. Medical Gazette, 50: 202-206   (10) Subrahmanyan, V. (1932) Sewage Farming in India. Current Science, 6: 157-160 . (11) Sreenivasan, A. (1936) Investigations on the role of organic matter in plant nutrition. Part XI . Effect of manuring on the Growth and Intake of Silicon by Dry and Wet Cultivated Rice. The Proceedings of the National Academy of Science India, Section B., 3:  302-309. (12) Rajagopal,S., Siirikhande, J.G. and Subrahmanyan,V. (1936) Composting of town refuse by the "Edelmist" Process. Ind Med Gaz.,  71: 30-31.  (13) Subramanyan,V. (1937) Some Aspects of the Chemistry of Swamp Soil .Current Science, 5 : 656-659 .  (14) Subrahmanyan,V. (1937) Sewage as a source of nitrogen supply to the soil. Proceedings of the Indian National Science Academy, 3:197-210.   15. Pillai, S.C. (1941) The function of protozoa in the activated sludge process. Current Science, 2:84.  16. Pillai,S.C. (1941) A new aspect of Hydroponics : “Hanging Gardens” in the activated sludge tank. Current Science, 2:85. 17. Pillai,S.C.  and Subramanyan,V (1942) Role of Protozoa in the Activated Sludge Process. Nature, 150, 525. 18.  Pillai,S.C. and Subramanyan,V (1945)  Life cycles in the transformation of organic matter in sewage, soil and other biological media.  Science and Culture, 11: 592-596.  19.Pillai, S. C., Wadhwani, T. K., Gurbaxani, M. I.; Subrahmanyan, V. (1947) Relative efficiency of bacteria and protozoa in the flocuulation and oxidation of organic matter suspended in water . Current Science, 16: 340-340. 20. Pillai, S. C., Wadhwani, T. K.; Subrahmanya, V. (1947) Respiration of Vorticella. Current Science, 16: 341-342.  21.  Pillai, S. C.,Rajagopalan, R. and  Subrahmanyan, V. (1947) Utilisation of Sewage Farms for Growing Sugarcane and Production of White Sugar. Current Science, 16:342-343.  21.  Pillai,S.C., Wadhwani,T.K., Gurbaxani,M.L., Subrahmanynan,V. (1948) Role of protozoa in the concentration of nitrogen in the sludge during aerobic purification of sewage, Current Science, 3:  93-95. 22. Balsundaram,S and Subrahmanyan,V. (1950) Industrial wasted disposal-treatment and utilisation of textile wastes. Science and Culture, 15: 277-279. 23. Pillai,S.C., Mohan Rao,G.J., PrabhakaraRao,A.V.S., Natarajan,C.V. and Madappa,L.B. (1953) Protozoal development and natural purification of flowing sewage. Indian Medical Gazette, 88: 507-508. </div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}