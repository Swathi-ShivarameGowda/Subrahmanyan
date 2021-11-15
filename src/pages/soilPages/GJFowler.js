import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../img/stjoseph.jpg'
import gilbertFowler from '../../img/gilbertFowler.jpg'

export default function GJFowler() {

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
                <div className="earlylife" >Gilbert John Fowler</div>
                <br></br><br></br>
                <div style={{ display: 'flex' }} >
                    <img src={gilbertFowler} height={300} width={300} />
                    <div className="earlylifepara" style={{ marginLeft: '20px' }} >Gilbert John Folwer was born on January 23 1868 at Paris. From 1896 to 1916, he was responsible for sewage treatment at Manchester. He was awarded a D.Sc from the University of Heidelburg in 1904. He developed the activated sludge process along with Arden and Lockett in 1914. He was consultant to the cities of New York, Shangai etc advising their sewage disposal. He became professor of Applied Chemistry and the Department of Biochemistry in Indian Institute of Science at Bangalore in 1921. He had visited Rothamsted in 1921 and learns about the ADCO process and becomes interested in composting.</div>
                </div>
                <div className="earlylifepara" >Between 1925 and 1953, Fowler was responsible for the installation of a number of sludge plants across India. A sewage plant was put up by Fowler in 1922 at IISc Bangalore proved valuable not only in elucidating the principle of the purification process but also demonstrating the value of sludge as an organic fertilizer. S.C.Pillai was the foremost student who continued with this work.</div>
                <br></br>
                <div className="earlylifepara" >In 1935, Ahmedabad city municipal sanitary committee chairman, Dr Hariprasad Desai, had invited Dr Gilbert Fowler. Fowler then stated that Chinese farmers in Shanghai realized the value of organic manure. He said that conservancy cost the municipality there nothing at all and contractors were eager to get the night soil. The income thus realized was Rs.40,000 per annum. With a population of four lakh, there was a potential value of Rs.4 lakh a year in the waste of Ahmedabad. Fowler said, <span style={{ fontWeight: '600' }} >"Apart from sanitation, treating waste is a great business proposition,"</span>. He added, <span style={{ fontWeight: '600' }} >"India, like China, is an agricultural country and it needs organic manure. The proportion of organic matter in Indian soils is very low, about one-tenth of that in the soil of Europe and America. What I see in Ahmedabad is an economic sin. How can you pour organic manure into the river?"</span>. Fowler had told councilors that rich nitrate could be produced by adding organic wastes to the soil. <span style={{ fontWeight: '600' }} >"You can't grow things on mere sand"</span>, he said. He also suggested treating and utilizing effluents from industrial areas. </div>
                <br></br>
                <div className="earlylifepara" >Gilbert Fowler had obtained a patent for inventing an improved process for obtaining pure shellac from stick-lac (a stick with loads of eggs covered in lac) working with S.Mahdihassan and M.Sreenivasaya, deputed to the Institute by the Governments of Hyderabad and Mysore respectively.</div>
                <br></br>
                <div className="earlylifepara" >Dr.Gilbert Fowler Retired in 1924. In 1938 the address of Prof.Gilbert Folwer who was a member of the Indian National Science Academy was given as Consulting Chemist Mackay's garden annexe, Grames Road, Cathedral, P.O.Madras.</div>
                <br></br>
                <div className="earlylifepara" >He was married to Amy Hindmarsh (1874 in Rangoon) and had <a href="https://www.ancestry.co.uk/genealogy/records/gilbert-john-fowler-24-t0m00g" target="_blank" style={{ textDecoration: 'none', color:"#3819e9" }} >two children</a> Robert Scot Fowler (1901) and Gilbert Scot Fowler (1903). Both children were born at Manchester. He passed away in March 21, 1953 at Bangalore at the Central Hotel.</div>
                <br></br>
                <div className="earlylifepara" >Giri, K.V.; Rajagopalan R.; Pillai, S.C. (1953). Gilbert Fowler-Obituary" Current Science. 22 (4): 108
                Fowler, G.J., Sreenivasaya, A and Madhihassan, S. (1924) Contributions to the Scientific study of the Lac industry.
                Part 1-VIII,  Journal of the Indian Institute of Science 7:97-144.
                    </div>
                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}