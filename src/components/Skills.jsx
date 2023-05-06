import React from 'react';
import '../styles/SkillsShowcase.css';

const SkillsShowcase = () => {
  return (
    <div className="skills-section px-3">
      <h2>Skills Showcase</h2>
      <div className="skill-box ut-flaw-detector">
        <h3>UT-MODOSONIC Flaw Detector</h3>
        <p>Familiarization with equipment handling</p>
      </div>
      <div className="skill-box mpi-head-shot">
        <h3>MPI - DC Head Shot Method</h3>
        <p>Ac yoke method</p>
      </div>
      <div className="skill-box mpi-ac-yoke">
        <h3>MPI - AC Yoke Method</h3>
        <p>PT - Visible solvent removable method</p>
      </div>
      <div className="skill-box pt-fluorescent">
        <h3>PT - Fluorescent Method</h3>
        <p>Fluorescent method using specific equipment</p>
      </div>
    </div>
  );
};

export default SkillsShowcase;
