import React from "react";
import "../styles/Experience.css";
import ExperienceList from "../data/ExperienceList";

function Experience() {
  return (
    <div className="experience">
      <h1 className="experienceTitle">Experience</h1>
      <div className="experienceList">
        {ExperienceList.map((experience) => {
          return (
            <div className="experienceItem">
              <div className="experienceHeader">
                <h3>{experience.organization}</h3>
                <p>{experience.date}</p>
              </div>
              <p className="position">{experience.position}</p>
              <ul className="duties">
                {experience.duties.map((duty) => (
                  <li>{duty}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
