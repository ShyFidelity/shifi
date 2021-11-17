import bambi from '../images/hold-my-breath-bambi.gif'
import React, { useState } from 'react';
import '../../styles/Home.css'
import Diamond from '../images/diamond.gif'

export default function Home() {

  return (
    <div className="page">
      <h1>shyfidelity.online</h1>
     
     <img className="diamond" src={ Diamond } alt="" />
     
<div>
<img src={bambi} alt="" />
<p>"it's so good this product has done for me what none could ever"</p>
</div>
    

      </div>

      
    
  );
}
