import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Divider,
  Box,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  TableCell,
  Paper
} from "@mui/material";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import marathon2025 from "../assets/marathon2025.jpg";
import marathon2024 from "../assets/marathon2024.jpg";
import marathon2023 from "../assets/marathon2023.jpg";
import marathon2022 from "../assets/marathon2022.jpg";
import marathon2021 from "../assets/marathon2021.jpg";
import marathon2020 from "../assets/marathon2020.jpeg";

function PreviousEvents() {
  
  const pastEventsImages = [
    {
      img: marathon2025,
      title: "Madrid Marathon 2025",
      author: "photo by John Peters",
      alt: "A male runner wearing black clothes an white shoes is approaching the finish line. Other runners are visible in the front. The finish line consists of large blue and white arch with the name of the event and the sponsors' logos printed on it"
    },
    {
      img: marathon2024,
      title: "Madrid Marathon 2024",
      author: "photo by Mary White",
      alt: "A large amount of runners captured from above, running through one of the race paths"
    },
    {
      img: marathon2023,
      title: "Madrid Marathon 2023",
      author: "photo by John Peters",
      alt: "Runners starting their race. The large blue and white arch that is placed at the starting line is visible in the background."
    },
    {
      img: marathon2022,
      title: "Madrid Marathon 2022",
      author: "photo by John Peters",
      alt: "Runners passing in front of the Cibeles Palace"
    },
    {
      img: marathon2021,
      title: "Madrid Marathon 2021",
      author: "photo by Stella Smith",
      alt: "A male runner wearing blue clothes and green shoes is crossing the finish line, taking the ribbon with him. The blue and white arch placed at the finish line is visible in the background. The timer on top shows 2 hours, 8 minutes and 57 seconds."
    },
    {
      img: marathon2020,
      title: "Madrid Marathon 2020",
      author: "photo by Stella Smith",
      alt: "A male runner wearing red clothes is kneeling, clearly tired. The blue and white arch placed at the finish line is visible in the background. The timer on top shows 2 hours, 9 minutes and 24 seconds"
    }
  ];

  return (
    <main id="main-content" tabIndex={-1}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        
        {/* Page Heading */}
        <Typography component="h1" variant="h4" gutterBottom>
          Previous Marathon Events
        </Typography>

        <Typography paragraph color="text.secondary">
          This page provides information about past Madrid Marathon events, including pictures, results and historical facts.
        </Typography>

        <Typography id="race-categories-title" component="h2" variant="h5" gutterBottom>
          Photo Gallery
        </Typography>

        <Typography paragraph color="text.secondary">
          Explore previous marathon events through pictures.
        </Typography>

        <ImageList variant="masonry" cols={3} gap={8} aria-label="Photos from past marathon events">
          {pastEventsImages.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.alt}
                loading="lazy"
                style={{ boarderRadius: "12px" }}
              />
              <ImageListItemBar position="below" title={item.title} subtitle={item.author} />
            </ImageListItem>
          ))}
        </ImageList>

        <Divider sx={{ my: 5 }} />

        <Typography id="race-categories-title" component="h2" variant="h5" gutterBottom>
          Past Race Records
        </Typography>

        <Typography paragraph color="text.secondary">
          Below is a summary of the recent champions of past Madrid Marathon editions.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <TableContainer component={Paper}>
            <Table aria-label="Race champions table">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Year</TableCell>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Time</TableCell>
                  <TableCell component="th" scope="col" sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">2025</TableCell>
                  <TableCell component="td">Carlos Perez</TableCell>
                  <TableCell component="td">2:20:35</TableCell>
                  <TableCell component="td">Male</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">2025</TableCell>
                  <TableCell component="td">Maria Johnson</TableCell>
                  <TableCell component="td">2:38:47</TableCell>
                  <TableCell component="td">Female</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">2024</TableCell>
                  <TableCell component="td">Christian Torres</TableCell>
                  <TableCell component="td">2:18:12</TableCell>
                  <TableCell component="td">Male</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">2024</TableCell>
                  <TableCell component="td">Elena Moreno</TableCell>
                  <TableCell component="td">2:32:24</TableCell>
                  <TableCell component="td">Female</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">2023</TableCell>
                  <TableCell component="td">Samuel Kim</TableCell>
                  <TableCell component="td">2:26:06</TableCell>
                  <TableCell component="td">Male</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">2023</TableCell>
                  <TableCell component="td">Isabella Rossi</TableCell>
                  <TableCell component="td">2:32:55</TableCell>
                  <TableCell component="td">Female</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">2022</TableCell>
                  <TableCell component="td">Daniel O'Connor</TableCell>
                  <TableCell component="td">2:35:28</TableCell>
                  <TableCell component="td">Male</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">2022</TableCell>
                  <TableCell component="td">Siranesh Yirga</TableCell>
                  <TableCell component="td">2:08:18</TableCell>
                  <TableCell component="td">Female</TableCell>
                </TableRow>                
              </TableBody>
            </Table>
          </TableContainer>
        </Box>        

        <Divider sx={{ my: 5 }} />

        <Typography id="timeline-title" component="h2" variant="h5" gutterBottom>
          Madrid Marathon Timeline
        </Typography>

        <Typography paragraph color="text.secondary">
          Take a look at interesting facts about the history of the Madrid Marathon.
        </Typography>

        <Timeline position="alternate" aria-labelledby="timeline-title" component="ul" role="list">
          <TimelineItem component="li">
            <TimelineOppositeContent color="text.secondary">2026</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot aria-hidden="true" />
              <TimelineConnector aria-hidden="true" />
            </TimelineSeparator>
            <TimelineContent>The next Marathon Event!</TimelineContent>
          </TimelineItem>
          <TimelineItem component="li">
            <TimelineOppositeContent color="text.secondary">2022</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot aria-hidden="true" />
              <TimelineConnector aria-hidden="true" />
            </TimelineSeparator>
            <TimelineContent>The women's race record was set at 2:24:37 by Siranesh Yirga</TimelineContent>
          </TimelineItem>
          <TimelineItem component="li">
            <TimelineOppositeContent color="text.secondary">2019</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot aria-hidden="true" />
              <TimelineConnector aria-hidden="true" />
            </TimelineSeparator>
            <TimelineContent>The men's race record was set at 2:08:18 by Reuben Kerio</TimelineContent>
          </TimelineItem>
          <TimelineItem component="li">
            <TimelineOppositeContent color="text.secondary">2017</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot aria-hidden="true" />
              <TimelineConnector aria-hidden="true" />
            </TimelineSeparator>
            <TimelineContent>Over 15.000 runners participated</TimelineContent>
          </TimelineItem>
          <TimelineItem component="li">
            <TimelineOppositeContent color="text.secondary">2012</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot aria-hidden="true" />
              <TimelineConnector aria-hidden="true" />
            </TimelineSeparator>
            <TimelineContent>A half-marathon race was added</TimelineContent>
          </TimelineItem>
          <TimelineItem component="li">
            <TimelineOppositeContent color="text.secondary">2010</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot aria-hidden="true" />
              <TimelineConnector aria-hidden="true" />
            </TimelineSeparator>
            <TimelineContent>A 10km race was added</TimelineContent>
          </TimelineItem>
          <TimelineItem component="li">
            <TimelineOppositeContent color="text.secondary">1978</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot aria-hidden="true" />
            </TimelineSeparator>
            <TimelineContent>The first Madrid Marathon took place!</TimelineContent>
          </TimelineItem>
        </Timeline>

        {/* FOOTER */}
        <Box component="footer" sx={{ mt: 8, py: 4, borderTop: "1px solid", borderColor: "divider", textAlign: "center" }}>
          <Typography variant="body2">
            © 2026 Madrid Marathon. All rights reserved.
          </Typography>
          <Typography variant="body2">
            <RouterLink to="/">Home</RouterLink> · <RouterLink to="/details">Details</RouterLink> ·{" "}
            <RouterLink to="/faq">FAQ</RouterLink> · <RouterLink to="/previous-events">Previous Events</RouterLink> ·{" "}
            <RouterLink to="/register">Register</RouterLink>
          </Typography>
        </Box>

      </Container>
    </main>
  );
}

export default PreviousEvents;
