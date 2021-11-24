import React from 'react';
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
                                          <span><font font-weight="600" color="#e9cf76" >INFO</font></span>
                                          <br></br>
                                          <span>About us</span>
                                          <br></br><br></br>
                                          <span>In honour of our grandfather,</span>
                                          <br></br>
                                          <span>Dr. V. Subrahmanyan</span>
                                     </font>
                                </div>
                            </td>
                                <td className="anothertablecolumn" >
                                    <div className="anotherfooterpara" >
                                      <font color="#fff3f3" size="3">
                                           <span><font font-weight="600" color="#e9cf76" >CONTACT US</font></span>
                                           <br></br>
                                           <span style={{ caretColor: "rgb(255, 243, 243)" }} >subraroc@gmail.com</span>
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