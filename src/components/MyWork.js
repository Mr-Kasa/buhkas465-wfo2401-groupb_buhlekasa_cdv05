import React from "react";
import workPhoto from "./images/445762120_8092350080775485_857915379553477487_n.jpg"
import taskManager from './images/agileBoard.png'
import bookApp from './images/bookApp.png'

export default function MyWork(){

    return(

        <div className="MyWork">
            <h1>MY WORK</h1>
            <div className="cardContainer">

            <div className="card" >
                <div>
                    <img className="cardImg" src={taskManager} />
                </div>
                <div className="cardText">
                    <h4 >Task manager app</h4>
                    <p>Description djfnvldjvndfvkdjv dfn j hi jndjk ljbn jkb kj ljn nk jn ljn jkl nj nlk nlkj This is an application buit with html, javascript and css. it is a task manager app that is highly interactive.</p>
                
                </div>
                <a href="https://task-manager-appli.netlify.app" target="_blank">
                Visit my site here
                </a>
            </div>
            <div className="card">
                <div>
                    <img className="cardImg" src={bookApp}  />
                </div>
                <div className="cardText">
                    <h4 >Book App</h4>
                    <p>Description djfnvldjvndfvkdjv dfn j hi jndjk ljbn jkb kj ljn nk jn ljn jkl nj nlk nlkj </p>
                </div>
                <a href="https://bookapp-buh.netlify.app/" target="_blank">
                   
                        Visit my site here
                    
                </a>

            </div>
            <div className="card">
                <div>
                    <img className="cardImg" src={workPhoto} />
                </div>
                <div className="cardText">
                    <h4 >Name of project</h4>
                    <p>Description djfnvldjvndfvkdjv dfn j hi jndjk ljbn jkb kj ljn nk jn ljn jkl nj nlk nlkj </p>
                </div>
              

            </div>
            <div className="card">
                <div>
                    <img className="cardImg" src={workPhoto} />
                </div>
                <div className="cardText">
                    <h4 >Name of project</h4>
                    <p>Description djfnvldjvndfvkdjv dfn j hi jndjk ljbn jkb kj ljn nk jn ljn jkl nj nlk nlkj </p>
                </div>
               
            </div>
            <div className="card">
                <div>
                    <img className="cardImg" src={workPhoto} />
                </div>
                <div className="cardText">
                    <h4 >Name of project</h4>
                    <p>Description djfnvldjvndfvkdjv dfn j hi jndjk ljbn jkb kj ljn nk jn ljn jkl nj nlk nlkj </p>
                </div>
           

            </div>

        </div>
        
        </div>
    )
}