import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg';
import saltparboiling from '../../img/saltparboiling.png'
import sandparboiling from '../../img/sandparboiling.png'
import pressureparboiling from '../../img/pressureparboiling.png'

export default function PprcResearch() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }
    const onClickNext = (event) => {
        history.push("/pprc-research-continued");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg" style={{backgroundImage: "url(" + stjoseph + ")"}} />
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
                </div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickNext} >Next</Button>
                </div>
            </div>
        </>
    )
}