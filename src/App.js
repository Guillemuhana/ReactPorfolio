import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MyWork from "./Components/MyWork";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Web from "./Components/Web";


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
        <About title="Sobre mi" dark={true} id="about" />

        <Skills title="Mis habilidades" dark={false} id="skills" />

        {/*<MyWork title="Mis trabajos" dark={true} id="work" />*/}

        <Contact title="Formulario de contacto" dark={false} id="contact" />

        <Web href="https://muhanadesign.com/" />

        
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
