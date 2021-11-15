import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg';
import saltparboiling from '../../img/saltparboiling.png'
import sandparboiling from '../../img/sandparboiling.png'
import pressureparboiling from '../../img/pressureparboiling.png'
import babyextractor from '../../img/babyextractor.png'
import pressureguage from '../../img/pressureguage.png'
import ricemill from '../../img/ricemill.png'

export default function PprcResearch() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

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
                <div className="earlylife" >Research carried out in PPRC</div>
                <br></br>
                <div className="earlylife" style={{fontSize: 'larger'}} >Pre Harvest Spray</div>
                <br></br>
                <div className="earlylifepara" >Changes associated with the ripening of paddy, i.e, yellowing of grain and loss of moisture from the kernel, may be hastened by spraying a 0.3% to 0.5% salt solution on the ears. The period of ripening was reduced to 2 days from the usual 15 to 25 days. In this method the loss in moisture content of a standing crop of paddy corresponds from 1 to 1.5% per day and the optimal stage of harvest corresponds to 5 to 7 days earlier than the usual stage at which paddy is customarily harvested at present. There is also a uniform yellowing of the husk on the third day and hence allows harvest prior to onset of rain. The salt also enables rapid and quick detachment of grain during threshing. </div>
                <div className="earlylifepara" >In the case of paddy, the optimum stage of maturity corresponds to an average moisture content from 20% to 24%.  Loss in moisture content of a standing crop of paddy corresponds from 1% to 1.5% per day and the optimal stage of harvest corresponds to 5 to 7 days earlier than the stage at which paddy is customarily harvested at present. A study carried out in the Paddy Processing Research Centre at Tiruvarur in Tamil Nadu, indicated that changes associated with the ripening of paddy, i.e, yellowing of grain and loss of moisture from the kernel can be produced by spraying a 0.3% to 05% salt solution on the ears of paddy and this- could reduce the period of ripening to 2 days from the usual 15 to 25 days.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >High Moisture Paddy Problem</div>
                <br></br>
                <div className="earlylifepara" >High moisture content of paddy after harvest, especially in the wet season, results in germination, heat development, discolouration of the kernel and development of a musty smell. The loss due to spoilage and deterioration of the quality of grain has been estimated to be about 10%. The harvested paddy has to therefore be dried, to minimise those losses.</div>
                <div className="earlylifepara" >Addition of 1% common salt or 5% common salt with 10% husk powder or huller bran was effective in the prevention of germination, heating, fungal growth and discolouration. The salt/husk powder treated high moisture paddy to be maintained in Jute bags or in heaps, when without any further wetting of rain, for about 10 days. After withdrawal of rain, the husk powder may be sieved off and the paddy dried further before storage. The salt husk powder preservation technique may be used even for grains with more than 28% of moisture wherein a decrease of moisture by about 10 % was noted. Airtight packaging technology with chemical treatment was also developed to preserve high moisture paddy for 10 days and it showed that on milling, heavy breakage of rice, from paddy that had become wet during in rain, occurred. This breakage was prevented when the paddy was  mixed with a mixture of husk powder and salt. Drop in moisture of salt treated high moisture paddy is shown below.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Straw Preservation</div>
                <br></br>
                <div className="earlylifepara" >Wet straw could be stored after treatment with 2% or 5% sodium carbonate helped in preservation of straw for about 21 days in either aerobic or semi aerobic conditions.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Parboiling Technology</div>
                <br></br>
                <div className="earlylifepara" >During parboiling paddy is usually soaked for at room temperature for 2-3 days or at 65 degrees celsius for a few hours. There is about 3% loss of solids during the soaking process. The matter that is released causes fermentation to occur during the soaking period itself and imparts malodour to the rice. Even when heated water is used for soaking, some matter gets into the effluent and must be treated. The odour that appears on prolonged soaking could be eliminated when an oxygen donating substance, such as chromate or hypochlorite is used. There was a resulting increase in the yield of brown rice obtained from such paddy by 1.4-2.9%.</div>
                <div className="earlylifepara" >Singarvadivel et al (1978), Singavadivel and Anthoniraj, (1979), Anthoni Raj and Singaravadivel, (1980) and Anthoni Raj et al (1996) in continuation of the work of Subrahmanyan and Dahkshinamurty (1977) showed that there was dry matter loss from paddy during soaking. Both total and reducing sugars were lost. Losses were less during hot soaking and the soluble increased slightly when this rice was parboiled. Least losses occurred when the paddy was wetted and then pressure steamed. There was leaching of phenols from particularly the inner layers of aleurone (bran) during soaking.</div>
                <div className="earlylifepara" >Opening of grain during parboiling results both, in loss of dry matter as well as fungal infection during shade drying. This also leads to scars on grains that result in breakage during milling. Addition of 0.5% to 1.0% salt during the soaking step, prevents opening of husk, decreases fungal infection and increases head rice yield. The PPRC along with engineers  from the TCMF, developed a method to ensure efficient steaming while the paddy moved on a conveyor.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Salt Parboiling</div>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={saltparboiling} height={500} width={300} />
                    <div className="earlylifepara" >An extensive work on the use of salt in paddy parboiling and preservation was compiled by Vasan et al and published by Vasan et al (1973). Here the discovery that hot water-soaked paddy dropped into boiling sodium chloride was parboiled and could then be dried rapidly as the internal moisture was low was described. Only 0.005% of the salt remained on the surface of the rice polished to about 4-5% (removal of bran and outer endosperm to that extent). Salt could, hasten the time taken for cooking (Parboiling) and drying the cooked paddy. Furthermore, the technique of hot water soaking and steaming was introduced in India by Subrahmanyan et al (1955) during the fifties. Practical application of the method combined with mechanical drying and modern milling, was taken up, however only during the late sixties. The object of the salt treatment is primarily to reduce the cost and to increase the turn-over which, in turn, will bring additional earning to the miller. One problem that was encountered at the TCMF rice mill, was that parboiled paddy had 33% moisture while the mechanical dryers could reduce (in one pass moisture, only to 22%. The TCMF has been using a process of washing paddy with a brine solution. It, however, affects the appearance of the final product. The TCMF boiled rice is often yellowish in color. Brine in the soak water could reduce the level of water in the finished product allowing rapid mechanical drying at the TCMF rice mill.</div>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Sand Parboiling</div>
                <div>
                        <img style={{ float: 'left', margin: '15px' }} src={sandparboiling} height={250} width={300} />
                        <br></br><br></br>
                    <div className="earlylifepara" >A sand parboiling method developed where concurrent parboiling and drying of soaked paddy occurs when paddy mixed with hot sand at 150 degrees celsius for 36 seconds in sand roaster. The used sand was sieved off and reheated in the reversed screw conveyor and again mixed with soaked paddy.</div>
                        <br></br><br></br><br></br><br></br>
                 
                </div>
                
                <div className="earlylife" style={{ fontSize: 'larger' }} >Short Soaking and Tempering Process</div>
                <br></br>
                <div className="earlylifepara" >Pillaiyar et al reported the use of a hot soaking and tempering step (HSST method) to bring the moisture content of soaked paddy to about 25% and for uniform distribution of moisture throughout the grain. This, the tempering step was best carried out in insulated vessels. The paddy was then steamed for ten minutes for parboiling. This method saved energy by 30% by reducing the drying time. Pillaiyar et al devised a method of parboiling paddy that had been pre-steamed and soaked in water for 12 hours with hot sand at about 120 degrees celsius. The rice thus processed was similar to that prepared from soaked and atmospheric pressure steamed paddy. These workers suggest that when the temperature of sand was taken to 250 degrees celsius, the rice was in a cooked and dried condition. The use of such rice to make instant rice soji was suggested.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Pressure parboiled paddy</div>
                <br></br>
                <div>
                    <img style={{ float: 'right', margin: '15px' }} src={pressureparboiling} height={350} width={300} />
                    <div className="earlylifepara" >Pressure parboiling technology was developed which reduced the processing time to one hour instead of 5-6 hours used in the hot soaking method (developed at the C.F.T.R.I in 1957) or 3 days in the cold soaking parboiling method. Iengar et al carried out a number of experiments both at the laboratory level and with both pilot and large-scale trials for the pressure parboiling of paddy. They chose "baby extractors", which are used for rice bran oil extraction, as where the pressure parboiling would take place. They fed paddy into a jacketed tank containing water at 100 degrees celcius. The temperature dropped to 65 degrees celcius. The chaff was skimmed off and the water drained off. Open steam was introduced so that the temperature was maintained at 1150 degrees celsius to 120 degrees celsius for 18 minutes. The paddy was then opened or machine dried. The product was uniform, some varieties developed small pinpoint white bellies and the "tough, hard" grains were yellow in color. "The entire time of parboiling was reduced to one hour". They could process about 27 tonnes per day. Chaff was not satisfactorily removed when a larger extractor of 15 tons was used. Use of jacketed steam during the soaking process prevented cooking and bursting of the paddy. The next section of the paper deals with the design of a pressure parboiling unit. The illustration below is taken from Iengar et al (1972). </div>
                    <div className="earlylifepara" >Iengar et al then developed a method wherein paddy was fed into a pressure parboiling tank and steam let in, until the mass of paddy was hot. Steam under pressure of 50-75 psi was then let in, while the pressure on the paddy was 30 psi and a temperature of 138oC was reached. After ten minutes the stem pressure was withdrawn, and the paddy evacuated at 15 psi (Atmospheric pressure). The paddy moisture was 19% and that of the kernel was 20.5%. The paddy could be dried rapidly, and the hull removed even at that moisture. There was no leachate loss and throughput was much higher than previously used methods of parboiling. Milling breakage of pressure parboiled paddy was less than 2% compared to 5- 10 % in other methods. The yield of brown rice was 73-77%. The oil content of the now stabilized bran (lipase had been eliminated) was estimated to be > 30%. Pressure parboiling for high moisture wet season paddy was demonstrated to reduce losses (Pillaiyar and Singaravadivel. 1993)Pressure parboiling methods were developed and quickly spread  through the country. Since there was no control on the amount of pressure used the resulting rice would become very hard. However, systems for making puffed rice from this rice has now been adopted. The Paddy Processing Research Center continued this line of work for making bulgar wheat.</div>
                </div>
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

                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}