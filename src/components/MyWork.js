import React, { useEffect } from "react";
import taskManager from "./images/agileBoard.png";
import bookApp from "./images/bookApp.png";
import podcastApp from './images/PodcastApp.png';
import VanLife from './images/vanLife.png'

export default function MyWork() {
  useEffect(() => {
    const cardContainers = document.querySelectorAll('.cardContainer');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function checkViewport() {
      cardContainers.forEach(cardContainer => {
        const cards = cardContainer.querySelectorAll('.card');
        cards.forEach((card, index) => {
          if (isInViewport(card)) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 200);
          }
        });
      });
    }

    window.addEventListener('scroll', checkViewport);
    window.addEventListener('resize', checkViewport); 
    checkViewport();

    return () => {
      window.removeEventListener('scroll', checkViewport);
      window.removeEventListener('resize', checkViewport); 
    };
  }, []);

  return (
    <div className="MyWork">
      <h1>MY WORK</h1>
      <div className="cardContainer">
        <div className="card">
          <div>
            <img className="cardImg" src={taskManager} alt="Task Manager App" />
          </div>
          <div className="cardText">
            <h4>Task manager app</h4>
            <p>
              Discover my highly interactive Task Manager App, constructed with HTML, JavaScript, and CSS. It boasts a sleek design and intuitive interface for efficiently managing your tasks. Enjoy customizable task lists and theme persistence via local storage, ensuring your experience is personalized and seamless every time.
            </p>
          </div>
          <a href="https://task-manager-appli.netlify.app" target="_blank" rel="noopener noreferrer">
            Visit my site here
          </a>
        </div>
        <div className="card">
          <div>
            <img className="cardImg" src={VanLife} alt="Task Manager App" />
          </div>
          <div className="cardText">
            <h4>Van Life online-store</h4>
            <p>
            Welcome to my Van Life website, which demonstrates my expertise in React and React Router. This single-page application (SPA) features seamless navigation without page refreshes, user validation, and enhanced user accessibility. Additionally, it preserves page state when switching between pages.
            </p>
          </div>
          <a href="https://vanlifebuhkas.netlify.app/" target="_blank" rel="noopener noreferrer">
            Visit my site here
          </a>
        </div>

        <div className="card">
          <div>
            <img className="cardImg" src={bookApp} alt="Book App" />
          </div>
          <div className="cardText">
            <h4>Book App</h4>
            <p>
              Explore my innovative Book App, crafted with HTML, JavaScript, and CSS. Easily filter books by name, genre, and latest updates, or search for specific titles. The app delivers a smooth and engaging user experience, with your preferences saved in local storage for a consistent and tailored reading journey.
            </p>
          </div>
          <a href="https://bookapp-buh.netlify.app/" target="_blank" rel="noopener noreferrer">
            Visit my site here
          </a>
        </div>
        <div className="card">
          <div>
            <img className="cardImg" src={podcastApp} alt="Podcast App" />
          </div>
          <div className="cardText">
            <h4>Podcast App</h4>
            <p>
              This application is tailored for podcast enthusiasts, offering a meticulously crafted user interface that combines intuitive design with a range of sophisticated functionalities to elevate your listening experience.
            </p>
          </div>
          <a href="https://buhkas465-wfo2401-groupb-buhlekasa.netlify.app/" target="_blank" rel="noopener noreferrer">
            Visit my site here
          </a>
        </div>
      </div>
      <h3>For more of my projects visit my <a href="https://github.com/Mr-Kasa">Github</a> account.</h3>
      <div>
        <h5>Contact me <br/> Cell:  <span className="contactInfo">0796916824</span></h5><br/>
        <h5>Email: <span className="contactInfo">Buhlekasa101@gmail.com</span></h5>
        <br/>
        <br/>
                <small>Feel free to contact me for the source codes</small>
      </div>
    </div>
  );
}

