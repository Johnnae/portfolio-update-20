import resume from"../assets/full-stack-sample.png"
export default function Resume() {
  return (
    <div>
      <h1 style={{textAlign:'center', paddingTop:'3vh'}}>Resume</h1>
      <img src={resume} alt="resume" style={{width:'90vw',}} />
    </div>
  );
}
