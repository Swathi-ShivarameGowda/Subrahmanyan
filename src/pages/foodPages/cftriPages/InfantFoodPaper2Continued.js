import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../../img/stjoseph.jpg'
import babyfood6 from '../../../img/babyfood6.jpg'
import babyfood7 from '../../../img/babyfood7.jpg'

export default function InfantFoodPaper2Continued() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }
    const onClickBack = (event) => {
        history.push("/infant-food-paper2");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div style={{
                backgroundImage: "url(" + stjoseph + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '155px'
            }} />
            <div className="container" >
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Roller Drying</div>
                <br></br>
                <div className="earlylifepara" >The series  of papers21,22,23,24 on manufacture using the roller drying process begin with a description of large scale manufacturing that was accomplished in using the roller driers at the Healthway company  at Varanasi .The paper begins with differentiating the two processes and states that for scale and solubility of product the spray drying method was better while for flexibility in scale and keeping quality the roller dried method was better. These trials were also carried out close to a cooperative dairy while the roller dryer was with Healthway foods at Varanasi.</div>
                <br></br>
                <div style={{ marginLeft: '50px' }} ><img src={babyfood6} height={800} width={800} /></div>
                <br></br>
                <div className="earlylifepara" >Chandrasekahara,et al 196023 reported much better shelf-life  than the spray dried product as gauged by organoleptic scores and thiobarbituric acid values. A shelf-life of 10months at 37oc was extrapolated to an expected shelf life of 20 months at room temperature. There was  degradation of thiamine of 15% at room temperature stored samples and 25% in that stored at 37oC. Degradation of thiamine was somewhat higher in Samples containing added iron than those without.</div>
                <br></br>
                <div className="earlylifepara" >Infant feeding trials with roller dried food were conducted at the C.F.T.R.I. on 17 children for a period of 3.5 months for 14 children and 1.0 month for three and an average growth rate of 0.89 lbs per month  comparable to 0.83 lbs per month obtained with the spray dried food. Here as with the earlier experiment the workers noted that those with initial higher birth rates added more weight during the experimental period than those with lower initial weights.24,25</div>
                <br></br>
                <div className="earlylifepara" >The last paper in the series was publications of the results of a rat feeding study where buffalo milk powder and ghee where varied in proportion.28 "The results obtained in the present study have shown that milk foods containing 15% protein and 15% fat, or 15% protein and 26% fat, promote good growth in albino rats comparing well with a milk food containing 20% protein and 20% fat and whole milk powder".</div>
                <br></br>
                <div className="earlylifepara" >Daniel et al (1968)29 report that rats fed Amul baby food where the protein had been brought down to 10% and which had not been supplanted with methionine had poorer growth rate and had  fatty liver (low protein diets cause accumulation of fat in liver) . All the others were sufficient for good rat growth even though addition of methionine increased this in all cases. The results clearly indicate that methionine helps rat weight gain (since rats that grow more have more hair and sulphur amino acids) The authors conclude that bringing down the protein content and supplementation would help double the amount of milk used for infant food. However why just using less milk powder would not do the same thing is not clear. One interesting point that emerges from their data is the change in fat content in the Amul baby food obtained by these workers and that reported previously.11</div>
                <br></br>
                <div className="earlylifepara" >Swaminathan and Parpia (1968)30 reviewed the work carried out on Buffalo milk particularly for infant food.  . Daniel et al (1970)31 noted in six children that increasing the amount of non-essential amino acids  to spray dried buffalo milk powder did not increase retention of nitrogen while the biological value decreased.(biological value is the percentage of nitrogen/protein retained in the body and not excreted in urine or voided in feces).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Vijaya Spray</div>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={babyfood7} height={220} width={380} />
                    <br></br><br></br><br></br>
                    <div className="earlylifepara" >In the seventies some scientists at the C.F.T.R.I: G.Ramnatham, P.K.Ramanathan and B.S. Ramachandra developed a "milk food for babies" and this was taken up by  the Vijaya Dairy Corporation.</div>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Development of Humaized buffalo infant food</div>
                <br></br>
                <div className="earlylifepara" >Harinder Bindra (1979)33 noted that the PER for Amulspray was 2.57 while that for a cows milk based infant food was 2.37 in agreement with the findings of Shrupalekar et al (1964)28.</div>
                <div className="earlylifepara" >Singh (1982)34  formulated a spray dried infant. Here whey was made by adding ,  rennet to the milk. The whey and milk were mixed , warmed, electrodialysed and  homogenised. (This was carried out to increase the lactoglobulin component relative to casein and to decrease the calcium levels in buffalo milk). Similarly cream sperated from milk was homogenized and blended with coconut,. Groundnut and palm  oils. Whey was sterilised , inocluated with B.bifidus. Post homogenization a-lactose monohydrate was added (Addition of crystalline a-lactose monohydrate to the infant food improved the flow propeties of the pwoder while reducing hygroscopicity of the product.    spray drying was carrried out with inlet air at 210oc and outlet air at 90oc.. The product termed "Maternalized Infant Formula"(MIF) contained about  12.0% proteins, 26% fat, 56 % carbohydrates, 2.43% minerals and 2.68% moisture..</div>
                <div className="earlylifepara" >Rao (1986)35  dwelled  on the devlopment of a spray dried  food made from skimmed Bufallo milk for preterm infants. These workers reported a biological value of about 91.8 for the infant food. . Rao (1986)36  and Rao and Mathur (1987a,b) ,38,39 studied the effect of  preheating  milk to 95oC or 110oC on the physical properties of the infant food prepared from such milk. Chandrashekara et al (1957)10 had noted the effects of preheating mil on curd tension. Rao and Mathur (1987c,d) 40 reported changes in solubility of protein on preheating the milk to 95oC or 110oC. They noted a decrease in content of non protein nitrogen and absence of albumin in the preheated samples as compared with that in raw milk.   Rao and Mathur (1987 d,e) 41,42 reported changes in electrophoretic and ion exchnage chromatographic behaviour of proteins preheated milk. kappa casein levels decreased and the amount of proteins eluting at higher strength of salt from proeins bound on to an ion exchange resin.. Thompkinson and Mathur (1987)43 standardized the use of oil/buffalo butter blends to increase the level of unsaturated fatty acids in infant formula.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Dr.Waite</div>
                <br></br>
                <div className="earlylifepara" >Involvement of the Hannah Research Station Ayr, Scotland in the Indian buffalo  milk processing scenario began with the visit Norman C. Wright Director of Hannah Dairy Research institute, Ayhrshire Scotland 1937 submitted a reported  regarding  the development of cattle and dairy industries of India1. L.C.Sikka, member of the Milk Industries report2 submitted a thesis for award of Ph.D while  at The Hannah Dairy Research Institute, Kirkhill, Ayr and writes that "I wish to express my grateful appreciation of the facilities afforded to me by the Council of the Hannah Dairy Research Institute, Kirkhill, Ayr. I am deeply Indebted to Dr N.C. Wright and Dr A.B. Fowler for their constant interest and valuable advice, and to Dr R.A. Robb and Dr J. Wishart for advice on statistical problems".</div>
                <br></br>
                <div className="earlylifepara" >The milk report2   mentions  that the Central Food Technological Research  Insitute at Mysore had began investigations into infant food of malted milk and infant foods. The government of India had requested the help of an expert on dried milk foods and the FAO deputed Dr.R. Waite of the Hannah Research Centre, Airshire, Scotland for six weeks in December 1955</div>
                <br></br>
                <div className="earlylifepara" >Dr Waite had become an established authority on dried milk and, in 1955, on the invitation of the UN Food and Agriculture Organisation, he spent two months in India advising on a program of research on the manufacture of invalid and infant foods (https://www.hannahdairyresearch.org.uk/hannah-dairy-research-history/ )</div>
                <br></br>
                <div className="earlylifepara" >He visited the C.F.T.R.I. as well as different parts of the country and  made  the following recommendations a) that a small experimental factory be set up in a part of the country where buffalo and cows milk would not be required for supply to towns. b) Work to be carried out by the C.F.T.R.I. Mysore, Ministry of food or any other to reduce bacterial load during milk collection. C) The Anand spray drying plant, if agreed to by the Owners (Kaira Milk Producers Cooperative Society) should produce some infant food in collaboration with the C.F.T.R.I  who would "plan the composition" and examine the storability of the product. d) The C.F.T.R.I. should work with both imported skim milk powder and with both cow's and buffalo milk to produce infant foods using both roller drying and spray drying. e) The C.F.T.R.I. should work on a) the bacteriological content of milk and milk powder prepared by spray drying, roller drying and vaccum drying  b) On the curd tension of the raw, processed and dried bufallo milk powder c) using containers other than tin cans for storage of the milk powder d) tableting of fruit flavoured powder e) preparation of lactic acid milk powders. Nutritive studies on a large number of children should be carried out in collaboration with the Indian Council of Medical Research or with those in the practise of medicine. These experiments should be be carried out when a bacteriologically safe powder has been manufactured at the Anand plant. The cocoa flavoured malted milk prepared at the C.F.T.R.I. should be devloped further. Lastly the suggestion was made that a staff member associated with the project should be sent abroad  for some time after having worked on the problem of making infant food for a period of six months to a year (Chandraahekara visited NewZeland duirng that period and has published a paper detailing his reseaarches there in Richards and Chandrashekar (1960)26</div>
                <br></br>
                <div className="earlylifepara" >The paper on shelf life of the spray dried product12 thanks "Dr.R.Waite of the Hannan Dairy Research Institute, Scotland" for his suggestions during a visit to  the C.F.T.R.I. as an F.A.O. expert particularly of  his help in the analysis of gases. Dr.Waite , visited the institute in December 1955. The importance of the Waite visit to C.F.T.R.I. is the manner in which the Howat et al (1939)4 and  Leah et al (1943)5 papers from the Hannah Research station had been studied and procedures followed.</div>
                <br></br>
                <div className="earlylifepara" >Thanks are due to Dr. G.Ramanathan for helping write an account of the involvement of the C.F.T.R.I. in the development of infant baby food in India.</div>

                <div className="earlylifepara" ><a href="/references" style={{ textDecoration: 'none' }} ><font color="#3819e9">References</font></a></div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickBack} >Back</Button>
                </div>
            </div>
        </>
    )
}