import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png'
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
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
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
                
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Publication from Paddy Processing Research Center, Thivarur</div>
                <br></br>
                <div className='referencepara'>(1)Trehan, K.N. and Pingle, S.V.(1946) Chemotropic response of fruit flies. Proceedings of the Indian Academy of Sciences - Section B 23, 260-265.. (2) Trehan, K. N. and  Pingle, S. V.(1948) Insect pests of stored grains in Bombay godowns Current Science .17 :128 (3) Pingale, Shriram Vishwanath  (1954) Part I  The studies on insect damage in stored staple food grains at three centers in Bombay State. Part II Biology and Morphology of Opatroides vicinus .Thesis awarded by the University of Pune. (4) Subrahmanyan, V., Deiskachar, H.S.R., and Bhatia,D.S. (1955) Commercial methods of parboiling and improvement of the quality of parboiled rice.  J. Scient. Ind. Res A14, 110-114. (5) Subrahmanyan,V. (1969) Some Application of Technology for the Betterment of Human nutrition.  Biresh Chandra Guha Memorial Lecture. (6) <a href="https://insa.nic.in/writereaddata/UpLoadedFiles/PINSA/Vol36B_1970_4_Art01.pdf" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://insa.nic.in/writereaddata/UpLoadedFiles/PINSA/Vol36B_1970_4_Art01.pdf</font></a> (7) Iengar,N.G.C.Bhasker,R., Dhramarajan (1971) Studies on sand parboiling and drying of paddy, J. Argic. Eng. VIII :51-54.. (8) Vasan,B.S., Iengar,N.G.C., Nagasubramaniam, Bhasker,R., C.S.Shivanna, Mohandoss,R., Subrahmanyan,V. (1971a) Studies on the action of cations on paddy with particular reference to the role of sodium ion and it application in the preservation, parboiling and drying of paddy.  The Research and Engineering Department, Thanjavur Co-operative Marketing Federation, Thirvarur, Tamil Nadu. (9) Vasan,B.S., Iengar,N.G.C., Subramanyan,T.V. Chandrasekharan,R., Subrahmanyan,V. (1971b)  Effect of processing on the movement of oil in the rice kernel and its relation to the oil content of paddy and the yield of oil from bran. Paper presented at the UNIDO/FAO/ECAFE Integrated seminar on the Industrial Processing of rice, held at Madras 11-16 October 1971. (10) Subrahmanyan,V. (1971) Recent advances in rice processing. Journal of Scientific and Industrial Research. 30,729-739. (11) Iengar,N.G., Bhasker,R., and Dharmarajan,P. (1971) Studies on sand parboiling and drying of paddy. Agric Eng.8: 51-54. (12) Uma Lele (1971) A case study in agricultural marketing. Occasional paper N049 Department of Agricultural Economics. Cornell University USAID Employment and Income distribution project. <a href="https://pdf.usaid.gov/pdf_docs/PNAAA482.pdf" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://pdf.usaid.gov/pdf_docs/PNAAA482.pdf</font></a>. (13) lengar, N.G.C., Bhaskar, R. and Dharmarajan, M.R. 1972. Studies on methods of parboiling - pressure parboiling. J. Argic. Eng. 9: 40-51. (14) Pingle S.V. (1972) Drying of Food Grains. J. Agric. Eng. 9 :17-20.             (14) Pillaiyar,P., Vasan,B.S., Annappan, R.S. and Surbrahmanyan,V. (1973a) Effect of chemical spray on the ears of paddy, the ripening of grain, loss of moisture from the kernel and yield of crop. J,. Agric Eng.,12:5- 8. (15) Vasan,B.S. and Subrahmanyan,V. (1973b) Preservation of high moisture paddy straw. Madras Agric. J. 66:690-692. (16) Vasan. B.S., Iengar, N.G.C., Nagasubramanian, Bhasker,R., Shivanna,C.S., Mohandoss,R. Subrahmanyan,V. (1973c). Studies on the action of cations on paddy, with reference to the role of sodium ion and its application to the preservation, parboiling and drying of     paddy. Proceedings of the Indian National Science Academy.  39B:32-6. <a href="https://insa.nic.in/writereaddata/UpLoadedFiles/PINSA/Vol39B_1973_1_Art03.pdf" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://insa.nic.in/writereaddata/UpLoadedFiles/PINSA/Vol39B_1973_1_Art03.pdf</font></a> (17) Iengar, N.G.C., Gangadharan, N.S. and Rajendran, G. 1974a. Recent developments in the pressure parboiling of paddy - Direct parboiling. J. Agric. Eng. 11: 28-29. (18) Iengar, N.G.C., Gangadharan, N.S. and Rajendran, G. 1974b. Recent development in pressure parboiling of paddy. J. Agric. Eng .11:31-33.                                                                (19) <a href="https://archive.org/details/dli.csl.2085/page/n193/mode/2up?q=paddy+processing+research+center" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://archive.org/details/dli.csl.2085/page/n193/mode/2up?q=paddy+processing+research+center</font></a> the National Commission of Agriculture (1976) (20) Subrahmanyan, V. (1976) Paddy milling Technology in India.Part III. Modernization of a convertional huller mill. The resulting ecconomic and other benfits. Food Corporation of Inida, New Delhi. (21) James Wimberly : Post Harvest Technology pp 322-327 in Rice Post harvest Technology (1976)  E.V. Arullo, D.B.De Padua Michael Graham . IDRC Ottawa, Canada (22) Chandrasekharan, R and Pillaiyar,P.: Processing Methods pp 331-339 in Rice Post harvest Technology (1976)  E.V. Arullo, D.B.De Padua Michael Graham . IDRC Ottawa, Canada. (23) Subrahmanyan V. (1977) A realistic approach to problems of rural areas in relation to food and nutrition. Submitted to the ICAR. (24) Subrahmanyan,V. and Dhakshinamurthy,A (1977) Nutrient loss during parboiling IL RISO 26: 337-340. (25) Pillaiyar,P.(1977) Stabilization of Rice Bran, Existing Knowledge, and Lack of Application Journal of Agricultural Engineering  15: 165-173. (26) Pillaiyar, P., Venkatesan. V. and Narayanasamy, R . V.(1977) Parboiling of Soaked Paddy by Closed Heating, J . Food Sci. Tech. 14 : 226-227. (27) Singaravadivel, Raj ,S.A., Iengar,N.G.C. (1978) Loss of dry matter in the process of parboiling of paddy. RPEC Reporter4 :66-68. (28) Pillaiyar,P., Yusuff, M. D. and Narayanasamy R. V. (1978) Hot air stabilizer for rice bran. Journal of The Oil Technologists Association of India.  10:151-153. (29) Anthoni Raj.S.,Venkatesan,V.M.,Singaravadivel,K.,Vasan, B.S., Pillaiyar,P.  Subrahmanian,V. (1979) The application of packaging technology and chemical treatment for the preservation of high moisture grains with special reference to paddy. Journal of Food Science and Technology16 :66-47. (30) Pillaiyar,P., Vasan,P. Rajendran,G., Dhramrajan,V.(1979) Prevention of foul odour and minimizing soaking loss in conventional parboiling of paddy. Journal of Food Science and Technology. 17 :228-231. (31) Singaravadivel,K. and  Anthoni Raj,S. (1979) Leaching of phenolic compounds during soaking of paddy. J Food Science and Technology. 16:77-78.      (32) Vasan, S.S. and Venkatesan,V (1979) A simple procedure for the removal of the kernel as a ball from fresh coconut. Journal of Oil technologists Association of India.11:42. (33) Anthoni Raj S., Singaravaidvel,K (1980a) Influence of soaking and steaming on the loss of simpler constituents in paddy. J. Food Sci. Technol.17:141-143.(34) Iengar,N.G.C., Rajendran,G., Yusuff,M., Subrahmanyan,V. (1980) Application of pressure parboiling process for the production of Bulgur wheat. Journal of Food Science and Technology.17:263-265. (35) Iengar, N.G.C., Rajendaran, G., Yusuff, K.M. Ganesan, G (1980) Pressure parboiling of paddy without the use of boiler  . J Food Science and Technol. 17:139-140.(36)  Kumaravel,S.,     Singravadivel,K.,Vasan,B.S.,Anthoni Raj,S., (1980) Storage of parboiled rice. (37) Vasan, B.S., Basheer, J. and Venkatesan, V. (1980). Use of hot air for parboiling and drying of paddy. J. Food Sci. Technol. 17(5): 246-247. (38) Pillaiyar, P.; Yusuff, K.M.; Narayanaswamy, R.V.,Venkatesan, V., Ramachandran,K. (1981) Drying parboiled paddy with cup and cone dryer. Agricultural Engineering. 18 :123-126 (39) Pillaiyar, P. and Mohandoss, R. (1981a). Hardness and color in parboiled rice produced at low and high temperatures. J. Food Sci.Technol .18: 7-9.(40)nPillaiyar,P., and Mohandoss,R. (1981b) Cooking qualities of parboiled rice produced at low and high temperatures. J.Sci. Food Agric 32:475-480. (41) Singaravadivel,K., Venkatesan and Anthoni Raj,S. (1981) Loss in the out-turn of rice due to rain damage and its preservation. Agric Sci. Digest.1 :210-212. (42) Vasan, B.S., Venkatesan, V., Pillaiyar P. (1981) Soil-salt mixture for preserving wet paddy J. Food Sci. Technol. 18: 120-122.(43)   Anthoni Raj,S. and Singaravadivel,K. (1982) Reduction of free fatty acids due to parboiling of paddy. J. Food Sci.47:692-693. (44) Vasan, B.S. (1982). Improvement of quality of parboiled rice in the modem rice mills. J. Agric. Eng. 19: 59-60. (45) Vasan, B.S., Kousalya, K. (1982) Use of rice germ in the common food preparations. J. Food Sci. Technol.19:161-162. (46) Iengar, N.G.C., Gangadharan, N.S. and Rajendran, S. 1982. Recent developments in pressure parboiling of paddy. J .Agric. Eng.11: 31-33. (47) Pillaiyar,P. Sethuraman,S.,Ramanujan,T., and Vaidhyalingam,R.(1983). Field losses Centre Reporter comm in some stages of preharvest and harvest operation. Post-harvest Technology (48) Iengar,N.G.C. (1984). Activities of the Paddy Processing Research Centre,  Thirvarur. Journal of Food Science and Technology 118-120. (49) Venkatesan,V. Anthoni Raj, S. and Singarvadivel (1984) Evaluation of container sacks for effective rice bran storage. Agricultural mechanization in Asia, Africa and Latin America vol.15. (50) Barber, S. and Benedito de Barber (1985) Rice Bran:An under-utilized raw material. United Nations, New York.(51) <a href="https://open.unido.org/api/documents/4839609/download/RICE%20BRAN%20-%20AN%20UNDERUTILIZED%20RAW%20MATERIAL%20(14421.en)" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://open.unido.org/api/documents/4839609/download/RICE%20BRAN%20-%20AN%20UNDERUTILIZED%20RAW%20MATERIAL%20(14421.en)</font></a>. (52) Singaravadivel, K. and S. Anthoni Raj, 1988. Rice mill by products as carrier for Rhizobium. Legume Res. 11: 143-145. (53) Pillaiyar, P. (1989). Effect of open and closed drying on the quality of parboiled rice. J. Agric. Eng. 26 (2): 157-162. Anthoni Raj,S. and Singaravadivel,S.K. (1991).   (54) Biodeterioration in Rice (Oryza sativa L.) due to low, medium and high moisture. International Biodeterioration. 27: 237-248 (55) Pillaiyar, P., Singaravadivel, K., Desikachar, H.S.R. and Subramanyam, V. (1993). Low moisture parboiling of paddy. J. Food Sci. Technol. 30: 97-99. (56) Pillaiyar,P., Singaavadivel,K.(1993) Pressure parboiling of wet season paddy. Madras Agric. J. 80:713-716. (57) Pillaiyar,P., Singaavadivel,K., Desiakchar, H.S.R.(1993) Low moisture parboiling of paddy. J Food Sci. Technol. 30, 97-9.(58) Pillaiyar, P.,  , K. and Desikachar, H.S.R.(1994). Quality changes in HTST processing of rice parboiling. J. Sci. Food Agric., 65: 229-231.(59) Raj,,S.A., .Singaravadivel,S.K.and Subramaniyan,V (1996) Excretion of chlorides during soaking of paddy. J Food Sci. Technol. 33:57-59. (60) Pillaiyar, P. Singaravadivel,K. and  Desikachar, H.S.R.. (1996). Sand-drying of paddy parboiled under different conditions. Journal of Food Science and Technol. 33. 246-248 (61) Subramanian,N. (2020). From Bondage to Citizenship: A comparison of African American and Indian Lower-Caste mobilization in two regions of deep inequality. Comparative Studies in Society and History. 62:770-809</div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}