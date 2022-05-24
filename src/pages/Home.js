import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../img/homenew.png';
import './Home.css';

export default function Home() {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onClickNext = (event) => {
        history.push("/early-life");
    }


    return (
        <>
            <div className="headerimg" >
                <img src={homenew} style={{ height: '155px', width: '100%'}} />
            </div>
            <br></br><br></br><br></br><br></br>
            <div className="container" >
         <div className="videocontent">
                <div className="video-responsive" data-cy="youtube">
                    <iframe
                        width="400"
                        height="480"
                        src={`https://www.youtube.com/embed/AEHeP6o29LM`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Embedded youtube"
                    />
            </div>
            <div className="aboutdisplay">
                        <h2>Doyen of food science and food technology in India, Dr.V.Subrahmanyan</h2>
            </div>
            </div>
               <div className="earlylifepara" >“It has long been recognized that agricultural products can be characterized by certain properties which  can be collectively described as quality. In some cases the quality can be defined in terms of certain physical characters such as size, shape, colour or behaviour on milling  or cooking. In others, it depends largely on properties such as taste and flavor which are rather difficult to define but are nevertheless, quite real. In recent years there has also been increasing realization of the importance of constituents such as vitamins, proteins, calcium and phosphorus which are essential to nutrition and in, consequence are of great value in assessing the quality of food” (<a href="https://wwwops.currentscience.ac.in/php/auth.php?authid=10619&author=Srinivasan,%20A" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">Srinivasan, A.;</font></a> and <a href="https://wwwops.currentscience.ac.in/php/auth.php?authid=10044&author=Subrahmanyan,%20V." target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">Subrahmanyan, V.</font></a> (1935) <a href="https://wwwops.currentscience.ac.in/php/show_article.php?volume=004&issue=06&titleid=id_004_06_0378_0384_0&page=0378" target="_blank" style={{ textDecoration: 'none' }} ><font color="#3819e9">Quality in Foods</font></a> Current Sicence 4: 378-384)</div>
                <br></br>
                <div className="earlylifepara" >"Fifty-two years ago, I began my career as a research student in the newly started Department of Biochemistry at the Indian Institute of Science. Although my interests ranged from basic research to the solution of practical problems  have varied from time to time, my main interest in work that would help to make food and nutrition available in more abundant measure to the impoverished and undernourished people of our country continues to motivate my efforts even now. In some respects, the line proved to be a virgin field; but owing to a variety of reasons, the achievements have not always been commensurate with the efforts. There have been a few successes, some qualified successes and several failures. The successes have been possible because of the active interest and dedicated efforts of a large number of colleagues. The failures were largely due to defects in processing or lack of consumer appeal."</div>
                <br></br><br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </>
        )
}

