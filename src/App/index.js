import React, { Fragment ,Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Profile from '../components/Profile';
import * as routes from '../components/routes';
import { Link } from 'react-router-dom';
import EnovaDiag from '../images/EnovaDiag.PNG';
import BIProject from '../images/BI.jpg';
import Drowsiness_Detection from '../images/driver-drowsiness-detection.jpg';
import { Grid} from "@material-ui/core";
import {FaGithub,FaEnvelope,FaPhone,FaHome,FaLinkedin,FaGithubSquare} from "react-icons/fa";
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App" style={{  minHeight: "100%",display: "flex",flexDirection: "column"}}>
          <div className="App-main" style={{flex: "1"}}>
            {/* the page that displays Git Repositories*/}
            <Route
              exact
              path={routes.PROFILE}
              component={() => (
                <div className="App-content_small-header" style={{marginTop: "54px"}}>
                  <Profile />
                </div>
              )}
            />
            {/* the welcome page*/}
            <Route
              exact
              path={routes.MAIN}
              component={() => (
                <div className="App" style={{  minHeight: "100%",display: "flex",flexDirection: "column"}}>
                  <div className="App-main" style={{flex: "1"}}>
                <Navigation/>
                <Fragment>
                     {/* This section is for introduction of the website */}
                     <section id="home" className="section section-icons grey lighten-4 center">
                        <div className="caption center-align">
                         <h2>welcome </h2></div>
                      <center>
                         <Grid container spacing={4} item  lg={52}   >
                          <div className="row">
                           <h1 className="center">
                           <span className="purple-text darken-1">Welcome</span> user ! </h1>
                              <div className="card-panel center" style={{width: 800}}>
                               <i className="material-icons medium purple-text">About the website</i>
                              <h6>This website gives an overview of all the the personal repositories in Github of username: eyarouissi. In this page you will find highlights of the projects that exist in Github as well as their description and when you scroll down, you will find contact details in case you have any questions about the website. To take a look on Git repositories, just click on the Button "Git repositories"                  
                                  Hope you Enjoy your time here !</h6> 
                             </div>  
                           </div>
                          </Grid></center>
                     </section>
                     {/* This section is for for the highlights of my projects on Github*/}
                     <section id="highlights" className="section section-popular scrollspy">
                        <div className="container">
                          <div className="row">
                            <h4 className="center">
                            <span className="purple-text darken-1">Projects</span> Highlights</h4>
                               <div className="col s12 m4">
                                 <div className="card">
                                    <div className="card-image">
                                      <img src={EnovaDiag} alt="" />
                  
                                     </div>
                                      <div className="card-content">
                                      <p> This project is named EnovaDiag and it is a mobile application that helps drivers to do a diagnostic test to their car without the need to go to a dealer shop.</p>
                                    </div>
          
                                 </div>
                                </div>
                                <div className="col s12 m4">
                                  <div className="card">
                                      <div className="card-image">
                                       <img src={BIProject} alt="" />
                                       </div>
                                  <div className="card-content">
                                  <p>COVID_19 Vaccine Tracker is a dashboard that helps to follow up vaccination progress worldwide by country and by age.</p>
                                   </div>
                                </div>
                              </div>
                         <div className="col s12 m4">
                            <div className="card">
                             <div className="card-image">
                               <img src={Drowsiness_Detection} alt="" />             
                             </div>
                             <div className="card-content">
                          <p>This project is a real-time web application that notifies drivers whenever they feel tired using CNN algorithm</p>
                         </div>
                       </div>
                       </div>
                    </div>
                 </div>
                    </section>
                    {/* This section contains a button that redirect user to Git repos*/}
                    <section id="Git" className="section purple darken-2 white-text center" >
                     <div className="container">
                       <div className="row">
                        <Link to={routes.PROFILE} className="btn btn-large waves-effect white purple-text text-darken-3" style={{margin: 1}}>
                        <i className="" ><FaGithub/> Git Repositories </i>
                        </Link>
                     </div></div>
                    </section>
                    {/* This section provides details about contact ways*/}
                   <section id="contact" className="section section-contact scrollspy">
                     <div className="container">
                      <div className="row">
                       <div className="col s12 m6">
                        <div className="card-panel purple white-text center">
                          <i className="" ><FaEnvelope/></i>
                          <h5>eya.rouissi@ensi-uma.tn</h5>
                          <p>If you have a question regarding the website , please make sure to send an email, I will be glad to answer you. Also, you can just fill in this form and specify your need in the message field</p>
                       </div>
                        <ul className="collection with-header">
                        <li className="collection-header">
                        <h4>Reach out to me !</h4>
                        </li>
                        <li className="collection-item"><i><FaGithubSquare/></i> eyarouissi</li>
                        <li className="collection-item"><i ><FaHome/></i> City ezzouhour 4, Tunis</li>
                        <li className="collection-item"><i ><FaPhone/></i> +216 29 333 477</li>
                        <li className="collection-item"><i ><FaLinkedin/></i> Eya Rouissi</li>
                        </ul>
                       </div>
                      <div className="col s12 m6">
                        <div className="card-panel grey lighten-3">
                          <h5>Please fill out this form</h5>
                           <form>
                             <div className="input-field">
                              <input type="text" id="name" className="validate" />
                              <label for="name" className="purple-text">Name</label>
                             </div>
                             <div className="input-field">
                              <input type="email" id="email" />
                              <label for="email" className="purple-text">Email</label>
                             </div>
                             <div className="input-field">
                              <input type="text" id="phone" />
                              <label for="phone" className="purple-text">Phone</label>
                             </div>
                             <div className="input-field">
                              <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                              <label for="message" className="purple-text">Message</label>
                             </div>
                              <input type="submit" value="Submit" className="btn purple" />
                           </form>
                       </div>
                       </div>
                      </div>
                     </div>
                    </section>
                  </Fragment></div></div>
              )}
            />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
