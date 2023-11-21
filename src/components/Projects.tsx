import React from 'react'
import ProjectItem from './ProjectItem';
const data: {
  github: string;
  title: string;
  details: string;
}[] = [
  {
    github: "",
    title: "Ballot Counting System",
    details: "Designed and coded a ballot counting system to help determine voting numbers for different election types using an Agile methodology. Takes in a CSV file with all the ballots and creates a summary of votes for each candidate as well as the winner for that election.",
  },
  {
    github: "https://github.com/chloe-cho/moisture_sensor_project",
    title: "Water Plants",
    details: "Worked with a team using a moisture sensor and pump to create an automatic plant waterer when the moisture of the soil gets below a certain number. Also created a small HTML frontend page to allow the user to control watering duration and manual watering.",
  },
  {
    github: "",
    title:"Recipe Book",
    details:"WORK IN PROGRESS",
  },
]
const Projects: React.FC =() => {
  return (
    <div className='w-full h-screen bg-[#000000] text-slate-200 justify-center'> 
    <div className='max-w-[1000px] mx-auto px-8 md:px-40 flex flex-col justify-center h-full'>
      <h1 className='mb-6 text-3xl font-bold text-left text-[#b8b8b8]'>PROJECTS</h1>
      {data.map((item, idx) =>
        <ProjectItem key={idx} title={item.title} github={item.github} details={item.details} />
      )}
    </div>
  </div>

  );
}

export default Projects


