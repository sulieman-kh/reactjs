import React, { Component } from 'react';
import './styleM.css';


class BoxM extends Component {
    render(){
        return(
            <div className="boxer">
            <div className="box">
            <i class="fas fa-chart-pie fa-4x"></i>
            <h3>Analytics</h3>
            <p>Analytics of buying and selling houses in Moscow</p>
            </div>
            <div className="box">
            <i class="fas fa-shopping-bag fa-4x"></i>
            <h3>Marketting</h3>
            <p>BLOG ABOUT SUCCESSFUL MARKETING STRATEGIES IN RUSSIA
            HOW TO SELL AN APARTMENT OR LUXURY PROPERTIES TO RUSSIAN AUDIENCE?</p>
            </div>
            <div className="box">
           <i class="fab fa-connectdevelop fa-4x"></i>
            <h3>Development</h3>
            <p>Development of the housing sector in Moscow</p>
            </div>
            <div className="box">
            <i class="fas fa-volleyball-ball fa-4x"></i>
            <h3>Support</h3>
            <p>We are available 24/7</p>
            </div>
            </div>
        )
    }
}
export default BoxM;
