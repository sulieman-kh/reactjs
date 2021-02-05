import React, { Component } from 'react'
import './styleM.css';
import HeaderM from './HeaderM';
import FooterM from './FooterM';
import BoxM from './BoxM.js';


export default class App extends Component {

  render(){
    return( 
        <div className="wrapper">
             {/*Navigation*/}
           
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
                      < HeaderM />
                      <BoxM />
                     
                  {/*info section*/}

              <section className="info">
                <img src="./image/moscow.jpg" alt=""></img>
                  <div>
                  <h2> This site is at your service </h2>
                  <p>Save time and money with us, we are here to serve you.</p>
                  <a href="#" className="btn">Learn More</a>
                  </div>
              </section>

                 {/*Portfolio*/}
                 <section className="portfolio">
                   <img src="https://source.unsplash.com/random/200x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/201x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/202x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/203x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/204x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/205x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/206x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/207x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/208x200" alt=""></img>
                   <img src="https://source.unsplash.com/random/209x200" alt=""></img>
                 </section>

                   {/*Footer*/}
                <div className="footer">
                <FooterM/>
    
                </div>

         
         
        </div>
          
       )
  }
}
