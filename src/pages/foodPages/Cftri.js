import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg';
import kcreddy from '../../img/kcreddy.jpg';
import convocation from '../../img/convocation.png'
import cftriopening from '../../img/cftriopening.png'


export default function Cftri() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }
    const onClickNext = (event) => {
        history.push("/cftri-continued");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg" style={{backgroundImage: "url(" + stjoseph + ")"}} />
            <div className="container" >
                <br></br>
                <div className="earlylife" >Central Food Technology Research Institute (CFTRI)</div>
                <br></br>
                <div className="earlylifepara" >The Cheluvamba Palace was a building constructed for the residence of Cheluvajamanni, who was the Maharaja's sister. The building was not in use for some years until December 29th 1948, where it was handed over to the Prime Minister Nehru by Jayachamarajendra Wadiyar.</div>
                <div className="earlylifepara" ><a href="cheluvajamanni" style={{ textDecoration: 'none', color: '#3819e9' }} >More about Cheluvajamanni, Third Maharani Kumari and Cheluvamba Palace</a></div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={kcreddy} height={250} width={200} />
                    <div className="earlylifepara" >The Cheluvamba Palace remained vacant for a few years when it reverted to the Maharaja. The Government of Mysore had also generously offered a palatial building called "Cheluvamba Mansion" to the World Health Organization. As luck would have it within a few days the WHO announced their intention to locate their headquarters in Delhi<a href="/references" style={{ textDecoration: 'none', color: "#3819e9" }} >(1)</a>. K.C. Reddy (1902-1976 ) the first Chief Minister of Mysore - <font size="3" style={{fontStyle: "italic"}} >in the picture to the left</font>, was deeply interested that  Food Technological Research Institute to be located in Mysore. Subrahmanyam, has said that K.C. Reddy telegraphed Nehru to fix a date for his visit to Mysore, even before the formal decision of then Maharaja, Jayachamarajendra Wadiyar to hand over the building (Cheluvamba Palace) and that when finally handed over it was at a rent of Rs. One per year. This rent was perhaps charged till the complete integration of Mysore state with the rest of India. The state was still under dyarchy at that time of take over of the building by the Government of India.</div>
                </div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={convocation} height={220} width={380} />
                    <div className="earlylifepara" >Nehru visited Bangalore and Mysore in December 1948. He visited the Indian Institute of Science, drove to Mysore. He was awarded a Doctor of Science degree from the University of Mysore on 28th December 1948 and In the afternoon of the 28th December, 1948 Pandit Nehru witnessed the famous Khedda operations at Kakankote. <font size="3" style={{ fontStyle: "italic" }} >In Picture: Convocation conferring the honorary Doctor of Science by the Chancellor Jayachamarajendra Wadiyar.</font></div>
                    <div className="earlylifepara" >A river drive was arranged and about thirteen wild elephants were captured on that day. Coming back to Mysore by dusk Pandit Nehru visited the Krishnaraja Sagar Dam and the Brindavan Garden. At Hotel Krishnaraja Sagar he attended a banquet given in his honour and came back to Mysore late in the night. On the morning of the 29th, he received on behalf of the Government of India the building known as the "Cheluvamba Mansion", meant to house the Food Technological Institute of the Government of India.<a href="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >(2)</a>.The third international forestry and timber utilization conference Asia and the Pacific convened by the FAO was held in the Cheluvamba Mansion Mysore in March 1949 <a href="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >(3)</a>. In April 1949 the building was transferred to the Government of India.</div>
                    <div className="earlylifepara" ><font style={{ fontStyle: 'italic' }} >"Mysore is grateful to the Government of India for locating the All-India Food Technological Institute within her borders and it is with the greatest pleasure that she has place at the government of India's disposal the spacious buildings and part of the grounds of the Cheluvamba Mansions for the housing of the Institute and its Laboratories. She is also glad that the proposal to add the Fruit Technology Section to the Institute is under active consideration"</font> says K.C. Reddy in 1949.<a href="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >(3)</a></div>
                </div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={cftriopening} height={250} width={380} />
                    <div className="earlylifepara" >The Central Food Technological Research Institute, Mysore, was declared open by the Hon'ble Sri C. Rajagopalachari, on October 21, 1950. The Rajpramukh, the Maharaja of Mysore, presided. The function, which took place in a special panda at the Cheluvamba Mansions, was attended by eminent men of science, officials of the Central and State governments and prominent citizens.</div>
                    <div><font size="3" style={{ fontStyle: 'italic' }} >In Picture : Mr. C. Rajagopalchari (Minister without Portfolio) and Jayachamarajendra Wadiyar in the center. S.S. Bhatnagar to the left. K.C. Reddy to the right (not clear).</font></div>
                </div>
                <br></br>
                <div className="earlylifepara" >The Institute, the fifth in the chain of national laboratories declared open this year, is housed in the magnificent Cheluvamba Mansion, which was taken over by the Government of India in April 1949. The establishment of the Institute was recommended by the Industrial Research Planning Committee of the Council of Scientific & Industrial Research in 1945. The Governing Body of the Council sanctioned the necessary expenditure for formulating detailed plans for the Institute in February1948. The formal agreement regarding the location of the Institute at the Cheluvamba Mansions, Mysore, was reached in December 1948, and the work connected with the planning and organization of the laboratories was entrusted to Dr. V. Subrahmanyan, since appointed Director of the Institute. The arrangements for converting the palace into a laboratory commenced in April 1949, and before the end of the year, the Biochemistry and Nutrition Divisions and a section of the Processing Division were actively functioning. Early in 1950  the Indian Institute of Fruit Technology was merged  with   the   Institute  and   by  July of the same year the Division of Fruit Technology was  fully organized,  not only for carrying out researches on the preservation and processing of fruits and vegetables, but also for  conducting  the  All India Postgraduate Diploma Course in Fruit Technology.</div>
                <br></br>
                <div className="earlylifepara" >Declaring the Institute open, C. Rajagopalachari paid a tribute to the work of Dr. Shanti Swarup Bhatnagar in speedily establishing the national laboratories in the country. He drew attention to the vast scope for research in solving the food problems facing the country, and suggested that scientific research and technological processes should be employed to minimize all forms of food wastage and to preserve all surplus food material. Another field for investigation, he said, <font style={{ fontStyle: 'italic' }} >"is the elimination of the harmful constituents of non-edible materials, and the conversion of the latter in to healthy and attractive food. This also is a vast and very important field of investigation in the plan of supplementing our food resources. Closely linked up with this is the maintenance of nutritional standards by the use of staple subsidiary foods. There is again the problem of the manufacture of concentrated foods and accessories like vitamins on a large scale which would assist the maintenance of proper nutritional standards in India".</font></div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickNext} >Next</Button>
                </div>
            </div>
        </>
    )
}