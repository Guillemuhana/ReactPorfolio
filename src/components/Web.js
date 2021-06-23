import React from "react";
import {  Card, onclick, button,  CardContent, Link, CardMedia, Grid, makeStyles,  Typography,} from "@material-ui/core";




const web = () => {
  const classes = useStyles();

    return (
      
      <button><a href="https://api.whatsapp.com/send?phone=3515931673&text=
                       Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20
                       sobre%20Guillermo%202." 
      target="_blank" rel="noopener noreferrer" className={classes.what} >What app</a>
      </button>
  
    );
  };

  const useStyles = makeStyles((theme) => ({
    what: {
      position:"fixed",
      width:"50px",
      height:"50px",
      bottom:"30px",
      right:"30px",
      background:"#25d366",
      color:"#FFF",
      borderRadius:"100px",
      fontSize:"30",
      marginTop:"13px",
  
    },
    

  }));
    

export default web;