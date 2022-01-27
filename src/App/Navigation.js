import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  AppBar

} from "@material-ui/core";

import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const SmoothScroll = () => {
  return (
    <AppBar>
      <div className="navbar-fixed">
        <nav className="purple">
          <div className="container">
            <div class="nav-wrapper">
              <AnchorLink
                href="!#"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i class="material-icons">menu</i>
              </AnchorLink>
              <ul class="right hide-on-med-and-down">
                <li>
                  <AnchorLink href="#home">About</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#highlights">Projects Highlights </AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#Git">Git Repos</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">Contact</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </AppBar>
  );
};


const Navigation = ({
}) => (
  <AppBar className="Navigation" style={{ overflow: "hidden",position: "fixed",top: 0,width: "100%",backgroundColor: "#24292e",display: "flex",alignItems:"baseline"}}>
       
      <section>
        <SmoothScroll />
      </section>
  </AppBar>
);


export default withRouter(Navigation);
