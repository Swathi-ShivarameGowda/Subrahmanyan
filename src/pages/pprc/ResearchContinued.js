import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png'
import babyextractor from '../../img/babyextractor.png'
import pressureguage from '../../img/pressureguage.png'
import ricemill from '../../img/ricemill.png'
import paraboiledpaddy from '../../img/paraboiledpaddy.png'

export default function ResearchContinued() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/post-harvest-tech");
    }
    const onClickBack = (event) => {
        history.push("/research");
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
                <div className="earlylife" >Research carried out in PPRC (continued...)</div>
                <br></br>
                <div className="earlylife" style={{fontSize: 'larger'}} >Bulgar Wheat</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', marginTop: '10px', marginRight:'30px', marginLeft:'10px' }} src={babyextractor} height={400} width={300} />
                    <div className="earlylifepara" >A baby extractor used for solvent extraction of rice bran oil was the vessel used. The vessel was half filled with water and the wheat fed into it. The chaff etc was skimmed off, water circulated for about five minutes and the water drained off along with mud and sand. The wheat was open steamed for about ten minutes and then at higher pressure of 12.5 kg/cm2for 5 minutes. This led to partial cooking of the wheat. Since the wheat was hot, drying was rapid in a mechanical drier. The wheat bran and germ was removed using rice milling machinery (Schule, Kyowa Polisher or huller) and ground and sieved.  The material was tested for use in the Bal Ahar (Children’s Food) and found satisfactory. This work was to develop substitute for imported Bulgar, (30).</div>
                </div>
                <br></br>
                <div>
                    <img style={{ float: 'right', marginTop: '10px', marginLeft:'30px' }} src={pressureguage} height={350} width={300} />
                    <div className="earlylifepara" >Farbrication and use of a portable husk fired vessel wherein the steam generated is directly fed into the paddy holding tank. This reduced the number of unit operations and units required (30)</div>
                    <div className="earlylifepara" >1.Pressure  gauge 2 Paddy and water inlet 3 Steam outlet 4. Husk Feed Hopper 4 Pressure Chamber.6. Water over flow pipe 7, Chimney 8. Perforated bottom 9, Paddy discharge door 10. Water tank 11. Crane for furnace 12 Ash door</div>
                    <br></br><br></br>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger', marginTop: '50px' }} >Preservation of Wet Parboiled Paddy</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', marginTop: '5px', marginRight:'30px' }} src={paraboiledpaddy} height={400} width={300} />
                    <div className="earlylifepara" >In conventional rice mills, parboiled paddy  is dried in the yard. During  rainy days  drying is difficult and the wet, cooked paddy can spoil. Addition of  0.8 % salt prevents husk opening during parboiling and helps extend the period when it may be kept wet (53). The  drop in moisture of salt treated high moisture paddy is shown below (27).</div>
                    <div className="earlylifepara" >Mixing Acetic acid 0.5% with high moisture parboiled paddy  and covering  with tarpaulin to avoid escape of acetic acid vapour prevents spoilage  helped in preservation for up to  10 days (42).  Mixing 5% common salt with 10 % husk powder or huller bran preserve high moisture parboiled paddy for about one week (51). Addition of 0.05  % Sodium chromate in soak water prior to parboiling also protects paddy from discoloration and spoilage after parboiling and can help extend the soaking period by  4- 5 days without deterioration of  quality.</div>
                    <div className="earlylifepara" >Pillayiar et al (38) write of the use of a cup and cone dryer for drying parboiled paddy: “The trials during high humid weather (December,RH, 85%) indicated that 950kg. of parboiled paddy with about 30% moisture could period be dried to about 14% in 2hr 5 min by maintained a hot temperature of 120 to 130oC, airflow rate of 127.5m3/min and a circulation rate of 4Tph.”. Pingle, 1972 (13) describes  a wet paddy dryer that had been fabricated that uses a blower and a furnace to produce the heated air. The furnace could be heated with burning rice (22) </div>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Losses during Parboiling</div>
                <br></br>
                <div className="earlylifepara" >Singarvadivel et al (27) in continuation of the work of Subrahmanyan and Dahkshinamurty, 1977  (24) showed that there was dry matter loss from paddy during soaking and this was a mixture of both total and reducing sugars. Losses were less during hot soaking increasing slightly when this rice was parboiled. Least losses when the paddy was wetted and then pressure steamed. </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Rice Milling</div>
                <br></br>
                <div className="earlylifepara" >In India, a large quantity of rice was made from paddy using hullers where the seed coat and the bran were removed simultaneously and mixed together. In a report on the development of better methods milling of rice the use of a cleaner to remove “dust, chaff, sand”, a rubber lined dehusker or a rubber roll sheller, a winnower capable of cleaning the dehusked rice as well to separate paddy with husk from that which has been dehusked. Bran from the dehusked rice was removed with  an Engelburg huller. Broken rice was removed using a grader (sieves are used to remove smaller pieces). The bran was also sifted to remove broken rice. Oil content of the bran now reached 23% allowing economic extraction of oil and production of cattle feed from the de-oiled bran. </div>
                <br></br>
                <div className="earlylifepara" >Earlier, when the Engelburg huller was used to remove husk and bran together, the oil content of that fraction was much lower than 5%. This material could be used neither for cattle feed nor for extraction of oil. This new technique was   popularized all over India (20). </div>
                <br></br>
                <img style={{ marginRight: '35px', marginLeft:'15px' }} src={ricemill} height={350} width="80%" />
                <br></br><br></br>
                <div className="earlylifepara" >The paddy processing research center developed a method where paddy was first passed through hullers with large blade clearance and the husk removed with a winnower. The brown rice was debranned (polished) with a huller. (22). Furthermore a low cost “Low friction huller” to replace modern shelling units for regular use in rural areas so as to allow good quality bran to be extracted after the husk has been removed was developed A method for the separation of germ during milling of rice was brought out.</div>
                <br></br>
                <div className="earlylifepara" >The PPRC worked on a method for enrichment of rice germ and its use in making food products. (45,48)</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Rice Bran Oil</div>
                <br></br>
                <div className="earlylifepara" >A regular breeding programme was inititated to screen varieites for oil (22). A varietal screen revealed that among 21 varieties the oil content in the whole grain (with husk) varied from 1.15 to 4.45%. </div>
                <br></br>
                <div className="earlylifepara" >Vasan et al. (8) presented  a paper “ with the object of studying fractions of the paddy, but also the influence of some of the methods of processing on such distribution.”  Experiments estimating the oil content of bran obtained varied from 20.2 to 27.2% in bran extracted from raw rice  and  32.9-36%  in bran extracted from parboiled paddy. Oil in the paddy is present mostly in the bran (aleurone) and the germ. Though the weight of hand dissected germ fell from 3.4% to 2.1%, oil went up from 35.7 to 45.8%.  It was the soaking process that initiated the movement of oil into the bran (aleurone) layers.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Rice Bran</div>
                <br></br>
                <div className="earlylifepara" >Pillaiyar,1977  (25) discussed the issues involved in stabilizing rice bran and mentions the development of the bran stabilizer at the PPRC. Pillaiyar et al, (28) have designed and fabricated an air heated stabilizer for rice bran. There is an outer drum placed on guide rollers and a inner drum connected at one end to the hot air source which can even be husk fired. A central duct carries the air stream. Metallic plates are soldered to this duct to help mix the bran. 150 kg of bran is loaded each time through a hatch which is hermetically then sealed. The air temperature is 240-260oC and the barn reaches 105oC in 40-45 minutes. There was decrease in moisture in this process. The free fatty acid level (measure of oil degradation) was about 1.6 to 2,56% in four months for parboiled rice bran and 5.2 to 6.4% for raw bran in three months. The furnace used for heating water for parboiling could be used to generate hot air (50).</div>
                <br></br>
                <div className="earlylifepara" >A Pelletization  technology to avoid breaking of rice bran pellets in commercial solvent extraction of rice bran oil industry, Low cost bran stabilization unit is developed (100kg per hr) using husk as fuel.Hydraulic pressing technology for  rice bran oil extraction for   edible us Storage of parboiled bran in specialized containers to arrest rapid increase in FFA for 2-3 months. Methods for enhancing the quality of rice bran prior to extraction of oil was developed. Containers suitable for the storage of bran from parboiled rice was evaluated  and  the use of HDPE sacks instead of jute bags suggested (36; 49).</div>
                <br></br>
                <div className="earlylifepara" >Black ash from burnt husk was used  as a carrier for nitrogen fixing organisms (biofertilizers) and has the advantage that it is ubiquitous and is alkaline (51) and for preparation of Sodium silicate.</div>
                <br></br>
                <div className="earlylifepara" >Thanks are due to many who worked with Dr.V.Subrahmanyan and provided various inputs  : Dr.Singaravadivel (for reprints, photographs and editing) , Dr.Pillaiyar, Mr. B.S. Vasan (who provided the photograph of Thygaraja Mudaliar, the guest house where Subrahmnayn once stayed  and a recount of Subrahmanyan’s last days) and  Dr. Ananthakrishnan, Director IIFPT, Thanjavur.</div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}