import React from "react";
import './index.css';


export default function Box() {
    const copy = () => {
        const username = "turvenuija_";
        navigator.clipboard.writeText(username)
          .then(() => {
            document.getElementById("success").innerHTML = "Copied username to clipboard!";
          })
          .catch((error) => {
            console.error('Error copying text to clipboard:', error);
          });
    }
    const git = () => {
        window.location.href="https://github.com/turvenuija1";
    }

    return (
        <div class="box">
            <h1 class="name">Turvenuija</h1>
            <span />
            <p class="about">on my sigma grindset 💯</p>
            <button class="dcbtn" onClick={copy}><img src="https://r2.e-z.host/6bfd05c3-8492-4e42-b894-0239d05c0272/nlqs2epm.jpg" width="25" height="20" /></button>
            <button class="gitbtn" onClick={git}><img src="https://r2.e-z.host/6bfd05c3-8492-4e42-b894-0239d05c0272/7y5tc3db.png" width="25" height="25" /></button>
            
        </div>
    )
}


