import resume from"../assets/full-stack-sample.png"
export default function Resume() {
  return (
    <div>
      <h1 style={{textAlign:'center', paddingTop:'3vh'}}>Resume</h1>
      <img src={resume} alt="resume" style={{width:'90vw',}} /> 
      <br /> 
      <h1>Skills</h1>
      <p>
        {" "}
        react, javascript, html, css, node.js, express.js, mongodb, mysql,
        sequelize, handlebars, jquery, bootstrap,
      </p>
    </div>
  );
}
