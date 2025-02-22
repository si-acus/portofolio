import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const certifications = [
  {
    title: "Workshop Android Developer",
    organizer: "ComLab ITB",
    year: "2011",
  },
  {
    title: "Seminar Google Apps Developer Challenge",
    organizer: "GDG Indonesia",
    year: "2012",
  },
  {
    title: "Indonesia Android Kejar Beginner ",
    organizer: "GDG Indonesia",
    year: "2014",
  },
  {
    title: "Indonesia Android Kejar Advance ",
    organizer: "GDG Indonesia",
    year: "2016",
  },
  {
    title: "Facilitator Android Development for Beginner",
    organizer: "GDG Indonesia",
    year: "2016",
  },
  {
    title: "Android Native Bagian 1",
    organizer: "Dicoding",
    year: "2019",
  },
  {
    title: "ExpressJS Fundamentals",
    organizer: "Udemy",
    year: "2019",
  },
  {
    title: "React Basic in Just 1 Hour",
    organizer: "Udemy",
    year: "2020",
  },
  {
    title: "Modern React with Redux",
    organizer: "Udemy",
    year: "2020",
  },
  {
    title: "Indonesia Scrum Master I",
    organizer: "Ekipa",
    year: "2021",
  },
  {
    title: "Flexible Working Arrangement & Objective and Key Result",
    organizer: "Telkom Corporate University",
    year: "2021",
  },
  {
    title: "Leadership Competencies Level 1",
    organizer: "Telkom Corporate University",
    year: "2021",
  },
]
export default function Certifications() {
  return (
    <div id="certifications" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-primary">Certifications</p>
        <h2 className="py-4">The certificates that I have</h2>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {certifications.map((certificate, index) => {
            return (
              <div data-aos="zoom-in" data-aos-duration="1000">

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {index !== certifications.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent><b>{certificate.title}</b>{` - ${certificate.organizer} (${certificate.year})`}</TimelineContent>
                </TimelineItem>
              </div>
            )
          })}
        </Timeline>
      </div>
    </div>
  );
}
