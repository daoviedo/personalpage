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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme1 = createMuiTheme({
    palette: {
      primary: {main: 'rgb(0,90,0)'},
    },
});

function Projects(props) {
  return (
      <div className="Paper">
      <MuiThemeProvider theme={theme1}>
      
        <Card className="card1">
        <CardActionArea disabled className="cardaction">
        <CardMedia
          component="img"
          height="180"
          image={image1}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '160%'}}>
            Fuel Request
          </Typography>
          <Typography component="p" style={{fontSize: '120%'}}>
            A simulated oil distribution company that creates oil quotes which factors in competitor prices, distance, gallons, purchase history, etc.
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
            <Button href="https://www.fuelrequest.ga" target="_blank" variant="contained" color="primary" style={{marginRight: 10}}>
            Live
            </Button>
            <Button disabled variant="contained" color="primary">
            Github
            </Button>
        </div>
      </CardActions>
    </Card>

    <Card className="card2">
        <CardActionArea disabled className="cardaction">
        <CardMedia
          component="img"
          height="180"
          image={image2}
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
            <Button disabled variant="contained" color="primary" style={{marginRight: 10}}>
            Demo
            </Button>
            <Button disabled variant="contained" color="primary">
            Github
            </Button>
        </div>
      </CardActions>
    </Card>

    <Card className="card3">
        <CardActionArea disabled className="cardaction">
        <CardMedia
          component="img"
          height="180"
          image={image3}
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
            <Button disabled variant="contained" color="primary" style={{marginRight: 10}}>
            Demo
            </Button>
            <Button disabled variant="contained" color="primary">
            Github
            </Button>
        </div>
      </CardActions>
    </Card>
    </MuiThemeProvider>
      </div>  
  );
}

export default Projects;