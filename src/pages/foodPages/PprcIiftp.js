import React from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ABOUTUS from '../../img/ABOUTUS.png'
import iiftp from '../../img/iiftp.png'
import thiyagaraja from '../../img/thiyagaraja.png'
import pprcTeam from '../../img/pprcTeam.png'
import './PprcIiftp.css';

export default function PprcIiftp() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div className="headerimg">
                <img src={ABOUTUS} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >IIFPT Tanjore</div>
                <br></br>
                <div className="earlylifepara" >Indian Institute of Food Processing Technology (IIFPT) is an educational institution functioning under the Ministry of Food Processing Industries located at Thanjavur, Tamil Nadu. The Institute offers academic and research programmes in the field of food processing technology. The IIFPT was originally a PPRC (Paddy Processing Research Center) which was founded by Dr V. Subrahmanyan and was later upgraded to IIFPT.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Paddy Processing Research Center</div>
                <br></br>
                <div>
                    <img className="paddyimg" src={iiftp}  />
                    <div className="earlylifepara" >On his return from the Philippines, Dr V. Subrahmanyan was the Advisor of Subsidiary Foods and Nutrition, Ministry of Food and Agriculture, Community Development and Cooperation in New Delhi from 1966-1969. Between 1952 and 1957, C. Subramaniam was Minister of Food, Finance, Education, Information and Publicity. During this period, the mid-day meal (developed and formulated at the C.F.T.R.I. when Dr V. Subrahmanyan was the Director) was sufficient to feed 1.5 million children per day. C. Subramaniam was involved in the green revolution and the white revolution and there is evidence that he supported the growth of food industry in the country.</div>
                </div>
                <br></br>
                <div className="earlylifepara" >In April 1963, the Ford foundation surveyed problems that existed with rice milling. Based on their recommendations, the Government of India decided to set up six modern rice mills in the cooperative sector and one in the public sector. The first mill set up was at Thiruvarur under the Thanjavur Cooperative Marketing Federation (TCMF). V. S. Thiyagaraja Mudaliar (1916-1982) was President at that time. He was a leading landlord who had shifted from paddy cultivation to sugarcane on about 5 acres of their own land. They had established a sugar factory called The Arooran Sugars. The TCMF rice mill could process 4 tons per hour and had a parboiling unit, a paddy cleaning unit, silo storage, mechanical dryers and rubber rollers for shelling.</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={thiyagaraja} height={200} width={180} />
                    <div className="earlylifepara" >V. S. Thiyagaraja Mudaliar invited Dr V. Subrahmanyan to initiate Research and Development at Thirvarur at the Modern Rice Mill complex of the TCMF. The main objective of starting the R&D lab was the salvage of high moisture paddy especially for farmers, modernization of rice milling industry and improving rice processing technology. </div>
                    <div className="earlylifepara" >In 1971, The Food Corporation of India stepped in with funds and deputed a Deputy Manager, Assistant Manager, Assistant Engineer, Quality Inspector and proposed an Advisory Committee for this Laboratory. The Joint Secretary of the Ministry of Agriculture was nominated Chairman of the committee. The Lab which hitherto had been referred to as the Research and Development Laboratory of the TCMF, was named as the Paddy Processing Research Center (PPRC) in 1972. It was funded by a consortium consisting of the Food Corporation, Department of Food, National Cooperative Development Corporation (NCDC) and Govt. of Tamil Nadu through the Tamil Nadu Civil Supply Corporation.</div>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >PPRC Team and Journey</div>
                <br></br>
                <div>
                    <img className="pprcteam" src={pprcTeam} />
                    <div className="earlylifepara" >The Food Corporation of India deputed Dr V. Subrahmanyan as the Project Head of PPRC. Shortly after, R. Chandrashekar and B. S. Vasan joined the TCMF Lab, along with B. S. Iengar, Yousuf, C. S. Shivanna and N. S. Gangadhar. Mr. R. Baskar came from the NCDC. P. Pillaiyar was from the Food Corporation of India. The center was managed by the Tamil Nadu Civil Supplies Corporation and then from 1981 by the Tamil Nadu Agricultural University.  On 1.12.1984 the PPRC was registered as PPRC Society under Tamil Nadu Societies registration act of 1975. The entire budget of PPRC was provided by the Ministry of Food, the Food Corporation of India and the Tamil Nadu Civil Services Corporation and later solely by Ministry of Food Processing Industries, Government of India. The Institute was moved to its current location at Thanjavur in 1984. The Project Head designation was changed to that of Director who heads and manages the institute along with Executive Committee members and Board of Directors. The Ministry of Food Processing Industries (MFPI) took over the funding and management of the PPRC and renamed it as the Indian Institute of Crop Processing Technology in 2008. The Directors who managed the PPRC and the IICPT were Dr V. Subramaniyan, Dr A. Dahshinamoorthy from ICAR, Dr A. Alagusundaram from TNAU, Dr K. Singaravadivel, from PPRC and presently, Dr. Anandharamakrishnan from CFTRI.</div>
                </div>
                <br></br>
                <div className="earlylifepara" >Dr S. V. Pingle who once had been at the C.F.T.R.I. when Dr V. Subrhmanyan was its Director, had become Director (Quality Control) at the Food Corporation of India. He was definitely instrumental in helping in the formation of the Paddy Processing Research Center at the time when FCI provided manpower and partial funding. Dr P. Krishna Kymal was Executive Director, Food and Nutrition Board, Ministry of Agriculture Government of India, New Delhi from 1965. B. S. Raghavan and T. U. Vijayasekharan was also very much involved in the council and activities of the PPRC. Dr H. S. R. Desikachar of the C.F.T.R.I. Mysore was for years in the Executive Committee of the PPRC and would visit the laboratory monthly to discuss the research going on.</div>
                <br></br>
                <div className="earlylifepara" ><Link to="/pprc-research" style={{ textDecoration: 'none', color: '#3819e9', fontWeight: '500' }} >Research carried out in PPRC</Link></div>
                <div className="earlylifepara" style={{display:'flex'}} >
                    <ul style={{ color: "rgb(42, 42, 42)" }} >
                        <li>Pre Harvest Spray </li>
                        <li>Pressure parboiled paddy </li>
                        <li>Preservation of Wet Parboiled Paddy</li>
                        <li>Rice Milling </li>
                        <li>Rice Bran Oil</li>
                        <li>Rice Bran</li>
                    </ul>
                    <ul style={{ color: "rgb(42, 42, 42)" }} >
                        <li>Short Soaking and Tempering Process</li>
                        <li>High Moisture Paddy Problem</li>
                        <li>Straw Preservation</li>
                        <li>Parboiling Technology</li>
                        <li>Salt Parboiling</li>
                        <li>Sand Parboiling</li>
                    </ul>
                </div><br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Centre for Post-Harvest Technology of Rice based crops and Rural Development</div>
                <br></br>
                <div className="earlylifepara" >On 23.4.1977 Subrahmanyan delivered a seminar organised by the Association of Food Scientists and Technologists in collaboration with some of the Departments of state and the Food Corporation of India. He then submitted a paper on the subject of rural poverty and it's alleviation to Dr. M.S. Swaminathan on 8.5.1977. The matter of the paper was further elaborated as a proposal to convert the Paddy Processing Research Center to a Centre for Post-Harvest Technology of Rice based crops and rural development to be funded by the ICAR or the FAO.</div>
                <div className="earlylifepara" ><Link to="/post-harvest-tech" style={{ textDecoration: 'none', color: '#3819e9', fontWeight: '500' }} >More info here</Link></div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Publication from Paddy Processing Research Center, Thivarur</div>
                <br></br>
                <div className="earlylifepara" >1) Trehan, K.N. and Pingle, S.V.(1946) Chemotropic response of fruit flies. Proceedings of the Indian Academy of Sciences - Section B 23, 260-265.</div>
                <div className="earlylifepara" >2) <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3dau%253a%2522Trehan%252c%2bK.%2bN.%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Trehan, K. N.</a> and <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3dau%253a%2522Pingle%252c%2bS.%2bV.%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Pingle, S. V.</a>(1948) Insect pests of stored grains in Bombay godowns <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3ddo%253a%2522Current%2bScience%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Current Science</a>.17 :128.</div>
                <div className="earlylifepara" >3) Pingale, Shriram Vishwanath  (1954) <a href="https://shodhganga.inflibnet.ac.in/handle/10603/154540" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Part I  The studies on insect damage in stored staple food grains at three centers in Bombay State. Part II Biology and Morphology of Opatroides vicinus</a>.Thesis awarded by the University of Pune.</div>
                <div className="earlylifepara" >4) Subrahmanyan, V., Deiskachar, H.S.R., and Bhatia,D.S. (1955) Commercial methods of parboiling and improvement of the quality of parboiled rice.  J. Scient. Ind. Res A14, 110-114.5).</div>
                <div className="earlylifepara" >5) Subrahmanyan,V. (1969) Some Application of Technology for the Betterment of Human nutrition.  Biresh Chandra Guha Memorial Lecture.</div>
                <div className="earlylifepara" ><Link to="/complete-list" style={{ textDecoration: 'none', color: '#3819e9', fontWeight: '500' }} >Complete list</Link></div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}