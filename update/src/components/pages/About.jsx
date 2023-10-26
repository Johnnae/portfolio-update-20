//import Emoji from"../assets/emoji.png"
export default function About() {
  return (
    <div>
      <h1>About </h1>
      <p>
        Hello, I am a full stack web developer with a passion for learning and
        amazing attention to detail and a keen eye for design. I have a
        background in science in music. I am a graduate of the Northwestern
        University Full Stack Coding Bootcamp. I am a team player and I love to
        collaborate with others. I am a quick learner and I am always looking
        for ways to improve my skills. I am excited to use my skills to help
        create amazing user experiences on the web.
      </p>
      <h1>Skills</h1>
      <p>
        {" "}
        react, javascript, html, css, node.js, express.js, mongodb, mysql,
        sequelize, handlebars, jquery, bootstrap,
      </p>

      <h1>Projects</h1>
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
        <br />
        Notes is a web application that allows users to create, save, and delete
        notes.
        <br />
        <a href=" https://github.com/Johnnae/11-notes-.git ">Note Taker </a>
        <a href=" https://git.heroku.com/note-taker-908.git ">
          Note Taker Deployment{" "}
        </a>
      </p>
    </div>
  );
}
