import React, {useEffect} from 'react';
import { useHistory} from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../../img/homenew.png';
import sago1 from '../../../img/sago1.png';
import sago2 from '../../../img/sago2.png';
import sago3 from '../../../img/sago3.png';

export default function Sago() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/philippines");
        //once tapioca macaroni content is availabe remove the above line and uncomment the below line 
        // history.push("/tapioca-macaroni");
    }
    const onClickBack = (event) => {
        history.push("/biographies");
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="headerimg">
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Sago from Tapioca</div>
                <br></br>
                <div className="earlylifepara" >Visakham Thirunal Rama Varma (1837 – 1885) is credited with bringing Tapioca to Kerala (https://www.thehindu.com/life-and-style/food/how-tapioca-came-to-travancore/article28181288.ece.)  Subrahmanyan (1952) writes about the role of tapioca in avoiding famine in Kerala. During 1951 and 1952, there was severe drought in Karnataka and the author urged people in the state of Mysore to take up Tapioca cultivation. He also wrote about how renumerative the production of sago was in Salem  “It has been reported by the Famine Commission that in 1943 the food-grain position in Travancore was even worse than in Bengal. It was tapioca  that saved the people of Travancore” (1). </div>
                <br></br>
                <div className="earlylifepara" >During the second World War, many Indians who where residents of  Indonesia and Malaysia, returned to India bringing with some knowledge for  making  sago from palm and from tapioca. (Sago was first made from the pith of the palm Metroxylon rumphii and Metroxylon sagus. As these became rarer, sago began to be prepared from Tapioca, Mannihot esculenta). “The sago imported into India shortly before the II World War was primarily from tapioca (8)”</div>
                <br></br>
                <div className="earlylifepara" >“The first tapioca sago from the India was  made by “ Messers Stanes and Co through their associated company, the Indian Cashewnuts and Plantations, Thrichur” (7). The factory was closed after Travancore and Cochin banned export of tapioca products. Many of those who retuned to India from Indonesia and Malayasia , settled in Salem and as it was easier to dry  harvested tapioca and tapioca products, began sago production from tapioca at Salem.  The “dry belt of Salem, Namakal and Erode taluks now contain over a hundred factories ranging from a few tons  to a few hundredweight per day”(8). These manufacturers of sago had approached the government of India for imposition of tariff on imported sago. “No licenses for export of sago should be granted to a producer until he has obtained a certificate from the Central Food Technological Research Institute (or the testing laboratory to be established at Salem) to the effect that the quality of sago produced in the factory fulfills Indian Standard Specifications” is an order from the government of India signed by B.B. Saxena, Joint Secretary to the Government of India, published in a report on protection to the sago industry. The report at many points urges the Salem Sago Manufacturers Association to work with the C.F.T.R.I. to standardize the product (6).</div>
                <br></br>
                <div className="earlylifepara" >A survey of the Industrial process by the C.F.T.R.I. indicated that the exact processes changes from factory to factory and involved much manual labor. This led to variation in the product quality. The C.F.T.R.I. proceeded to refine and standardize both process and product(6,8).</div>
                <br></br>
                <div className="earlylifepara" > “The manufacture of sago, as generally followed in Indian factories, comprises the following steps: (1) Washing  peeling. (4) Disintegration of peeled material into a fine slurry. (5) Straining of the slurry to separate the fibrous matter from the starch. (6) Sedimentation of the starch. (7) Draining of surplus water and washing of the starch- (8) Partial sun-drying of the starch. (9) Formation of globules by shakers. (10) Size grading of globules. (11) Roasting of the granules with a thin coat of oil. (12) Heaping and final sun-drying of the roasted product. (13) Mechanical breaking of clumps formed during roasting. (14) Sorting and packing” (8).</div>
                <br></br>
                <div style={{ marginTop: '30px'}} >
                        <img src={sago1} height={200} width='100%' />
                </div>
                <br></br>
                <div style={{ marginTop: '30px'}} >
                        <img src={sago2} height={200} width='100%' />
                </div>
                <br></br>
                <div style={{ marginTop: '30px', marginLeft:'130px', marginRight:'130px'}} >
                        <img src={sago3} height={800} width='100%' />
                </div>
                <br></br>
                <div className="earlylifepara" > “Twenty-one samples of sago prepared from tapioca starch were obtained from different sago factories at Salem, Madras State  (Tamil Nadu ) and were analyzed for the following constituents: Moisture, total and acid insoluble ash, nitrogen, coloured impurities, pulp and fibrous material and acidity. From tapioca starch: moisture (max. 12.5 per cent); total ash (max. 0.35 per cent); acid insoluble ash (max. 0.10 per cent); nitrogen (max. 0.025 per cent); colored impurities (color of sago powder gelatinized with dilute NaOH (max. 1 R+3 Y Lovibond units); pulp and fibrous material (max. 5 per cent); pH of aqueous extract range (4.0-7.0); loss of solids during cooking (max. 25%)”(5). A method for determining the amount of fibre in tapioca sago was developed. The fibre thus estimated varied from nil to 12.5 in seven samples tested (3).</div>
                <br></br>
                <div className="earlylifepara" >A process of  making glucose from tapioca has been described (2).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >References</div>
                <br></br>
                <div className='referencepara'>(1) Subrahmanyan,V. (1952) Industrial crops as food during times of emergency. The Bull.C.F.T.R.I. 11:7-9.  (2) . Desikachar, H. S. R., Bhatia, D. S., and Raghunatha Rao. Y. K. (1953) "Preparation of glucose and sweet syrups from tapioca starch." Bulletin of Central Food Technological Research Institute 2 :180-181. (3) Narayana Rao, M. Rama Rao,G., Swaminathan,M. and Subrahmanyan, V.(1956) Quantitative determination of fibre present in tapioca starch and sago globules. Journal of Scientific and Industrial Research.15: 202-204.  (4). Pingale,S.V., Muthu,M., Sharangapani, M.V. (1956) Insect pests of stored tapioca chips and their control. The Bull. C.F.T.R.I.  5:134-135. (5) Subrahmanyan,V. G. Rama Rao,,G., Narayana Rao,M,. and Swaminathan, M.(1956)  Variations in the chemical composition of sago prepared commercially out of tapioca and proposed specifications for the product The Bull. C.F.T.R.I. 4, :77-81. (6) Damle, K.R.,  Ramasubban, S.C.  Muranjan, S.K. Dutta,J.N. .(1957 ) Report of the continuance of protection to the sago industry (1957) published by The Tariff Commission, Government of India, Bombay. https://archive.org/details/unset0000unse_p0b9/page/n3/mode/2up?q=Indian+Sago+Industry (7) Science & Culture  1960- Volume 25 - Page 343-343. (8) The Indian Sago Industry , (1960) C.F.T.R.I. , Mysore.</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}