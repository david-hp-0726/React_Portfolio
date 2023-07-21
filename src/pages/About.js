import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ResumeIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/About.css';
import Resume from '../assets/resume.pdf';

const Linkedin = "https://www.linkedin.com/in/david-chen-69a226284/";
const Github = "https://github.com/david-hp-0726";

function About() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is David</h2>
                <div className="prompt">
                    A CS student with a passion for learning and creating
                </div>
                <div className="btn-container">
                    <button
                    onClick={() => window.open(Resume)}
                    className="btn"
                    >
                        <ResumeIcon /> 
                        <div className="btn-text">
                            View CV
                        </div>
                    </button>
                    <button
                    onClick={() => window.open(Linkedin)}
                    className="btn"
                    >
                        <LinkedInIcon />
                        LinkedIn
                    </button>
                    <button
                    onClick={() => window.open(Github)}
                    className="btn"
                    >
                        <GitHubIcon />
                        GitHub
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
