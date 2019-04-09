import React from 'react';
import './Resume.css';
import EmailLogo from './close-envelope.png';
import GithubLogo from './github-logo.png';
import LinkedLogo from './linked.png';

function Contact() { 
    return (
        <div className="contact">
            <a className="aclass" href="mailto:daniel.a2006@hotmail.com" target="_top"><img className="pic" src={EmailLogo} alt="Email"/></a>
            <a className="aclass" href="https://github.com/daoviedo" target="_blank" rel="noopener noreferrer"><img className="pic" src={GithubLogo} alt="Github"/></a>
            <a className="aclass" href="https://www.linkedin.com/in/daniel-oviedo-3b17a0158/" target="_blank" rel="noopener noreferrer"><img className="pic" src={LinkedLogo} alt="LinkedIn"/></a>
        </div>
    );
}

export default Contact;