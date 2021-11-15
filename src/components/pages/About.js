import React from 'react';
import bambi from '../images/hold-my-breath-bambi.gif'
import React, { useState } from 'react';

export default function About() {

  const [greeting, setGreeting] = useState("Hi I'm Jillian")
  return (
    <div>
      <h1 className="greeting" onClick={() => setGreeting("have a look at the portfolio page")}>{greeting}</h1>

      <img src={bambi} alt="" />
      <p>
      Jillian Kay FitzMaurice is a Full Stack Web Developer with a background in fine art. Recent graduate of Denver University’s Full Stack Web Development currently pursuing AWS Cloud certification. Dedicated to finding the similarities in art and tech in with abstract and conceptual thinking. Excels at working with teams to creatively solve problems with an openness to new solutions and a wide spectrum of voices. A firm believer that morale and integrity are necessary in keeping any good team both light and on task. Merging the the worlds of tech and finding the <strong>poetry</strong> in <strong>code</strong>. 
      </p>
    </div>
  );
}
