import React , { Component } from 'react';
import './Footer.scss';



export default class Footer extends Component {
    render(){
        return( 
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>This page by Sulieman Khaddour</h4>
                        <ul className="list-unstyled">
                            <li>+79969239935</li>
                            <li>Moscow, Russia</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>Other options</li>
                            <li>Other stuff</li>
                            <li>About</li>
                        </ul>
                    </div>
                     <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} this page is a simple project in React js | All right reserved | Privacy
                        </p>
                    </div>
                  
                </div>
                
            </div>                
        </div>
        )
    }
}
