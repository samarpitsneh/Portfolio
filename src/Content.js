// import images
import Hero_person from "./assets/images/Hero/main_comp.json";
import jssate from '../src/assets/images/Education/jssate.png'
import openFoodFacts from './assets/images/OpenSrc/openFoodFacts.png'
import flood from "./assets/images/OpenSrc/flood.png"
import mattermost from './assets/images/OpenSrc/mattermost.jfif'

export const resumeLink = "https://drive.google.com/file/d/1bdOJGVydxm-pGdIVeu43Aatf3y4xNvaw/view?usp=sharing"
export const repoLink = "https://github.com/samarpitsneh"

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiJquery,
  SiVisualstudiocode,
  SiGit,
  SiMysql,
  SiNetlify,
  SiHtml5,
  SiVite,
  SiCss3,
  SiSass,
  SiMongodb,
  SiSocketdotio,
  SiRedux,
  SiJava,
  SiDart,
  SiFlutter,
  SiExpress,
  SiIntellijidea,
  SiReactivex
} from "react-icons/si";

import {
  AiFillGithub,
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import * as ic from 'react-icons/all'


import facebook from "./assets/images/Projects/facebook.png";
import bellIcon from "./assets/images/Projects/bell-icon.png";
import weather from "./assets/images/Projects/weather.png";

import TriNit from "./assets/images/TriNit.jfif"
import portfolio from './assets/images/Projects/portfolio.png'
import acm from './assets/images/Projects/acm.png'


export const content = {
  nav: [
    {
      id: 1,
      link: "#skills",
      title: "Skills & Experience",
    },
    {
      id: 2,
      link: "#education",
      title: "Education",
    },
    {
      id: 3,
      link: "#projects",
      title: "Projects",
    },
    {
      id: 4,
      link: "#contact",
      title: "Contact Me",
    },
  ],
  hero: {
    title: `Hello,`,
    sub1: "there",
    sub2: "I am",
    firstName: "SNEH",
    LastName: "SAMARPIT",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "Passionate and motivated final-year student pursuing B.E. degree in the field of Computer Science. Skilled in C++ programming language, problem-solving and SQL. Familiar with Python and Front-End Development with ReactJS.",
      },
    ],
  },
  skillsList: [
    {
      title: "Programming Languages",
      items: [
        {
          id: "pl-1",
          icon: SiCplusplus,
          name: "C++",
        },
        {
          id: "pl-2",
          icon: SiPython,
          name: "Python",
        },
        {
          id: "pl-4",
          icon: SiC,
          name: "C",
        },
        {
          id: "pl-5",
          icon: SiHtml5,
          name: "HTML",
        },
        {
          id: "pl-6",
          icon: SiCss3,
          name: "CSS",
        },
        {
          id: "pl-7",
          icon: SiJavascript,
          name: "JavaScript",
        },
        {
          id: "pl-8",
          icon: SiSass,
          name: "sass",
        },
      ],
    },
    {
      title: "Frameworks/ Libraries",
      items: [
        {
          id: "f-1",
          icon: SiReact,
          name: "ReactJS",
        },
        {
          id: "f-2",
          icon: SiRedux,
          name: "Redux",
        },
        {
          id: "f-3",
          icon: SiBootstrap,
          name: "Bootstrap",
        },
        {
          id: "f-4",
          icon: SiTailwindcss,
          name: "Tailwind CSS",
        },
        {
          id: "f-5",
          icon: SiJquery,
          name: "jQuery",
        },
        {
          id: "f-10",
          icon: SiExpress,
          name: "Express",
        },
      ],
    },
    {
      title: "Tools",
      items: [
        {
          id: "t-1",
          icon: SiMysql,
          name: "MySQL",
        },

        {
          id: "t-3",
          icon: SiVisualstudiocode,
          name: "VS Code",
        },
        {
          id: "t-4",
          icon: SiGit,
          name: "Git",
        },
        {
          id: "t-5",
          icon: AiFillGithub,
          name: "GitHub",
        },
        {
          id: "t-7",
          icon: SiNetlify,
          name: "Netlify",
        },
        {
          id: "t-8",
          icon: SiVite,
          name: "ViteJS",
        },
      ],
    },
  ],

  experiences: [
    {
      organisation: "TRI NIT Hackathon",
      logo: TriNit,
      link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "Web Developer",
          duration: "Jan 2023",
          content: [
            {
              text: "Contributed to Tri-Nit hackathon website.",
              link: "https://github.com/TRI-NIT",
            },
          ],
        },
      ],
    },
    {
      organisation: "ACM NITK",
      logo: acm,
      link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "Project Mentee",
          duration: "Jan-April 2022",
          content: [
            {
              text: "Analysed various games like Ludo, Mafia, Snake and Ladder in Python.",
              link: "",
            },
          ],
        },
        {
          title: "DSA mentor",
          duration: "May 2022",
          content: [
            {
              text: "Mentored 30+ students in summer mentorship program on topic data structures and algorithms.",
              link: "",
            },
          ],
        },
        {
          title: "Project Mentor",
          duration: "Jan 2023",
          content: [
            {
              text: "Mentoring team on a 'Online code editor' project.",
              link: "https://github.com/Amruth-S05/Online-Code-Editor",
            },
          ],
        },
      ],
    },
  ],

  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};

export const educationList = [
  {
    id: "education-1",
    icon: jssate,
    title: "JSS Academy of Technical Education, Bangalore",
    degree: "Bachelor of Engineering",
    duration: "December 2019 - May 2023",
    content1: "Major: Computer Science and Engineering"
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Facebook UI",
    github: "https://github.com/samarpitsneh/fb-frontend",
    link: "",
    image: facebook,
    content:
      "Facebook UI clone using various react concepts like routers to navigate between different pages and context API to transferr data between different components. ",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-2",
        icon: SiSass,
        name: "sass"
      },
      {
        id: "icon-3",
        icon: SiReact,
        name: "React"
      },
    ],
  },
  {
    id: "project-2",
    title: "Notification-App",
    github: "https://github.com/Sudhanva-Nadiger/Modern_Bank_App",
    link: "",
    image: bellIcon,
    content:
      "This app makes use of socketio to display realtime notifications between different users.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiSocketdotio,
        name: "Socket.io"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      }

    ],
  },
  {
    id: "project-3",
    title: "weather-App",
    github: "https://github.com/samarpitsneh/dynamic-weather",
    link: "",
    image: weather,
    content: "A simple weather app in ReactJS using open Weather Map API to make calls to restful api to return current weather data. ",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },

    ],
  },
  {
    id: "project-5",
    title: "Portfolio",
    github: "https://github.com/samarpitsneh/Portfolio",
    link: "",
    image: portfolio,
    content:
      "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiTailwindcss,
        name: "TailWind css"
      }
    ],
  }
]
/*
export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title:
      'Make "Start Scanning" Button',
    link: "https://github.com/openfoodfacts/smooth-app/pull/3569",
    number: "#3569",
    date: "Jan 12 2023",
    linesAdded: "34",
    linesDeleted: "29",
    technology: SiFlutter,
  },
  
];

*/

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sneh-samarpit-04048117a/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/samarpitsneh",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sneh2702samarpit@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/sneh_samarpit/",
  },
];

export const aboutMe = {
  name: "Sneh Samarpit",
  tagLine: "Front-End Web Developer | Html /CSS |JavaScript | React | C++",
  intro: content.hero.hero_content.text
}
