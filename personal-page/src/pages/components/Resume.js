import React from 'react';
import Resumef from './Daniel_Oviedo_Resume.pdf';
import './Resume.css';

function Resume() { 
    return (
        <div className="div">
            <iframe title="Resume" src={Resumef} className="frame" frameBorder="0"/>
        </div>
    );
}

export default Resume;