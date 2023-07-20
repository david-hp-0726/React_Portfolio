import React from 'react'
import SkillList from '../data/SkillList';
import SkillBox from '../components/SkillBox';
import '../styles/Skills.css';

function Skills() {
    return (
        <div className="skills">
            <h1 className="skillTitle">My Skills</h1>
            <div className="skillContainer">
                {
                    SkillList.map((skill) => {
                        return (
                            <SkillBox 
                            title={skill.title}
                            items={skill.items}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills
