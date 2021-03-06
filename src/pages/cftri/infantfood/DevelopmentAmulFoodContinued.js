import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../../img/homenew.png'
import amul1 from '../../../img/amul1.jpg'
import amul2 from '../../../img/amul2.jpg'
import amul3 from '../../../img/amul3.jpg'
import larsenandturbo from '../../../img/larsenandturbo.jpg'
import vijayaspray from '../../../img/vijayaspray.jpg'
import socialscientist from '../../../img/socialscientist.jpg'


export default function DevelopmentAmulFoodContinued() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/process");
    }
    const onClickBack = (event) => {
        history.push("/development-amul-food");
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
                <div className="earlylife" >Development of Amul Baby food (continued...)</div>
                <br></br>
                <div className="earlylifepara" style={{ fontSize: 'larger', fontWeight:'bold' }} >Subrahmanyan's Notes on the Process in his own words</div>
                <div className="earlylifepara" style={{ fontStyle: 'italic', fontWeight:'bold' }} >“A note on the researches, pilot plant studies and negotiations leading to the lease of the process for the production of baby food based on buffalo milk”.</div>
                <br></br>
                <div className="earlylifepara" >“It was in the above capacity (Director,CFTRI, Mysore) that I started during the early fifties, a program of research relating to the production of a baby food based on buffalo milk. I realized that, at that time it was only buffalo milk which was available in surplus quantities in some parts of the country. There was need for such a research because all the baby foods produced till then, in different parts of the world were based only on cow’s milk; and buffalo milk was not being used anywhere for the production of baby food</div>
                <br></br>
                <div className="earlylifepara" >The work on the subject was started in the early fifties with three senior associates who are still in the institute-Sri M.R. Chandrashekara, Dr.M.Swaminathan and Dr.D.S. Bhatia. The original concept was mine and I realized that India is to make a beginning in the line, it could be only with buffalo milk which is available in surplus quantities in some parts of the country and which can also be produced in still larger quantities, if there is a guaranteed off-take. I also foresaw the practical difficulties in respect of the solubility and digestibility of a product based on buffalo milk. It was with this view that I suggested the addition of buffers that will improve the dispersibility and digestibility of buffalo milk protein. The earlier laboratory work and subsequent trials under subsequent trials under factory conditions were carried out by Shri. Chandrasekhara, to whom we rightly assigned the first place for the Kidwai award. The nutritional evaluations and feeding trials with children were in charge of Dr.Swaminathan. Dr.Bhatia supervised the technological part of the work as he had previous experience of similar work at one of the Military dairies in the Punjab. I had entrusted the work jointly to Dr. D.S.Bhatia who was then Head of the Processing Division and to Dr.M.Swaminathan who was then the head of the Division of Nutrition and dietetics. Shri M.Chandrashekara, who was then an Assistant, was  assigned to help in the work, particularly in respect of the preparatory and processing work. I had also given them the guide-lines relating to 1) the elimination of metallic (particularly copper) contamination from the collecting vessels 2) the removal of the excess amount of butter fat, which is generally characteristic of buffalo milk and 3 adjustment of the buffer salts (chiefly citrate and phosphate) which were deficient in buffalo milk as compared with cow’s milk.</div>
                <br></br>
                <div className="earlylifepara" >The present Director (Dr.H.A.B. Parpia) joined the Institute as an Assistant Director in charge of information Statistics and extension services, at a later date. By that time, we had completed all the technical work and also the preparatory trials. The negotiations with the Kaira Union had also reached the final stage.</div>
                <br></br>
                <div className="earlylifepara" >All the scientific and technological research papers on the subject bear the name of Shri Chandrasekhara, Dr. M.Swaminathan, Bhatia and myself. Subsequently we published two more papers bearing on the calculation of costs and this was in collaboration with Dr.Parpia.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Pilot Plant studies with assistance from the NRDC</div>
                <br></br>
                <div className="earlylifepara" >The work had to be followed up by pilot plant studies to demonstrate the feasibility of commercial production and also to evaluate the product, as compared with the imported preparations, by extensive feeding with babies in different parts of the country, For production of at least a tonne of the product, we needed proper equipment and funds, For help in production, I sought the assistance of Mr. (now Dr.) V.Kurien who still is the manager of the Kaira Cooperative Milk Producers Union Anand. Dr.Kurien had then only a spray dyer, but he readily agreed to use it for our trials if we could meet the entire cost. After getting his estimate, I approached the National Research Development Corporation (NRDC) for advance of Rs. 10,000/- towards the cost of the trials. The latter was quickly sanctioned, and I was able to arrange for early production of the trial batch at Anand. Subsequently, Dr.Swaminathan and I arranged for the evaluation studies at a number of centers in different parts of the country. The studies carried out, particularly, at the child centers at Bombay and Calcutta were very valuable and showed convincingly that our product was comparable, in every respect, with some of the well known brands which were then being imported into our country. </div>
                <br></br>
                <div className="earlylifepara" >There was however some diffidence about the keeping quality (shelf life) of the spray-dried product as the evacuation and gas filling techniques has not then been perfected in our country. As we were aware some of the well-known and popular bands had been made by roller drying, we looked round for suitable equipment and learnt that one was available at Benares, For this again, we had to pay and the NRDC gave me a further advance towards this trial. I deputed Shri Chandrashekara for this work, so that he may study the operations and arrange for the packing and dispatch of the finalized product. This experiment was also successful. Storage studies indicated that without any special precautions, roller dried product can keep, for at least a few months without development of rancidity or any off odor. Based on the above findings, I contacted Dr.Kurien, who had expressed keen interest in taking up production. Despite our enthusiasm, Dr. Kurien and I realized that the product was new to our country and required a good marketing organization which had also previous experience in the line. With the prior concurrence of Prof. M.S. Thacker, who was then the Director-General of Scientific and Industrial Research, we contacted Mr.Palmer, who was then the General Manager of Glaxo Laboratories in India. Mr. Palmer was interested but stipulated that his concern should have the entire control over the production and his firm would market the baby food under its own proprietary name, as its own product. We were not agreeable to this proposal. The later efforts of Prof. Thacker, to get a different decision through the head office of the firm in U.K. also proved unfruitful. It was then that Dr. Kurien took the bold decision to take up the manufacture with the resources of his own firm and to get another leading firm (Voltas) to help with the marketing.</div>
                <br></br>
                <div className="earlylifepara" >With the above as the background  and with the prior concurrence of Prof. Thacker, Dr.Kurien and I met Seth Kasturbhai Lalbhai, who was then Chairman of the National Cooperative Development Corporation , at Ahmedabad. At that meeting, Seth Kasthurbahi stipulated and Dr.Kurien agreed to pay a royalty for the rights to utilize the process. We were all keen about the development of a new industry in the country and the royalty was intended to be no more than a token. On the basis of this, Dr. Kurien made a formal application and the terms were formally approved by the NRDC at one of its meetings</div>
                <br></br>
                <div className="earlylifepara" >The matter of sharing in the royalties would not have attracted and attention if the process had not proved a success. It proved highly successful and because, in fact, the most important processes leased out by the N.R.D.C. The credit for these successes should go to Shri Kurien and his associates.”</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >References by the Kaira Diary to the C.F.T.R.I. process</div>
                <br></br>
                <div className="earlylifepara" >In a press note was published in the Indian Dairyman (1960) under the heading “Plant for cheese and baby food: A Rs.31-Lakh factory promoted by the Kaira District Co-operative Milk Producers Union was inaugurated on October 31, 1960 by Shri Morarji Desai, Union Finance Minister at Anand (Kaira dist.) in Gujarat. The Union is one of the four firms permitted to set up baby food plants in India. The plant at Anand will produce 2500 tons of baby food and one million lbs. of cheese a year. The process is automatically controlled and for the time in the country milk will be pasteurized by electronically controlled machines. The baby food formula, originally developed at the Central Food Technological Research Institute, Mysore has been perfected in collaboration of Anand’s dairy experts” (8,9,11,12).  Amul received ISI certification the next year and the role of the CFTR in that process was acknowledged (10). Tins with Central Food Technological Institute referred to on the lid were released  (The Indian Standards Institution and the Kaira District Milk cooperative Milk Producers Union have also been referred to).</div>
                <br></br>
                <div className="earlylifepara" >Furthermore in contrast to the sharp comments by Dr. Kurien mentioned above, it is clear that in a number of advertisements during the years 1964-1966 at least, that the advertisements from Amul have carried openly references to the contribution of the Central Food Technological Research Institute Dr. Kurien was made honorary member of the Association of Food Scientists and Technologists (Journal of Food Science and Technology, 1965: 6, 49.) and in 1983, received the Subrahmanyan Industrial Achievement Award (named after Dr.V.Subrahmanyan) by that Association,</div>
                <br></br>
                <div className="cheluvajamanniimg" >
                    <img src={amul1} height={280} width={280} />
                    <div style={{ marginLeft: '30px' }} ><img src={amul2} height={280} width={280} /></div>
                    <div style={{ marginLeft: '30px' }} ><img src={amul3} height={280} width={280} /></div>
                </div>
                <br></br>
                <div className="earlylifepara" >An advertisement brought out in 1964 (Journal of Food Science and Technology, October 1964)  states that “The certification of Amul Milk Food by the ISI necessarily involves high standards of production under strict quality control measures. These are in addition to regular quality testing by the Central Food Technological Research Institute. C.F.T.R.I. formulated Amul Milk Food after five years of research, to suit the special needs of babies in the tropics”. The advertisement further catalogues the composition of the milk food and that the product was made from fresh milk” In another advertisement (Readers Digest October, volume 87 1965, page 26) is stated that “Amul Milk food has won the Kidwai price and “Experts at the Central food Technological Research Institute formulated the Amul Milk food-to suit the food needs of babies in India and won the Kidwai Prize”. (The Kidwai price for formulating the baby food was given in 1960). Identical Advertisements to the one above are seen in the Indian Dairyman even up to 1967. Both advertisements discussed here and many others from that period show the blue tin and this as Kamath also accords, indicates the use of roller drying process to produce the food.  Amul spray was launched in 1968 (<a href="https://prsi.org.in/amul/" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://prsi.org.in/amul/</font></a>) and the tins were painted in white. </div>
                <br></br>
                <div className="earlylifepara" >Dalaya and Patel in 1974 (17) write,  “Research work carried out at the C.F.T.R.I., Mysore, conclusively established that buffalo milk can be processed into excellent baby food with lower curd tension, which is easily digestible and ideally suited for infant feeding. They go on to state that initially in the roller drying process problems of solubility and reconstitution as well as problems of fat separation. These problems were solved and adopted during large-scale preparation of roller dried infant food (16).   Dalaya (1921-2004) was very important in the development of the infant food at Anand and was Managing Director at Amul (<a href="http://bmvyas.blogspot.com/2017/04/hm-dalaya-silent-milk-man-of-india.html" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">http://bmvyas.blogspot.com/2017/04/hm-dalaya-silent-milk-man-of-india.html</font></a>) whose role in development of many Amul products has been dealt with in the three biographies on Kurien (13,14,15).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Role of Larsen and Toubro</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', marginTop: '10px', marginRight:'25px' }} src={larsenandturbo} height={350} width={250} />
                    <div className="earlylifepara" >The Larsen and Toubro were agents for NIRO at that time and for a long time afterwards. The UNICEF also provided money for another spray dryer plant at Rajkot and according to the advertisement appended  (Larsen and Toubro advertisement, Food Science 9 September, 1960) the Vijayawada dairy also obtained a NIRO spray dryer. The Larsen and Toubro and Niro joint venture continued in India till 2004 when  Niro A/S, Denmark, which is a part of GEA-the euro 3 billion major based in Germany, took over their assets in India. (18) </div>
                    <div className="earlylifepara" >The milk committee reported that M/S. A.P.V. Engineering Company and M/S Larsen and Toubro had been licensed to manufacture “stainless steel hollow-ware, such as milk tanks, bath pasteurizers and other process vessels”. Furthermore, Larsen and Toubro was listed as agents for Silkeborg Maskin Fabrik Denmark while TTK was agent for  Danske Mejeries Maskin Fabrik, Koldin, Denmark <font size="1">(5)</font></div>
                    <br></br>
                </div>

                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Vijayaspray</div>
                <br></br>

                <div className="earlylifediv" >
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={vijayaspray} height={350} width={450} />
                            <br></br>
                        </div>
                        <div style={{ display: 'inline', marginLeft: '20px' }} >
                            <img src={socialscientist} height={350} width={350} />
                            <div className="earlylifedesc" >Social Scientist, 1978</div>
                            <br></br>
                        </div>
                    </div>

                <br></br>
                    <div className="earlylifepara" >Apparently when Kaira insisted that  the Andra Pradesh Dairy Development market Baby Food on the  AMUL  brand name, the  A.P.D.C. contacted the C,F.T.R.I.  which became involved in the development of a slightly altered process, lowering of curd tension by heat treatment of formulated milk prior to concentration and drying. The product was being marketed at least in 2002 (17). G.Ramanathan, P.K. Ramanathan and B.S. Ramachandra were some of the scientists associated with the project</div>
                    <br></br>
                    <div className="earlylifepara" >Thanks are due to Dr.G.Ramanatham for his great help in this effort at understanding the role of the C.F.T.R.I. in the development of infant food from Buffalo Milk and to Dr. N.Chandrasekhar for meticulous editing of the manuscript.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >References</div>
                <br></br>
                <div className='referencepara'>(1) Wright,N.C. (1937) Report on the development of the cattle and dairy industries. Government of India Press, Simla  (2) McCabe Terrence W. (1955) What kind of market is India for our dry milk. Foreign Agriculture: A Review of Foreign Farm Policy, Production, and Trade. XIC:160-161. (3) Lok Sabha Debates (1956) VOL.3. Issue 1. 3217-3218.  (4)  Subrahmanyan, V., Chandrashekar,M.R. Narayana Rao,M., and Swaminathan,M. (1959) Studies on Infant and Invalid Foods based on Milk Eds. Parpia ,H.A.B.,   Bhutiani,R.C.,   Radhakrishnan,K.L. Sankaran,A.N. and Subbarayappa , B. V. C.F.T.R.I. Mysore. (5) Sikka Chand, K. L. C. and Mehta,V.A.(1960) Report of the committee on milk powder industry. Government of India Press,  New Delhi. (6) Estimates Committee (1962-63) Twenty Seventh Report (Third Lok Sabha) Ministry of Scientific Research and Cultural Affairs. 1963. Published under rule 382 of the Rules and Procedure and Conduct of business in Lak Sabha (Fifth Edition) and printed by the Parliamentary wing of the Government of India Press, New Delhi . (7) Prime Minister Nehru Visits Plant at Anand. Baby Food to be made in the Co-operative sector. (1960)  Indian Dairyman, 12 :101-102. (8) Mr. Moraji Desai opens Amul Baby Food Plant. First of its Kind in India (1960). Indian Dairyman, 12:301-302. (9) Subrahmanyan,V. (1960) Infant food from buffalo VI Large Scale production of roller dried infant food. Food Science,  9: 1-2.  (10).  Infants foods and ISI certifications. (1961) Indian Dairyman, 357-361 (11) Balu,V.(1961)  Science aids development of Indian Infant-food. Indian Dairyman.  (12) Research and Industry (1961). 6:23. (13) Kamath,M.V. (1996) Milkman from Anand  The story of Verghese Kurien. Konark Publishers, New  Delhi. Page 100-102. (14) Ruth Heredia (1999) The Amul India Story  Tata McGraw-Hill Pub. Company. Page 153. (15 ) Kurien Verghese and Salvi Gouri. (2005) I too had a Dream.  APH Publishing. Kindle Edition. Page 81.  (16) Dalaya,H.M and Patel,I.M. (1971)  The problems of the use of Buffalo milk for milk products. Indian Dairyman, 23:199-202. (17) Government of Orissa Compilation of Important Circulars and Orders issued by Finanace Department during 2001-2002. <a href="https://finance.odisha.gov.in/sites/default/files/2020-02/2001-02.pdfpage" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://finance.odisha.gov.in/sites/default/files/2020-02/2001-02.pdfpage</font></a> 74. <a href="https://finance.odisha.gov.in/sites/default/files/2020-02/2001-02.pdf" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">https://finance.odisha.gov.in/sites/default/files/2020-02/2001-02.pdf</font></a> (18) L&T exits JV with Niro (2005) Financial Express. Mumbai, May 26.</div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}