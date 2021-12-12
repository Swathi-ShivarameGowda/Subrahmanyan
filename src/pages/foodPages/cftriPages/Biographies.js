import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import FOODTECHNOLOGY from '../../../img/FOODTECHNOLOGY.png'
import biography from '../../../img/biography.jpg'
import chandra from '../../../img/chandra.jpg'
import swami from '../../../img/swami.jpg'
import bhatia from '../../../img/bhatia.jpg'
import murthy from '../../../img/murthy.jpg'
import rao from '../../../img/rao.jpg'
import './Biographies.css';

export default function Biographies() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div className="headerimg">
                <img src={FOODTECHNOLOGY} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Brief Biographies of some of those involved in initial work on the AMUL infant food at the C.F.T.R.I.</div>
                <br></br>
                <div className="earlylifepara" >The first author of the papers (except One) on both spray dried and roller dried infant foods is M.R.Chandrashekar followed by that of M.Swaminathan, D.S. Bhatia. Occasionally V. Sreenivasmurthy and Doariswamy were named. M.Narayana Rao was associated with papers on the name of H.A.B.Parpia is in two papers initially in conjunction with many of the above. He has two papers related to Buffalo milk and a review published after he had become Director.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >M.R.Chandrasekara (1916-2010)</div>
                <br></br>
                <div className="earlylifepara" >MRC's maternal grandfather was H V Nanjundayya who was first councilor and then s first vice chancellor of the Mysore university and the founder of the Sahitya Parishat. He was conferred with the title of Raja Mantra Praveena by the palace.</div>
                <div className="cheluvajamanniimg" >
                    <div style={{ marginLeft: '100px' }} ><img src={biography} /></div>
                    <div className="biography" > <img src={chandra} /></div>
                </div>
                <div className="earlylifepara" >He was a man with very progressive ideas and was very keen that girls and women should get a good education and in fact gave his huge house and the land surrounding it in Malleswaram, Bangalore to the government to be converted into a girl's high school. It is now a junior college for women. The old house has been declared a heritage site and is being restored to its original glory by the govt.</div>
                <br></br>
                <div className="earlylifepara" >MRC grew up in Mysore where his father M Rama Rao was the Palace Controller. M Rama Rao, M.R. Chandrashekar's father was Palace Controller, and as such had close contact with the royal family. He lived with a large extended family at a big bungalow called Bloomfield at Nazarbad, Mysore." It is always a thrill for us to see his picture, painted on the wall of the Mysore palace showing scenes of the Dasara procession. He is standing next to the elephant carrying the howdah, in his brown coat."</div>
                <br></br>
                <div className="earlylifepara" >After his graduation, he joined the London Films where the director Robert J Flaherty was making Elephant Boy with Sabu in the lead role. This experience led to MRC's lifelong interest in photography. He worked some time at the Irwin Canal Farm near Mandya before moving to Delhi to join the Pusa Institute (I.A.R.I.) from where he obtained his M Sc degree in agricultural chemistry and subsequently, he joined the CFTRI Mysore. He was associated with the CFTRI till his retirement. He spent a year in New Zealand on a Colombo Plan Fellowship. (The Colombo plan was launched on July 1, 1951 as a multi country co-operative initiative to advance the socio-economic growth of Asian and Pacific countries. Its focus was on mutual help for human resource and infrastructure development (http://www.colombo-plan.org/index.php/about-cps/history/   and he talked about  his work in New Zealand on May3, 1960  at the C.F.T.R.I.,  Food Science,1960:211).</div>
                <br></br>
                <div className="earlylifepara" >During his tenure at the C.F.T.R.I. the V. Subramanyam Industrial achievement award and the award from the International Food Technology Institute and Kidwai award and award from the Association of Food Technologists, USA. After he retired from CFTRI he and his wife moved to Bangalore. Here he was associated with the Miltone project at the Bangalore Dairy, they prepared the groundnut toned milk. (I remember enjoying the tasty thick groundnut milk curd) . He spent some six to eight months in Sierra Leone as UNDP Advisor (1975). He moved to Bombay for two years as Exec. Director of the Association of Protein Foods of India. In Bangalore he was an active member of the AFST, the Association of Food Science and Technology as its President.</div>
                <br></br>
                <div className="earlylifepara" >He was a man far ahead of his time with a lot of innovative ideas. He talked of community kitchens for the elderly, thought of bottled water, and tried his hand at making fruit juice and selling it in pouches. He experimented with a mechanized dosa making machine too. all these ideas have come into being now! He learnt computer skills and developed a nutrition CD called Annapurna, He enjoyed churning out stories on his computer and brought out a book of short stories and a book of children's stories.</div>
                <br></br>
                <div className="earlylifepara" >MRC married his elder sister's daughter Indira in 1936. He was 20 and she must have been 13. He must have been working at the London Films then since we have a big silver salver as a wedding present from them. They had no children of their own, I was born 22 years after my sister Indira, so they were really like a second set of parents for me. (This account is by M.R.Chandrasekahra's niece and sister in law, Tara Natarajan).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >M.Swaminthan (1912-)</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={swami} height={180} width={180} />
                    <div className="earlylifepara" >Dr. Mahadeva Swaminathan born in Trichinopoly on 1st June 1912. He obtained a Master's degree in organic chemistry from Annamalai University in 1935 and worked on various aspects of food and nutrition, food technology and nutrition at the Nutrition Research Laboratory, Coonoor 1935-1942. He received D.Sc. from Madras University in 1940. Coonoor 1935-1942.  He worked as Assistant Professor of Biochemistry and Nutrition at the All India Institute of Hygiene and Public Health at Calcutta from 1942-1947 and was Reader in Biochemistry at the Jaipur Medical College from 1947-1949. He was at the C.F.T.R.I. from 1949-1972 where he headed the Department of Nutrition and Dietetics. and was for some time Emeritus scientist there. He developed original chemical methods for the determination of niacin in 1938 and pyridoxin in 1940. He has published 300 research papers and several review articles. He was elected a Fellow of National Academy of Sciences of India in 1960 and as Honorary Member of the American Institute of Nutrition in 1969 in recognition of his contributions to Nutrition. He was a member of the FAO / WHO Expert Group in 1961 on calcium requirements. (https://prabook.com/web/mahadeva.swaminathan/3751890: https://www.insaindia.res.in/detail.php?id=. N60-0822)</div>
                    <br></br>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Darshan Singh Bhatia (1923-2001)</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={bhatia} height={250} width={300} />
                    <div className="earlylifepara" >Bhatia, born in Lahore in 1923 and attended the Forman Christian College there. In 1945 he earned a master's degree in chemical technology from the Punjab University and then worked for two years for a military dairy. The Government of Punjab Government, India awarded him a scholarship for the first two years of his stay in the U.S.  and the Massachusetts Institute of Technology appointed him as Research Assistant  enabling him to finish his third year of education at the Institute. "He left India in July 1947, on a U.S. troopship, with roughly 150 other Indian students coming to the United States for advanced studies. He left behind a pregnant wife (his son would be three years old before he would see him), knowing that a partition was coming, which would uproot his family. He entered the program in food science at MIT, earning his doctorate in 1950 for work on the effects of radiation on proteins".  </div>
                    <br></br>
                </div>
                <div className="earlylifepara" >On his return to India, He joined the Central Food Technological Research Institute in Mysore where he became head of the processing diet. He was very much involved in the development of the Amul baby food, the multipurpose food from ground nuts, tea and coffee products. He was involved in the development of "synthetic rice" which graduated into the Indian Multipurpose food. In 1965 he joined Coca-Cola where he worked at the Export Division's operation in New Delhi, working on protein beverages., He shifted eventually to the Coca-Cola center at Atlanta in 1972, again working on a soy protein-based drink. Later Bhatia became the head of corporate research and development at Coca-Cola., Beverages such as Diet Coke, New Coke, and Cherry Coke were developed then. On May 16, 1986 Darshan Singh Bhatia, Director of corporate research and development For Coca cola co, Atlanta Georgia spoke on "Soy beverages Some Unresolved problems" ("The total volume of soy beverages is perhaps 1% of the worlds soft drink volume. We should promote the product in its own right with its own flavour and the promotion material should be consistent with the product's intrinsic attributes. Bhatia recalled that in 1967-68 when he first drew up a proposal that Cocoa-cola produce soy beverages. "I predicted a time when soft drinks would be fortified with more and more nutrients").</div>
                <br></br>
                <div className="earlylifepara" >The demise of Dr. Darshan S. Bhatia occurred on October 8, 2001.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >H.A.B.Parpia (1922-2013)</div>
                <br></br>
                <div className="earlylifepara" >Dr Parpia had his early education in Burhanpur, Maharashtra and Bhopal, Madhya Pradesh. He spent a year in "Sevagram" Mahatma Gandhi's centre at Wardha as a volunteer. He completed Bachelor's Degree in Microbiology (Industrial & Medical) and Chemistry with first class Honors in 1946. He studied  initially at the university of California, obtaining his Ph.D. degree from the to Oregon State University in 1951.</div>
                <br></br>
                <div className="earlylifepara" >On return to India, , Dr Parpia worked as Chief Technologist and Production Manager (1952-56) at Pure Products and Madhu Canning, Bombay, as Assistant Director in charge of Information, Statistics, Process Development and Food Plant Design in 1956 at CFTRI and as Assistant Director General, Council of Scientific and Industrial Research-(CSIR), 1959 in charge of Industrial Liaison Office and Extension, Delhi and as Chief Executive at Kisan Products in 1961. Dr Parpia worked  as Chief Defense Research Co-ordinator of CSIR during India's war with China, 1962 and  was appointed as director of CFTRI in 1963. In 1972 he joined the FAO at Rome. In 1981 he was with the UN conference on Science and  Technology at New York. In 1998 he became Director Planning and Evaluation at UN University, Tokyo.</div>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={murthy} height={180} width={180} />
                    <div className="earlylife" style={{ fontSize: 'larger' }} >Dr. V.Sreenivasa Murthy (1924-2008)</div>
                    <div className="earlylifepara" >V. Srinivasa Murthy after completing his doctoral degree in Microbiology form the N.D.R.I. Bangalore joined the C.F.T.R.I. He was involved in the estimation of Vitamins in infant food. On a UNICEF fellowship, he worked the Tropical Products Institute. 25-6-1964. He subsequently became Head of the Department of Microbiology, C.F.T.R.I. </div>
                    <br></br>
                </div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={rao} height={180} width={180} />
                    <div className="earlylife" style={{ fontSize: 'larger' }} >M.Narayana Rao</div>
                    <div className="earlylifepara" >Narayana Rao worked at the C.F.T.R.I. during the development of the roller drying process for making weaning food. He did postdoctoral work at the  Food and Drug Research Laboratories Ottawa Canada1  . After a tenure at the C.F.T.R.I. he was appointed as Nutrition Officer, Food Policy and Nutrition Division, FAO, Rome, Italy.</div>
                    <br></br>
                </div>
                <br></br>
                <div className="earlylifepara" >Thanks are due to Dr.G.Ramanatham for his help in writing about the role of the C.F.T.R.I. in the development of Infant Baby foods from Buffalo Milk.</div>
                <br></br>
                <div className="earlylifepara" ><a href="/references" style={{ textDecoration: 'none' }} ><font color="#3819e9">References</font></a></div>

                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}