import React from "react";

function Portfolio() {
    
    return (
        <section class="page-section" id="work">
            <h2>Projects</h2>
            <div class="grid-container">

        <a href="https://obscure-hamlet-96065.herokuapp.com/" target="blank" class="grid-item note-taker">
          <div>
            <h3>Note Taker</h3>
            <span>JavaScript/CSS/Express</span>
          </div>
        </a>
        
        <a href="https://rpb543.github.io/awesome-weather-app/" target="blank" class="grid-item weather">
          <div>
            <h3>Weather Dashboard</h3>
            <span>JavaScript/HTML/CSS</span>
          </div>
        </a>

        <a href="https://blooming-basin-79626.herokuapp.com/" target="blank" class="grid-item budget-tracker">
          <div>
            <h3>Budget Tracker</h3>
            <span>NoSQL/Mongo/PWA</span>
          </div>
        </a>
        
        <a href="https://mavisyupyup1.github.io/project-01-send-a-joke/" target="blank" class="grid-item send-joke">
          <div>
            <h3>Send a Joke</h3>
            <span>HTML/CSS/JavaScript</span>
          </div>
        </a>
        
        <a href="https://obscure-beach-84697.herokuapp.com/" target="blank" class="grid-item tech-blog">
          <div>
            <h3>Tech Blog</h3>
            <span>Handlebars/SQL/Express</span>
          </div>
        </a>
        
      </div>
    </section>

    )
}

export default Portfolio;
