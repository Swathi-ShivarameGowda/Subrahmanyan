import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
   
    return (
        <>
            <div className="footer" >
                <div className="footerdiv">
                <table>
                        <tbody>
                            <tr>
                                <td className="tablecolumn" >
                                    <div className="footerpara" >
                                     <font size="3" color="#ffffff">
                                          <span><Link to="/site-map"><font font-weight="600" color="#e9cf76" >INFO</font></Link></span>
                                          <br></br>
                                            <div style={{fontSize:"14px"}}>In honour of our grandfather,</div>
                                            <div style={{ fontSize: "14px" }}>Dr.V. Subrahmanyan</div>
                                     </font>
                                </div>
                            </td>
                                <td className="anothertablecolumn" >
                                    <div className="anotherfooterpara" >
                                      <font color="#fff3f3" size="3">
                                           <span><font font-weight="600" color="#e9cf76" >CONTACT US</font></span>
                                           <br></br>
                                            <div style={{ fontSize: "14px" }}>subraroc@gmail.com</div>
                                       </font>
                                 </div>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}