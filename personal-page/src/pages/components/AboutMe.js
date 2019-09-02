import React from 'react';
import Typography from '@material-ui/core/Typography';
import './AboutMe.css';

function AboutMe(props) {
    return (
        <div style={{margin: 'auto', marginTop: 100, maxWidth: 800, height: '400px'}}>
            <Typography className="AboutTitle" gutterBottom variant="h5" component="h2" style={{ fontSize: '2.7rem', fontWeight: 300, color: 'white' }}>
                About Me
            </Typography>
            <Typography className="AboutBody" gutterBottom variant="h5" component="h2" style={{ fontSize: '1.8rem', fontWeight: 300, color: 'white' }}>
                I am a senior at the University of Houston majoring in Computer Science. I am looking for a full-time opportunity
                to grow and learn as a Software Engineer. My technical skills steer towards Web/App Full-Stack development. I have professional
                experience with React applications, SQL/NoSQL Databases, Rest API's, Real-Time Sockets, as well as developing standalone applications
                in Python, C++, JavaScript, and Java. More information can be found on my <a href="#resume" onClick={() => props.changePage(2)}><u>Resume</u></a>.
            </Typography>
        </div>

    );
}

export default AboutMe;