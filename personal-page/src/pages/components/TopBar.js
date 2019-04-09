import React from 'react';
import './TopBar.css';

function TopBar(props) {
  
  return (
      <div className="container">
            <nav className="nav">
                <h1 className="brand"><a href="/">Daniel Oviedo</a></h1>
                <ul className="ul">
                    <li className="li"><a className="lilink" onClick={() => props.changePage(1)} href="#projects">Projects</a></li>
                    <li className="li"><a className="lilink" onClick={() => props.changePage(2)} href="#resume">Resume</a></li>
                    <li className="li"><a className="lilink" onClick={() => props.changePage(3)} href="#about">About-Me</a></li>
                    <li className="li"><a className="lilink" onClick={() => props.changePage(4)} href="#contact">Contact</a></li>
                </ul>
            </nav>
      </div>  
  );
}

export default TopBar;