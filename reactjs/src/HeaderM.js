import React, { Component } from 'react';
import { InstaFollow } from './InstaFollow';
import './styleM.css';
export default class Header extends Component {
    render(){
        return(
            <section className="top-container">
                <header className="showcase">
                    <h1>Your future is here</h1>
                    <p>The best city to live, study, work, happy and have beautiful moments!</p>
                    <a href="#" className="btn">Read More</a>
                </header>
                
                <div className="top-box top-box-a">
                <i class="fas fa-home fa-4x" ></i>
            <h2>Rooms</h2>
            <p className="price">$300/mo</p>
            <a href="" className="btn">Call</a>
          </div>.
          <div className="top-box top-box-b">
                <InstaFollow/>
          </div>    
            </section>
         
        
        )
    }
}
