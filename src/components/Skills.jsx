
import '../styles/SkillsShowcase.css'; // Import the CSS file for styling


import '../styles/SkillsShowcase.css'; // Import the CSS file for styling

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h1 className="center">Technical Qualification</h1>
      <div className="border py-4 rounded w-100 mx-auto" id='container'>
        <div className="common-heading">
          <h3>PCN LEVEL-2</h3>
        </div>
        <div className="skill-box ut-flaw-detector">
          <p>
            <span className="highlight">UT-ULTRASONIC TESTING</span>
            <br />
            (3.1&3.2)
          </p>
        </div>
        <div className="skill-box mpi-head-shot">
          <p>
            <span className="highlight">MPI - MAGNETIC PARTICLE INSPECTION</span>
            <br />
            WELD
          </p>
        </div>
        <div className="skill-box pt-fluorescent ">
          <p>
            <span className="highlight">PT - PENETRANT TESTING</span>
            <br />
            FLUORESCENT &amp; NON-FLUORESCENT - WELD
          </p>
        </div>
        <div className="skill-box">
          <span className="highlight">PCN</span> <br />
          <p>NO: 347583</p>
        </div>
      </div>

      <div className=" border py-4 rounded w-100 mx-auto" id='container'>
        <h1 className="center">ASNT-SNT-TC JA LEVEL-II</h1>
        <div className="skill-box">
          <h3>UT - ULTRASONIC TESTING</h3>
         
        </div>
        <div className="skill-box mpi-head-shot">
          <h3>MPI - MAGNETIC PARTICLE INSPECTION</h3>
        
        </div>
        <div className="skill-box pt-fluorescent">
          <h3>PENETRANT TESTING</h3>
    
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
