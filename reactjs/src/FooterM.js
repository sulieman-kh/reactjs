import React , { Component } from 'react';
import './styleM.css';
import  { InstaFollow } from './InstaFollow';



export default class Footer extends Component {
    render(){
        return( 
    
           
                <div >
                    {/* Column1 */}
                    <div >
                        <h4>This page by Sulieman Khaddour</h4>
                        <ul >
                            <li>+79969239935</li>
                            <li>Moscow, Russia</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div >
                        <h4>STUFF</h4>
                        <ul >
                            <li>Other options</li>
                            <li>Other stuff</li>
                            <li>About</li>
                        </ul>
                       
                    </div>
                    
                     <hr />
                    
                    <div >
                        <p >
                            &copy;{new Date().getFullYear()} this page is a simple project in React js | All right reserved | Privacy
                        </p>
                    </div>
                  
                </div>
                
                            
      
        )
    }
}
