import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg'

export default function CompleteList() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div className="headerimg" style={{backgroundImage: "url(" + stjoseph + ")"}} />
            <div className="container" >
                <br></br>
                <div className="earlylife" >Complete list of Publications (PPRC)</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Publication from Paddy Processing Research Center, Thivarur</div>
                <br></br>
                <div className="earlylifepara" >1) Trehan, K.N. and Pingle, S.V.(1946) Chemotropic response of fruit flies. Proceedings of the Indian Academy of Sciences - Section B 23, 260-265.</div>
                <div className="earlylifepara" >2) Trehan, K. N. and <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3dau%253a%2522Pingle%252c%2bS.%2bV.%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Pingle, S. V.</a>(1948) Insect pests of stored grains in Bombay godowns <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3ddo%253a%2522Current%2bScience%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Current Science </a>.17 :128.</div>
                <div className="earlylifepara" >3) Pingale, Shriram Vishwanath (1954) <a href="https://shodhganga.inflibnet.ac.in/handle/10603/154540" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Part I  The studies on insect damage in stored staple food grains at three centers in Bombay State. Part II Biology and Morphology of Opatroides vicinus .</a>Thesis awarded by the University of Pune.</div>
                <div className="earlylifepara" >4) Subrahmanyan, V., Deiskachar, H.S.R., and Bhatia,D.S. (1955) Commercial methods of parboiling and improvement of the quality of parboiled rice.  J. Scient. Ind. Res A14, 110-114.5).</div>
                <div className="earlylifepara" >5) Subrahmanyan,V.(1969) Some Application of Technology for the Betterment of Human nutrition. Biresh Chandra Guha Memorial Lecture. </div>
                <div className="earlylifepara" >6) Iengar,N.G.C.Bhasker,R., Dhramarajan (1971) Studies on sand parboiling and drying of paddy, J. Argic. Eng. VIII :51-54.</div>
                <div className="earlylifepara" >7) Vasan,B.S., Iengar,N.G.C., Subramanyan,T.V. Chandrasekharan,R., Subrahmanyan,V. (1971b). Effect of processing on the movement of oil in the rice kernel and its relation to the oil content of paddy and the yield of oil from bran. Paper presented at the UNIDO/FAO/ECAFE Integrated seminar on the Industrial Processing of rice, held at Madras 11-16 October 1971.</div>
                <div className="earlylifepara" >8) Subrahmanyan,V. (1971) Recent advances in rice processing. Journal of Scientific and Industrial Research. 30,729-739.</div>
                <div className="earlylifepara" >9) Iengar,N.G., Bhasker,R., Dharmarajan,P. (1971) Studies on sand parboiling and drying of paddy. Agric Eng.8: 51-54.</div>
                <div className="earlylifepara" >10) Uma Lele (1971) A case study in agricultural marketing. Occasional paper N049 Department of Agricultural Economics. Cornell University USAID Employment and Income distribution project. https://pdf.usaid.gov/pdf_docs/PNAAA482.pdf.</div>
                <div className="earlylifepara" >11) lengar, N.G.C., Bhaskar, R. Dharmarajan, M.R. (1972) Studies on methods of parboiling - pressure parboiling. J. Argic. Eng. 9: 40-51.</div>
                <div className="earlylifepara" >12) Pingle S.V. (1972) Drying of Food Grains. J. Agric. Eng. 9 :17-20.</div>
                <div className="earlylifepara" >13) Pillaiyar,P., Vasan,B.S., Annappan, R.S., Surbrahmanyan,V. (1973) Effect of chemical spray on the ears of paddy, the ripening of grain, loss of moisture from the kernel and yield of crop. J. Agric Eng.,12:5- 8.</div>
                <div className="earlylifepara" >14) Vasan,B.S., Subrahmanyan,V. (1973)Preservation of high moisture paddy straw. Madras Agric. J. 66:690-692.</div>
                <div className="earlylifepara" >15) Vasan. B.S., Iengar, N.G.C., Nagasubramanian, Bhasker,R., Shivanna,C.S., Mohandoss,R. Subrahmanyan,V. (1973). Studies on the action of cations on paddy, with reference to the role of sodium ion and its application to the preservation, parboiling and drying of     paddy. Proceedings of the Indian National Science Academy.  39B:32-6. <a href="https://insa.nic.in/writereaddata/UpLoadedFiles/PINSA/Vol39B_1973_1_Art03.pdf" target="_blank" >https://insa.nic.in/writereaddata/UpLoadedFiles/PINSA/Vol39B_1973_1_Art03.pdf</a> </div>
                <div className="earlylifepara" >16) Iengar, N.G.C., Gangadharan, N.S.. Rajendran, G. (1974a) Recent developments in the pressure parboiling of paddy - Direct parboiling. J. Agric. Eng. 11: 28-29.</div>
                <div className="earlylifepara" >17) Iengar, N.G.C., Gangadharan, N.S.. Rajendran, G. (1974b) Recent development in pressure parboiling of paddy. J. Agric. Eng .11: 31-33. </div>
                <div className="earlylifepara" >18) https://archive.org/details/dli.csl.2085/page/n193/mode/2up?q=paddy+processing+research+center the National Commission of Agriculture (1976)</div>
                <div className="earlylifepara" >19).Subrahmanyan, V. (1976) Paddy milling Technology in India.Part III. Modernization of a convertional huller mill. The resulting economic and other benefits. Food Corporation of India, New Delhi. 20) James Wimberly (1976) : Post Harvest Technology pp 322-327 in Rice Post harvest Technology.  E.V. Arullo, D.B.De Padua Michael Graham . IDRC Ottawa, Canada.</div>
                    <div className="earlylifepara" >20) Chandrasekharan, R and Pillaiyar,P.(1976) Processing Methods pp 331-339 in Rice Post harvest Technology. E.V. Arullo, D.B.De Padua Michael Graham . IDRC Ottawa, Canada.</div>
                        <div className="earlylifepara" >21)Subrahmanyan V. (1977) A realistic approach to problems of rural areas in relation to food and nutrition. Submitted to the ICAR.</div>
                            <div className="earlylifepara" >22)Subrahmanyan,V. and Dhakshinamurthy,A (1977) Nutrient loss during parboiling IL RISO 26: 337-340.</div>
                                <div className="earlylifepara" >23)Pillaiyar,P.(1977) Stabilization of Rice Bran, Existing Knowledge, and Lack of Application Journal of Agricultural Engineering  15: 165-173. 23) Pillaiyar, P., Venkatesan. V. and Narayanasamy, R . V.(1977) Parboiling of Soaked Paddy by Closed Heating, J . Food Sci. Technol. 14 : 226-227.</div>
                                    <div className="earlylifepara" >24) Singaravadivel, Raj ,S.A., Iengar,N.G.C. (1978) Loss of dry matter in the process of parboiling of paddy. RPEC Reporter4 :66-68.</div>
                                        <div className="earlylifepara" >25) Pillaiyar,P., Yusuff, M. D. and Narayanasamy R. V. (1978) Hot air stabilizer for rice bran. Journal of The Oil Technologists Association of India.  10:151-153.</div>
                <div className="earlylifepara" >26)Anthoni Raj.S.,Venkatesan,V.M.,Singaravadivel,K.,Vasan, B.S., Pillaiyar,P. Subrahmanian,V. (1979) <a href="https://pascal-francis.inist.fr/vibad/index.php?action=getRecordDetail&idt=PASCAL8010150984" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >The application of packaging technology and chemical treatment for the preservation of high moisture grains with special reference to paddy.</a> Journal of Food Sci. Technol.16 :66-47.</div>
                    <div className="earlylifepara" >27) Pillaiyar,P., Vasan,P. Rajendran,G., Dhramarajan,V.(1979) Prevention of foul odour and minimizing soaking loss in conventional parboiling of paddy. Journal of Food Sci. Technol. 17 :228-231.</div>
                        <div className="earlylifepara" >28) Singaravadivel,K. and  Anthoni Raj,S. (1979) Leaching of phenolic compounds during soaking of paddy. J Food Sci. Technol.. 16:77-78.</div>
                            <div className="earlylifepara" >29) Subrahmanyan, V.(1979) Paddy milling Technology in India.Part III. Modernization of a conventional huller mill. The resulting ecconomic and other benefits. Food Corporation of India, New Delhi.</div>
                                <div className="earlylifepara" >30) Vasan, S.S., Venkatesan,V (1979) A simple procedure for the removal of the kernel as a ball from fresh coconut. Journal of Oil Technologists Association of India.11:42.</div>
                                    <div className="earlylifepara" >31) Anthoni Raj S., Singaravaidvel,K (1980a) Influence of soaking and steaming on the loss of simpler constituents in paddy. J. Food Sci. Technol.17:141-143.</div>
                                        <div className="earlylifepara" >32) Iengar,N.G.C., Rajendran,G., Yusuff,M., Subrahmanyan,V. (1980) Application of pressure parboiling process for the production of Bulgur wheat. Journal of Food Sci. Technol..17:263-265.</div>
                                            <div className="earlylifepara" >33) Iengar, N.G.C., Rajendaran, G., Yusuff, K.M. ,Ganesan, G (1980) Pressure parboiling of paddy without the use of boiler. . J Food Sci.  Technol. 17:139-140.</div>
                                                <div className="earlylifepara" >34)_Kumaravel,S.,Singravadivel,K.,Vasan,B.S.,Anthoni Raj,S., (1980) Storage of parboiled rice. The Journal of the Oil Technologists Association of India 12:48-51.</div>
                                                    <div className="earlylifepara" >35)_ Vasan, B.S., Basheer, J. and Venkatesan, V. (1980). Use of hot air for parboiling and drying of paddy. J. Food Sci. Technol. 17(5): 246-247.</div>
                                                        <div className="earlylifepara" >36) Pillaiyar, P.; Yusuff, K.M.; Narayanaswamy, R.V.,Venkatesan, V., Ramachandran,K. (1981) Drying parboiled paddy with cup and cone dryer. Agricultural Engineering. 18 :123-126.</div>
                                                            <div className="earlylifepara" >37) Pillaiyar, P. and Mohandoss, R. (1981a). Hardness and color in parboiled rice produced at low and high temperatures. J. Food Sci.Technol .18: 7-9 J. Food Sci. Technol .18: 252-254.</div>
                                                                <div className="earlylifepara" >38) Pillaiyar, P., Yusuff, K.M., Narayanaswamy,R.V., Venkatesan,V. Ramachandran,K. (1981) Drying parboiled paddy with cup and cone dryer. Agricultural Engineering. 18 :123-126.</div>
                                                                    <div className="earlylifepara" >39) Pillaiyar, P. and Mohandoss, R. (1981a). Hardness and color in parboiled rice produced at low and high temperatures. J. Food Sci.Technol .18: 7-9.</div>
                                                                        <div className="earlylifepara" >40) Pillaiyar,P., and Mohandoss,R. (1981b) Cooking qualities of parboiled rice produced at low and high temperatures. J. Sci. Food Agric 32:475-480.</div>
                                                                            <div className="earlylifepara" >41) Singaravadivel,K., VenkatesanV., Anthoni Raj,S. (1981) Loss in the out-turn of rice due to rain damage and its preservation. Agric Sci. Digest.1:210-212.</div>
                <div className="earlylifepara" >42) <a href="https://pascal-francis.inist.fr/vibad/index.php?action=search&lang=en&terms=%22VASAN+BS%22&index=au" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Vasan, B.S.</a>, <a href="https://pascal-francis.inist.fr/vibad/index.php?action=search&lang=en&terms=%22VENKATESAN+V%22&index=au" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Venkatesan, V.</a>, <a href="https://pascal-francis.inist.fr/vibad/index.php?action=search&lang=en&terms=%22PILLAIYAR+P%22&index=au" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Pillaiyar P.</a> (1981) <a href="https://pascal-francis.inist.fr/vibad/index.php?action=getRecordDetail&idt=PASCAL8110440591" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Soil-salt mixture for preserving wet paddy</a> J. Food Sci. Technol. 18: 120-122. 44.</div>
                <div className="earlylifepara" >43) Anthoni Raj,S. and Singaravadivel,K. (1982) Reduction of free fatty acids due to parboiling of paddy. J. Food Sci.47:692-693.</div>
                    <div className="earlylifepara" >44) Vasan, B.S. (1982) Improvement of quality of parboiled rice in the modem rice mills. J. Agric. Eng. 19: 59-60.</div>
                <div className="earlylifepara" >45) Vasan, B.S., <a href="https://pascal-francis.inist.fr/vibad/index.php?action=search&lang=en&terms=%22KOUSALYA+K%22&index=au" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Kousalya, K.</a> (1982) Use of rice germ in the common food preparations. J. Food Sci. Technol.19:161-162.</div>
                <div className="earlylifepara" >46) Iengar, N.G.C., Gangadharan, N.S., Rajendran, S. (1982) Recent developments in pressure parboiling of paddy. J .Agric. Eng.11: 31-33.</div>
                    <div className="earlylifepara" >47) Pillaiyar,P.Sethuraman,S.,Ramanujan,T., Vaidhyalingam,R.(1983) Field losses Centre Reporter comm in some stages of preharvest and harvest operation. Post-harvest Technology.</div>
                        <div className="earlylifepara" >48) Singaravadivel,K., Anthoni Raj,S. (1983) Grain opening a handicap in parboiling. Agric Sci. Digest.3: 43-46.</div>
                            <div className="earlylifepara" >49) Iengar,N.G.C. (1984) Activities of the Paddy Processing Research Centre,  Thirvarur. Journal of Food Sci. and Technol. 17:118-120.</div>
                                <div className="earlylifepara" >50) Venkatesan,V. Anthoni Raj, S., Singarvadivel,K. (1984) Evaluation of container sacks for effective rice bran storage. Agricultural mechanization in Asia, Africa and Latin America vo.15.</div>
                <div className="earlylifepara" >51) Barber, S., Benedito de Barber (1985) Rice Bran: An under-utilized raw material. United Nations, New York. <a href="https://open.undo.org/api/documents/4839609/download/RICE520BRAN%20-%20AN%20UNDERUTILIZED%20RAWMATERIAL%2020(14421.en)." target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >https://open.undo.org/api/documents/4839609/download/RICE520BRAN%20-%20AN%20UNDERUTILIZED%20RAWMATERIAL%2020(14421.en).</a></div>
                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}