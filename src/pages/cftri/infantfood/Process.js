import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../../img/homenew.png'
import buffalomilk from '../../../img/buffalomilk.jpg'
import buffalomilk1 from '../../../img/buffalomilk1.jpg'
import infantfood from '../../../img/infantfood.jpg'
import infantfood1 from '../../../img/infantfood1.jpg'
import infantfood2 from '../../../img/infantfood2.jpg'
import './Process.css';

export default function Process() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/process-continued");
    }
    const onClickBack = (event) => {
        history.push("/development-amul-food-continued");
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
                <div className="earlylife" >Process of making Amul Baby food</div>
                <br></br>
                <div className="earlylifepara" >"Although India has almost a fourth of the cattle in the water buffaloes, its annual milk production furnishes only about 115 pounds of milk per person, far less than the requirements of a population that must look to milk for most of its intake of animal protein (3).</div>
                <div className="earlylifepara" >During the years 1956-57 four reviews 6,7,8,9 were written that bring out the differences between cows, buffalo and human milk and the processing needed to allow feeding of buffalo milk to human infants. Fall in pH on ingestion of milk by infants was greater with human milk than with cow's milk. "It is with this Idea that Cow's milk which has a higher buffering capacity than human milk is modified by dilution, addition of salts or acids. Curd tension studies on milk and the modified milks have a direct bearing on this. The proteolytic enzymes are well provided both in the stomach and in the small intestines. Hence, there is no difficulty regarding milk protein digestion, when once a soft curd is formed bearing on this". Another large difference is that the ratio of albumin: Casein is higher in human milk than cow's milk. There is more casein in non-human milk and this makes curds formed from them harder. The composition of human, cows and buffalo's milk was compared. An obvious difference is that buffalo milk has more fat and human milk has less calcium. Human milk contains less short chain fatty acids but fatty acids with a greater degree of unsaturation as compared to that of cow or that of buffalo. Modification of cow's and buffalo milk by partially skimming, boiling/dilution and finally acidification /citrating mainly in order to reduce thickness of curd (fine dispersion) and reduction of buffering capacity to that of human milk was suggested.  Since dilution of the energy giving Lactose occurs in the process, sucrose (cane sugar) is often added. These reviews deals with the comparative nutritive value of human and cow's milk to human infants. Differences in weight gain, calcium content and vitamin requirements were listed. Addition of vitamins was recommended as deficiency was noted in some proprietary infant foods.</div>
                <br></br>
                <img className="infantFood" src={buffalomilk} />
                <br></br><br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >Curd Tension</div>
                <br></br>
                <div>
                    <img className="buffalomilk" src={buffalomilk1} />
                    <br></br><br></br><br></br>
                    <div className="earlylifepara">Curd tension, a measure of the thickness of the curd, was measured using the apparatus whose illustration may be seen in the picture. Rennet was added to milk in which the "H" (curd tension knife)  was suspended. Weight of lead shots added to the basket required to lift knife from curd. </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="earlylifepara" >It may be seen from the attached table that the largest reduction in curd tension was when partially skimmed and heated to 85{'\u00b0'}C or so heated along with addition of either phosphate buffer or sodium citrate was added</div>
                <img className="infantFood1" src={infantfood} />
                <div style={{ fontSize: '12px' }} >* Expressed as weight in grams required for the knife to cut through the curd.t Phosphate buffer prepared by dissolving 9 gm of Na2HPO4and 7 gm NaH2PO4 in 100 cc. distilled water added to 50 lbs of milk.# Whole buffalo milk was partially skimmed to a fat content of 4%  before spray drying.</div>
                <br></br>
                <div className="earlylifepara" >The apparatus illustrated above was used  to measure  “curd tension” . It may be seen that the curd of buffalo sets hard (high curd tension) whereas that of boiled milk or that heated to 85{'\u00b0'}C, partially skimmed (fat content partially reduced) and treated with phosphate to citrate allowed the curd tension of buffalo milk to equal that of commercial infant foods.. That is lesser weight was required to remove the “knife” from the curds. (10).</div>
                <br></br>
                <div className="earlylifepara" >Two methods for drying of the buffalo milk for making infant food were tried. One was roller drying and the other spray drying. The relative merits of the two processes have been discussed in review</div>
                <br></br>
                <div className="earlylifepara" >A paper (11) describing the conditions  for the preparation of infant food, begins  with mention that  3000 tons of mainly milk based food was imported and that “only recently steps have been taken for establishing a factory at Anand for the  production of whole and skim milk powder”. Milk was obtained from murrah buffalos (a breed that is high milk yielder) and from the palace dairy farm at Mysore. It was decided that since commercial Infant foods varied protein (14-27% and fat (15-25%) contents and the possible lower fats requirements of Indian children, the infant food that would contain 17-22% protein and a fat content of 15% should be suitable. Milk, received in clean, sterile closed aluminum cans from the diary within three hours of milking, was sampled for both bacteriological and chemical analysis and skimmed with a hand operated cream separator (to a level 2.9% fat). Phosphate buffer was added to the milk prior to pasteurization at 185oF (85{'\u00b0'}C) for 5min. The process of skimming, addition of phosphate and pasteurization helped bring down curd tension. Sugar (boiled syrup)  was added to the milk prior to concentration in an vacuum evaporator. After vitamins (water soluble and fat soluble) supplementation, the concentrated milk was spray dried using a Niro laboratory model spray dryer (Bulletin of the C.F.T.R.I.1951-52 volume 1 page 125) with an inlet air temperature of 392{'\u00b0'}F (200{'\u00b0'}C) and outlet air temperature of 210oF  (98{'\u00b0'}C) The powder was stored in air or under nitrogen. These workers continued their work while trying to compare the use of sterilized stainless-steel containers and sterilized aluminum containers with addition of straw (as was wont by some farmers) or with storage in copper vessels. The bacteriological count and copper content in the infant food was least when sterilized steel vessels were used for collection of milk. The infant milk powder had the level of protein and fat that they aimed at while the curd tension of the food was similar to that to of commercial infant foods tested (Cow and Gate (half cream), Glaxo and Lactogen).</div>
                <br></br>
                <div className="cheluvajamanniimg">
                    <div style={{ marginRight: '50px' }} ><img src={infantfood1} height={350} width={450} /></div>
                    <img src={infantfood2} height={350} width={450} />
                </div>
                <br></br>
                <div className="earlylifepara" >The paper acknowledges the help of Shri B.H. Krishna and S.K. Lakshminarayan (Engineers) for help in the pilot plant.(11)</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                    </div>
            </div>
        </>
    )
}