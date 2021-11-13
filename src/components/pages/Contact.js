import React from "react";
import contact from "../images/phoneafriendsmall.png";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <img src={contact} />
      <ul>
        <li>
          {" "}
          <a
            href="tel:3039013230"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <p class="call-button">303-901-3230</p>
          </a>
        </li>
        <li>
          <a href="mailto:shyfidelity100@gmail.com">shyfidelity100@gmail.com</a>
        </li>
        <li>hi hi </li>
      </ul>
  
      <div class="socialimages">
       <a href= "https://www.linkedin.com/in/jillianfitzmaurice100/" target="_blank">link</a> 
       <a href = "https://www.instagram.com/jilliankayworks/" target="_blank">insta</a> 
       <a href="https://github.com/shyfidelity" target= "_blank">gh</a>
      </div>
    

    </div>
  );
}
