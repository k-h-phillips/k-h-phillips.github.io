'use client'

import { Avatar, Chip, Link } from '@nextui-org/react';
import Image from 'next/image';
import * as Fa6Icons from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import g3Logo from '../../public/images/G3TechnologiesLogo.png';
import itAvailLogo from '../../public/images/ITAvailabilityLogo.png';
import uvaLogo from '../../public/images/UvaLogo.png';
import codecademyThumbnail from '../../public/images/full-stack-engineer.thumbnail.png';
import khphillipsThumbnail from '../../public/images/k-h-phillips.github.io.thumbnail.png';
import profilePic from '../../public/images/profile-pic.jpg';
import './page.css';

export default function Resume() {
  // Skills chips for each project. Displayed in horizontal lines, wrapping when necessary.
  const itAvailProjectOneSkills = ['Python', 'Playwright', 'JSON', 'MongoDB', 'REDIS', 'Bash Scripting', 'Powershell', 'Azure', 'GitLab', 'Linux', 'Windows']
  const itAvailProjectTwoSkills = ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Node.js', 'React', 'AWS', 'S3', 'EC2', 'Lambda', 'GitHub', 'Java', 'Selenium']
  const g3ProjectSkills = ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'C#', 'ASP.NET', 'Elasticsearch', 'NoSQL', 'Kafka', 'Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'CI/CD', 'MariaDB', 'gRPC', 'Python', 'Selenium']
  const makeSkillChipsContainer = (skills: string[]) => {
    return (<div className="flex gap-1 sm:gap-3 flex-wrap">
      {
        skills.map((skill) =>
          <Chip color="success"
            className="font-bold text-md text-[var(--black-cherry)] skill-tag"
            radius="sm"
            size="sm"
            key="skill">
            {skill}
          </Chip>
        )
      }
    </div>)
  }

  const headerLinks = [
    {
      title: 'single page résumé',
      href: '/KirstenPhillipsResumeSinglePage.pdf',
    },
    {
      title: 'multi-page résumé',
      href: '/KirstenPhillipsResumeMultiPage.pdf',
    }
  ]

  const workExperiences = [
    {
      company: 'I.T. Availability LLC',
      link: 'https://www.itavailability.com/',
      logo: itAvailLogo.src,
      width: 100,
      height: 100,
      alt: 'I.T. Availability logo',
      jobTitle: 'Software Engineer',
      supplementaryJobTitle: 'Top Secret/SCI with Polygraph',
      location: 'Vienna, VA',
      timeframe: 'September 2022 - ongoing',
      projects: [
        {
          title: 'Python automated data collection and processing algorithms',
          skills: makeSkillChipsContainer(itAvailProjectOneSkills),
          jobActivities: [
            'Implemented Python applications on Azure infrastructure to accomplish automated data collection via APIs and other collection strategies',
            'Analyzed and transformed raw and unstructured data into semi-structured JSON data and collaborated with a full stack team that used ETL pipelines to extract entity relationships and display them to end users',
            'Designed and implemented MongoDB and REDIS databases to store scheduling information and collection metadata, successfully reducing duplicate data collection and storage costs by 50% for US-Government clients',
            'Implemented database wrappers for create, read, update, and delete (CRUD) operations via Python libraries',
            'Developed in both Linux and Windows operating systems and used bash and powershell scripting for automated tasks',
            'Contributed to standard operating procedures (SOPs) for code review, documentation, and codebase management',
          ]
        },
        {
          title: 'Front-end web application plugin',
          skills: makeSkillChipsContainer(itAvailProjectTwoSkills),
          jobActivities: [
            'Completed API and GUI modernization and refactoring efforts to increase efficiency, stability, and usability of a cross-platform plugin that automates a tedious and error prone process for US-Government host application users',
            'Collaborated on a simple, well documented, and easy to adopt web API for integrating developers of all different backgrounds and skill levels',
            'Conducted UI design reviews with internal and external parties to improve the user experience',
            'Collaborated on the front end to deliver a better user experience, using Bootstrap controls and conforming to strict website accessibility standards on par with the W3C standards',
            'Developed in a Linux OS on AWS cloud infrastructure and used the AWS S3, EC2, and Lambda services to gather statistics on plugin use cases',
            'Delivered a modernized release for the plugin with minimal defects in an agile SDLC on a 6 month timeline',
            'Led the development of automated UI testing suites which led to the discovery and remediation of bugs in both the web application plugin and an email client counterpart',
            'Supported production systems by answering requests for integration assistance'
          ]
        }
      ]
    },
    {
      company: 'G3 Technologies Inc.',
      link: 'https://www.g3ti.net/',
      logo: g3Logo.src,
      width: 150,
      height: 150,
      alt: 'G3 Technologies logo',
      jobTitle: 'Software Developer',
      location: 'Ashburn, VA',
      timeframe: 'August 2021 - September 2022',
      projects: [
        {
          title: 'Full stack data driven web applications',
          skills: makeSkillChipsContainer(g3ProjectSkills),
          jobActivities: [
            'Used acquired domain knowledge in cellular technologies to perform ASP.NET (C#) maintenance development and Python automated testing for a full stack data driven web application',
            'Gained familiarity with common software engineering platforms and services that have widespread use, such as Docker, Kubernetes, Kafka, and Jenkins CI/CD',
            'Wrote complex Elasticsearch queries to test backend performance and algorithm accuracy',
            'Designed and developed a full stack application to ingest, process, load, and display audio data to end users',
            'Conducted in depth UI design reviews with UI experts',
            'Wrote custom ASP.NET (C#) server controls to meet specific UI and server requirements',
            'Used gRPC and protocol buffers for communication with underlying audio algorithms',
            'Designed and normalized a SQL database using MariaDB to store core application data',
            'Wrote a data model and wrapper layer in C# to enable SQL queries',
            'Participated in a culture of high programming and documentation standards, in-depth code reviews, and extensive unit, integration, and UI testing geared toward early bug discovery'
          ]
        },
      ]
    }
  ]

  const sideProjects = [
    {
      title: 'k-h-phillips.github.io',
      description: 'This website! A web development project built with React, Next.js, NextUI, and Tailwind CSS, and deployed with GitHub pages (because it&apos;s super simple and free). I created this site to offer more information about me, display my résumé in a way that represents my style, showcase some web design skills, and to serve as a platform to display future side projects.',
      src: khphillipsThumbnail.src,
      alt: 'k-h-phillips.github.io website screenshot'
    },
    {
      title: 'Codecademy Full-Stack Engineer Professional Certication',
      description: 'To earn this certification I completed 51 courses and dedicated more than 150 hours of my personal time to hone full-stack software engineering skills and learn new technologies. The coursework involved the completion of mini projects which helped me get the hands on experience I needed without having the time to complete full scale projects.',
      src: codecademyThumbnail.src,
      alt: 'codecademy full stack engineer professional certification website screenshot'
    }
  ]

  return (
    <div className="flex justify-between gap-5 p-6 w-full max-w-[1250px] max-h-[full] fade mt-[4rem]">
      <div className="justify-self-start flex-auto">

        { /* Header with profile photo, name, title, and résumé links. */}
        <div className="flex sm:flex-row flex-col gap-2 w-full sm:justify-between justify-center items-center p-2">
          <div className="flex flex-row gap-4 items-center">
            <Avatar isBordered src={profilePic.src} color="primary" className="justify-self-start w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem]" />
            <div>
              <h1 className="font-bold text-3xl sm:text-6xl">Kirsten Phillips</h1>
              <h2 className="font-bold text-primary text-xl sm:text-4xl">Software Engineer</h2>
            </div>
          </div>
          <div className="flex flex-col sm:mt-0 mt-4 gap-3 items-end">
            {
              headerLinks.map((link, index) => {
                return (
                  <Link href={link.href} target="_blank" key={index}>
                    <Chip
                      color="success"
                      className="font-bold resume"
                      variant="flat"
                      radius="md"
                      size="lg"
                      endContent={<LuExternalLink size={18} />} >
                      {link.title}
                    </Chip>
                  </Link>
                )
              })
            }
          </div>
        </div>

        { /* Work experience */}
        <h2 className="text-3xl sm:text-5xl section-header" id="work-experience">work experience</h2>
        {
          workExperiences.map((experience, index) => {
            return (
              <section key={index} className="md:flex md:gap-4">
                <div className="basis-1/4 grow-0 shrink-0">
                  <div className="md:sticky md:top-[5rem] flex md:flex-col flex-row-reverse gap-2 mt-4 flex-wrap md:text-center md:justify-start justify-end">
                    <Link href={experience.link} target="_blank" className="sm:self-center ml-[1rem]">
                      <Image alt={experience.alt} src={experience.logo} width={experience.width} height={experience.height} />
                    </Link>
                    <div className="flex flex-col sm:gap-2">
                      <h3 className="font-bold text-primary text-xl sm:text-3xl">{experience.jobTitle}</h3>
                      {experience.supplementaryJobTitle && <h4 className="italic text-m sm:text-xl text-zinc-400">{experience.supplementaryJobTitle}</h4>}
                      <span className="text-neutral-300 text-l sm:text-xl flex md:justify-center items-center gap-2"><Fa6Icons.FaLocationDot color="var(--black-cherry)" />{experience.company} - {experience.location}</span>
                      <span className="text-neutral-300 text-l sm:text-xl flex md:justify-center items-center gap-2"><Fa6Icons.FaCalendar color="var(--black-cherry)" />{experience.timeframe}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {
                    experience.projects.map((project, index) => {
                      return (
                        <div key={index} className="flex flex-col gap-2" >
                          <h4 className="project-header text-l sm:text-2xl text-primary">{project.title}</h4>
                          {project.skills}
                          <ul className="job-description-list">
                            {
                              project.jobActivities.map((activity, index) => {
                                return <li key={index}>{activity}</li>
                              })
                            }
                          </ul>
                        </div>
                      )
                    })
                  }
                </div>
              </section>
            )
          })
        }

        { /* Side projects */}
        <h2 className="text-3xl sm:text-5xl section-header" id="side-projects">side projects</h2>
        <section className="flex flex-col md:flex-row gap-4">
          {
            sideProjects.map((project, index) => {
              return (
                <div key={index}>
                  <Image alt={project.alt}
                    className="shadow-2xl rounded-lg"
                    src={project.src}
                    width={400}
                    height={200}
                  />
                  <h4 className="project-header text-l sm: text-2xl text-primary">{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              )
            })
          }
        </section>

        { /* Education */}
        <h2 className="text-3xl sm:text-5xl section-header" id="education">education</h2>
        <section className="flex md:flex-row md:gap-7 flex-col gap-2 sm:justify-center items-center">
          <Link href="https://engineering.virginia.edu/department/computer-science/academics/undergraduate-programs/bs-computer-science" target="_blank">
            <Image src={uvaLogo.src} alt="UVA logo" width={125} height={125} className="brightness-125"></Image>
          </Link>
          <div className="flex flex-col justify-center sm:text-left text-center">
            <h2 className="font-bold text-primary text-xl sm:text-3xl">Bachelors of Science in Computer Science</h2>
            <h3 className="font-bold text-[var(--linen)] text-l sm:text-2xl">University of Virginia School of Engineering and Applied Sciences</h3>
            <h4 className="italic text-l sm:text-2xl text-[var(--linen)]">3.88 GPA</h4>
          </div>
        </section>
      </div>
    </div>
  );
}
