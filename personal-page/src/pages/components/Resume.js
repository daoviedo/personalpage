import React from 'react';
import Resumef from './Daniel_Oviedo_Resume.pdf';
import './Resume.css';

function Resume() { 
    return (
        <div className="div">
            <iframe title="Resume" src={Resumef} className="frame" frameBorder="0"/>
            <h2 className="res"><a href={Resumef} target="_blank" rel="noopener noreferrer">Click Here if Resume Doesn't Load</a></h2>
        </div>
    );
}

export default Resume;