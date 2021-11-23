import React from 'react';

export default function Footer() {
   
    return (
        <>
            <div style={{ backgroundColor: 'darkblue', height: '220px', width: '100%', marginTop: '100px' }} >
                <div style={{ marginLeft: '306px', marginRight: '430px' }} >
                <table class="wsite-multicol-table">
                    <tbody class="wsite-multicol-tbody">
                        <tr class="wsite-multicol-tr">
                            <td class="wsite-multicol-col" style={{ width:"72.105263157895%", padding:"0 173px"}} >
                                    <div class="earlylifepara" style={{marginTop: '10px'}} >
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
                            <td class="wsite-multicol-col" style={{ width: "36.775708151855%", padding: "0 0px" }} >
                                    <div class="earlylifepara" style={{marginTop: '-90px'}} >
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