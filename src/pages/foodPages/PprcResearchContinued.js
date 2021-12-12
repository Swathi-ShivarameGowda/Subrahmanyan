import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import FOODTECHNOLOGY from '../../img/FOODTECHNOLOGY.png'
import babyextractor from '../../img/babyextractor.png'
import pressureguage from '../../img/pressureguage.png'
import ricemill from '../../img/ricemill.png'

export default function PprcResearchContinued() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }
    const onClickBack = (event) => {
        history.push("/pprc-research");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg">
                <img src={FOODTECHNOLOGY} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Research carried out in PPRC (continued...)</div>
                <br></br>
                <div className="earlylifepara" >Iengar et al then developed a method wherein paddy was fed into a pressure parboiling tank and steam let in, until the mass of paddy was hot. Steam under pressure of 50-75 psi was then let in, while the pressure on the paddy was 30 psi and a temperature of 138oC was reached. After ten minutes the stem pressure was withdrawn, and the paddy evacuated at 15 psi (Atmospheric pressure). The paddy moisture was 19% and that of the kernel was 20.5%. The paddy could be dried rapidly, and the hull removed even at that moisture. There was no leachate loss and throughput was much higher than previously used methods of parboiling. Milling breakage of pressure parboiled paddy was less than 2% compared to 5- 10 % in other methods. The yield of brown rice was 73-77%. The oil content of the now stabilized bran (lipase had been eliminated) was estimated to be > 30%. Pressure parboiling for high moisture wet season paddy was demonstrated to reduce losses (Pillaiyar and Singaravadivel. 1993)Pressure parboiling methods were developed and quickly spread  through the country. Since there was no control on the amount of pressure used the resulting rice would become very hard. However, systems for making puffed rice from this rice has now been adopted. The Paddy Processing Research Center continued this line of work for making bulgar wheat.</div>
                <br></br>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={babyextractor} height={400} width={300} />
                    <div className="earlylifepara" >A baby extractor used for solvent extraction of rice bran oil was the vessel used. The vessel was half filled with water and the wheat fed into it. The chaff was skimmed off, water circulated for about five minutes and the water drained off along with mud and sand. The wheat was open steamed for about ten minutes and then at higher pressure of 12.5 kg/cm^2 for 5 minutes. This led to partial cooking of the wheat. Since the wheat was hot, drying was rapid in a mechanical drier. The wheat bran and germ was removed using rice milling machinery (Schule, Kyowa Polisher or huller) and ground and sieved. The material was tested for use in the Bal Ahar (Children's Food) and found satisfactory. This work was to develop substitute for imported Bulgar, Iengar et al.</div>
                    <div className="earlylifepara" >Iengar et a reported the fabrication and use of a portable husk fired vessel wherein the steam generated is directly fed into the paddy holding tank. This reduced the number of unit operations and units required. Iengar et al (1980b) reported the farbrication and use of a portable husk fired vessel wherein the steam generated is directly fed into the paddy holding tank. This reduced the number of unit operations and units required.</div>
                </div>
                <br></br>
                <div>
                    <img style={{ float: 'right', margin: '15px' }} src={pressureguage} height={350} width={300} />
                    <br></br><br></br><br></br>
                    <div className="earlylifepara" >1.Pressure-gauge 2 Paddy and water inlet 3 Steam outlet 4. Husk Feed Hopper 4 Pressure Chamber.6. Water over-flow pipe 7, Chimney 8. Perforated bottom 9. Paddy discharge door 10. Water tank 11. Crane for furnace 12 Ash door.</div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Preservation of Wet Parboiled Paddy</div>
                <br></br>
                <div className="earlylifepara" >In conventional rice mills, parboiled paddy is dried in the yard. During rainy days, drying is difficult and the wet, cooked paddy can spoil. Addition of 0.8 % salt prevents husk opening during parboiling and helps extend the period when it may be kept wet (Singaravadivel and Anthoni Raj, 1983).</div>
                <div className="earlylifepara" >Mixing Acetic acid 0.5% with high moisture parboiled paddy and covering with tarpaulin to avoid escape of acetic acid vapour prevents spoilage  helped in preservation for up to 10 days (Vasan, et al 1981). Mixing 5% common salt with 10 % husk powder or huller bran preserve high moisture parboiled paddy for about one week (Singaravadivel et al, 1981). Addition of 0.05 % sodium chromate in soak water prior to parboiling also protects paddy from discolouration and spoilage after parboiling and can help extend the soaking period by 4- 5 days without deterioration of quality. </div>
                <div className="earlylifepara" >Sand heated with husk to 120-130 degrees celsius could dry the paddy at 20-29% moisture in 5-6 minutes. The sand could be sieved off and reheated prior to reuse as a drying agent, Iengar et al (1971). Pillayiar et al wrote of the use of a cup and cone dryer for drying parboiled paddy: "The trials during high humid weather (December, RH, 85%) indicated that 950kg. of parboiled paddy with about 30% moisture could period be dried to about 14% in 2hr 5 min by maintained a hot temperature of 120 to 130 degrees celsius, airflow rate of 127.5m^3 per minute and a circulation rate of 4Tph". The use of hot sand for simultaneously parboiling and drying of wet season paddy also demonstrated (Pillaiyar et al. 1996) reminiscent of the work of Iengar et al (1971).</div>
                <div className="earlylifepara" >Pingle (1972) describes a wet paddy dryer that had been fabricated that uses a blower and a furnace to produce the heated air. The furnace could be heated with burning rice husk. Development of the Husk fired dryer was mentioned in Chandrasekhar and Pillaiyar.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Rice Milling</div>
                <br></br>
                <div className="earlylifepara" >In India, a large quantity of rice was made from paddy using hullers where the seed coat and the bran were removed simultaneously and mixed together. In a report on the development of better methods milling of rice, the use of a cleaner to remove "dust, chaff, sand", a rubber lined dehusker or a rubber roll sheller, a winnower capable of cleaning the dehusked rice as well to separate paddy with husk from that which has been dehusked. Bran from the dehusked rice was removed with an Engelburg huller. Broken rice was removed using a grader (sieves are used to remove smaller pieces). The bran was also sifted to remove broken rice. Oil content of the bran now reached 23%, allowing economic extraction of oil and production of cattle feed from the de-oiled bran. Earlier, when the Engelburg huller was used to remove husk and bran together, the oil content of that fraction was much lower than 5%. This material could be used neither for cattle feed nor for extraction of oil. This technique was popularized all over India (Subrahmanyan, 1979) .</div>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={ricemill} height={350} width={400} />
                    <br></br>
                    <div className="earlylifepara" >The Paddy Processing Research Center developed a method where paddy was first passed through hullers with large blade clearance and the husk removed with a winnower. The brown rice was debranned (polished) with a huller. (Chandrashekar and Pillaiyar, 1976). Furthermore a low cost "Low friction huller" to replace modern shelling units for regular use in rural areas so as to allow good quality bran to be extracted after the husk has been removed was developed A method for the separation of germ during milling of rice was brought out.</div>
                </div>
                <br></br><br></br><br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Rice Bran Oil</div>
                <br></br>
                <div className="earlylifepara" >A regular breeding programme was initiated to screen varieties for oil (Chandrasekar and Pillaiyar, 1976). A varietal screen revealed that among 21 varieties the oil content in the whole grain (with husk) varied from 1.15 to 4.45%. Vasan et al (1971b) present a paper "with the object of studying fractions of the paddy, but also the influence of some of the methods of processing on such distribution." Experiments estimating the oil content of bran obtained varied from 20.2 to 27.2% in bran extracted from raw rice  and  32.9-36%  in bran extracted from parboiled paddy. Oil in the paddy is present mostly in the bran (aleurone) and the germ. Though the weight of hand dissected germ fell from 3.4% to 2.1%, oil went up from 35.7 to 45.8%.  It was the soaking process that initiated the movement of oil into the bran (aleurone) layers. The PPRC worked on a method for enrichment of rice germ and its use in making food products (Vasan and Kousalya,1982; Iengar, 1984).</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Rice Bran</div>
                <br></br>
                <div className="earlylifepara" >Pillaiyar, (1977) discussed the issues involved in stabilizing rice bran and mentions the development of the bran stabilizer at the PPRC. Pillaiyar et al (1978) have designed and fabricated an air heated stabilizer for rice bran. There is an outer drum placed on guide rollers and a inner drum connected at one end to the hot air source which can even be husk fired. A central duct carries the air stream. Metallic plates are soldered to this duct to help mix the bran. 150 kg of bran is loaded each time through a hatch which is hermetically then sealed. The air temperature is 240-260 degrees celsius and the barn reaches 105 degrees celsius in 40-45 minutes. There was some fall in moisture in this process. The free fatty acid level (measure of oil degradation) was about 1.6 to 2.56% after four months of storage for parboiled rice bran and 5.2 to 6.4% for raw bran within three months. The furnace used for heating water for parboiling could be used to generate hot air (see also Barber and Benito de Barber, 1985). A Pelletization  technology to avoid breaking of rice bran pellets in commercial solvent extraction of rice bran oil industry, Low cost bran stabilization unit was  developed (100kg per hr) using husk as fuel. Hydraulic pressing technology for rice bran oil extraction for edible use was tried. Methods for enhancing the quality of rice bran prior to extraction of oil was developed. Containers suitable for the was storage of bran from parboiled rice was evaluated  suggesting the use of HDPE sacks instead of jute bags (Kumaravel, et al, 1980; Venekatsan et al, 1984). Black ash from burnt husk was used as a carrier for nitrogen fixing organisms (biofertilizers) and has the advantage that it is ubiquitous and is alkaline (Singaravadivel and Anthoniraj, 1988) and for preparation of Sodium silicate.</div>
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                </div>
            </div>
        </>
    )
}