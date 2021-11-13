import React from 'react';
import resumePDF from '../images/JKFResume.pdf'

export default function Resume() {
  return (
      
    <div>
      <h1>Resume</h1>
      <p class="title">Resume</p>

      <a href={resumePDF} download="JKFResume.pdf"> Download </a>
  </div>
  
  );
}
