import {  createMuiTheme,  makeStyles,  MuiThemeProvider,} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

import Footer from "./Components/Footer/Footer";




const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: "#333" },
  },
});


const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />

        
        <About title="Sobre mi" dark={false} id="about" />


        <Skills title="Mis habilidades" dark={false} id="skills" />

       

        <Contact title="Formulario de contacto" dark={false} id="contact" />

        

        <Footer />

        

        
      </div>
      

    </MuiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
}));

export default App;
