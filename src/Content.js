// Import images
import Hero_person from "./assets/images/Hero/person.png";

// Skill images
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import angular from "./assets/images/Skills/AngularJS-Shield.svg";
import golang from "./assets/images/Skills/go-tutorial.jpg";
import mongo from "./assets/images/Skills/mongodb.svg";
import mysql from "./assets/images/Skills/mysql.png";
import ts from './assets/images/Experience/ts.png';
import js from './assets/images/Experience/js.png';
import machineLearning from './assets/images/Skills/ml-icon.png';
import mlops from './assets/images/Skills/mlops.png';
import nlp from './assets/images/Skills/nlp.png';
import postgresql from './assets/images/Skills/postgresql-icon.png';
import mapboxLogo from './assets/images/Skills/mapbox_logo_icon.png';

// Services logos
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/mobile.png";
import services_logo3 from "./assets/images/Services/machine.png";
import services_logo4 from "./assets/images/Services/analytics.png";

// Project images
import lms from "./assets/images/Projects/lms.png";
import hrm from "./assets/images/Projects/hrm.png";
import precise from "./assets/images/Projects/precise.png";
import sfc from "./assets/images/Projects/sfc.png";
import boostify from "./assets/images/Projects/boostify.png";
import techgoat from './assets/images/Projects/techgoat.png';

// Testimonials
import avatar1 from "./assets/images/Testimonials/1.jpg";
import avatar2 from "./assets/images/Testimonials/2.jpg";
import avatar3 from "./assets/images/Testimonials/3.jpg";
import avatar4 from "./assets/images/Testimonials/4.jpg";

// Hireme section
import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// React icons
import {
  SiReact, SiPostgresql, SiMapbox, SiPython, SiTensorflow,
  SiMlflow, SiOpenai, SiGoogleanalytics, SiScikitlearn
} from "react-icons/si";

import { DiReact } from "react-icons/di";
import { FaBrain, FaBriefcase, FaDatabase, FaRobot, FaPython as FaPythonAlt, FaLanguage, FaCertificate } from "react-icons/fa";
import { BsGraphUp, BsCloudCheck, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdWhatsapp, MdOutlinePermContactCalendar } from "react-icons/md";
import { TbSmartHome, TbCertificate, TbBrandReactNative, TbMapPins } from "react-icons/tb";
import { BiUser, BiData } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";

//PDF
import sfcPdf from './assets/pdf/sfc_compressed.pdf';
import cmsPdf from './assets/pdf/cms_compressed.pdf';
import precisePdf from './assets/pdf/precise_builder.pdf';
import boostifyPdf from './assets/pdf/boostify-compressed.pdf';
import techgoatPdf from './assets/pdf/techgoat_compressed.pdf';

const certThumbPath = 'src/assets/certificate_thumbs/';
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
      link: "#certificates",
      icon: FaCertificate,
    },
    {
      link: "#education",
      icon: IoMdSchool,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    fullName: "Muhammad Muddasir",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY EXPERTISE",
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
        name: "Golang",
        para: "Go is a statically typed, compiled high-level programming language",
        logo: golang,
        points: [
          "Go (Golang) is a statically typed, compiled programming language developed by Google.",
          "It emphasizes simplicity, efficiency, and concurrency, making it ideal for building scalable and performant applications.",
          "Go follows a minimalist approach, providing a clean and readable syntax with a small core language.",
          "It offers built-in support for concurrency through goroutines and channels, enabling efficient parallel processing.",
          "Go has a growing community and a rich standard library, along with a vibrant ecosystem of third-party packages for various use cases."
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
          "Robust support for SQL queries and database operations.",
          "Supports structured data with tables, rows, and columns.",
          "Strong data consistency and reliability with transaction support.",
          "Robust security features and user access controls.",
        ],
      },
      {
        name: "PostgreSQL GIS",
        para: "Spatial database capabilities for geographical data.",
        logo: postgresql,
        points: [
          "Powerful spatial database with PostGIS extension.",
          "Store, query and manipulate geographic data efficiently.",
          "Support for spatial indexing and complex geospatial operations.",
          "Integration with mapping applications and GIS systems.",
          "Advanced features for location-based services and mapping.",
        ],
      },
      {
        name: "Mapbox",
        para: "Location data platform for maps and navigation.",
        logo: mapboxLogo,
        points: [
          "Custom map styling and visualization capabilities.",
          "Location search, routing, and navigation functionality.",
          "Real-time data visualization and mapping solutions.",
          "Integration with React, React Native, and other frameworks.",
          "Support for building location-aware applications.",
        ],
      },
      {
        name: "Machine Learning",
        para: "Building algorithms that learn patterns from data.",
        logo: machineLearning,
        points: [
          "Developing predictive models and data-driven applications.",
          "Working with scikit-learn, TensorFlow, and other ML libraries.",
          "Statistical analysis and feature engineering techniques.",
          "Supervised learning for classification and regression problems.",
          "Model evaluation, validation, and deployment methodologies.",
        ],
      },
      {
        name: "Natural Language Processing",
        para: "Processing and analyzing text and language data.",
        logo: nlp,
        points: [
          "Text preprocessing and feature extraction techniques.",
          "Working with language models and semantic analysis.",
          "Sentiment analysis and text classification applications.",
          "Generative AI and LLM integration with LangChain.",
          "Building conversational AI and chatbot applications.",
        ],
      },
      {
        name: "MLOps",
        para: "Managing ML model lifecycle and deployment.",
        logo: mlops,
        points: [
          "CI/CD pipelines for machine learning projects.",
          "Model deployment and serving in production environments.",
          "Model monitoring, maintenance, and version control.",
          "Automated testing and validation of ML systems.",
          "Scalable infrastructure for ML applications.",
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
      // {
      //   logo: reactjs,
      //   description: "React Native",
      // },
      {
        logo: mongo,
        description: "MongoDB",
      },
      {
        logo: mysql,
        description: "MySQL",
      }
    ],
    experience_details: [
  {
    year: '01/2025 - Present',
    company: 'Farmdar',
    designation: 'Senior Software Engineer',
    description: 'Using Mapbox for GIS visualizations including polygons, centers, and other spatial data.',
    location: 'hybrid'
  },
  {
    year: '11/2023 - 01/2025',
    company: 'Techbrainz',
    designation: 'Senior Frontend Engineer',
    description: "Development, reviewing PRs, and adding complex functionality on the frontend.",
    location: 'on-site'
  },
  {
    year: '08/2022 - 10/2023',
    company: 'Boostify',
    designation: 'Frontend Developer',
    description: "Development and reviewing PRs. Worked part-time for a US-based client.",
    location: 'remote (Part-time)'
  },
  {
    year: '08/2022 - 09/2023',
    company: 'Cloudpacer',
    designation: 'Full Stack Developer (Angular / React / Node.js / NestJS / MongoDB)',
    description: "Migrated Angular projects from older versions to the latest, implemented new Angular features.",
    location: 'on-site'
  },
  {
    year: '08/2020 - 07/2022',
    company: 'Government College University, Lahore',
    designation: 'Associate Software Engineer',
    description: "Development and reviewing PRs were the core responsibilities.",
    location: 'on-site'
  }
]

  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web development refers to the creation, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the work involved in developing a website for the Internet.",
        logo: services_logo1,
      },
      {
        title: "Mobile Development",
        para: "Mobile development refers to the creation of applications specifically designed for mobile devices such as smartphones and tablets. It involves developing software applications that run on mobile operating systems like iOS and Android.",
        logo: services_logo2,
      },
      {
        title: "Machine Learning & AI",
        para: "Implementing intelligent systems and algorithms that can learn from data, make predictions, and improve performance over time. Specializing in supervised learning techniques and natural language processing applications.",
        logo: services_logo3,
      },
      {
        title: "Data Science & Analytics",
        para: "Extracting insights and knowledge from structured and unstructured data using statistical analysis, predictive modeling, and data visualization techniques to solve complex business problems.",
        logo: services_logo4,
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
      {
        title: "Precise Builder",
        image: precise,
        read_more:precisePdf
      },
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
  certificates: {
    title: "Certificates",
    subtitle: "PROFESSIONAL DEVELOPMENT",
    certificates_list: [
      {
        title: "Angular 17 Overview & Basics",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'Angular_17_overview_basics.png',
        fullImage: certThumbPath + 'Angular_17_overview_basics.png'
      },
      {
        title: "Generative AI: Introduction and Applications",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'Generative_AI_Introduction_and_applications.png',
        fullImage: certThumbPath + 'Generative_AI_Introduction_and_applications.png'
      },
      {
        title: "Introduction to Information Technology and AWS Cloud",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'Introduction_to_information_and_aws_cloud.png',
        fullImage: certThumbPath + 'Introduction_to_information_and_aws_cloud.png'
      },
      {
        title: "Angular for Frontend Engineers",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'angular_for_frontend_engineers.png',
        fullImage: certThumbPath + 'angular_for_frontend_engineers.png'
      },
      {
        title: "AWS Cloud Technical Essentials",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'aws_cloud_technical_essentials.png',
        fullImage: certThumbPath + 'aws_cloud_technical_essentials.png'
      },
      {
        title: "AWS Cloud Technology Consultant",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'aws_cloud_technology_consultant.png',
        fullImage: certThumbPath + 'aws_cloud_technology_consultant.png'
      },
      {
        title: "Capstone: Following the AWS Well Architected Framework",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'capstone_following_the_aws_well_architected_framework.png',
        fullImage: certThumbPath + 'capstone_following_the_aws_well_architected_framework.png'
      },
      {
        title: "Data Analytics and Databases on AWS",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'data_analytics_and_databases_on_aws.png',
        fullImage: certThumbPath + 'data_analytics_and_databases_on_aws.png'
      },
      {
        title: "Data Science Methodology",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'data_science_methodology.png',
        fullImage: certThumbPath + 'data_science_methodology.png'
      },
      {
        title: "Developing Applications in Python on AWS",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'developing_applications_in_python_on_aws.png',
        fullImage: certThumbPath + 'developing_applications_in_python_on_aws.png'
      },
      {
        title: "DevOps on AWS and Project Management",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'devops_on_aws_and_project_management.png',
        fullImage: certThumbPath + 'devops_on_aws_and_project_management.png'
      },
      {
        title: "Grow with AI: Your AI-driven Growth Marketing Strategy",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'grow_with_ai_your_ai_driven_growth_marketing_strategy.png',
        fullImage: certThumbPath + 'grow_with_ai_your_ai_driven_growth_marketing_strategy.png'
      },
      {
        title: "Introduction to Artificial Intelligence (AI)",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'introduction_to_ai.png',
        fullImage: certThumbPath + 'introduction_to_ai.png'
      },
      {
        title: "Learn Angular Routing by building a Cocktails Application",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'learn_angular_routing_by_building_a_cocktails_application.png',
        fullImage: certThumbPath + 'learn_angular_routing_by_building_a_cocktails_application.png'
      },
      {
        title: "Providing Technical Support for AWS Workloads",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'providing_technical_support_for_aws_workloads.png',
        fullImage: certThumbPath + 'providing_technical_support_for_aws_workloads.png'
      },
      {
        title: "Python for Data Science, AI & Development",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'python_for_data_science_ai_development.png',
        fullImage: certThumbPath + 'python_for_data_science_ai_development.png'
      },
      {
        title: "Skills for Working as an AWS Cloud Consultant",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'skills_for_working_an_aws_cloud_consultant.png',
        fullImage: certThumbPath + 'skills_for_working_an_aws_cloud_consultant.png'
      },
      {
        title: "Supervised Machine Learning: Regression and Classification",
        issuer: "Coursera",
        date: "2025",
        image: certThumbPath + 'supervised_machine_learning_regression_and_classification.png',
        fullImage: certThumbPath + 'supervised_machine_learning_regression_and_classification.png'
      }
    ]
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am a JavaScript/TypeScript full-stack developer with 5+ years of experience, specializing in both web and mobile application development. I have a strong background in JavaScript frameworks such as Angular, React.js and React Native, allowing me to build cross-platform applications that run seamlessly on web and mobile devices. I am also pursuing MS in Data Science with expertise in Machine Learning, AI, and data analytics.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "writemuddasir@gmail.com",
        icon: GrMail,
        link: "mailto:writemuddasir@gmail.com",
      },
      {
        text: "+92 304 9909599",
        icon: MdCall,
        link: "tel://+923049909599",
      },

      {
        text: "+92 304 9909599",
        icon: MdWhatsapp,
        link: "https://wa.me/+923049909599",
      },
      {
        text: "Muddasir Rafique",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/m-muddasir/",
      },
      {
        text: "Muhammad Muddasir",
        icon: BsGithub,
        link: "https://github.com/M-Muddasir",
      },
    ],
  },
  education: {
    title: "Education",
    subtitle: "ACADEMIC JOURNEY",
    education_details: [
      {
        degree: "MS in Data Science",
        institution: "PUCIT (Punjab University College of Information Technology)",
        year: "2023 - Present",
        description: "Specializing in Machine Learning, Statistical Analysis, Natural Language Processing, and MLOps.",
        courses: [
          "Machine Learning",
          "Tools and Techniques for ML (Python, scikit-learn, matplotlib)",
          "Statistical Analysis for Machine Learning",
          "Natural Language Processing and Generative AI",
          "MLOps (CI/CD, ML frameworks, model deployment)",
          "Modern Information Retrieval"
        ]
      },
      {
        degree: "BS in Computer Science",
        institution: "GCUL (Government College University Lahore)",
        year: "2018 - 2022",
        description: "Comprehensive study of Computer Science including OOP, Data Structures, Database, Data Analysis, Algorithms, Visual Programming, Programming Fundamentals, C++, Java, and other core CS subjects.",
        courses: [
          "Programming Fundamentals (PF)",
          "Object Oriented Programming (OOP)",
          "Data Structures",
          "Algorithms",
          "Database Systems",
          "Visual Programming",
          "Java",
          "C++",
          "Data Analysis",
          "Other core CS subjects"
        ]
      }
    ]
  },

  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
