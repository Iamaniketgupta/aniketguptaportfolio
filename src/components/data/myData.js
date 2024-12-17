import project from "../../assets/imageplaceholder.png"
import profilize from "../../assets/profilize.png";
import gappe from "../../assets/gappe.png";
import recordninja from "../../assets/recordninja.png";
import react_anno from "../../assets/react_anno.png";
// import portfolioProject from "../../assets/portfolioProject.png";
import mentorhub from "../../assets/mentorhubimage.png";

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
        title: "GAPPE -Chat & Calls",
        img: gappe || project,
        desc: ["An Advanced Chat and Calls WebApp with Real-Time Messaging, Video Calls and online/offline/typing status."],
        techStack: ["React.js", "MongoDB","NodeJs","Socket.io","Express"],
        live_link: "https://gappe.vercel.app",
        github_link: "https://github.com/Iamaniketgupta/gappe"
    },
    {
        title: "React Video Annotation NPM Package",
        img: react_anno|| project,
        desc: ["A react based NPM package. Provides a video player that supports video In-Frame annotations."],
        techStack: ["React.js", "Javascript","KonvaJs"],
        live_link: "https://react-video-annotation.vercel.app/",
        npm_link: "https://www.npmjs.com/package/react-video-annotation-tool",
        github_link: "https://github.com/iamaniketgupta/react-video-annotation"
    },

    {
        title: "Profilize",
        img: profilize|| project,
        desc: ["A Scalable Professional Resume Builder Application.Implemented Resume template & Download as PDF"],
        techStack: ["React.js", "Tailwind","NodeJs","MongoDB","Express"],
        live_link: "https://profilize.netlify.app/",
        github_link: "https://github.com/iamaniketgupta/profilize"
    },
    
    {
        title: "Record Ninja",
        img: recordninja|| project,
        desc: ["A SAAS Screen Recording Web Application.","Implemented Resume template & Download as PDF"],
        techStack: ["React.js", "Tailwind"],
        live_link: "https://profilize.netlify.app/",
        github_link: "https://github.com/iamaniketgupta/profilize"
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
        title: "Aniket Gupta Portfolio",
        desc: ["Personal portfolio Centered around the theme of GitHub and its applications."],
        language:"JavaScript",
        github_link: "https://github.com/Iamaniketgupta/aniketguptaportfolio",
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

const mySkills = ["C","C++","Javascript", "OOPS","Data Structures","Typescript","React.js", "Postman" ,"Node.js", "Express.js", "MongoDB", "CSS", "Tailwind", "HTML", "Git", "Docker"]



export {
    myGithubProjects,
    myProjects,
    mySkills,
    personalDetails
}