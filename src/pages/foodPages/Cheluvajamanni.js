import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg'
import maharani from '../../img/maharani.jpg'
import chamarajendraOrig from '../../img/chamarajendraOrig.jpg'
import maharajapicOrig from '../../img/maharajapicOrig.jpg'
import royalfamily from '../../img/royalfamily.jpg'
import palacea from '../../img/palacea.jpg'
import palaceb from '../../img/palaceb.jpg'
import firstdaughter from '../../img/firstdaughter.jpg'
import seconddaughter from '../../img/seconddaughter.png'
import cheluvambamansion from '../../img/cheluvambamansion.jpg'

export default function Cheluvajamanni() {
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
                <div className="earlylife" >Cheluvajamanni, The Third Maharajakumari</div>
                <br></br>
                <div className="earlylifepara" >H.H.Sri.Chamarajendra Wadiyar (born: 1863; Maharaja: 1868-1894) was married to <a href="https://en.wikipedia.org/wiki/Kempa_Nanjammani_Vani_Vilasa_Sannidhana" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Kempa Nanjammani Avaru Vani Vilasa Sannidhana</a> (1886-1934) in 1878. Five children, Maharajakumari Jayalakshammani Avaru (1881-1924), Maharajakumari Krishnajammani Avaru (1883-1904), Maharaja H.H. Sri. Krishna Raja Wadiyar (born: 1884; Maharaja: 1894-1940), Maharajakumari  Cheluvajamanni Avaru (1866-1936), Yuvaraja H.H. Sri. Kanteeerva Narashimraja Wadiyar (1888-1940), were born to them. At the time of the   death of Maharaja Sri. Chamarajendra Wadiyar in 1894, his eldest son Krishna Raja Wadiyar was only 10 years of age. His mother, Maharani H.H. Smt. Kempa Nanjammani Avaru  Vani Vilasa Sannidhana), then ruled Mysore as Regent till 1902. Maharaja Sri. Krishna Raja Wadiyar ruled Mysore from 1902 to 1940. Maharaja Kumari Cheulvajamnni was married in 1900 to Sardar M. Lakshmikanta Raj Urs.</div>
                <br></br>
                <div style={{ display: 'flex', marginTop: '30px' }} >
                    <div style={{ display: 'inline' }} >
                        <img src={maharani} height={300} width={300} />
                        <div style={{ fontSize: '12px', textAlign: 'center' }}>Maharani Kempa Nanjamani Avaru of Vani Vilas Sannidhana </div>
                        <br></br>
                    </div>
                    <div style={{ display: 'inline', marginLeft: '40px' }} >
                        <img src={maharajapicOrig} height={300} width={300} />
                        <div style={{ fontSize: '12px', textAlign: 'center' }}>Full length portrait of Krishnaraja Wadiyar IV, the Maharaja of Mysore and his brothers and sisters by M. Burahnudin in 1895. This photograph is from the Elgin collection "Autumn Tour 1895. Vol.II".</div>
                        <br></br>
                    </div>
                    <div style={{ display: 'inline', marginLeft: '40px' }} >
                        <img src={chamarajendraOrig} height={300} width={300} />
                        <div style={{ fontSize: '12px' }}>H.H Chamarajendra Wadiyar X with his children, from left, Princess Jayalakshamanni, Princess Krishnajammani, H.H Krishnaraj Wadiyar IV, H.H Kanteerava Narasimharaja Wadiyar, Princess Cheluvajamanni</div>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Cheluvamba Mansion</div>
                <div className="earlylifepara" >Land where the Cheluvamba Mansion now stands, belonged to the Military and "Sick lines of the Siledhar horses" that were stationed there. (Siledhar horses were cavalry where the horses were maintained for the government by the private individuals) (1). The Sildehar horses system was abolished in Mysore state around in 1890 when the Lancers regiments were raised. Evan Maconochie, an Indian Civil Service officer deputed to the Mysore court, was private secretary to the Maharaja Krishnaraja Wodeyar from 1902-19092. He wrote on 4.3.09 to  Mr. Madhava Rao for transfer of land to the third Maharaja Kumari (as Princess Cheluvajamanni was referred to) after payment of Rs. 3,262 for site and Rs.6,300 of site and buildings. This land was acquired for building a house for the third Maharaja Kumari. </div>
                <br></br>
                <div style={{ display: 'inline' }} >
                    <img src={royalfamily} height={300} />
                    <div style={{ fontSize: '12px', textAlign: 'center' }}>Seated: from the left 2. Col.  J. Des Raj Urs , 3.  Sirdar M. Kantha Raja Urs ,  (Both brother in laws of the Maharaja), 4. Yuvaraja Kanteerava Narasimharaja Wadiyar , 5. Maharaja  Krishna Raja Wadiyar, 6.  Dewan P.N. Krishnamurthi , 7. First Councilor V.P. Madhava Rao. Seated on the ground: 3, Evan Maconochie, KCIE, CIE, ICS ( retd), Private Secretary to Maharaja.Standing: 2. Colonel Benson IMS, 11. Major Smitth, IMS;(https://www.rct.uk/collection/2916578/the-mysore-state-officials-andnbspkrishna-raja-wadijar-iv-maharaja-of-mysore-1884)</div>
                    <br></br>
                </div>
                <br></br>
                <div className="earlylifepara" >The sick lines were shifted to "where the old exhibition buildings (now the Mysore Medical College) now exist". Sirdar M. Lakshmikanta Raj Urs (husband of Princess Cheluvajamanni) writes on 11th January 1910 about a  revised plan  of Mr.Subbarayar. The estimate for the building was pared down to Rs. 400,000 without stables and Karohatti (Cow Shed).  On 25th September 1915 Mr. Urs writes to Mirza Ismail, then Huzur Secretary to Maharaja (later Dewan) that "the building is almost completed but Rs. 17,220 was still required.  Mr. G .E. Subrayar relinquished charge. The final cost of the building appears to be Rs. 8,20449!. "G.H. Krumbigel, Director of Horticulture, who also served as consulting architect was the advisor whose opinion Sirdar Laksmikanth Raj  Urs sought for every minute detail". He is very likely to have been the architect of the Third Maharaja Kumari's mansion. The electric connections where supervised by Mr.E. Beams, an American formerly at the General Electrical Corporation.</div>
                <br></br>
                <div style={{ display: 'flex' }} >
                    <div><img src={palacea} height={200} width={400} /></div>
                    <div style={{marginLeft:'60px'}} ><img src={palaceb} height={200} width={400} /></div>
                </div>
                <br></br>
                <div className="earlylifepara" >Cheluvajamanni and Lakshmikanth Raj Urs had two daughters. Rajakumari Doddammanni Avaru was likely , not very well.  Mr. Venkat Rao permanent curator to the Book Depot,   was tutor to the princes from 1-11-1912 to 31-10-27. Mr. P.N. Venkat Rao, Head master of the Institution for the deaf and blind was also Tutor. She was aged 16 when she died (1917-18).</div>
                <br></br>
                <div style={{ display: 'flex' }} >
                    <div style={{ marginLeft: '160px' }} ><img src={seconddaughter} height={300} width={200} /></div>
                    <div style={{ marginLeft: '160px' }} ><img src={firstdaughter} height={300} width={200} /></div>
                </div>
                <br></br>
                <div className="earlylifepara" >The second daughter was Rajkumari Chennajammanni and was married to Dalvoy Madangopala Raj Urs. and, moved eventually to a new Palatial Bungalow called Avalon in Palace Orchards, Bangalore (Avalon houses The National Tuberculosis Institute). She passed away around 1954.</div>
                <br></br>
                <div className="earlylifepara" >There was a complaint from Sally McGann, wife of the Doctor with the Palace in the forties who lived in a building on the other side facing the palace (The High View : The Current Commissioners Office, probably built about 1902), that Mosquitoes were rampant. The sewage lines laid earlier in 1912. On which Sir M Vishweshawarya had advised and were repaired about 1940.</div>
                <br></br>
                <div className="earlylifepara" >Princess Cheluvajamanni was deeply involved in the Vani Vilas Ladies club for which Sally McGann was the first vice president (4),. "Mrs. McGann, O.B.E., the vice-president of Vani Vilas Club, was indefatigable in her work for the club, which owes its inception and so much of its popularity and prosperity to her forethought and administrative genius, and to her gracious presence and intense interest in all pertaining to it. Mrs. Mc Gann also served the Royal family members along with her Surgeon Husband and nursed them and was held in high esteem by the family" (personal communication from Mr.Rajchandra).</div>
                <br></br>
                <div className="earlylifepara" >After the death of Princess Cheluvajamanni (1936), Sirdar M. Lakshmikanta Raj  Urs lived in the Mansion  till 1944. After his death the building did not pass on to his adopted son, M. L. Raje Urs and reverted back to the palace.</div>
                <br></br>
                <div style={{ display: 'flex' }} >
                    <img style={{ float: 'left', margin: '15px' }} src={cheluvambamansion} height={220} width={220} />
                    <div className="earlylifepara" >May 6, 1944 : Lagnapatrika  ( Marriage Invitation ) for the marriage of Chi. Sow Sri Veerjammani, eldest daughter of Sri. Ramaraje Urs son of Lokahitaishi Sri. Turuvekere Sri. Puttabasavaraje Urs  with Chi. Sri. M.L. Raje Urs, son of Sirdar Sri Lakshmikantha Raje Urs on 12-5-1944 was submitted to His Holiness Sri Swamiji by the representatives of both parties for His Holiness blessings which were of course, bestowed with garlands and phalamantrakshate to the parties: "The Origin and Growth of Sri Bramhatantra Parakala Mutt" by N. Desikacharya</div>
                    <br></br>
                </div>
                <br></br>
                <div className="earlylifepara" >"In the fifteenth century, Mateswamy, probably a contemporary of Allam Prabhu, came into the Mysore area. He started a movement based on secularism and protection of women.  Two disciples of Manteswamy where settled at Kuruban katte near Kollegala Town while Mateswamy lived at Kappadi  in K.R. Nagar taluk on the banks of the River Cauvery. Two branches of the royal family were entrusted with periodical Jathres (Religious Gathering) at the two sites. Sirdar M. Lakhsmikanta Raj  Urs was hereditary head (Matadhipathi) of Kappadi.  His adopted son M.R. Lakshmikanth Raje Urs succeeded him as Matadhipathi. His grandson M.L.  Varchusvee Srikanta Siddalinga Raje Urs is now the head. The jathre starts close to Shivarathri in February and ends close to Ugadi in March every year and the Mathadhipathi is in charge of conducting it. Food is free and the pilgrims come from different casts and religions. Sirdar  Lakshmikanth Raj Urs would send meticulous bills to the Maharaja regarding expenditure during his tenure as Matadhipathi. <a href="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >5,6</a></div>
                <br></br>
                <div className="earlylifepara" ><span style={{ textDecoration: 'underline' }} >Gratitude</span> : Thanks are due to Mr.Rajachandra, He has been a tremendous source of authentic information and always prompt with answers to our questions. Thanks are due to Mr Sridhar Raj and  Bharathi Urs  for launching me in the path the article has taken. Our gratitude to the Mysore archives is great.  Photos of the palace from N. Niranjan Nikam, Star of Mysore Sunday 18 April 2021 </div>
                <div className="earlylifepara" ><a href="/references" style={{ textDecoration: 'none' }} ><font color="#3819e9">References</font></a></div>
                <br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}