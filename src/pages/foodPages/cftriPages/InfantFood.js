import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../../img/stjoseph.jpg'
import amul1 from '../../../img/amul1.jpg'
import amul2 from '../../../img/amul2.jpg'
import amul3 from '../../../img/amul3.jpg'
import larsenandturbo from '../../../img/larsenandturbo.jpg'

export default function InfantFood() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }
    const onClickNext = (event) => {
        history.push("/infant-food-continued");
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
                <div className="earlylife" >Amul Milk Powder</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Development of Amul Baby food</div>
                <br></br>
                <div className="earlylifepara" >India became the first country in the world to produce baby and Infant food from Buffalo milk in the years 1950-1962. This established the pre-eminence of Amul in the manufacture of this product. The CFTRI, CSIR and the NRDC in their many web sites (<a href="https://blog.mygov.in" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >https://blog.mygov.in</a> > csirs-breakthrough-in-baby-food; <a href="http://www.nrdcindia.com" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} > http://www.nrdcindia.com</a> > SucessStory; <a href="http://www.niscair.res.in" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >http://www.niscair.res.in</a> > images > csirnews_jul10); <a href="" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Celebrating the successes of science in post-independence India-IndiaBioscience</a>) as well as government records of the time (4) proclaim that the CFTRI at Mysore was instrumental in development of the process. Verghese Kurien in the versions that refer to him denies this. However Amul in its own advertisements have acknowledged the role of the CFTRI especially the fact that the Raffi Ahmed Kidwai prize for 1960 was given to a CFTRI team for development of the process. Subrahmanyan who was director at the C.F.T.R.I. at that time has occasionally referred to the role of the CFTRI in development of the process. We now present the story in his own words and in subsequent chapter summarize publications on the process from the C.F.T.R.I. Lastly biographies of some of those from the C.F.T.R.I. who contributed to the development of the process is appended here, <a href="/biographies" style={{ textDecoration: 'none', color: '#3819e9' }} >Click to know more.</a></div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Differing Versions </div>
                <br></br>
                <div className="earlylifepara" >Noram Wright, Director of the Hannah Dairy Research Institute, Ayrshire, Scotland visited India on a  survey of the Dairy industry in the country from the 4th November 1936 to 25th March 1937 published a report published by the then Government of India.  The report is a very detailed analysis of the state of dairying in the country. However he noted that while  India was a large producer of milk, she was unable to use its own resources. A village based industry making ghee and other milk products were suggested. It is interesting that in that report he did not foresee the development of a milk powder/infant food industry. India in the years 1952-54 was according to Terrence McCabe, the second largest importer of  milk products in the world even though India has "almost a fourth of the cattle in the world and more than half the water buffaloes"</div>
                <div className="earlylifepara" >A large part of the imports particularly, milk powder, was by the UNICEF for distribution to needy children. "The Government of India has recently indicated that it intends to capture at least part of its own internal market. Various departments of the Government have during the last several months recommended setting up of from 9 to 22 milk dairying plants in the country during the next five years in several of the installations".2 The government expected to have the financial assistance for the UNICEF which would provide for  free distribution to needy children</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >Report of the Milk Committee and in the Lok Sabha </div>
                <br></br>
                <div className="earlylifepara" >The Anand milk powder factory was established and was function in 1955. Shrimathi Ila Palchoudhay(3) asked in 1956 at the Lokh Sabha as to (A) Whether it is a fact that a milk drying plant the first of its kind in the world to dry buffalo milk was set up in India last year under the auspices of the UNICEF; b) if so, the total cost involved in its construction c) It's annual production capacity d) The date of it's going into production and e) The place of location. The answer given Dr.P.S. Deshmukh (Minister of Agriculture) a) Yes. b) Rs.40 Lakhs according to information furnished by the union c) 1000 tons d) 31st October 1955 (Inaugurated by Jawaharlal Nehru) c) Anand in Bombay (now Gujarat) state.</div>
                <br></br>
                <div className="earlylifepara" >A committee, The Milk Committee, appointed by the Commerce and Industry Ministry, Government of India, to look into various aspects of milk processing in India, submitted its report on February 19th, 1957. Mr. Krishan Chand was Joint Secretary, Ministry of Food and Agriculture was chairman. Dr. L.C. Sikka, a prominent scientist, was on the committee. The report began with a discussion of milk imports and stated that about 3000 long tons (one long ton equals nearly 1,016. kg) of dried whole milk and 3500 of milk foods for infants and invalids were imported during 1953-55. 1n 1938 a firm from Kolkata firm, National Nutriment Limited, began commercial production of milk powder from local milk suppliers including the roller process, import restrictions import scarcity of foreign supplies created a profitable internal trade during the War period. They established three roller drying plants (James Bell  PTY Ltd Melbourne Australia). They were installed near Calcutta,  Varanasi and in erstwhile East Pakistan. After the war the firm could not compete with imported products in either quality or price (as there was much milk powder provided by the UNICEF) and in 1951 it ceased operation before deciding to go out of business</div>
                <br></br>
                <div className="earlylifepara" >The milk committee report goes on to state that "the Council of Scientific and Industrial Research sanctioned a grant to enable the Kaira District Cooperative Milk Producers Union Ltd.to manufacture baby food according to the formula of the Central Food Technological Research, Mysore. Feeding trials have been carried out with the baby food thus manufactured." (It is not clear whether this was so as it has been reported that the NRDC that provided Amul with Rs. 10,000 to Kaira District Milk Producers Union for large scale production of baby food using the spray drying process). </div>
                <br></br>
                <div className="earlylifepara" >"The Central Food Technological Research Laboratory has evolved a process for the manufacture of infant milk from buffalo milk and this process is at present being exploited by M/S Kaira Dt. Cooperative Milk Producers Union Ltd, Anand. They have been granted a license under Industries (Development and regulation) act for producing 2500 tons of baby food per annum. Permission has been granted to M/S Glaxo Laboratories with an installed capacity of 2500 tons of infant milk food per annum. The total demand in the country for infant Milk Food is about 50000 to 6000 and Kaira District. Cooperative milk producers union will not meet this demand. The scheme of M/s Glaxo Laboratories did not involve any foreign exchange goods, as this was provided by their parent company Ms Horlicks has been allowed to produce infant food (Melcose Brand) has having an installed capacity of 228 tonnes per annum They will be producing Horlicks malted milk at their factory at Nabha."</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'larger' }} >The Kurien Version</div>
                <br></br>
                <div className="earlylifepara" >The  role that  C.F.T.R.I. played has been narrated in almost identical tones in three  books on Kurien (11,12,13). "Amul could not use CFTRI's formula and had to develop one of its own. But Kaira Cooperative, preparing to tackle a multinational firm, dared not antagonize any arm of the government and so it confirmed to the set procedures and applied to the National research Development Corporation of India for a grant to finance the testing of C.F.T.R.I.  grant of ten thousand rupees was sanctioned. In due course Amul made an experimental batch of about 1811kg of baby food for the prescribed trials at Vellore"</div>
                <br></br>
                <div className="earlylifepara" >"How we evolved our baby food formula is an interesting story. We were told that the Central Food Technological Research Institute (CFTRI) had already developed and tested a formula. I had requested the National Research Development Corporation (NRDC) to give us a grant of Rs 10,000 which we could give to the CFTRI for the use of their formula. Dalaya, Molly and I drove down to Ahmedabad for a meeting with Subramaniam, Director of CFTRI. He informed me that Kasturbhai Lalbhai, the Chairman of NRDC, had asked me to meet him at his house for tea. I told them that my colleague Dalaya and my wife would also come with me and I would not come alone. Subramaniam checked with Kasturbhai, who invited all of us. So we all went to Kasturbhai's house. Tea arrived. And then Kasturbhai looked at us and said, 'I expected much older people. I find you are very young. So I better be frank with you.' Then pointing a finger at Subramaniam he said, 'This man is a crook. You think he has made some great discovery. He will give you some half-baked formula and then you will have to spend millions, cleaning up his formula and making it usable.</div>
                <br></br>
                <div className="earlylifepara" >Then you will find that he will go and sell it to Glaxo. You still want that formula?' I said, 'Yes, Sir. I do.' 'All right then, there is no need to discuss anything further,' said Kasturbhai. All through that time, Subramaniam was very silent. The meeting was over. All of us finished our tea and got into my car to drive back. Dalaya and Molly sat in the back seat and I drove. Subramaniam sat next to me in the front. He was extremely nervous and kept on fiddling with his tie. He had never expected this to happen. After about half an hour of complete silence he said, 'He (referring to Kasturbhai) spoke very badly". I said, 'Yes.' Subramaniam continued: 'He had no business to do so. I don't know what made him say that.' We returned to Anand and as it happened, Dalaya realised that we could not use their formula at all. He had to change the formula before it could become usable. And yet we had to pay a huge sum as royalty - Rs 30 to 40 lakh - over the years to the CFTRI through NRDC."</div>
                <br></br>
                <div className="earlylifepara" >Kamath in his account(13)  which in many is very similar to the other two,  mentions that according to "one report" the trials of the C.F.T.R.I. method was after trials at Kaira with the NIRO spray drier was successful and was carried out with the Rs. 10,000 provided by the NRDC.  This was followed by an account of the  in where Subrahmanyan and Kurien met with Kasturbhai Lalbhai at Allahabad. The major grouse the Kurien must have had was the royalty of Rs.35 Lakh to be paid to to the NRDC (This is mentioned in all three versions!). Kamat mentions  the Dallaya  used an single  German air drier and obtained a product with higher solubility. </div>
                <br></br>
                <div className="earlylifepara" >Interestingly the name Subrahmanyan is actually spelt Subramanian in two versions of the Kurien story while his name is not mentioned in one.</div>
                <br></br>
                <div className="earlylifepara" >The UNICEF had funded the purchase of the NIRO atomiser spray dyer for the KAIRA District Milk Producers Union  while the C.F.T.R.I. obtained" a Niro spray drying for pilot plant trials in connection  with malted milk powder, glucose powder and fruit Juice powder" (Bulletin of the C.F.T.R.I.1951-52 volume 1 page 125). Therefore, it appears as though the C.F.R.I. had used the Niro spray dryer even before they had used the large one at Anand(see also Infant Food Part 2)  and "Actually CFTRI had already demonstrated that using the Australian spray drier at Benares a cheaper and more stable product was obtained. Solubility of the spray dried product was always better while the keeping quality of the roller dried product was superior." </div>
                <br></br><br></br>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
                    <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickNext} >Next</Button>
                </div>
            </div>
        </>
    )
}