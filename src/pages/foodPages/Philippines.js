import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ABOUTUS from '../../img/ABOUTUS.png'
import thesubrahmanyanprocess from '../../img/thesubrahmanyanprocess.jpg'
import phillipines from '../../img/phillipines.png'
import './Philippines.css';

export default function Philippines() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div className="headerimg">
                <img src={ABOUTUS} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >The Phillipines</div>
                <br></br>
                <div className="earlylifepara" >With the irrepressible innate urge for activity, he refused to rest on his laurels after retirement from the CFTRI in 1963 and was seconded as an Expert Consultant of the FAO to help establish a food technology laboratory in the National Institute for Science and Technology at Manila. In the two years of his assignment, he not only set up the laboratory, but also guided some practically important research projects on the preservation and processing of the coconut and 'copra' (desiccated coconut) products of great economic value to that country. By the use of simple chemical sprays he was able to work out procedures for the preservation of coconut and to produce infection-free copra from it by the ordinary drying procedures. The local commercial organizations hailed this as a big break-through as it helped to save millions of dollars-worth of the main agricultural produce of the islands from going to waste and which could be exported or processed. </div>
                <div>
                    <img className="thesubrahmanyanprocess" src={thesubrahmanyanprocess} />
                    <div className="earlylifepara" >Subrahmanyan was an FAO Food Technologist in Philippines in the years, 1964-1966. He introduced a chemical dip pretreatment for the preservation of coconuts during drying. "This has since become known as the Subramanyan process (1966) The pretreatment involved washing the kernel in a dilute solution of alkali (sodium carbonate or acid (Sulphuric or Hydrochloroic acid). The equipment used was very simple-requiring wooden vessels and bamboo or rattan baskets for holding the kernels during the dipping operation. This process however meant an extra cost to the producer. The pretreatment of the kernel as cut pieces or in the half shell is followed by the traditional methods such as sun or  kiln drying. This process which is only a surface action with penetration of less than a millimeter was found to be very effective in preserving the coconut from attack by microorganism, It's usefulness was not only in protecting the kernel prior to drying but also in keeping qualities after drying.The initial trials with alkaline treatment proved to be encouraging with minimal loss of oil and the quality of the expelled oil was excellent (FFA under 0.1%) edible quality. The process has not been put to commercial use due to problems when large trials were conducted in the U.S.A. The alkaline treatment resulted in a soapy surface causing slip in the expellers. The acid treatment was supposed to cause corrosion problems with milling equipment".</div>
                    <br></br>
                </div>
                <br></br>
                <div style={{ display: 'inline' }} >
                    <img src={phillipines} style={{ height:'350px', width:'100%' }} />
                    <div style={{ fontSize: '12px', textAlign: 'center' }}>Subrahmanyan and Saraswathi in the Phillipines.</div>
                    <br></br>
                </div>
                <div className="earlylifepara" >He received awards of appreciation for this very valuable work from the commercial organizations and federations in the Philippines as also from the Philippine Nutrition Association. In 1965 Dr.Subramanyam received First Friesland Award from the Netherlands Association for the Advancement of Dairy Science, for outstanding contributions on the role of milk and milk products in tropical nutrition.</div>
                <br></br>
                <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
            </div>
        </>
    )
}