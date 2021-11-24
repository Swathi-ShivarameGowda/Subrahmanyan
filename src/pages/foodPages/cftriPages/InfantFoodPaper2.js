import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../../img/stjoseph.jpg'
import babyfood from '../../../img/babyfood.jpg'
import babyfood1 from '../../../img/babyfood1.png'
import babyfood2 from '../../../img/babyfood2.jpg'
import babyfood3 from '../../../img/babyfood3.jpg'
import babyfood4 from '../../../img/babyfood4.jpg'
import babyfood5 from '../../../img/babyfood5.jpg'

export default function InfantFoodPaper2() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }
    const onClickNext = (event) => {
        history.push("/infant-food-paper2-continued");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg" style={{backgroundImage: "url(" + stjoseph + ")"}} />
            <div className="container" >
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Shelf life of the spray dried product paper12</div>
                <br></br>
                <div className="earlylifepara" >Their criteria as was in their reference paper that of solubility of the product on reconstitution, the palatability, shelf life, presence of off odor, and the need to eliminate oxygen through the passage of oxygen during storage of the spray dried product. Leah et al 19435 had also warned that presence of copper as was possible with copper vessel stored milk, could increase the intensity of off flavor produced in milk powder during storage. Infant food was prepared as above when milk was collected in sterilized stainless steel (and chilled) or aluminum vessels (three hours to reach laboratory). Milk containing straw and A milk stored in copper vessels was also used to make the infant food. The food was packed in air or in the presence of nitrogen using an apparatus similar to that described in Leah et al 1943 (5). A Haldane apparatus was used to measure carbon di oxide and oxygen. The figure given below is from an unrelated publication but illustrates the nature of the apparatus. </div>
                <br></br>
                <div style={{ marginLeft: '50px' }} ><img src={babyfood} height={400} width={800} /></div>
                <div className="earlylifepara" >Cabinet for gas packing as described in Leah et al 1943 (5). A similar apparatus used in Chandrashekara et al 1957 (12).</div>
                <div style={{ marginLeft: '50px' }} ><img src={babyfood1} height={400} width={800} /></div>
                <div className="earlylifepara" >Apparatus for measuring the pressure in cans and for sampling the head-space gas for analysis (Leah et al 1943,5) similar to that adopted by Chandrashekara et al 1957. 12</div>
                <div style={{ marginLeft: '350px' }} ><img src={babyfood2} height={500} width={300} /></div>
                <div className="earlylifepara" >Modified Haldane Apparatus (Nagarajan and Murrin, 197333 ..  Chandrasekhara et al 195712   used a Haldane apparatus  to measure oxygen in cans.</div>
                <div className="earlylifepara" >The apparatus was used to measure the oxygen content in the tins as varied with processing conditions and time. The samples of infant food prepared from milk obtained in stainless or aluminum cans during collection had the least peroxide values and highest palatability score, used the least oxygen during storage.  This sample was acceptable even when stored at 37oC instead of at room temperature (25-29 oC) for eight months under nitrogen. At room temperature the infant food was acceptable even after 16 months.12</div>
                <br></br>
                <div className="earlylifepara" >The  paper describing the large scale production of spray dried infant food13 applauds "the success of Kaira District Cooperative Milk Producers' Union at Anand in organizing the collection and processing of milk on large scale" and as an "outstanding instance of how cooperation and organization can help in the dairy development in our country" It is with their help that the authors could run large scale trials of the preparation on infant food using the 5 tons per day capacity spray drier(niro)  that  had been  installed at Anand. The important steps in the production were</div>
                <div className="earlylifepara" >
                    <ol>
                    <li>"Reduction of fat content of the buffalo milk to 2.5 per cent</li>
                    <li>addition of phosphate buffer salts to react with ionised calcium and thus reduce the curd tension of the infant food</li>
                    <li>addition of sugar so as to reduce the protein content of the final product to about 22 per cent and the fat content to about 14 per cent</li>
                    <li>concentration</li>
                    <li>addition of vitamins and homogenization</li>
                    <li>drying and</li>
                    <li>packing in nitrogen atmosphere"</li>
                    </ol>
                </div>
                <div style={{ marginLeft: '50px' }} ><img src={babyfood3} height={800} width={600} /></div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Feeding Trials of the Spray Dried Baby food</div>
                <br></br>
                <div className="earlylifepara" >The infant food prepared at Anand and labelled as Amul baby food was taken for infant feeding trials conducted at Mysore, Madras (Chennai) and Delhi.</div>
                <div style={{ marginLeft: '50px' }} ><img src={babyfood4} height={400} width={800} /></div>
                <br></br>
                <div className="earlylifepara" >The study on 75 infants with infant food containing 22% and 14% fat along with added vitamins was able to induce growth rates same or better than the standard Indian rate of growth of infants. There were no incidences of vomiting or other untoward effects and was consumed with great relish.</div>
                <br></br>
                <div className="earlylifepara" >"While, tapping the different sources of milk for feeding, the C.F.T.R.I.  processed standard foods from buffalo's milk. One such is: Amul" which is a low curd tension suitable for the easy digestion by the infants' system and compares well with imported foods" writes Misra.20 Clinical trials of 'Amul' infant food on normal  (Control) and marasmic  (energy deficient) infants and children was carried out in the in-patient, out-patient and child welfare departments of the Institute of Child health, Calcutta from 15th April 1957 to 15th October,1958.A toral of 25 children were tested, A group of about 8 children , fed on different milk products was control There was weight gain in all groups but more so in children who where sick or marasmic. Hb was lower in the marsmic groupand improved to normal level of 12.5. Tbe serum protein increasse from 37-5.0% to 4.2-6.8%, albumin from 0-63-2.5% to 2.83-4.0 and globulin decreaed from 2.07-4.0 to 1,37-3.7. the serum protein patterns as determined by electrophoreisis became normal in the marasmic children and excretion of amino acid ceased on feeding AMUL. The author thanked "Dr.V.Subrahmanyan, Director, Central Food Technological Research Institute, for kindly supplying samples of 'Amul" infant food in this trial."</div>
                <div style={{ marginLeft: '50px' }} ><img src={babyfood5} height={400} width={800} /></div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickNext} >Next</Button>
                    </div>
            </div>
        </>
    )
}