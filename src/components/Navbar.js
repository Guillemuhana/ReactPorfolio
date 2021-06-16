
import { AppBar, List, makeStyles, Toolbar, IconButton, Drawer, ListItem } from '@material-ui/core'
import logo  from "../Images/muhanadesign.png"

import {link, animateScroll as scroll, Link} from "react-scroll"
import InfoTwoTone from "@material-ui/icons/InfoTwoTone"
import MenuIcon from "@material-ui/icons/Menu"
 
import CanceleIcon from "@material-ui/icons/Cancel"
import { useState } from "react"



const links = [

    {
        id: "about",
        text: "Sobre Mi",
       
    },
    {
        id: "skills",
        text: "Estudios y experiencia",
       
    },
    {
        id: "works",
        text: "Mis trabajos",
    },
    {
        id: "contact",
        text: "Contacto",
    }
]


const Navbar = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false)

    return (
      
        <>

       <AppBar position="sticky" className={classes.root }>

           <Toolbar className={classes.toolbar }>
            
          <img src={logo } className={classes.logo}  alt="Logo" />

          <List className={classes.menu}>

              {
                   links.map (({id, text, index}) =>(

                   <Link Key={index} 
                   to={id} spy={true} 
                   activeclass="active" 
                   smooth={true} duration={500}
                   offset= {-70}> 
                   {text}
                   </Link>
                   
                   
               ))
              }
          </List>
                 <IconButton edge="end" 
                 className={classes.menubutton }
                 onClick={()=>setOpen(!open)}
                 >

               <MenuIcon fontSize="large"/>
                    
               </IconButton> 
             
           </Toolbar>


       </AppBar> 

           <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>

            <IconButton  onClick={()=>setOpen(false)}>
              
               <CanceleIcon fontSize="large"/>
            </IconButton>
             
             
            {
                   links.map (({id, text,}, index) =>(

                   <Link Key={index}
                   className={classes.sidebar} 
                   to={id} spy={true} 
                   activeclass="active" 
                   smooth={true} duration={500}
                   offset= {-70}> 
                  
                   
                   <ListItem component="h5">
                       <span>
                       •-                      
                       </span>{text}
                   </ListItem>



                   </Link>
                   
                   
               ))
              }


       </Drawer>
       </>
    )
    }
const useStyles = makeStyles((theme) => ({

    logo:  {
        top: 0,
        left: 0,
        right: 0,

        zIndex: 999,
    },

    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"


    },

    menu: {

        [theme.breakpoints.down("sm")]:  {

            display: "none"
        },
        "& a":{
            color: "#C0C0C1",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover":{
            cursor: "pointer",
            color: "##000080",
            
        }
    },
       logo:{
        "&:hover": {
            cursor: "pointer",
            borderBottom: "3px solid ightskyblue",
        }
        
  
    },
    menubutton: {

        display: "none",
        [theme.breakpoints.down("sm")]: {
        display: "block",
        position: "absolute",
        top:0,
        right:10,
        }
    },
    sidebar:{
        width:"40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
            
        },

        "& h5": {
            margin: theme.spacing(10, 0, 0, 3),
            fontSize: "1.0rem",
            color: "#000080",
            fontWeight: "bold",

        },

        "& h5:hover": {
            color: "#000000",
            cursor: "pointer",
        }
    }
    
}))

export default Navbar
