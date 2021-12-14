import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ABOUTUS from '../img/ABOUTUS.png';
import './Home.css';

export default function Home() {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const learnMoreEarlyLife = (event) => {
        history.push("/early-life");
    }
    const learnMoreSoilScience = (event) => {
        history.push("/soil-science");
    }
    const learnMoreFoodTech = (event) => {
        history.push("/food-tech");
    }
    const learnMoreAwards = (event) => {
        history.push("/awards");
    }


    return (
        <>
            <div className="headerimg" >
                <img src={ABOUTUS} style={{ height: '155px', width: '100%'}} />
            </div>
            <br></br><br></br><br></br><br></br>
            <div className="container" >
        <div className="videocontent">
                <div className="video-responsive">
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
            <div style={{ display: "inline" }} >
                    <div className="carddivision" >
                <Card variant="outlined" >
                            <React.Fragment>
                                
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="darkblue" gutterBottom>Early Life</Typography>
                            <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                                        Subrahmanyan was born on September 1902 at Sirkazhi, Thanjavur to Vaidyanathan and Bagirathi. His father Vaidyanathan was a Revenue Inspector...
                            </Typography>
                        </CardContent>
                        <CardActions>
                                    <Button size="small" style={{ color: 'darkblue', fontWeight: 'bold' }} onClick={learnMoreEarlyLife} >Learn More</Button>
                        </CardActions>
                </React.Fragment>
                </Card>
                <Card variant="outlined" >
                            <React.Fragment>
                               
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="darkblue" gutterBottom>Research</Typography>
                            <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                                        Soil science was his first love. Beginning with a small nucleus of research associates he soon built up a prominent school of research in soil science....
                            </Typography>
                        </CardContent>
                        <CardActions>
                                    <Button size="small" style={{ color: 'darkblue', fontWeight: 'bold' }} onClick={learnMoreSoilScience} >Learn More</Button>
                        </CardActions>
                    </React.Fragment>
                    </Card>
                </div>
                    <div className="carddivision" >
                <Card variant="outlined" >
                    <React.Fragment>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="darkblue" gutterBottom>Journey</Typography>
                            <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                                        Subrahmanyan who was the director at the C.F.T.R.I. has occasionally referred to the role of the CFTRI in development of baby and Infant food from Buffalo milk....
                            </Typography>
                        </CardContent>
                        <CardActions>
                                    <Button size="small" style={{ color: 'darkblue', fontWeight: 'bold'}} onClick={learnMoreFoodTech} >Learn More</Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
                <Card variant="outlined" >
                    <React.Fragment>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="darkblue" gutterBottom>Awards</Typography>
                            <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                                        Subrahmanyan received the Sen medal from the Institution of Chemists , the Rafi Ahmed Kidwai Award for work on the development of baby food and the Padma Shri in 1960....
                            </Typography>
                        </CardContent>
                        <CardActions>
                                    <Button size="small" style={{ color: 'darkblue', fontWeight: 'bold' }} onClick={learnMoreAwards} >Learn More</Button>
                        </CardActions>
                    </React.Fragment>
                    </Card>
                    </div>
                </div>
                </div>
            </>
        )
}

