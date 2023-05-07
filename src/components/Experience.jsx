import React from 'react';
import '../styles/style.css';

const Experience = () => {
  return (
    <div className="experience-section" id='experience'>
      <h2 className=''>Experience</h2>
      <div className="experience-box mt-5">
        <h3>JKIG Industries</h3>
        <p className="client">Client: Wheels India</p>
        <p className="designation">Designation: Multi Technician</p>
        <p className="duration">Duration: Oct 2021 to May 2022</p>
      </div>
      <div className="experience-box">
        <h3>PWD</h3>
        <p className="client">Client: PT AND UT SHEAR WAY TECHNICIAN</p>
        <p className="duration">Duration: May 2022 to Oct 2022</p>
      </div>
      <div className="experience-box">
        <h3>Larson and Toubro</h3>
        <p className="company">Company: Welspun Group of Companies</p>
        <p className="designation">Designation: Multi Technician</p>
        <p className="duration">Duration: Nov 2022 to Dec 2022</p>
      </div>
      <div className="experience-box">
        <h3>Indian Oil Corporation Ltd.</h3>
        <p className="company">Company: Welspun Group of Companies</p>
        <p className="designation">Designation: Multi Technician</p>
        <p className="duration">Duration: Jan 2023 to March 2023</p>
      </div>
    </div>
  );
};

export default Experience;
