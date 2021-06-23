import {  Button,  Card,  CardActions,  CardContent,  CardMedia,  makeStyles,  Typography,
} from "@material-ui/core";
import React from "react";
import cvgm from "../images/cvgm.pdf";
import  imagen2 from "../images/imagen2.jpeg";
import TypeWriterEffect from "react-typewriter-effect";

const About = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imagen2}
            title="profilepic"
          />
          <CardContent className={classes.cardContent}>
            <TypeWriterEffect
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#6495ED",
              }}
              startDelay={100}
              cursorColor="black"
              text="Hola, mi nombre es Guillermo Muhana"
              typeSpeed={100}
            />
            <TypeWriterEffect
              textStyle={{ fontSize: "1.2rem", fontWeight: "500px" }}
              startDelay={2500}
              cursorColor="#6495ED"
              text="Y soy un apasionado por la tecnologia y aprendiendo con muchas ganas front-end React"
              typeSpeed={100}
            />
            <Typography variant="h6" color="textSecondary">
            Me presento como una persona activa, responsable, creativa, flexible, dinámica,
             orientada al logro de resultados y a la resolución de las tareas asignadas. 
             Me gusta trabajar en equipo, tengo como virtud la predisposición para aprender, 
             investigar y sobretodo demostrar actitud y ganas de trabajar.
             Tengo conocimientos en asp.net core, Javascript, html5, php, laravel, css, bootstrap, wordpress y actualmente estudiando mucho React - Material ui
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfButton}>
              <a href={cvgm} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "white",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
    padding: theme.spacing(5),
    "& h3": {
      marginLeft: theme.spacing(3),
    },
    "& h4": {
      color: "#6495ED",
    },
  },
  card: {
    marginTop: theme.spacing(6),
    display: "flex",
    height: "70vh",
    position: "relative",
  },
  media: {
    width: "350px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
  },
  cardContent: {
    position: "relative",
    marginTop: theme.spacing(3),
    "& h6": {
      marginTop: theme.spacing(5),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  pdfButton: {
    position: "absolute",
    bottom: "5rem",
    right: "4rem",
    [theme.breakpoints.down("sm")]: {
      bottom: 10,
      right: "1rem",
    },
    backgroundColor: "#2874A6",
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "#0000CD"
    },
  },
}));

export default About;
