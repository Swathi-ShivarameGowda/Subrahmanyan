import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import headerphoto2 from '../../img/headerphoto2.jpg'

export default function References() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg">
                <img src={headerphoto2} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" style={{ fontWeight: '500' }} >Ref. CFTRI</div>
                <br></br>
                <div className="earlylifepara" >(1) Bhima Rao, C.N. (1980) Prof. V.Subrahmanyan-Some personal reminiscences. Journal of Food Science and Technology.17:121-123. (2) Mysore Information (1948) Prime Minister of India visits Mysore: Vol 11 ,457-459. (3)3. Mysore Information (1949) International Forestry conference. 12, 75-76.8. (4). K.C. Reddy in Chief Ministers Speak: Being resumes of the activities of the Governments central and state during the three years 1947-1950. All India Congress Committee, New Delhi. (5) The Central Food Technological Research Institute, Mysore. Opening Ceremony , Oct 21, 1950. (1950) Journal of Scientific and Industrial Research 9.439-441.(6) Mysore Information (1950), Fervent Efforts to fight food crisis 13, 396-402. </div>
                <br></br>
                <div className="earlylife" style={{ fontWeight: '500' }} >Ref. Cheluvajamanni, the third maharani kumari</div>
                <br></br>
                <div className="earlylifepara" >(1).<a href="http://www.indiandefencereview.com/origin-of-cavalry-in-indian-army-and-the-silladar-system/" target="_blank" style={{ textDecoration: 'none', color: "#3819e9" }} >http://www.indiandefencereview.com/origin-of-cavalry-in-indian-army-and-the-silladar-system/</a>. (2).Maconchie,Evan(1926) Life in the Indian Civil Service Chapman and Hill (<a href="https://archive.org/details/in.ernet.dli.2015.276694" target="_blank" style={{ textDecoration: 'none', color: "#3819e9" }} >https://archive.org/details/in.ernet.dli.2015.276694</a>). (3)  Selections from the records of the Mysore Palace. Volume 2. Palaces and Mansions of the Royal Family. (2009) Karnataka State Archives  Department, Government of Karnataka. (4) Parsons, Constance E,Mysore City  (1930)   Humphery Milford Oxford University Press.(5). <a href="https://www.ykcwadiyar.in/blog" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >https://www.ykcwadiyar.in/blog</a>. (6). <a href="https://niranjannikam803683802.wordpress.com/2020/07/19/example-post-3/" target="_blank" style={{ textDecoration: 'none', color: "#3819e9" }} >A Jathre To Remember </a>(wordpress.com).</div>
                <br></br>
                <div className="earlylife" style={{ fontWeight: '500' }} >Ref. Amul Milk Powder</div>
                <br></br>
                <div className="earlylifepara" >(1) Wright,N.C. (1937) Report on the development of the cattle and dairy industries. Government of India Press, Simla  (2) McCabe Terrence W. (1955) What kind of market is India for our dry milk.Foreign Agriculture: A Review of Foreign Farm Policy, Production, and Trade. XIC:160-161. (3) LOK SABHA DEBATES (1956) VOL.3. Issue 1. 3217-3218.  (4) Sikka  Chand,K.,,L.C. and Mehta,V.A.(1960) Report of the committee on milk powder industry. Government of India Press, New Delhi. (5) Estimates Committee (1962-63) Twenty Seventh Report (Third Lok Sabha) Ministry of Scientific Research and Cultural Affairs. 1963 .Published under rule 382 of the Rules and Procedure and Conduct of business in Lak Sabha (Fifth Edition) and printed at the Parliamentary wing of the Government of India Press, New Delhi . (6) Prime Minister Nehru Visits Plant at Anand. Baby Food to be made in the Co-operative sector. (1960) Indian Diaryman 12 101-102. (7) Mr.Moraji Desai opens Amul Baby Food Plant. First of its Kind in India (1960) Indian Dairyman 12:301-302.  (8) Infants foods and ISI certifications. (1961) Indian Dairyman,  357-361 (9) Balu,V.(1961)  Science aids development of Indian Infant-food. Indian Dairyman.  (10) Research and Industry (1961). 6:23. (11) Kamath,M.V. (1996) Milkman from Ananad  The story of Verghese Kurien. Konark Publishers, New  Delhi. Page 100-102. (12) Ruth Heredia (1999) The Amul India story  Tata McGraw-Hill Pub. Company.Page 153. (13 ) Kurien, Verghese; Salvi, Gouri. (2005) I too had a Dream (p. 81). APH Publishing. Kindle Edition.  (14) Dalaya,H.M and Patel,I.M.(1971)  The problems of the use of Buffalo milk for milk products. Indian Dairyman.23:199-202. (15) L&T exits JV with Niro (2005) Financial Express. Mumbai, May 26.</div>
                <br></br>
                <div className="earlylife" style={{ fontWeight: '500' }} >Ref. Soil Science</div>
                <br></br>
                <div className="earlylifepara" >Subrahmanyan V, Duckworth J, Godden W. (1939)The quantitative separation of the skeleton of small animals. Biochem J. 97:1421-1424. Fisher R.B,, Subrahmanyan V. (1939) The diffusion of chloride and glucose into frog muscle. J Physiol. 97: 233-237. Subrahmanyan,V., Green,D., Gordon,,A.(1939) Isolation of a Catalytically Active Flavoprotein from Liver. Nature 144:1016.Gordon AH, Green DE, Subrahmanyan V. Liver aldehyde oxidase. Biochem J.;34: 764-774. Herbert D, Gordon H, Subrahmanyan V, Green D.E.(1940)  Zymohexase: With an Addendum by E. C. Bate-Smith. Biochem J. 34: 1108-1123..Green, D. E.,  Herbert, D., Subrahmanyan, V. (1940) On the isolation and properties of carboxylase Journal of Biological Chemistry. 135:795-796Green, D.E (1941)  Enzymes and Trace Substances Advances in enzymology Volume 1 Eds. Nord,F.F. and Werkman,C.H. Interscience Publishers, New York.Beinert,H., Stumpff,P.K. and Wakil,S.L. (2004) David Erza Green  in <a href="https://www.nap.edu/catalog/10992/biographical-memoirs-volume-84" target="_blank" style={{ textDecoration: 'none', color:'#3819e9'}} >Biographical Memoirs</a> of the National Academies of Sciences Vol 84. The National Academies Press, Washington,D.C.</div>
                <br></br>
                <div className="earlylife" style={{ fontWeight: '500' }} >Ref. Tapioca and Spices</div>
                <br></br>
                <div className="earlylifepara" >JOURNAL OF FOOD SCIENCE AND TECHNOLOGY Prof. V. Subrahmanyan Commemoration Issue, Volume 17, January-April 1980</div>
                <br></br>
                <div className="earlylife" style={{ fontWeight: '500' }} >Ref. General</div>
                <br></br>
                <div className="earlylifepara" >1.<a href="http://www.indiandefencereview.com/origin-of-cavalry-in-indian-army-and-the-silladar-system/" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >http://www.indiandefencereview.com/origin-of-cavalry-in-indian-army-and-the-silladar-system/</a> 2.Maconchie,Evan(1926) Life in the Indian Civil Service Chapman and Hill (<a href="https://archive.org/details/in.ernet.dli.2015.276694" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >https://archive.org/details/in.ernet.dli.2015.276694</a>). 3. Selections from the records of the Mysore Palace. Volume 2. Palaces and Mansions of the Royal Family. (2009) Karnataka State Archives Department, Government of Karnataka. 4. Parsons, Constance E, Mysore City (1930) Humphery Milford Oxford University Press. 5. Bhima Rao, C.N. (1980) Prof. V.Subrahmanyan-Some personal reminiscences. Journal of Food Science and Technology.17:121-123. 6. Mysore Information Bulletin (1948) Prime Minister of India visits Mysore: Vol 11 ,457-459. 7. Mysore Information Bulletin (1949) International Forestry conference. 12, 75-76.8. K.C. Reddy in Chief Ministers Speak: Being resumes of the activities of the Governments central and state during the three years 1947-1950. All India Congress Committee, New Delhi..9. Indian Farming (1950) XI:161.10. Journal of Scientific and Industrial Research (1950) The Central Food Technological Research Institute, Mysore. Opening Ceremony, Oct 21, 1950. 9.439-441.11. Mysore Information Bulletin (1950), Fervent Efforts to fight food crisis 13, 396-402. 12. <a href="https://www.ykcwadiyar.in/blog" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >https://www.ykcwadiyar.in/blog</a>. 13. <a href="https://niranjannikam803683802.wordpress.com/2020/07/19/example-post-3/" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >A Jathre To Remember</a> (wordpress.com). 14. (https://en.wikipedia.org/wiki/wadiyar_dynasty#/media/File:Chamrajendra_Chamrajendra_Wadiyar_X_%20with_his_children.jpg).</div>
                <br></br>
                <div className="earlylife" style={{fontWeight: '500'}} >Ref. Infant Food Papers</div>
                <br></br>
                <div className="earlylifepara" >1).Wright,N.C. (1937) Report on the development of the cattle and dairy industries. Government of India Press, Simla. 2) Lall Chand ikka (1940) A Study Of Lactation as affected by heredity and Environment,. A Thesis submitted in accordance with the Regulations of the University of Glasgow for the Degree of Doctor of Philosophy in the Faculty of Science. 3) Chand,K., Sikka,L.C. and Mehta,V.A.(1960) Report of the committee on milk powder industry. Government of India Press, New Delhi 10. 4) Howat.,G.H., Smith,J.A.B., Waite,R. and Wright,N.C.(1939) Factors affecting the solubility of milk powders.. J. Dairy Research 10, 8-514. 5) Leah,C.H., Moran,T. and Smith, J.A.B.(1943) The gas packing and storage of milk powder. J. Diary Res.,13,162-215. 6) Chandrasekhara,M.R.,, Swaminathan,M., Subrahmanyan,V.(1956) Infant nutrition and Infant foods. Part1. The use of Mammalian milk in the feeding of infants. Indian Dairyman.8 351; 701-710. 7. Subrahmanyan, V., Chandrashekhara, M. R.., Bhatia, D. S. and Swaminathan, M. (1957) Production of infant food and other products from buffalo milk in India. Bulletin of Central Food Technological Research Institute, 6. 52-57. 8. <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3dau%253a%2522Bhagawan%252c%2bR.%2bK.%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Bhagawan, R. K.</a>; <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3dau%253a%2522Swaminathan%252c%2bM.%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Swaminathan, M.</a>; <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3dau%253a%2522Subrahmanyan%252c%2bV.%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Subrahmanyan, V.</a> (1957) The use of mammalian milk and processed milk foods in the feeding of infants. <a href="https://www.cabdirect.org/?target=%2fcabdirect%2fsearch%2f%3fq%3ddo%253a%2522Indian%2bJournal%2bof%2bChild%2bHealth%2522" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Indian Journal of Child Health</a> 6.701-710. 9). Subrahmanyan,V., Chandrasekhaar,M.R., Bhatia,D.S., and Swaminathan,M. (1957) Production of infant food in India. Indian Dairyman. 9, 276-280..10). Chandrasekhara. Swaminathan,M., Bhatia,D.S. and Subrahmanyan,V. (1957) Infant food from buffalo milk. 1. Effect of different treatments on curd tension. Food Science. Bulletin of the Central food Technological Research Institute, 6.226-228. 11). Chandrasekhara,M.R., Sreenivisamurthy,V., Swaminathan,M., Bhatia,D.S. and Subrahmanyan,V. (1957) Infant food from buffalo milk II. Standardization of conditions for the preparation. Bulletin of the Central food Technological Research Institute Food Science,6: 228-232. 12) Chandrasekhara,M.R. Swaminathan,M., Bhatia,D.S. and Subrahmanyan,V. (1957 ) Infant food from buffalo milk III Shelf Life of the product. Food Science Bulletin of the Central food Technological Research Institute 6. 232-237. 13) Subrahmanyan,V., Chandrasekhara,M.R., Swaminatha,M., Bhatia,D.S. and (1957) Infant food from buffalo milk IV, Large scale production of infant food. Food Science. Bulletin of the Central food Technological Research Institute.6,238-240. 14) Chandrasekhara,M.R.,T.R. Doraiswmay Swaminatha,M. Bhatia,D.S. Sankaran,A.N.and Subrahmanyan,V.(1957) Infant food from buffalo milk V Infant feeding trials. Food Sci.1,6,241-243. 15) Subrahmanyan,V. Chandrasekhara,M.R,. Bhatia,D.S, Swaminatha,M.(1957) Production of infant food and other products from Buffalo milk in India. The Bull.C.F.T.R.I. VI:52-57. 16) Subrahmanyan,V Chandrasekhara,M.R. Swaminathan,M (1958) Buffalo Milk -its nutritive value and use in Infant feeding. lndian J. Pediat., 25: 173-183. 17) Chandrashekar,M.R. Narayana Rao,M.,Swaminthan,M., Bhatia,D.S. and Subrahmanyan,V. (1959) Utilization of buffaloe's milk for the production of infant food. Dairy Congress. 2 11147-54. 18) Chandrashekar,M.R. Rao,M.N.,Swaminthan,M., Bhatia,D.S. Parpia,H.A.BB. and Subrahmanyan,V (1959) Roller-dried Infant Food from Buffalo Milk- Project Costs Research and 13-15.19) Subrahmanyan,V., Chandrasekhara,M.R. Narayana Rao,M. and Swaminathan,M., (1959) Studies on infant and invalid foods based milk. Food Science. 8, 271-278. 20) Misra.R.P. (1959) Modified "Buffalo's milk" (Amul) as an infant food in health and disease <a href="https://www.springer.com/journal/12098" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >The Indian Journal of Pediatrics</a> 26, 290-294. 21) Chandrasekhara,M.R, Rao,M.N., Swaminathan,M., Bhatia,D.S. and Subrahmanyan,V.(1960a) Infant food from buffalo VI Large Scale production of roller dried infant food. Food Science 9,1-2 22) Chandrasekhara,M.R, Rao,M. N., Swaminathan,M., Bhatia,D.S. and Subrahmanyan,V.(1960b) Infant food from buffalo milk VII. Shelf life of roller dried infant food. Food science,9.3-5. 23) Chandrasekhar,M.R., Doraiswamy,T.R., Rao, M.N., Sankaran,A.N., Swaminathan,M., and Subrahmanyan,V. (1958) Food from Buffalo milk VIII infant feeding trials with roller dried food. 6: 6-8. 24) Chandrasekhara,M.R, Doraiswamy,T.R., Rao,M.N., Swaminathan,M., Sankaran,A.N.and Subrahmanyan,V.(1960c) Infant food from buffalo.VIII Infant feeding trials with roller dried food. Food Science.9:6-7. 25) lSI. 1960. Indian Standards Specification for Infant Foods; ISI-1547, Indian Standards Institution, New Delhi. 26) <a href="https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=E.%20L.%20Richards%20&eventCode=SE-AU" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Richards, E. L.</a> and <a href="https://www.cambridge.org/core/search?filters%5BauthorTerms%5D=M.%20R.%20Chandrasekhara%20&eventCode=SE-AU" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Chandrasekhara, M. R.</a> (1960) Chemical changes in dried skim-milk during storage <a href="https://www.cambridge.org/core/journals/journal-of-dairy-research" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Journal of Dairy Research</a>,  27 ,  59 - 66. 27) Balu,V. (1961) Science Aids development of Indian infant food: The nutriture of babies. Indian Dairyman XIII. 28) Shurpalekar, S. R. ; Korula, Soma ; Joseph, A. A. ; Acharya, U. S. V. ; Subbaraya, B. H. ; Chandrasekhar, B. S. ; Ramachandran, K. S. ; Chandrasekhara, M. R. ; Swaminathan, M. ; Sreenivasan, A. ; Subrahmanyan, V. (1963) Nutritive value of dried infant milk foods based on buffalo milk. Journal of the Science of Food and Agriculture, 14. 877-883. 29) Daniel,V.A.L, Desai, B.L.M., Rao, S.V., Swaminathan, M. and Parpia, H.A.B. (1968), The Nutritive Value of Humanized Milk Food Based on Buffalo Milk and Fortified with DL-Methionine.Journal of Food Science, 33: 331-334. <a href="https://ift.onlinelibrary.wiley.com/doi/10.1111/j.1365-2621.1968.tb01380.x" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >https://doi.org/10.1111/j.1365-2621.1968.tb01380.x.</a> 30) <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Swaminathan+M&cauthor_id=4883818" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Swaminathan,M.</a> and <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Parpia+HA&cauthor_id=4883818" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Parpia H A</a> (1968) Buffalo milk: its nutritive value and use in the production of infant foods World Rev Nutr Diet.9:206-26.doi: 10.1159/000387555. 31) Daniel A.V., Doraiswamy,T.R. Swaminathan,M, and Rajalakshmi,D. (1970) The effect of dilution of milk proteins with non-essential amino acids (L-alanine and L-glutamic acid) on nitrogen retention and biological value of the proteins in children Br. J. Nutr. (1970), 24, 741-747. 32) Nagarajan,T.M. and Murrin,K.R.(1973) The simplified Haldane apparatus. Anaesthesia28, 662-665. 33) <a href="https://krishikosh.egranth.ac.in/iari/browse?type=author&value=Bindra,%20Harinder" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Bindra, Harinder</a> (1979) Nutritional evaluation of cow and buffalo milk based infant food formulae Msc. Thesis Kurukshetra University. <a href="https://krishikosh.egranth.ac.in/handle/1/5810126486" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >http://krishikosh.egranth.ac.in/handle/1/5810126486</a> 34)Singh, M.N. (1982). Studies on the modification of an infant formula.Pd. D.Thesis Kurukshetra University.https://krishikosh.egranth.ac.in/displaybitstream?handle=1/65209&fileid=22e86104-3e41-4e76-8a0f-a63c48656dcc 35) <a href="http://library.ndri.res.in/cgi-bin/koha/opac-search.pl?q=an:%2248669%22" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Thompkinson, D K</a> (1984) Technological aspects of incorporating vegetables oils for infant food formulations. PhD Dissertation, Kurukshetra University, Kurukshetra, India. 36) Rao, B.V.R. (1986) Development of a formula for the dietary management of pre-term infants. PhD Dissertation, Kurukshetra University, Kurukshetra, India.https://krishikosh.egranth.ac.in/displaybitstream?handle=1/66504. 37) Mathur,B.N. and Singh,M.N. (1981 ) <a href="https://agris.fao.org/agris-search/search.do?recordID=US201302634070" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Baby foods-current concepts and suggestions</a>. Indian journal of Dairy Science 33:373-381. 38) Rao,B.V.R and BN Mathur (1987a) <a href="https://agris.fao.org/agris-search/search.do?recordID=US201301406984" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Development of a pre-term infant formula. I. Effect of forewarming temperature on physical characteristics</a> -Indian journal of Dairy Science, 40::249-253. 39) Rao,B.V.R and  BN Mathur (1987b) <a href="https://agris.fao.org/agris-search/search.do?recordID=US201301406985" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Development of a pre-term infant formula. II. Effect of forewarming temperature on the physical changes during storage</a>. Indian journal of Dairy Science,  40:254-260. 40) Rao,B.V.R and  BN Mathur (1987c) <a href="https://agris.fao.org/agris-search/search.do?recordID=US201302060445" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Pattern of nitrogen distribution in a spray dried infant formula in relation to forewarming temperature</a>- Indian journal of Dairy Science. 40:385-388. 41) Rao,B.V.R and  BN Mathur (1987d) <a href="https://agris.fao.org/agris-search/search.do?recordID=US201302685348" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Processing changes during manufacture of a spray dried infant formula. I. Electrophoretic and ion-exchange chromatographic behavior of casein.</a> Indian journal of Dairy Science, 40:398-403. 42) Rao,B.V.R and  BN Mathur (1987e) <a href="https://agris.fao.org/agris-search/search.do?recordID=US201302685349" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Processing changes during manufacture of a spray dried infant formula. II. Gel chromatographic and electrophoretic behavior of whey proteins.</a> Indian journal of Dairy Science, 1987 40:404-409.   43) Tompkinson,D.K. and Mathur,B.N (1987f) Modification of Buffalo milk lipid food formulations.  Indian Journal of Dairy Science. 40:418-421 44) Mahtur,B.N. and Singh,M.N. (1990) <a href="https://www.cabdirect.org/cabdirect/welcome/?target=%2fcabdirect%2fabstract%2f19910444818" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Mineral modification of buffalo milk for infant formula manufacture employing electrodialysis. Part II. Demineralization pattern of nutritionally important ionic species.</a> Indian Journal of  Dairy Science 43:95-98. 45) Thompkinson,D.K. and Suman Kharb (2007) Aspects of Infant Food Formulation: Comprehensive Reviews in Food Science and Food Safety.  6:79-102. 46) Sarkar, S. (2014), "Modified milk for infants", <a href="https://www.emerald.com/insight/publication/issn/0034-6659" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >Nutrition & Food Science</a>, Vol. 44 : 17-23. <a href="https://doi.org/10.1108/NFS-05-2012-0045.%20%2047" target="_blank" style={{ textDecoration: 'none', color: '#3819e9' }} >https://doi.org/10.1108/NFS-05-2012-0045.</a> 47) Mohamed Abd El-Salam, El-Shibiny (2011) A comprehensive review on the composition and properties of buffalo milk. Dairy Science & Technology, EDP sciences/Springer. 91:663-699. 48) Murtaza,M.A., Pandya,A.J. and Khan,M.M.H. (2017)  Buffalo Milk  Utilization for dairy products in Handbook of milk of Non-Bovine Mammals. Eds.Young W.Park, ,George F.W. Haenlein and William L. Wendorff. John Wiley and Sons Ltd. pp 284-342.</div>
                <br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}