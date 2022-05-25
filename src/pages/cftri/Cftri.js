import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ABOUTUS from '../../img/ABOUTUS.png';
import kcreddy from '../../img/kcreddy.jpg';
import convocation from '../../img/convocation.png'
import cftriopening from '../../img/cftriopening.png'


export default function Cftri() {
    const history = useHistory();
    const onClickBack = (event) => {
        history.push("/cheluvajamanni");
    }
    const onClickNext = (event) => {
        history.push("/cftri-continued");
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
                <div className="earlylife" >Central Food Technology Research Institute (CFTRI)</div>
                <br></br>
                <div className="earlylifepara" >The Central Food Technological Research Institute is housed in lands enclosing the Cheluvamba Palace. The Cheluvamba Palace was a building constructed for the residence of Cheluvajamanni, who was the sister of the Maharaja H.H. Sri. Krishna Raja Wadiyar (born: 1884; Maharaja: 1894-1940). The building had been not been used for some years prior to its occupation by the C.F.T.R.I.</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={kcreddy} height={250} width={200} />
                    <div className="earlylifepara" > “The Government of Mysore had also generously offered a palatial building called “Cheluvamba Mansion” to the World Health Organization. As luck would have it within a few days the WHO announced their intention to locate their headquarters in Delhi” (1).  K.C. Reddy (1902 –1976) the Chief Minster of Mysore, was deeply interested that Food Technological Research Institute to be located in Mysore. Subrahmanyam, has said, that K.C. Reddy telegraphically requested Nehru to fix a date for his visit to Mysore, even before the formal decision of then Maharaja, Jayachamrajendra Wodeyar to hand over the building. The Cheluvamba Palace, when finally handed over, was at a rent of Rs. One per year. This rent was perhaps charged till the complete integration of Mysore state with the rest of India. The state was still under dyarchy at that time of take over of the building by the Government of India. <font size="3" style={{ fontStyle: "italic" }} >In Picture: K.C. Reddy (1902-1976) First Chief Minister of Erstwhile Mysore</font></div>
                </div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={convocation} height={220} width={380} />
                    <div className="earlylifepara" >Nehru visited Bangalore and Mysore in December 1948. He visited the Indian Institute of Science, drove to Mysore. He was awarded a Doctor of Science degree from the University of Mysore on 28th December 1948 and “In the afternoon of the 28th December, 1948 Pandit Nehru witnessed the famous Khedda operations at Kakankote. <font size="3" style={{ fontStyle: "italic" }} >In Picture: Convocation conferring the honorary Doctor of Science by the Chancellor Jayachamarajendra Wadiyar.</font></div>
                    <div className="earlylifepara" >A river drive was arranged and about thirteen wild elephants were captured on that day. Coming back to Mysore by dusk Pandit Nehru visited the Krishnaraja Sagar Dam and the Brindavan Garden. At Hotel Krishnaraja Sagar he attended a banquet given in his honour and came back to Mysore late in the night. On the morning of the 29th, he received on behalf of the Government of India the building known as the "Cheluvamba Mansion", meant to house the Food Technological Institute of the Government of India.<Link to="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >(2)</Link>.The third international forestry and timber utilization conference Asia and the Pacific convened by the FAO was held in the Cheluvamba Mansion Mysore in March 1949 <Link to="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >(3)</Link>. In April 1949 the building was transferred to the Government of India.</div>
                    <div className="earlylifepara" ><font style={{ fontStyle: 'italic' }} >"Mysore is grateful to the Government of India for locating the All-India Food Technological Institute within her borders and it is with the greatest pleasure that she has place at the government of India's disposal the spacious buildings and part of the grounds of the Cheluvamba Mansions for the housing of the Institute and its Laboratories. She is also glad that the proposal to add the Fruit Technology Section to the Institute is under active consideration"</font> says K.C. Reddy in 1949.<Link to="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >(3)</Link></div>
                </div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={cftriopening} height={250} width={380} />
                    <div className="earlylifepara" >The Central Food Technological Research Institute, Mysore, was declared open by the Hon'ble Sri C. Rajagopalachari, on October 21, 1950. The Rajpramukh, the Maharaja of Mysore, presided. </div>
                    <div><font size="3" style={{ fontStyle: 'italic' }} >In Picture : Mr. C. Rajagopalchari (Minister without Portfolio) and Jayachamarajendra Wadiyar in the center. S.S. Bhatnagar to the left. K.C. Reddy to the right (not clear).</font></div>
                </div>
                <br></br>
                <div className="earlylifepara" >The Institute, the fifth in the chain of national laboratories declared open this year, is housed in the magnificent Cheluvamba Mansion, which was taken over by the Government of India in April 1949.</div>
                <br></br>
                <div className="earlylifepara" >The establishment of the Institute was recommended by the Industrial Research Planning Committee of the Council of Scientific & Industrial Research in 1945. The Governing Body of the Council sanctioned the necessary expenditure for formulating detailed plans for the Institute in February1948. Location of the Institute at the Cheluvamba Mansions, Mysore, was decided in December 1948, and Dr. V. Subrahmanyan was appointed as planning officer initially and as Director of the Institute, subsequently. The arrangements for converting the palace into a laboratory commenced in April 1949 and before the end of the year, the Biochemistry and Nutrition Divisions and of the Processing Division were active before end of the year. In 1950 the Indian Institute of Fruit Technology was merged with the C.F.T.R.I and by July 1950 was actively carrying out researches on the preservation and processing of fruits and vegetables and conducting the All-India Postgraduate Diploma Course in Fruit Technology.</div>
                <br></br>
                <div className="earlylifepara" >C. Rajagopalachari in his opening remarks, acknowledged the work of Dr. Shanti Swarup Bhatnagar in speedily establishing national laboratories in the country. He drew attention to the vast scope for research in solving the food problems facing the country, and suggested that scientific research and technological processes should be employed to minimize all forms of food wastage and to preserve all surplus food material.  Another field for investigation, he said, “is the elimination of the harmful constituents of non-edible materials, and the conversion of the latter in to healthy and attractive food. This also is a vast and very important field of investigation in the plan of supplementing our food resources. Closely linked up with this is the maintenance of nutritional standards by the   use   of staple subsidiary foods. There is again the problem of the manufacture of concentrated foods and accessories like vitamins on a large scale which would assist the maintenance of proper nutritional standards in India."</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}