import project from "../../assets/image.png"
import profilize from "../../assets/profilize.png";
import portfolioProject from "../../assets/portfolioProject.png";

const personalDetails = [
    {
        title: 'Based in:',
        answer: "India"
    },
    {
        title: "Github:",
        answer: "iamaniketgupta",
        link:"https://github.com/iamaniketgupta"

    },
    {
        title: "Email:",
        answer: "aniketguptainbox@gmail.com",
        link:"mailto:aniketguptainbox@gmail.com"

    },
    {
        title: "Linkedin:",
        answer: "iamaniketgupta",
        link:"https://linkedin.com/in/iamaniketgupta"

    },
    {
        title: "Instagram:",
        answer: "iamaniketgupta",
        link:"https://instagram.com/iamaniketgupta"

    },

    {
        title: "Leetcode:",
        answer: "aniketgupta_",
        link:"https://leetcode.com/aniketgupta_"

    },
]
const myProjects = [
    {
        title: "Profilize",
        img: profilize|| project,
        desc: ["A Scalable Professional Resume Builder Application.","Implemented Resume template & Download as PDF"],
        techStack: ["React.js", "Tailwind"],
        live_link: "https://profilize.netlify.app/",
        github_link: "https://github.com/iamaniketgupta/profilize"
    },
    {
        title: "Aniket Gupta Portfolio",
        img: portfolioProject || project,
        desc: ["My personal portfolio with clean code and design",
            "Implemented user and device friendly layout"],
        techStack: ["React.js", "Tailwind"],
        live_link: "#",
        github_link: "#"
    },
    {
        title: "Project-3",
        img: project,
        desc: ["My personal Project-3 with clean code and design",
            "Implemented user and device friendly layout"],
        techStack: ["React.js", "Tailwind"],
        live_link: "#",
        github_link: "#"
    },
    {
        title: "Project-4",
        img: project,
        desc: ["My personal Project-4 with clean code and design",
            "Implemented user and device friendly layout"],
        techStack: ["React.js", "Tailwind"],
        live_link: "#",
        github_link: "#"
    },

]

const myGithubProjects =[
    {
        title: "ShortHttp",
        desc: ["A Scalable URL Shortener Application with Authentication and CRUD features"],
        language:"JavaScript",
        github_link: "https://github.com/iamaniketgupta/shorthttp",
        stars:"1",
        forks:"0"

    },
    {
        title: "Code Hawks",
        desc: ["Hackathon project with Authentication and Map with locations of users"],
        language:"JavaScript",
        github_link: "https://github.com/iamaniketgupta/CodeHawks",
        stars:"3",
        forks:"1"

    },
    {
        title: "Weather App",
        desc: ["A Secured weather Forecast Application indicators"],
        language:"EJS",
        github_link: "https://github.com/iamaniketgupta/RealWeatherApp",
        stars:"3",
        forks:"0"

    },
    {
        title: "Expense Tracker",
        desc: ["Expense tracker app with Multiple functionalities & CRUD features"],
        language:"JavaScript",
        github_link: "https://github.com/Iamaniketgupta/Track-Expense",
        stars:"1",
        forks:"0"

    },
]

const mySkills = ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB", "CSS", "Tailwind", "HTML", "Git", "C++"]



export {
    myGithubProjects,
    myProjects,
    mySkills,
    personalDetails
}