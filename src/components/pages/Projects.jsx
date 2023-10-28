import meal from"../assets/meal.png" 
import note from"../assets/note.png" 
import weather from"../assets/weather.png"


export default function Projects () {
    return (
        <div>
        <h1>Project</h1>
        <p>
            {" "}
        Better Meals is a web application that allows users to search for
        recipes based on ingredients they have on hand.
        <br />
        <a href=" https://github.com/ToussaintG1/better-meals.git ">
          Better Meals
        </a>
        <a href=" https://ToussaintG1.github.io/better-meals/ ">
          {" "}
          Better Meals Deployment
        </a> 
        <img src={meal} alt="meal" /> 
        <br />
        Notes is a web application that allows users to create, save, and delete
        notes.
        <br />
        <a href=" https://github.com/Johnnae/11-notes-.git ">Note Taker </a>
        <a href=" https://git.heroku.com/note-taker-908.git ">
          Note Taker Deployment{" "}
        </a> 
        <img src={note} alt="note" /> 
        </p> 
        <br /> 
        <p>
        Weather is a web application that allows users to view the current weather
        and the five day forecast for any city.
        <br />
        <a href="https://github.com/Johnnae/Weather-6.git ">Weather </a>
        <a href="  https://johnnae.github.io/Weather-6/ ">
          Weather Deployment{" "}
        </a> 
        <img src={weather} alt="weather" /> 
        </p>
        </div>
    );
    }