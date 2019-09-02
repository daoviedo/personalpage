import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Projects from './components/Projects';
import './Homepage.css';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPage: 0
        }
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return <div/>;
            case 1:
                return <Projects/>;
            case 2:
                return <Resume/>;
            case 3:
                return <AboutMe changePage={this.changePage}/>;
            case 4:
                return <Contact/>;
            default:
                throw new Error('Unknown step');
        }
    }

    changePage = (num) =>{
        this.setState({ selectedPage: num});
    }
    render() {
        const { selectedPage } = this.state;
        return (
            <header>
                <TopBar selected={this.state.selectedPage} changePage={this.changePage}/>
                {this.getStepContent(selectedPage)}
            </header>
        );
    }
}

export default Homepage;