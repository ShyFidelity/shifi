import React from 'react';
import resumePDF from '../images/JKFResume.pdf'
import '../../styles/Resume.css';
import Unicorn from '../images/unicornsprite.png'
import Illustrator from '../images/icons8-adobe-illustrator-48.png'
import Lightroom from '../images/icons8-adobe-lightroom-48.png'
import CSS from '../images/icons8-css-64.png'
import GraphQl from '../images/icons8-graphql-48.png'
import ReactIcon from '../images/icons8-react-50.png'
import JSicon from '../images/icons8-javascript-64.png'

export default function Resume() {
  return (
      
    <div className="resumePage">
      <h1>Resume</h1>
      
      <a href={resumePDF} download="JKFResume.pdf" > Download </a>
      <div className="images">
      <img src={ Unicorn } alt="" />
      <img src = { Illustrator } alt= "illustrator icon" />
      <img src = { Lightroom } alt= "illustrator icon" />
      <img width="48px" src = { CSS } alt= "illustrator icon" />
      <img src = { GraphQl } alt= "illustrator icon" />
      <img src = { ReactIcon } alt= "illustrator icon" />
      <img width="48px" src = { JSicon } alt= "illustrator icon" />
      </div>


  
  </div>
  
  );
}
