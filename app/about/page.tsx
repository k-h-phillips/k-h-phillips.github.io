'use client'
import Image from 'next/image';
import { RefObject, useEffect, useRef } from 'react';
import bugsAndRags from '../../public/images/bugsAndRags.jpg';
import crochetSweater from '../../public/images/crochet.jpg';
import crochetBugs from '../../public/images/crochetBugs.jpg';
import crossStitch from '../../public/images/crossStitch.jpg';
import crushers from '../../public/images/crushers.jpg';
import engagementPic from '../../public/images/engagementPic.jpg';
import familyLater from '../../public/images/familyLater.jpg';
import highSchoolGrad from '../../public/images/highSchoolGrad.jpg';
import hiking from '../../public/images/hiking.jpg';
import lakeHappy from '../../public/images/lakeHappy.jpg';
import lakeTubing from '../../public/images/lakeTubing.jpg';
import marriage from '../../public/images/marriage.jpg';
import uvaGrad from '../../public/images/uvaGrad.jpg';
import './page.css';

export default function About() {
  const childhoodRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const marriageRef = useRef<HTMLElement>(null)
  const freeTimeRef = useRef<HTMLElement>(null)
  const refEffect = (ref: RefObject<HTMLElement>) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.add("slide-in");
          });
        }
      },
      { rootMargin: "-100px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }
  useEffect(() => refEffect(childhoodRef));
  useEffect(() => refEffect(educationRef));
  useEffect(() => refEffect(marriageRef));
  useEffect(() => refEffect(freeTimeRef));

  const hobbies: string[] = [
    "working out",
    "running (for fun, yes, I know)",
    "cooking & trying new recipes",
    "playing pickleball with my husband and friends",
    "hiking",
    "bullet journaling",
    "reading my Bible",
    "crocheting, knitting, & cross stitching",
    "acrylic painting",
    "reading",
    "playing the NYT games (the mini crossword is currently my favorite)",
    "hanging out with my nieces and nephews",
  ]

  return (
    <div className="flex flex-col justify-between gap-5 w-full max-h-[full] fade mt-[4rem] about-page">

      { /* childhood */}
      <section className="flex flex-col md:flex-row lg:gap-[4rem] gap-[1rem]" ref={childhoodRef}>
        <div className="self-center md:basis-2/5">
          <h1 className="text-5xl sm:text-7xl text-primary font-bold mb-[1.5rem]" >growing up</h1>
          <p className="sm:text-sm text-xs">
            I was extremely blessed to be raised in a family of 8 on beautiful Lake Gaston in southern Virginia.
            <br /><br />
            
            Everyday life consisted of working hard in school, memorizing scripture at church, learning piano,
            competing fiercly in softball and volleyball, playing the flute in the middle and high schools bands, and
            working in childcare, as a hostess, and as a waitress.<br /><br />
            These experiences combined taught me the importance of <strong>discipline</strong>, <strong>teamwork</strong>, 
            <strong> community</strong>, <strong>gratitude</strong>, and <strong>commitment</strong>.<br /><br />

            My mom always told me in moments of uncertainty: <br />
            <strong className="block leading-10 my-4 text-center faded-bg quote">&quot;All you can do is the best you can do.&quot;</strong>
            That gave me the freedom and confidence to push myself to new limits in every aspect of life, and to keep working to make my &quot;best&quot; better and better.<br />
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 items-center justify-items-center md:basis-3/5">
          <Image alt="Tubing on Lake Gaston" className="rounded-md shadow-xl grid-img" src={lakeTubing.src} width={250} height={250} />
          <Image alt="Playing softball" className="rounded-md shadow-xl grid-img" src={crushers.src} width={250} height={250} />
          <Image alt="Lake time" className="rounded-md shadow-xl grid-img" src={lakeHappy.src} width={250} height={250} />
          <Image alt="Family" className="rounded-md shadow-xl grid-img" src={familyLater.src} width={250} height={250} />
        </div>
      </section>

      { /* Schooling */}
      <section className="flex flex-col-reverse md:flex-row lg:gap-[4rem] gap-[1rem]" ref={educationRef}>
        <div className="grid grid-cols-2 grid-rows-1 gap-3 items-center justify-items-center md:basis-2/5">
          <Image alt="High school graduation" className="rounded-md shadow-xl grid-img" width={250} height={250} src={highSchoolGrad.src}></Image>
          <Image alt="UVa graduation" className="rounded-md shadow-xl grid-img" width={250} height={250} src={uvaGrad.src}></Image>
        </div>
        <div className="self-center md:basis-3/5">
          <h1 className="text-5xl sm:text-7xl text-primary font-bold mb-[1.5rem]">getting degrees</h1>
          <p className="sm:text-sm text-xs">
            A natural inclination towards <strong>math</strong> and <strong>science</strong> in early years of school led to attending
            the Governor&apos;s school of Southside Virginia during my junior and senior years of high school, allowing me to earn
            my associate&apos;s degree before my high school diploma.<br /><br />
            My software development journey began early in high school when I enrolled in community college classes on top of my normal
            coursework, and gained valuable exposure to&nbsp; <strong>Python</strong>&nbsp; and <strong>Java</strong>.<br /><br />
            In 2017, I graduated from the Mecklenburg County Public Schools system as <strong>co-valedictorian</strong>, and started my college
            career in August at the <strong>University of Virginia School of Engineering</strong>.<br /><br />
            At UVa, I decided early on to major in <strong>Computer Science</strong> and minor in Engineering Business because of my love for solving problems
            with code. I also held a part-time position as a Calculus 3 teaching assistant for 2 years, and led a small group for InterVarsity Christian Fellowship.<br /><br />
            Despite the challenges of the year of 2020, I accepted a full time software development position in Ashburn, VA and graduated
            &nbsp;<strong>summa cum laude</strong> in May 2021.
          </p>
        </div>
      </section>

      { /* Moving to NOVA and marriage */}
      <section className="flex flex-col md:flex-row lg:gap-[4rem] gap-[1rem]" ref={marriageRef}>
        <div className="self-center md:basis-3/5">
          <h1 className="text-5xl sm:text-7xl text-primary font-bold mb-[1.5rem]">marriage</h1>
          <p className="sm:text-sm text-xs">
            In the summer of 2021, my high school sweetheart and I moved out of our home town and into <strong>Reston, VA</strong> so that I could
            begin my career at G3 Technologies in Ashburn, VA.<br /><br />
            Though we experienced some culture shock at first, moving to northern VA opened up a world of opportunities that
            we had never even dreamed of and taught us many many lessons.<br /><br />
            I started my career as a software developer and my husband John became an orthotics and prosthetics technician.<br /><br />
            We were <strong>married</strong> on April 30th, 2022 and now live in Marshall, VA with our two cats, Bugs and Rags.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 items-center justify-items-center md:basis-2/5">
          <Image alt="Wedding day" className="rounded-md shadow-xl col-span-2 grid-img" src={marriage.src} height={250} width={250}></Image>
          <Image alt="John and I" className="rounded-md shadow-xl grid-img" src={engagementPic.src} height={250} width={250}></Image>
          <Image alt="My cats, Bugs and Rags" className="rounded-md shadow-xl grid-img" src={bugsAndRags.src} height={250} width={250}></Image>
        </div>
      </section>

      { /* Hobbies */}
      <section className="flex flex-col-reverse md:flex-row lg:gap-[4rem] gap-[1rem]" ref={freeTimeRef}>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 items-center justify-items-center md:basis-2/5">
          <Image alt="My cat in a blanket I crocheted" className="rounded-md shadow-xl grid-img" src={crochetBugs.src} height={250} width={250}></Image>
          <Image alt="Hiking Humpback rock" className="rounded-md shadow-xl grid-img" src={hiking.src} height={250} width={250}></Image>
          <Image alt="Me in a sweater I crocheted" className="rounded-md shadow-xl grid-img" src={crochetSweater.src} height={250} width={250}></Image>
          <Image alt="A cute cross-stitching pattern" className="rounded-md shadow-xl grid-img" src={crossStitch.src} height={250} width={250}></Image>
        </div>
        <div className="self-center md:basis-3/5">
          <h1 className="text-5xl sm:text-7xl text-primary font-bold mb-[1.5rem]" >in my free time</h1>
          <p className="sm:text-sm text-xs">
            I love <strong>hobbies!</strong> I&apos;m always picking up new ones, but here are some that I love doing right now:
          </p>
          <ul className="hobbies-list sm:text-sm text-xs">
            {
              hobbies.map(hobby => {
                return <li className="sm:text-sm text-xs" key={hobby}>{hobby}</li>
              })
            }
          </ul>
          <br />
          <p className="sm:text-sm text-xs">
            Of course, another one of my hobbies is building on my software engineering skill set outside of the workplace
            by working on side projects and certifications. I do make an intentional effort to fill my free time with activities
            that <strong>don&apos;t involve a screen</strong> to avoid burnout.
          </p>
        </div>
      </section>
    </div>
  );
}
