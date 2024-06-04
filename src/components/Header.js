import React from "react";
import ThemeSelector from "./theme";
import logoImg from "./images/myPhoto.jpg"

export default function Header() {
  return (
    <header className="header">
        <img className="logoImg" src={logoImg}/>
      <div className="link-buttons">
        <button className="linkButton">About Me</button>
        <button className="linkButton">My Best Projects</button>
        <button className="linkButton">Contact Me</button>
      </div>
      <div>
        <form className="navForm">
          <ThemeSelector></ThemeSelector>
        </form>
      </div>
    </header>
  );
}
