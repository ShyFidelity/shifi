import bambi from '../images/hold-my-breath-bambi.gif'
import React, { useState } from 'react';
import '../../styles/About.css'

export default function About() {

  const [greeting, setGreeting] = useState("Hi I'm Jillian")
  return (
    <div className="page">
      <h1 className="greeting" onClick={() => setGreeting("have a look at the portfolio page")}>{greeting}</h1>
    <div>
      <h3>Shy</h3>
      <ul>
        <li>disposed to avoid a person or thing</li>
        <li>sensitively diffident or retiring</li>
      </ul>
     </div> <div>
      <h3>Fidelity</h3>
      </div>
      <ul>
       <li>the degree of exactness with which something is copied or reproduced.
      </li>
     </ul>
      <img src={ bambi } alt="" />
      <p className="body">
      Jillian Kay FitzMaurice is a Full Stack Web Developer with a background in fine art. Recent graduate of Denver University’s Full Stack Web Development currently pursuing AWS Cloud certification. Dedicated to finding the similarities in art and tech in with abstract and conceptual thinking. Excels at working with teams to creatively solve problems with an openness to new solutions and a wide spectrum of voices. A firm believer that morale and integrity are necessary in keeping any good team both light and on task. Merging the the worlds of tech and finding the <strong>poetry</strong> in <strong>code</strong>. 
      </p>
      </div>
    
  );
}
