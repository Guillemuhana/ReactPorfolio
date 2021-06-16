import React from 'react'
import {Card, Button, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import imagen2 from "../Images/imagen2.jpeg"
import TypeWriterEffect from "react-typewriter-effect"
import CV from "../Images/CV.pdf"




const About = ({ title, dark, id}) => {

    const classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
               <Typography variant="h3">{title}</Typography>
        
               <Card className={classes.card}>

               <CardMedia image={imagen2} className={classes.media} title="Guillermo Muhana"/>
              
               <CardContent className={classes.CardContent}>
               <TypeWriterEffect

                 text = "Hola, Mi nombre es Guillermo Manuel Muhana"
                textStyle={{fontSize: "2rem", fontWeight: " 600px", color: "#00008B"}}
                startDelay={100}
                cursor="#0C437D"
                typeSpeed={80}
               />
               
                 <TypeWriterEffect

                text = "Y soy tecnico universitario en programacion"
                textStyle={{fontSize: "1.2rem", fontWeight: " 500px", color: "#515A5A"}}
                startDelay={3000}
                cursor="#0C437D"
                typeSpeed={50}
                 />

                 <Typography variant="h6" color="textSecundary">
                  
                  gbvlhfbxlvkjsdbb.vjzdljvbc cbs .cvlkmmmmmmmmmmmmm
                  nnjnjnjnjnjnjnjnnnjn

                 </Typography>
               </CardContent>

               <CardActions>
                     <Button variant="contained" className={classes.pdfButton}> 
                     <a href={ CV} download>
                     Descargar CV 
                     </a>
                     </Button>

               </CardActions>
             

              </Card>

          </div>
      </div>
       
    )
}




const useStyles = makeStyles((theme) => ({

    section:  {
  
        minHeight: "100vh",

    },

    sectiondark: {

        background: "#333",
        color: "#fff",


    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },

    card: {
            height:"70vh",
            display: "flex",
            marginTop: theme.spacing(6),
            position: "relative",
    },
    media:{
        width: "200px",
        height:"auto",
        objectFit: "cover",
        borderRadius: "2px",
        margin: theme.spacing(4),
    },
    pdfButton: {
        position: "absolute",
        buttom: "4rem",
        right: "4rem",
        [theme.breakpoints.down("sm")]:{
          bottom: 10,
        },
        
        background: "#F4D03F ",
        padding: theme.spacing(1),
        "&:hover": {
            backgroundColor: "#fff",
        
        },
        "& a": {
        color: "fff",
        textDecoration: "none",
        fontWwight: 900,
        }
    },
  }))

export default About
