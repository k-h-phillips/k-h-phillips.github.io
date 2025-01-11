'use client'

import { Avatar, Chip, Link } from '@nextui-org/react';
import { useRef } from 'react';
import Image from 'next/image';
import * as Fa6Icons from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import g3Logo from '../../public/images/G3TechnologiesLogo.png';
import itAvailLogo from '../../public/images/ITAvailabilityLogo.png';
import uvaLogo from '../../public/images/UvaLogo.png';
import codecademyThumbnail from '../../public/images/full-stack-engineer.thumbnail.png';
import khphillipsThumbnail from '../../public/images/k-h-phillips.github.io.thumbnail.png';
import profilePic from '../../public/images/profile-pic.jpg';
import { RxDoubleArrowDown } from 'react-icons/rx';
import './page.css';
export default function Resume() {
  // Skills chips for each project. Displayed in horizontal lines, wrapping when necessary.
  const itAvailProjectOneSkills = ['python', 'playwright', 'JSON', 'mongoDB', 'REDIS', 'bash scripting', 'powershell', 'azure', 'gitlab', 'linux', 'windows']
  const itAvailProjectTwoSkills = ['javascript', 'HTML', 'CSS', 'bootstrap', 'typescript', 'node.js', 'react', 'AWS', 'S3', 'EC2', 'lambda', 'github', 'java', 'selenium']
  const g3ProjectSkills = ['javascript', 'HTML', 'CSS', 'bootstrap', 'C#', 'ASP.NET', 'elasticsearch', 'noSQL', 'kafka', 'docker', 'kubernetes', 'ansible', 'jenkins', 'CI/CD', 'mariaDB', 'gRPC', 'python', 'selenium']
  const makeSkillChipsContainer = (skills: string[]) => {
    return (<div className="flex gap-1 sm:gap-3 flex-wrap">
      {
        skills.map((skill) =>
          <Chip color="success"
            className="font-bold text-sm text-[var(--black-cherry)] skill-tag"
            radius="sm"
            size="sm"
            key={skill}>
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
      company: 'I.T. availability LLC',
      link: 'https://www.itavailability.com/',
      logo: itAvailLogo.src,
      width: 100,
      height: 100,
      alt: 'I.T. Availability logo',
      jobTitle: 'software engineer',
      supplementaryJobTitle: 'top secret/SCI with polygraph',
      location: 'vienna, VA',
      timeframe: 'september 2022 - ongoing',
      projects: [
        {
          title: 'python automated data collection and processing algorithms',
          skills: makeSkillChipsContainer(itAvailProjectOneSkills),
          jobActivities: [
            'implemented Python applications on Azure infrastructure to accomplish automated data collection via APIs and other collection strategies',
            'analyzed and transformed raw and unstructured data into semi-structured JSON data and collaborated with a full stack team that used ETL pipelines to extract entity relationships and display them to end users',
            'designed and implemented MongoDB and REDIS databases to store scheduling information and collection metadata, successfully reducing duplicate data collection and storage costs by 50% for US-Government clients',
            'implemented database wrappers for create, read, update, and delete (CRUD) operations via Python libraries',
            'developed in both Linux and Windows operating systems and used bash and powershell scripting for automated tasks',
            'contributed to standard operating procedures (SOPs) for code review, documentation, and codebase management',
          ]
        },
        {
          title: 'front-end web application plugin',
          skills: makeSkillChipsContainer(itAvailProjectTwoSkills),
          jobActivities: [
            'completed API and GUI modernization and refactoring efforts to increase efficiency, stability, and usability of a cross-platform plugin that automates a tedious and error prone process for US-Government host application users',
            'collaborated on a simple, well documented, and easy to adopt web API for integrating developers of all different backgrounds and skill levels',
            'conducted UI design reviews with internal and external parties to improve the user experience',
            'collaborated on the front end to deliver a better user experience, using Bootstrap controls and conforming to strict website accessibility standards on par with the W3C standards',
            'developed in a Linux OS on AWS cloud infrastructure and used the AWS S3, EC2, and Lambda services to gather statistics on plugin use cases',
            'delivered a modernized release for the plugin with minimal defects in an agile SDLC on a 6 month timeline',
            'led the development of automated UI testing suites which led to the discovery and remediation of bugs in both the web application plugin and an email client counterpart',
            'supported production systems by answering requests for integration assistance'
          ]
        }
      ]
    },
    {
      company: 'G3 technologies inc.',
      link: 'https://www.g3ti.net/',
      logo: g3Logo.src,
      width: 150,
      height: 150,
      alt: 'G3 Technologies logo',
      jobTitle: 'software developer',
      location: 'ashburn, VA',
      timeframe: 'august 2021 - september 2022',
      projects: [
        {
          title: 'full stack data driven web applications',
          skills: makeSkillChipsContainer(g3ProjectSkills),
          jobActivities: [
            'used acquired domain knowledge in cellular technologies to perform ASP.NET (C#) maintenance development and Python automated testing for a full stack data driven web application',
            'gained familiarity with common software engineering platforms and services that have widespread use, such as Docker, Kubernetes, Kafka, and Jenkins CI/CD',
            'wrote complex Elasticsearch queries to test backend performance and algorithm accuracy',
            'designed and developed a full stack application to ingest, process, load, and display audio data to end users',
            'conducted in depth UI design reviews with UI experts',
            'wrote custom ASP.NET (C#) server controls to meet specific UI and server requirements',
            'used gRPC and protocol buffers for communication with underlying audio algorithms',
            'designed and normalized a SQL database using MariaDB to store core application data',
            'wrote a data model and wrapper layer in C# to enable SQL queries',
            'participated in a culture of high programming and documentation standards, in-depth code reviews, and extensive unit, integration, and UI testing geared toward early bug discovery'
          ]
        },
      ]
    }
  ]

  const sideProjects = [
    {
      title: 'k-h-phillips.github.io',
      description: 'This website! A web development project built with React, Next.js, NextUI, and Tailwind CSS, and deployed with GitHub pages (because it\'s super simple and free). I created this site to offer more information about me, display my résumé in a way that represents my style, showcase some web design skills, and to serve as a platform to display future side projects.',
      src: khphillipsThumbnail.src,
      alt: 'k-h-phillips.github.io website screenshot',
      link: 'https://k-h-phillips.github.io'
    },
    {
      title: 'codecademy full-stack engineer professional certication',
      description: 'To earn this certification I completed 51 courses and dedicated more than 150 hours of my personal time to hone full-stack software engineering skills and learn new technologies. The coursework involved the completion of mini projects which helped me get the hands on experience I needed without having the time to complete full scale projects.',
      src: codecademyThumbnail.src,
      alt: 'codecademy full stack engineer professional certification website screenshot',
      link: 'https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'
    }
  ]

  const firstSectionRef = useRef<HTMLHeadingElement>(null);
  const scrollToFirstSection = () => {
    const { current } = firstSectionRef;
    current?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  return (
    <div className="sm:px-[4rem] px-[1.5rem] fade">

      { /* Header with profile photo, name, title, and résumé links. */}
      <div className="flex flex-col gap-10 pt-16 justify-center items-center min-h-screen">
        <div className="flex flex-row gap-4 items-center p-4 business-card faded-bg">
          <Avatar isBordered src={profilePic.src} color="primary" className="justify-self-start sm:w-[8rem] w-[6rem] sm:h-[8rem] h-[6rem]" />
          <div className="font-bold">
            <h1 className="sm:text-6xl text-3xl">kirsten phillips</h1>
            <h2 className="text-primary sm:text-4xl text-xl">software engineer</h2>
          </div>
        </div>
        <div className="grid gap-3 sm:justify-items-end justify-items-center">
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
        <RxDoubleArrowDown color="var(--peach)" className="absolute bottom-6 cursor-pointer down-arrow" size={50} onClick={scrollToFirstSection}></RxDoubleArrowDown>
      </div>

      { /* Work experience */}
      <h2 className="sm:text-5xl text-3xl section-header" id="work-experience" ref={firstSectionRef}>work experience</h2>
      <div>
        {
          workExperiences.map((experience, index) => {
            return (
              <section key={index} className="md:flex md:gap-4 first:mb-[3rem]">
                <div className="basis-1/4 grow-0 shrink-0">
                  <div className="md:sticky md:top-[5rem] flex md:flex-col flex-row-reverse gap-2 mt-4 flex-wrap md:text-center md:justify-start justify-end">
                    <Link href={experience.link} target="_blank" className="sm:self-center ml-[1rem]">
                      <Image alt={experience.alt} src={experience.logo} width={experience.width} height={experience.height} />
                    </Link>
                    <div className="grid sm:gap-2">
                      <h3 className="font-bold text-primary sm:text-3xl text-xl">{experience.jobTitle}</h3>
                      {experience.supplementaryJobTitle && <h4 className="italic sm:text-xl text-m text-zinc-400">{experience.supplementaryJobTitle}</h4>}
                      <span className="text-neutral-300 sm:text-xl text-l flex md:justify-center items-center gap-2"><Fa6Icons.FaLocationDot color="var(--black-cherry)" />{experience.company} - {experience.location}</span>
                      <span className="text-neutral-300 sm:text-xl text-l flex md:justify-center items-center gap-2"><Fa6Icons.FaCalendar color="var(--black-cherry)" />{experience.timeframe}</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  {
                    experience.projects.map((project, index) => {
                      return (
                        <div key={index} className="grid gap-2" >
                          <h4 className="project-header sm:text-3xl text-xl text-primary">{project.title}</h4>
                          {project.skills}
                          <ul className="job-description-list">
                            {
                              project.jobActivities.map((activity, index) => {
                                return <li key={index} className="sm:text-l text-s">{activity}</li>
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
      </div>

      { /* Side projects */}
      <h2 className="sm:text-5xl text-3xl section-header" id="side-projects">side projects</h2>
      <section className="flex flex-col md:flex-row gap-4">
        {
          sideProjects.map((project, index) => {
            return (
              <div key={index}>
                <Link href={project.link} target="_blank">
                  <Image alt={project.alt}
                    className="shadow-2xl rounded-lg"
                    src={project.src}
                    width={400}
                    height={200}
                  />
                </Link>
                <h4 className="project-header sm:text-2xl text-l text-primary">{project.title}</h4>
                <p className="project-description">{project.description}</p>
              </div>
            )
          })
        }
      </section>

      { /* Education */}
      <h2 className="sm:text-5xl text-3xl section-header" id="education">education</h2>
      <section className="flex md:flex-row md:gap-7 flex-col gap-2 sm:justify-center items-center pb-8">
        <Link href="https://engineering.virginia.edu/department/computer-science/academics/undergraduate-programs/bs-computer-science" target="_blank">
          <Image src={uvaLogo.src} alt="UVA logo" width={125} height={125} className="brightness-125"></Image>
        </Link>
        <div className="flex flex-col justify-center sm:text-left text-center">
          <h2 className="font-bold text-primary sm:text-3xl text-xl">Bachelors of Science in Computer Science</h2>
          <h3 className="font-bold text-[var(--linen)] sm:text-2xl text-l">University of Virginia School of Engineering and Applied Sciences</h3>
          <h4 className="italic sm:text-2xl text-l text-[var(--linen)]">3.88 GPA</h4>
        </div>
      </section>
    </div>
  );
}
