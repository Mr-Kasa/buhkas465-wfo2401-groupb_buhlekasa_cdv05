import React from "react";
import workPhoto from "./images/445762120_8092350080775485_857915379553477487_n.jpg";
import taskManager from "./images/agileBoard.png";
import bookApp from "./images/bookApp.png";

export default function MyWork() {
  return (
    <div className="MyWork">
      <h1>MY WORK</h1>
      <div className="cardContainer">
        <div className="card">
          <div>
            <img className="cardImg" src={taskManager} />
          </div>
          <div className="cardText">
            <h4>Task manager app</h4>
            <p>
              Discover our highly interactive Task Manager App, built with HTML,
              JavaScript, and CSS. It features a sleek design and intuitive
              interface for managing your tasks efficiently. Enjoy customizable
              task lists, drag-and-drop functionality, and theme persistence via
              local storage, ensuring a personalized and seamless experience
              every time.
            </p>
          </div>
          <a href="https://task-manager-appli.netlify.app" target="_blank">
            Visit my site here
          </a>
        </div>
        <div className="card">
          <div>
            <img className="cardImg" src={bookApp} />
          </div>
          <div className="cardText">
            <h4>Book App</h4>
            <p>
              Explore our innovative Book App, designed with HTML, JavaScript,
              and CSS. Easily filter books by name, genre, and latest updates,
              or search for specific titles. The app offers a smooth and
              engaging user experience, with your preferences saved in local
              storage for a consistent and tailored reading journey.
            </p>
          </div>
          <a href="https://bookapp-buh.netlify.app/" target="_blank">
            Visit my site here
          </a>
        </div>
      </div>
    </div>
  );
}
