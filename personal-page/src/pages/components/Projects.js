import React from 'react';
import './Projects.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../img1.PNG';
import image2 from '../ss2.png';
import image3 from '../ss3.jpg';

function Projects(props) {
  return (
      <div className="Paper">
        <Card className="card1">
        <CardActionArea className="cardaction">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={image1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '160%'}}>
            Fuel Request
          </Typography>
          <Typography component="p" style={{fontSize: '120%'}}>
            A simulated oil distribution company that creates oil qoutes which factors in competitor prices, distance, gallons, purchase history, etc.
          </Typography>
          <ul className="text">Tech Used:
            </ul>
            <p>-React/Bootstrap/MaterialUI
            </p>
            <p>-Node.js/Express.js/CORS
            </p>
            <p>-bcrypt/JWT
            </p>
            <p>-mySQL
            </p>
            <p>-SSL/NGINX
            </p>
            <div style={{height: 100}}/>
        </CardContent>
      </CardActionArea>
      <CardActions style={{bottom: 0, height: 40}}>
        <div className="buttonCont">
            <Button variant="contained" color="primary" style={{marginRight: 10}}>
            Demo
            </Button>
            <Button variant="contained" color="primary">
            Github
            </Button>
        </div>
      </CardActions>
    </Card>

    <Card className="card2">
        <CardActionArea className="cardaction">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={image2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '160%'}}>
            Virtual ThemePark
          </Typography>
          <Typography component="p" style={{fontSize: '120%'}}>
            A simulated themepark where users can purchase tickets, employees can scan tickets, create maintenance reports, view park analytics, and manage a themepark.
          </Typography>
          <ul className="text">Tech Used:
            </ul>
            <p>-React/Bootstrap/MaterialUI
            </p>
            <p>-Node.js/Express.js/CORS
            </p>
            <p>-mySQL
            </p>
            <div style={{height: 100}}/>
        </CardContent>
      </CardActionArea>
      <CardActions style={{bottom: 0}}>
        <div className="buttonCont">
            <Button variant="contained" color="primary" style={{marginRight: 10}}>
            Demo
            </Button>
            <Button variant="contained" color="primary">
            Github
            </Button>
        </div>
      </CardActions>
    </Card>

    <Card className="card3">
        <CardActionArea className="cardaction">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={image3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '160%'}}>
            Workout Tracker
          </Typography>
          <Typography component="p" style={{fontSize: '120%'}}>
            A web/native app where users can create custom workout plans, view progress for each workout, look for verified trainers/programs.
          </Typography>
          <ul className="text">Tech Used:
            </ul>
            <p>-React/React-Native
            </p>
            <p>-Node.js/Express.js/CORS
            </p>
            <p>-bcrypt/JWT
            </p>
            <p>-mySQL
            </p>
            <div style={{height: 100}}/>
        </CardContent>
      </CardActionArea>
      <CardActions style={{bottom: 0}}>
        <div className="buttonCont">
            <Button variant="contained" color="primary" style={{marginRight: 10}}>
            Demo
            </Button>
            <Button variant="contained" color="primary">
            Github
            </Button>
        </div>
      </CardActions>
    </Card>
      </div>  
  );
}

export default Projects;