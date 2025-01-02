import project from "../../assets/imageplaceholder.png"
import profilize from "../../assets/profilize.png";
import gappe from "../../assets/gappe.png";
import recordninja from "../../assets/recordninja.png";
import react_anno from "../../assets/react_anno.png";
import iste from "../../assets/iste.jpeg";
import hackathon from "../../assets/hackathon.png";
import codingcomp from "../../assets/codingcomp.jpg";


const personalDetails = [
    {
        title: 'Based in:',
        answer: "India"
    },
        {
        title: "Leetcode:",
        answer: "aniketgupta_",
        link:"https://leetcode.com/aniketgupta_"

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

    }


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
        techStack: ["Babel","React.js", "Javascript","KonvaJs"],
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
        techStack: ["Typescript","Next.js","React.js", "Tailwind"],
        live_link: "https://recordninja.vercel.app/",
        github_link: "https://github.com/iamaniketgupta/recordninja"
    },


]

const highlights =[
    {
        title: "ISTE Award Ceremony",
        link: iste
    },
    {
        title: "Hackathon finalist",
        link: hackathon
    },
    {
        title: "Coding Competition ",
        link: codingcomp
    }
 
]

const mySkills = ["C","C++","Javascript", "OOPS","Data Structures","Typescript","React.js", "Postman" ,"Node.js", "Express.js", "MongoDB", "CSS", "Tailwind", "HTML", "Git", "Docker"]



export {
    highlights,
    myProjects,
    mySkills,
    personalDetails
}
