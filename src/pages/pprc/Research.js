import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png';
import saltparboiling from '../../img/saltparboiling.png'
import sandparboiling from '../../img/sandparboiling.png'
import pressureparboiling from '../../img/pressureparboiling.png'

export default function Research() {
    const history = useHistory();
    const onClickBack = (event) => {
        history.push("/pprc");
    }
    const onClickNext = (event) => {
        history.push("/research-continued");
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
                <div className="earlylife" >Research at the  Paddy Processing Research Center</div>
                <br></br>
                <div className="earlylife" style={{fontSize: 'larger'}} >Pre Harvest Spray</div>
                <br></br>
                <div className="earlylifepara" >Changes associated with the ripening of paddy, i.e., yellowing of grain and loss of moisture from the kernel may be hastened by spraying a 0.3 to 0.5  per cent salt solution on the ears and thus reduce  period of ripening to 2 days from the usual 15 to 25 days. In this method the loss in moisture content of a standing crop of paddy corresponds to 1 to 1,5 per cent per day and the optimal stage of harvest corresponds to 5 to 7 days earlier than the stage at -which paddy is customarily harvested at present. There is also uniform yellowing of the husk on the third day and hence allows harvest prior to onset of rain.. The salt also enables rapid and quick detachment of grain during threshing. (7;9,14;15,16,29)</div>
                <div className="earlylifepara" >“In the case of paddy, the optimum stage of maturity corresponds to an average moisture content of 20 to 24 per cent.  Loss in moisture content of a standing crop of paddy corresponds to 1 to 1,5 per cent per day and the optimal stage of harvest corresponds to 5 to 7 days earlier than the stage at  which paddy is customarily harvested at present. A study carried out in the paddy Processing Research Centre at Tiruvarur in Tamil Nadu, indicated that changes associated with the ripening of paddy, i.e,, yellowing of grain and loss of moisture from the kernel can be produced by spraying a 0.3 to 0,5- per cent salt solution on the ears of paddy and this- could reduce the period of ripening to 2 days from the usual 15 to 25 days.(19)</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >High Moisture Paddy Problem</div>
                <br></br>
                <div className="earlylifepara" >High moisture content of paddy after harvest, especially in the wet season , fostered  germination, heat development, discolouraton of kernel resulting in the  development of a musty smell. Loss due to spoilage of this grain has been estimated to be about 10% and this is in addition to deterioration of quality of grain. The harvested paddy has therefore to be dried to minimize those losses (7,9, 53 )</div>
                <div className="earlylifepara" >Addition of 1% common salt or 5% common salt with 10% husk powder or huller bran was effective in the prevention of germination, heating, fungal growth and discoloration. The salt/husk powder treated high moisture paddy could be maintained in Jute bags or in heaps when without any further wetting of rain, for about 10 days. After withdrawal of rain, the husk powder may be sieved off and the paddy dried further before storage. The salt husk powder preservation technique may be used for even for grains with more than 28 % of moisture wherein a decrease of moisture  by about 10 % has been noted. Airtight packaging technology with chemical treatment was also developed to preserve high moisture paddy for 10 days. (14, 15,16).  The use of hot sand for drying of wet season paddy also demonstrated (59)</div>
                <div className="earlylifepara" >Singavadivel <font style={{fontStyle:'Italic'}}>et al</font>, 1981 (41) showed that there was very heavy breakage of rice from paddy that had become wet during the rains. This breakage was prevented when the paddy was  mixed with a mixture of husk powder and salt.</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Straw Preservation</div>
                <br></br>
                <div className="earlylifepara" >Wet straw could be stored after treatment with 2% or 5% sodium carbonate helped in preservation of straw for about 21 days in either aerobic or semi aerobic conditions (16). </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Parboiling Technology</div>
                <br></br>
                <div className="earlylifepara" >During parboiling paddy is usually soaked for at room temperature for 2-3 days or at <span>65{'\u00b0'}C</span> for a ferw hours. There is is about 3% loss of solids during the soaking process. The matter that is released causes either for fermentation to occur during the soaking period itself and imparts  malodour to the rice . Even when heated water is used for soaking some matter gets into the effluent and must be treated.The  odour that appears on prolonged soaking could be eliminated  when  an oxygen donating substance, such as chromate or hypochlorite is used. There was a resulting increase in the yield of brown rice obtained from such paddy by 1.4-2.9% (22)</div>
                <div className="earlylifepara" >The PPRC along with engineers  from the TCMF devloped a method to ensure efficient steaming while the paddy moved on a conveyor. (22)</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Salt Parboiling</div>
                <div>
                    <img style={{ float: 'left', margin: '15px' }} src={saltparboiling} height={500} width={300} />
                    <div className="earlylifepara" >An extensive paper on the use of salt in paddy parboiling and preservation was published by Vasan <font style={{fontStyle:'Italic'}}>et al</font>(16). </div>
                    <div className="earlylifepara" >Here the discovery that hot water soaked paddy dropped into boiling sodium chloride was parboiled and could then be dried rapidly as the internal moisture was low was described. Only 0.005% of the salt remained on the surface of the rice polished to about 4-5% (removal of bran and outer endosperm to that extent). Salt could,  hasten the time taken for cooking (Parboiling) and drying the cooked paddy. Furthermore  “ The technique of hot water soaking and steaming was introduced in India by Subrahmanyan <font style={{fontStyle:'Italic'}}>et al</font> (4) during the fifities. Practical application of the method combined with mechanical drying and modern milling , was taken up, however only during the late sixties. The object of the salt treatment is primarily to reduce the cost and also to increase the turn-over which, in turn, will bring additional earning to the miller.”</div>
                    <div className="earlylifepara" >One problem that was encountered at the TCMF rice mill was that parboiled paddy had 33% moisture while the mechanical dryers could reduce (in one pass moisture, only to 22%.”The TCMF has been using a process of washing paddy with a brine solution.” It, however, affects the appearance of the final product. The TCMF’ boiled rice is often yellowish in color” (11). Brine in the soak water could reduce the level of water in the finished product allowing rapid mechanical drying at the TCMF rice mill.</div>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Sand Parboiling</div>
                <div>
                        <img style={{ float: 'left', margin: '15px' }} src={sandparboiling} height={250} width={300} />
                        <br></br><br></br>
                        <div className="earlylifepara" >Sand heated with husk to <span>120-130{'\u00b0'}C</span> could dry the paddy at 20-29% moisture in 5-6 minutes. The sand could be sieved off and reheated prior to reuse as a drying agent, Iengar <font style={{fontStyle:'Italic'}}>et al</font>, (10). Another sand parboiling method developed concurrent parboiling and drying of soaked paddy occurs when paddy mixed with hot sand at <span>150{'\u00b0'}C</span> for 36 seconds in sand roaster. The used sand was  sieved and reheated in the reversed screw conveyor and again mixed with soaked paddy. (56).</div>
                        <br></br><br></br><br></br><br></br>
                </div>
                
                <div className="earlylife" style={{ fontSize: 'larger' }} >Short Soaking and Tempering Process</div>
                <br></br>
                <div className="earlylifepara" >Pillaiyar <font style={{fontStyle:'Italic'}}>et al</font> (57) reported the use of a hot soaking and  tempering step (HSST method) to bring the moisture content of soaked paddy to about 25%  and for uniform distribution of moisture throughout the grain.  This, the “tempering” step was best carried out in insulated vessels. The paddy was then steamed for ten minutes for the parboiling. This method saved energy by 30% by reducing the drying time. Pillaiyar <font style={{fontStyle:'Italic'}}>et al</font>. (59) devised a method  parboiling of paddy that had been presteamed and soaked in water for 12 hour with hot sand at about <span>120{'\u00b0'}C</span>. The rice thus processed was similar to that prepared from soaked and atmospheric pressure steamed paddy. These workers suggest that when the temperature of sand was taken to <span>250{'\u00b0'}C</span> the rice cooked showed all the properties that it had been precooked. The use of such rice to make instant rice soji was suggested. (57)</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Pressure parboiled paddy</div>
                <br></br>
                <div>
                    <img style={{ float: 'right', margin: '15px' }} src={pressureparboiling} height={350} width={300} />
                    <div className="earlylifepara" >Pressure parboiling technology was developed reducing  the processing time to one hour  instead of 5-6 hr used in the hot soaking method (developed at the C.F.T.R.I; 1957)  or 3  days in the cold soaking parboiling method (Traditional) </div>
                    <div className="earlylifepara" >Iengar <font style={{fontStyle:'Italic'}}>et al</font> (12) carried out a number of experiments both at the laboratory level and with  both pilot and large scale trials. They chose   “baby extractors”, which are used for rice bran oil extraction, as where the pressure parboiling would take place. They fed paddy into a jacketed tank containing water at 100oC. The temperature dropped to 65oC. The chaff was skimmed off and the water drained of. Open steam was introduced so that the temperature was maintained at   <span>1150{'\u00b0'}C</span> to <span>120{'\u00b0'}C</span> for eighteen minutes. The paddy was then open or machine dried. The produce was uniform, some varieties small pin point white bellies and the “tough, hard” grains were yellow in color. “The entire time of parboiling was reduced to one hour”. They could process about 27 tonnes per day. Chaff was not satisfactorily removed when a larger extractor of 15 tonnes was used,. Use of jacketed steam during the soaking process prevented cooking and bursting of the paddy. The next section of the paper deals with the design of a pressure parboiling unit. The drawing below is taken from (12)</div>
                    <div className="earlylifepara" >Iengar <font style={{fontStyle:'Italic'}}>et al</font> (17) developed a method wherein paddy was fed into a pressure parboiling tank and steam let until the mass of paddy was hot. Steam under pressure ot 50-75 psi was let in while the pressure on the paddy was 30 psi and a temperature of <span>138{'\u00b0'}C</span>. After ten minutes the stem pressure was withdrawn, and the paddy evacuated at 15psi (Atmospheric pressure). The paddy moisture was 19% and that of the kernel was 20.5%. The paddy could be dried rapidly, and the hull removed even at that moisture. There was no leachate loss and the throughput was increased. The yield of brown rice was 73-77%. The oil content of bran and which had become stabilized (lipase had been eliminated) was estimated to be >30%</div>
                    <div className="earlylifepara" >The pressure parboiled paddy milling breakage reduced to less than 2% compared to 5-  10 %   in other methods. Pressure parboiling methods were developed and quickly spread  through the country. Since there was no control on the amount of pressure used the resulting rice would become very hard Pressure parboiling for high moisture wet season paddy was demonstrated to reduce losses (55). However, systems for making puffed rice from this rice is now been adopted and by these authors for making bulgar wheat</div>
                </div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}