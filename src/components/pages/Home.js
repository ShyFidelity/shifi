import bambi from '../images/hold-my-breath-bambi.gif'
import React, { useState } from 'react';
import '../../styles/About.css'
import Diamond from '../images/diamond.gif'

export default function Home() {

  const [greeting, setGreeting] = useState("home page")
  return (
    <div className="page">
      <h1 className="greeting" onClick={() => setGreeting("have a look at the portfolio page")}>{greeting}</h1>
    <div>
     
     <img src={ Diamond } alt="" />
     
      </div>

      </div>
    
  );
}
