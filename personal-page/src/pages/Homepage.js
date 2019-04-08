import React, { Component } from 'react';
import TopBar from './components/TopBar';
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <header>
                <TopBar/>
                <div style={{textAlign: "center"}}>
                </div>
            </header>
        );
    }
}

export default Homepage;