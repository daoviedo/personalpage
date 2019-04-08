import React from 'react';
import './TopBar.css';

function TopBar(props) {
  
  return (
      <div className="container">
            <nav className="nav">
                <h1 className="brand"><a href="/test">Daniel Oviedo</a></h1>
                <ul className="ul">
                    <li className="li"><a className="lilink" href="#p">Projects</a></li>
                    <li className="li"><a className="lilink" href="#r">Resume</a></li>
                    <li className="li"><a className="lilink" href="#A">About Me</a></li>
                    <li className="li"><a className="lilink" href="#c">Contact</a></li>
                </ul>
            </nav>
      </div>  
  );
}

export default TopBar;