import React from 'react';

import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
   Footer:{
    backgroundColor: "#7F00FF",
    textAlign: 'center',
    alignItems: "center",
    padding: "20px",
    color: "#ffffff"},
    Footertext:
    {textAlign: "center",opacity: 0.35}

}));

const Footer = () => {
    const classes = useStyles();
    return (
  <div className={classes.Footer} >
    <div>
      <center>
      <small>
        <span className={classes.Footertext} >Built by </span>{' '}
          Eya Rouissi
        {' '}
        <span className={classes.Footertext} >with &hearts;</span>
      </small>
      </center>
    </div>
  </div>
);}

export default Footer;