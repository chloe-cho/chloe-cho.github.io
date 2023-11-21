import React from 'react'
import WorkItem from './WorkItem';
const data: {
  date: string; 
  company: string;
  companyURL: string;
  title: string;
  details: Array<string>;
}[] = [
  {
    date: "Apr 2022 — Jul 2023",
    company: "Varis",
    companyURL: "https://www.govaris.com/",
    title:"Software Engineer 1",
    details: [
      "Designed and implemented robust RESTful APIs in Go for multiple microservices on the Finance team, utilizing MongoDB and PostgreSQL for database operations",
      "Achieved and maintained exceptional code coverage of over 90% for 15 microservices by implementing comprehensive unit tests",
      "Automated and managed over 40 repositories by developing a Bash script, reducing task time in half through auto-updates and pull request generation for security vulnerabilities and version updates",
      "Provided crucial production on-call support, effectively troubleshooting and resolving bugs by analyzing logs in New Relic and writing SQL queries to find affected records in the database",
      "Collaborated closely with the product manager and QA team to integrate business requirements and translate them to functional requirements in the financial workflow"
    ],
  },
  {
    date: "Aug 2021 — Jan 2022",
    company: "Varis",
    companyURL: "https://www.govaris.com/",
    title:"Software Engineer 1 (Part-Time)",
    details: [
      "Implemented thorough integration testing utilizing Postman to validate diverse use cases and load testing using k6 to ensure the reliability and scalability of the payments and tax microservices",
      "Leveraged Git and Agile Scrum methodologies to facilitate efficient collaboration with team members on changing requirements and ensuring the delivery of high-quality, testable code",
      "Documented APIs using Swagger to ensure clear communication between development teams",
    ]
  },
  {
    date: "May 2021 — Aug 2021",
    company: "Office Depot",
    companyURL: "https://www.officedepot.com/",
    title:"Software Developer Intern",
    details: [
      "Developed and coded RESTful APIs for versatile configure-to-order microservice with Go and PostgreSQL by working with a mentor to continuously learn and improve the code",
      "Utilized GORM to craft efficient queries, enabling seamless data storage and retrieval for the microservice"
    ]
  },
]
const Experience: React.FC = () => {
    return (
      <div className='w-full h-screen bg-[#000000] text-slate-200 justify-center'> 
        <div className='max-w-[1000px] mx-auto px-8 md:px-40 flex flex-col justify-center h-full'>
          <h1 className='mb-6 text-3xl font-bold text-left text-[#b8b8b8]'>EXPERIENCE</h1>
          {data.map((item, idx) =>
            <WorkItem key={idx} date={item.date} title={item.title} company={item.company} companyURL={item.companyURL} details={item.details} />
          )}
        </div>
      </div>

    );
  }
  
  export default Experience