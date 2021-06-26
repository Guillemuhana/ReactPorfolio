import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import wplogo1 from "../images/wplogo1.jpg";
import html5 from "../images/html5.jpg";
import CSS3 from "../images/CSS3.png";
import StarRating from "./StarRating";
import jslogo from "../images/jslogo.png";
import react from "../images/react.png";
import git from "../images/git.png";
import mat from "../images/mat.png";

const Technologies = () => {
  const classes = useStyles();

  const skills = [
    {
      year: "2016",
      src: wplogo1,
      title: "Wordpress",
      stars: 5,
    },
    {
      year: "2017",
      src: html5,
      title: "HTML 5",
      stars: 4,
    },
    {
      year: "2018",
      src: CSS3,
      title: "CSS 3",
      stars: 4,
    },
    {
      year: "2019",
      src: jslogo,
      title: "Javascript ",
      stars: 4,
    },
    {
      year: "2020",
      src: react,
      title: "React js",
      stars: 3,
    },
    {
      year: "2020",
      src: git,
      title: "GitHub",
      stars: 4,
    },
    {
      year: "2021",
      src: mat,
      title: "Material ui y bootstrap",
      stars: 3,
    },
  ];

  return (
    <Timeline align="left">
      {skills.map(({ year, src, title, stars }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <img src={src} alt={title} className={classes.customlogo} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
              <StarRating stars={stars} />
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  customlogo: {
    width: "25px",
    objectFit: "cover",
  },
}));

export default Technologies;