import { makeStyles } from "@material-ui/core";
import About from "./components/About";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";


function App() {

  const classes = useStyles();

  return (
    <div className="Classes.root">
    
        <Navbar  /> 

        <About  id="about" dark={true}/>

        <MyWork title="Mis trabajos"id="works"dark={false}/>
        
        <Skills title="habilidades"id="skills"dark={true}/>

        <Contact title="Ponerse en contacto"id="contact"dark={false}/>
        
        <h6><li>2020 © Copyright MuhanaDesign.  Rights Reserved
           Proudly designed by Guillermo Muhana Development</li></h6>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({

  root:  {

  }
}))

export default App;
