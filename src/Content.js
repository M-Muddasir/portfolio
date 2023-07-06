// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import angular from "./assets/images/Skills/AngularJS-Shield.svg";
import mongo from "./assets/images/Skills/mongodb.svg";
import mysql from "./assets/images/Skills/mysql.png";
import ts from './assets/images/Experience/ts.png';
import js from './assets/images/Experience/js.png';


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/mobile.png";
import services_logo3 from "./assets/images/Services/logo2.png";

import lms from "./assets/images/projects/lms.png";
import hrm from "./assets/images/projects/hrm.png";
import inventroy from "./assets/images/projects/IM.png";
import sfc from "./assets/images/projects/sfc.png";
import boostify from "./assets/images/projects/boostify.png";
import techgoat from './assets/images/Projects/techgoat.png';

import avatar1 from "./assets/images/Testimonials/1.jpg";
import avatar2 from "./assets/images/Testimonials/2.jpg";
import avatar3 from "./assets/images/Testimonials/3.jpg";
import avatar4 from "./assets/images/Testimonials/4.jpg";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";


import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

//PDF
import sfcPdf from './assets/pdf/sfc_compressed.pdf';
import cmsPdf from './assets/pdf/cms_compressed.pdf';
import boostifyPdf from './assets/pdf/boostify-compressed.pdf';
import techgoatPdf from './assets/pdf/techgoat_compressed.pdf';

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#experience",
      icon: FaBriefcase,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "M ",
    LastName: "Muddasir",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2.5+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Powering modern web development with its versatility and interactivity.",
        logo: js,
        points: [
          "The universal language of the web.",
          "Empowering interactive and dynamic web experiences.",
          "Bringing life to web applications through client-side scripting.",
          "JavaScript: Enabling seamless integration of interactivity and functionality.",
          "JavaScript: The backbone of modern web development.",
        ],
      },
      {
        name: "TypeScript",
        para: "Enhancing JavaScript with superior code quality and productivity.",
        logo: ts,
        points: [
          "Type safety for JavaScript applications.",
          "Enhanced developer productivity with static typing.",
          "Compile-time error checking for more robust code.",
          "Seamless integration with existing JavaScript projects.",
          "Enables scalable and maintainable JavaScript applications.",
        ],
      },
      {
        name: "Angular",
        para: "JavaScript framework for web development.",
        logo: angular,
        points: [
          "Angular is a popular JavaScript framework for web development.",
          "It follows a component-based architecture for building dynamic web pages.",
          "Angular uses TypeScript for enhanced development capabilities.",
          "It provides features like two-way data binding and dependency injection.",
          "Angular has a strong community and extensive ecosystem for support and resources.",
        ],
      },
      {
        name: "React js",
        para: "JavaScript library for building user interfaces.",
        logo: reactjs,
        points: [
          "React is a JavaScript library for building UI components.",
          "It uses a virtual DOM for efficient rendering.",
          "React follows a component-based architecture.",
          "It enables declarative and reusable UI development.",
          "React is popular for building interactive and dynamic web applications.",
        ],
      },
      {
        name: "React Native",
        para: "JavaScript framework for building mobile apps.",
        logo: reactjs,
        points: [
          "Cross-platform mobile development using JavaScript.",
          "Native-like performance and user experience.",
          "Code reusability across iOS and Android platforms.",
          "Fast development with hot-reloading and modular components.",
          "Strong community support and a wide range of third-party libraries.",
        ],
      },
      {
        name: "Node js",
        para: "JavaScript runtime for server-side applications.",
        logo: nodejs,
        points: [
          "Node.js is a JavaScript runtime for server-side development.",
          "It uses an event-driven, non-blocking I/O model for efficiency.",
          "Node.js has a large ecosystem of open-source libraries and modules.",
          "It is ideal for building scalable and real-time applications.",
          "Node.js allows developers to use JavaScript for both front-end and back-end development.",
        ],
      },
      {
        name: "Mongo DB",
        para: "Flexible, scalable, NoSQL database solution.",
        logo: mongo,
        points: [
          "NoSQL database for scalable and flexible data storage.",
          "Document-oriented model for easy data representation and retrieval.",
          "High performance and horizontal scalability for handling large datasets.",
          "Flexible schema design for agile development and data evolution.",
          "Rich query capabilities and support for geospatial data.",
        ],
      },
      {
        name: "MySQL",
        para: "Relational, scalable, open-source database.",
        logo: mysql,
        points: [
          "Popular and widely used relational database management system (RDBMS).",
          "ACID-compliant for ensuring data integrity and reliability.",
          "Supports structured data with tables, rows, and columns.",
          "Strong data consistency and reliability with transaction support.",
          "Robust security features and user access controls.",
        ],
      },
    ],
    icon: MdArrowForward,
  },
  experience: {
    title: "Experience",
    subtitle: "Recent Work",
    experience_logo: [
      {
        logo: js,
        description: "JavaScript",
      },
      {
        logo: ts,
        description: "TypeScript",
      },
      {
        logo: angular,
        description: "Angular",
      },
      {
        logo: nodejs,
        description: "Node JS",
      },
      {
        logo: reactjs,
        description: "React",
      },
      {
        logo: reactjs,
        description: "React Native",
      },
      {
        logo: mongo,
        description: "MongoDB",
      },
      {
        logo: mysql,
        description: "MySQL",
      }
    ],
    experience_details:[
      {
        year:'07/2022-present',
        company:'Cloudpacer',
        desigantion:'Full Stack Devloper',
        description:'Development, reviewing the PR’s are the core responsibilitie.',
        location:'on-site'
      },
      {
        year:'11/2022-06/2023',
        company:'Boostify',
        desigantion:'Frontend Developer',
        description:'Working on running product as a Frontend Dev.',
        location:'Remote'
      },
      {
        year:'07/2021-07/2022',
        company:'Directorate of Information Technology',
        desigantion:'Full Stack Developer / Team Lead',
        description:'Worked on multiple applications as a JS / TS Dev.',
        location:'on-site'
      },
      {
        year:'12/2020-06/2022',
        company:'System Analyst, GC University',
        desigantion:'Junior Developer',
        description:'Started as a PHP Dev but shifted to MEAN stack after 2 months.',
        location:'on-site'
      },
      {
        year:'08/2020-12/2021',
        company:'System Analyst, GC University',
        desigantion:'Internship',
        description:'',
        location:'on-site'
      }
    ]
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web development is the process of building and maintaining websites and web applications. It involves coding, designing, and implementing features to create functional and visually appealing online experiences.",
        logo: services_logo1,
      },
      {
        title: "Mobile Development",
        para: "Mobile development refers to the creation of applications specifically designed for mobile devices such as smartphones and tablets. It involves developing software applications that run on mobile operating systems like iOS and Android.",
        logo: services_logo2,
      },
      {
        title: "UI / UX DESIGNING",
        para: "UI/UX refers to the process of designing and enhancing digital products to provide a seamless and satisfying user experience. UI focuses on the visual design elements, such as layout to create an aesthetically pleasing interface.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: '',
    project_content: [
      {
        title: "Compus Management System",
        image: lms,
        read_more:cmsPdf
      },
      // {
      //   title: "Human Resource Management",
      //   image: hrm,
      //   read_more:cmsPdf
      // },
      // {
      //   title: "Inventory Management",
      //   image: inventroy,
      //   read_more:cmsPdf
      // },
      {
        title: "Boostify",
        image: boostify,
        read_more:boostifyPdf
      },
      {
        title: "Student Facilitate System",
        image: sfc,
        read_more:sfcPdf
      },
      // {
      //   title: "Hostel Management System",
      //   image: lms,
      //   read_more:cmsPdf
      // },
      {
        title: "Techgoat",
        image: techgoat,
        read_more:techgoatPdf
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Indeed an outstanding job done with impeccable services provided at exceptionally affordable rates, Extremely satisfied!”",
        img: avatar1,
        name: "SENAID",
      },
      {
        review:
          "Undeniably the best out there with efficiency at peak, truly amazed by the expertise and professionalism. Remarkable services overall.”",
        img: avatar2,
        name: "MIKE",
      },
      {
        review:
          "“Genuinely astonished and pleased at the quality of work, Marvelled and amazed by the extraordinary degree of excellence.”",
        img: avatar3,
        name: "NAOMI RITTER",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "LIV JOHANSON",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am a JavaScript/TypeScript full-stack developer with 2.5+ years of experience, specializing in both web and mobile application development. I have a strong background in JavaScript frameworks such as Angular, React.js and React Native, allowing me to build cross-platform applications that run seamlessly on web and mobile devices",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "muddasir0096@gmail.com",
        icon: GrMail,
        link: "mailto:muddasir0096@gmail.com",
      },
      {
        text: "+92 304 9909599",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Muhammad Muddasir",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/m-muddasir/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
