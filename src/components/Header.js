import React from "react";
import ThemeSelector from "./theme";

export default function Header() {
  return (
    <header className="header">
      <div >
        <img className="logoImg" src="https://t4.ftcdn.net/jpg/01/13/99/57/360_F_113995750_dAEGvjqxnsYD6asKjeDWJoVoSqjFvdGO.jpg" />
      </div>
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
