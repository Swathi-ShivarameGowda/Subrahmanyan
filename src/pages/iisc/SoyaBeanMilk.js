import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto2 from '../../img/headerphoto2.jpg';
import soyamilk from '../../img/soyamilk.png';
import hsrdesikachar from '../../img/hsrdesikachar.png';

export default function SoyaBeanMilk() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/pencillin-glucanate-and-soluble-casein");
    }
    const onClickBack = (event) => {
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
                <div className="earlylife" >Soya Bean Milk: Infant Feeding and Midday Meals</div>
                <br></br>
                <div className="earlylifepara" >The Second World War ended with acute scarcity of food and milk in many parts of India. A food technology laboratory was instituted in the Department of Biochemistry, Indian Institute of Science, Bangalore (Dr.S.S. De was in charge while Prof. Subrahmanyan was Professor and Head of Department) which among other things developed soy and groundnut-based milk substitutes and carried out large scale feeding of children at Bangalore. Subrahmanyan’ s interest in such products was extended to the use of ground nut , tapioca and coconut as source of protein and carbohydrate after he had moved to the Central Food Technological Research Institute, Mysore</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Soy Based Milk</div>
                <br></br>
                <div className="earlylifepara" >Milk production in India was lower than the demand and need towards the end of the Second World War. It was thought that substitute milks could be made by blending proteins derived from different sources, particularly from oil seed residues and the efforts of research funded by the Indian Research fund was after a meeting held at Mysore reported as “Milk Substitutes of Vegetable Origin” (17).  Vitamins, minerals and fats could be obtained from other sources than milk. The importance of lactose as a nutrient was doubted and any sugar (sucrose) could be used as substitute. It was recorded that in China, soy milk was very popular and also that one use of soy was “feeding children with digestive problems” the report then compared the composition of whole and skim milk powder with that of almonds, cashew, coconut, groundnut and soyabean. (17)</div>
                <br></br>
                <div className="earlylifepara" >A method of preparing soy milk from germinated soy was reported by De and Subrahmanyan (2). The soy milk was used in animal studies. It was shown, that in rat feeding trials the growth supporting value of soy milk was almost that of cow’s milk. the biological value of soya bean dhal was only 55 while that of the milk was 80%.  The digestibility of cow’s milk was 83%. (3, 4,12,17). Soy milk had a digestibility of 92% while cow’s milk was 88% (4). Soy milk carried with it enough vitamin B complex vitamins (5). Its ability to supplement a rice diet was shown (6). Desikachar and De (8) discussed the “Role of Inhibitors in Soybeans” as a means of explaining the poor nutrition properties of soybean.  Removal of trypsin inhibitor by acid extraction, any heat treatment, particularly wet heating or wet autoclaving and germination, increased the nutritive value of soy. However, there was no change in trypsin inhibitor activity during germination (7), a process that vastly improved the nutritive value of soyabean.</div>
                <br></br>
                <div style={{ marginTop: '30px'}} >
                        <img src={soyamilk} height={200} width='100%' />
                </div>
                <br></br>
                <div className="earlylifepara" >The Indian Research Fund (later named the Indian Council of Medical Research and the Food Department, Government of India (renamed Ministry of Food and Agriculture) and the then military and civil station of Bangalore funded a project where the Indian Institute of Science prepared the soymilk and carried out animal experiments prior to a mid-day meal scheme for children (17).,</div>
                <br></br>
                <div className="earlylifepara" >Obtaining soybeans from north India was difficult and this was resolved through the intervention of Sir Philip Gatsford, the Resident in Mysore.  It was possible to make 600lbs of milk per day.  However, the availability of the beans was limiting. In an initial study about 129 children of age, a few months to six years of age, were either fed cow’s milk as supplement or with soya milk. Four months infants did better on soy milk, older children respond to both milks. Hospital feeding trials with Dr (Miss) Albuquerque (who was head of the Women’s hospital) was initiated. The whole feeding program was approved by the Mr. W.H. Kirby, Rationing Adviser to the Government of India. That Mr. P.M. Jayarajan an ICS officer who was chief magistrate and collector of the Civil and Military station was important in the whole exercise has been acknowledged. (10,11)</div>
                <br></br>
                <div className="earlylifepara" >Initial soaking was carried out in any suitable container A modified coffee pulper (not efficient and, requires a lot of water) was used to remove the hulls. If the germinated (soaked) bean is first dried, then the skin is more easily removed.  Kernels that have been dried were soaked again. The soaked kernels were placed in a steam-jacketed pan along with some water and the temperature was brought to 70 degree C and maintained so for ten minutes. The kernels were then washed with water till the beans were almost white. A Mechanical grinder, stone edge runner or granite triple roller mill was used to grind the beans to paste.  The fine paste was then boiled with three times volume water containing   Sodium bicarbonate. Boiling was continued for 15-20 minutes after frothing reduced. The soy milk was filtered through woven cloth while hot. This prevented part of the cream being lost. Salt and sugar were added and the milk placed in a old room prior to distribution. Calcium salts were added to the finished product.  Milk may be further extracted from the residual paste using a wooden or metal press (10,11).</div>
                <br></br>
                <div className="earlylifepara" >At that time, rice was cooked on an open flame and the gruel obtained after cooking was often wasted. A school feeding program where rice gruel obtained from parboiled rice (from probably, the military) was boiled with roasted wheat grain to which soya milk (made from soy flour) was added.  Sugar was added.  At least 600 lbs. of the gruel were prepared daily. This mixture set as a pudding with added Vanilla or Cinnamon flavoring. The Army delivered the gruel to children in their schools. The feeding trials were carried out ultimately on at least 5000 school children (4oz curd and 8oz cooked rice gruel for each child) for three years (1945-48) (10, 11,15).  The soy milk was also prepared from the flour using a process developed by Dr. K.P. Base based at Dacca (Dacca is what is now Bangla Desh) which does not use germinated soy as does method of De and Subrahmanyan (2, 10,11)</div>
                <br></br>
                <div className="earlylifepara" >A subset of this group 300 children was divided into three groups of 100 each. Group A was fed with cooked rice and separated milk curd, Group B children with soy bean curd and the control C group, received no extra supplemental feeding.  The weight and height gains were similar among children in groups A and B. The values were lowest for the group C children (16).</div>
                <br></br>
                <div className="earlylifepara" >It was shown that the milk was easily digested. Smaller babies require twice older children drank it like they drank water. One way of reducing nutty flavor was diluting 15-20% with milk. Many cities and commercial organizations had expressed a desire to start large-scale feeding trials.  White varieties preferred as the paste was colored when varieties with colored husk were used. Soy milk with a little added cow’s milk may be used in tea or coffee or with a little invert sugar to make curds or buttermilk. Need for better method for decorticating, pasting and filtration for continued large scale preparation of soy milk was expressed (10). Thus, it was suggested that Soy milk was one hand, a food supplement and on the other hand, a milk extender. </div>
                <br></br>
                <div className="earlylifepara" >“During the past two years, we are making the most strenuous efforts to popularize the use of vegetable milks are articles of human food. Our attempts are based on the results of a very extensive series of scientific studied published in current Science, Science and Culture, annals of Applied Biochemistry and Medicine and other journals. We have shown that, among the natural sources so far investigated, soya-bean gives the best milk. We have not only standardized the conditions for preparing the milk, but have also followed up with producing it on a semi -large scale, we have also conducted a quite extensive series and have shown that the milk and the related products are not only safe and nutritious, but also preferable to cow’s milk because of it’s very easy digestibility in the case of infants and invalids-especially when the digestive functions are weak. Our findings are open to verification by any investigator who may be interested. To further demonstrate and apply our findings, we require the co-operation of the agriculturist to grow the bean; of the Government and the administrators for funds; of engineers in fabricating improved types of equipment, education and public health authorities for facilities and co-operation in conducting further trials, of medical colleagues for systematic observations, of the consuming public for sympathetic interest and helpful suggestions, and of fellow scientists for sympathy.” (9). This appears to have been written probably in reply to the report of the soya bean sub-committee which concluded their report with the statement: “The sub-committee is not in a position therefore to advocate immediately the encouragement of the production of soya-bean on a wide scale in India as a substitute for Indian pulses. The question should however, be reconsidered if and when further evidence on the nutritive value of soy bean becomes available” (1).   Such sentiment deriding the importance of soy in the Indian dietary was echoed by V.N. Patwardhan, the then Director of the National Institute of Science (14) and who was member of the sub-committee. </div>
                <br></br>
                <div className="earlylifepara" >Good quality, mature groundnut (Arachis hypogea Linn.) kernels were mildly roasted to remove Testa. The kernels were then ground to a fine paste in a roller mill or other suitable grinding machine. The fine paste, thus obtained, was mixed with a quantity of water and filtered and its pH adjusted to about 7.0. The milk was then deodorized with steam, cooled, fortified with minerals and vitamins and homogenized. To the prepared milk, invert sugar was added and the milk was seeded with buttermilk prepared from cow’s milk curd. After 12 h at room temperature (26-28 degree C), the curd set to a thick mass.  A feeding experiment, extending over a period of 6 months, was carried out on forty-two girls aged between 4 and 11years in a boarding home in Mysore to assess the value of adding a supplement of vegetable-milk curd to the diet. Results of a statistical analysis showed that significant improvement in weight, height and nutritional status of children receiving the supplement of vegetable-milk curd over those in the control group (those not receiving the soymilk supplement) had occurred.  The authors expressed their obligation to the authorities of the Good Shepherd Convent in Mysore for providing facilities for conducting the experiment (16).</div>
                <br></br>
                <div className="earlylifepara" >The Central Food Technological Research Institute, Mysore had prepared vegetable milk from groundnut and soya bean fortified with minerals and the amino acid, methionine as a substitute to milk. Experiments were conducted on the nutritional status and general health of school children on diets supplemented with that vegetable milk and curds. Daily supplementation of 12 ounces of vegetable milk showed significant improvement on the growth and nutritional status of South Indian children, as revealed by their increases in weights, heights and higher retention of nitrogen, calcium and phosphorus (18).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Brief Biographies</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Sasank De</div>
                <br></br>
                <div className="earlylifepara" >Sasanka S.De  was associated with the University College of Science at Calcutta (Kolkata) where he worked on different enzymes obtained from snake venom, from 1939 to 1944. He first became involved with soy in 1943 during the great Bengal famine, when he worked with Dr. B.C. Guha of Calcutta University in making soymilk for feeding starving infants (19).  He was professor in the Department of Biochemistry  at the Indian Institute of Science Bangalore  from 1946-1951, where he was in charge of the Food Technology group. He was for some time, Senior Food and Agricultural Industries Officer for FAO at the United Nations </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >H.S.R. Desikachar</div>
                <div style={{ marginTop: '30px'}} >
                        <img style={{ float: 'left', marginRight: '20px', marginTop: '30px' }} src={hsrdesikachar} height={200} width={200} />
                        <div className="earlylifepara">Dr.Headathale  Srinivasa Ramanuja Desikachar was born at Hedathale  in 1924. After taking his B.Sc. (hons) in chemistry from Central College, Bangalore he joined the Department of Biochemistry, Indian Institute of Science where he obtained Associateship of the Institute. His work on soya milk secured him a doctoral degree from the University of Bombay, mainly in the area of processing of soyabean milk and its nutrition. He Joined the CFTRI in 1950 after a brief stint at the NCL, Pune. He has worked on parboiling and curing of rice, processing of Sorghum, ragi and other millets, development of ready mixes and tamarind powder while at the C.F.T.R.I.</div>
                        
                    </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Paul M. Jayarajan (20,21)</div>
                <br></br>
                <div className="earlylifepara" >He was born in 1910 into a Srilankan Christian family (His father, Dr S.C. Paul, was the first Srilankan to gain an F.R.C.S.). He studied at Emmanuel college, Cambridge as undergraduate and as an ICS appointee. Mr. P.M. Jayarajan was appointed to the Madras cadre of the Indian Civil Service and took up his first posting in 1933 as Assistant Collector and Magistrate of Malabar District. After postings at Palghat, Madurai, Madras (Chennai), he was collector of the Civil and Military station at Bangalore from 1945-1949. He was known as the “Peoples Collector” as he built housing colonies for the poor and for carrying out campaign against tuberculosis ( and probably his support for feeding school children!).</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}