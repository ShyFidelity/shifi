import React from 'react';
import resumePDF from '../images/JKFResume.pdf'
import '../../styles/About.css';
import Unicorn from '../images/unicornsprite.png'

export default function Resume() {
  return (
      
    <div className="page">
      <h1>Resume</h1>
      
      <a href={resumePDF} download="JKFResume.pdf" > Download </a>

      <img src={ Unicorn } alt="" />
  
  </div>
  
  );
}
