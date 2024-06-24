import React from "react";
import ThemeSelector from "./theme";
import logoImg from "./images/myPhoto.jpg";

export default function Header() {
  return (
    <header className="header">
      <img className="logoImg" src={logoImg} alt="Logo" />
      <div className="link-buttons">
        <button className="linkButton" onClick={() => document.getElementById('about-me').scrollIntoView({ behavior: 'smooth', block: 'start' })}>About Me</button>
        <button className="linkButton" onClick={() => document.getElementById('my-work').scrollIntoView({ behavior: 'smooth', block: 'center' })}>My Best Projects</button>
        <button className="linkButton" onClick={() => document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth', block: 'start' })}>Contact Me</button>
      </div>
      <div>
        <form className="navForm">
          <ThemeSelector />
        </form>
      </div>
    </header>
  );
}
