import bambi from '../images/hold-my-breath-bambi.gif'
import React, { useState } from 'react';
import '../../styles/Home.css'
import Diamond from '../images/diamond.gif'

export default function Home() {

  return (
    <div className="page">
      <h1>shyfidelity.online</h1>
     
     <img className="diamond" src={ Diamond } alt="" />
     
<div className="reviews">
<img src={bambi} width="150" margin="2vh" alt="bambi gasping in awe" />
<ul>
  <li>"this web dev is so good my whole life has changed!"</li>
  <li>"before finding shifidelity.online life was... so ordinary"</li>
  <li>"bleak... yep that's the best way i could describe my website before now"</li>
</ul>

</div>
    

      </div>

      
    
  );
}
