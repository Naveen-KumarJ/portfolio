import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import cLogo from './assets/tech_logo/c.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import intellijLogo from './assets/tech_logo/intellijLogo.png';


import bitLogo from '../src/assets/bit-logo.png';
import schoolLogo from '../src/assets/schoolLogo.png';

import geekstereducationplanner from '../src/assets/projects/geekster-education-planner.png'
import movieReviewCard from '../src/assets/projects/movie-review-card.png'
import ripplingTaskManager from '../src/assets/projects/Rippling-Task-Manager.png'
import zenflow from '../src/assets/projects/Zenflow.png'
import emojiMart from '../src/assets/projects/emojiMart.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'IntelliJ IDEA', logo: intellijLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


export const education = [
  {
    id: 1,
    school: 'Bannari Amman Institute of Technology, Erode, Tamil Nadu',
    degree: 'B.E. in Computer Science and Engineering',
    date: 'July 2019 – March 2023',
    grade: 'CGPA: 8.67 — First Class with Distinction',
    desc: 'Studied core subjects in computer science and engineering with a focus on programming, databases, and web development. Gained practical experience through projects and internship.',
    img: bitLogo,
  },
  {
    id: 2,
    school: 'Thamarai International School, Thanjavur (CBSE)',
    degree: 'Senior Secondary (Class XII)',
    date: '2018 – 2019',
    grade: 'Percentage: 87.4%',
    img: schoolLogo,
  },
];


  export const projects = [
    {
      id: 0,
      title: "Geekster Education Planner",
      description:
        "A simple and responsive education planner built using React, Tailwind CSS, and localStorage. Users can add, edit, delete, and manage study subjects and hours efficiently.",
      image: geekstereducationplanner,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/Naveen-KumarJ/geekster-education-planner",
      webapp: "https://geekster-education-planner-tool.vercel.app/",
    },
    {
      id: 1,
      title: "Movie Buff Review Card",
      description:
        "A responsive React component to showcase movie cards with a gradient background, details like poster, title, director, and genre, and interactive icons (like, share, comment). Styled using modular CSS and media queries for responsiveness.",
      image: movieReviewCard,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Naveen-KumarJ/moviebuff-review-card",
      webapp: "https://moviebuff-review-card.vercel.app/",
    },
    {
      id: 2,
      title: "Rippling Task Manager",
      description:
        "A minimal and beautiful task manager built using HTML, Tailwind CSS, and Vanilla JavaScript. Supports add, delete, clear, and real-time search functionality with elegant UI.",
      image: ripplingTaskManager,
      tags: ["HTML", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Naveen-KumarJ/rippling-task-manager",
      webapp: "https://rippling-task-manager-gp8s.vercel.app/",
    },
    {
      id: 3,
      title: "ZenFlow Meditation Platform",
      description:
        "A calming meditation website designed to help users relax, breathe, and find inner peace. Built with HTML, CSS, JavaScript, and Tailwind CSS, featuring guided meditation sessions, soothing visuals, and an interactive chatbot named Hope.",
      image: zenflow,
      tags: ["HTML", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Naveen-KumarJ/zenflow-meditation",
      webapp: "https://naveen-kumarj.github.io/zenflow-meditation/src/",
    },
    {
      id: 4,
      title: "Emoji Mart",
      description:
        "Emoji-Mart is a lightweight and user-friendly web application designed for searching and browsing emojis efficiently. With a visually appealing design, it provides category filters and a search bar for an intuitive and fun emoji exploration experience.",
      image: emojiMart,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Naveen-KumarJ/Emoji-Mart?tab=readme-ov-file",
      webapp: "https://naveen-kumarj.github.io/Emoji-Mart/",
    }
  ];  