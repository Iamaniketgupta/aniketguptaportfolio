import avatar from "../assets/avatar.jpg"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoCodeSharp, IoDownloadOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandLeetcode } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoCodeSlashSharp } from "react-icons/io5";

import { CgNpm } from "react-icons/cg";


import { highlights, myProjects, mySkills, personalDetails } from "./data/myData";
import { useEffect, useState } from "react";
import IndianFlag from "./IndianFlag";
import WorkExperience from "./WorkExp";


const PortfolioPage = () => {
    const [mode, setMode] = useState(() =>
        localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) :
            true);


    useEffect(() => {
        if (mode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem("mode", JSON.stringify(mode));
    }, [mode]);

    const modeChange = () => {
        setMode(prevMode => !prevMode);
    };

    return (
        <div className=" min-h-[100vh] max-w-[2000px] mx-auto bg-slate-200 text-black dark:bg-black  duration-500 dark:text-white py-5 p-2 md:p-5 font-sans">
            <div className="main-wrapper grid grid-cols-1  place-items-start md:grid-cols-2 lg:grid-cols-3 md:gap-5 max-md:place-items-center ">
                <div className="personal-details grid grid-cols-1 gap-4 ">
                    {/* Theme */}
                    <div className="bg-white  dark:bg-black dark:bg-gradient-to-r from-black to-violet-700 shadow-lg rounded-lg  pl-6 pr-2 py-4">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-semibold">
                                <p className="opacity-70 font-semibold">Theme</p>
                                <p className="text-sm font-normal opacity-60 px-1">{mode ? "Dark" : "Light"}</p>
                            </div>

                            <div className="  rounded-lg font-medium dark:text-white  cursor-pointer" onClick={modeChange}>

                                {
                                    !mode ? <MdDarkMode className="inline-block mx-2 duration-300   transition-transform" size={25} /> :
                                        <MdLightMode className="inline-block mx-2  duration-300 " size={25} />
                                }
                            </div>
                        </div>
                    </div>
                    {/* About me */}
                    <div className="bg-white shadow-lg dark:bg-black rounded-lg py-8">
                        <div className="grid place-items-center">
                            <div className="avatar">
                                <div className="mb-5 w-32 h-32 rounded-full ring-4 ring-offset-2 ring-transparent bg-gradient-to-r from-violet-700 via-violet-600 to-black overflow-hidden p-1">
                                    <div className="w-full h-full rounded-full bg-white overflow-hidden">
                                        <img src={avatar} alt="aniket" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                            </div>

                            <div className="mx-auto p-3">
                                <h1 className="text-3xl font-bold ">Aniket Gupta</h1>
                            </div>

                            <div className="text-center mx-auto p-2 md:px-5 ">
                                <IoCodeSharp className="inline text-violet-500 text-2xl" />  Software Developer || Ex-SDE Intern @Aero2Astro || AI/ML Enthusiast | JavaScript | Node.js | React  <IoCodeSlashSharp className="inline text-violet-500 text-2xl" />
                            </div>

                            <a
                                href="https://drive.google.com/file/d/1WPjz5aElldEf4OC2FS8w2NyQFxAMFwSn/view?usp=sharing"
                                target="_blank"
                            >
                                <button
                                    className="relative inline-flex items-center mt-4 justify-center p-2 px-5 bg-gradient-to-r from-black to-violet-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl
                                     transition-transform transform hover:scale-105 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r to-violet-600 from-black opacity-0 hover:opacity-100 transition-opacity rounded-lg"></span>
                                    <span className="relative flex items-center">
                                        Download Resume
                                        <IoDownloadOutline className="ml-2 text-xl animate-bounce" />
                                    </span>
                                </button>
                            </a>


                        </div>
                    </div>

                    {/* Details */}
                    <div className="bg-white dark:bg-black shadow-lg border-t-2 border-violet-600 rounded-lg py-8 px-4">
                        <div className="personal-details">
                            {
                                personalDetails?.map((item, index) => {
                                    return <div className="flex my-2 items-center" key={index}>
                                        <div className="flex-grow px-2">
                                            {
                                                item.title === "Based in:" ?
                                                    <IoLocationOutline className="inline-block mb-1 mr-1" />
                                                    :
                                                    item.title === "Github:" ?
                                                        <IoLogoGithub className="inline-block mb-1 mr-1" />
                                                        :
                                                        item.title === "Email:" ?
                                                            <MdOutlineEmail className="inline-block mb-1 mr-1" />
                                                            :
                                                            item.title === "Linkedin:" ?
                                                                <FaLinkedinIn className="inline-block mb-1 mr-1" />
                                                                :
                                                                item.title === "Instagram:" ?
                                                                    <FaInstagram className="inline-block mb-1 mr-1" />
                                                                    :
                                                                    item.title === "Leetcode:" ?
                                                                        <TbBrandLeetcode className="inline-block mb-1 mr-1" />
                                                                        : ''
                                            }


                                            {item.title}
                                        </div>
                                        <div className="text-xs md:text-sm px-2 break-words">
                                            <a href={item?.link} target="_blank" className="hover:text-violet-500 hover:underline flex gap-2 items-center">{item.answer} {item.answer === "India" ? <IndianFlag /> : ''}</a>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="bg-white dark:bg-black shadow-lg border-t-2 border-violet-600 rounded-lg py-8 px-4">
                        <h2 className="text-xl px-4 font-semibold   ">My Skills</h2>
                        <div className="text-center mt-2 py-2">
                            {
                                mySkills?.map((item, index) =>
                                    <div key={index} className="cursor-pointer shadow-lg  inline-block m-1 px-3 py-1 bg-gradient-to-t from-violet-900  to-violet-950 rounded text-sm text-white font-semibold">
                                        {item}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Education */}

                    <div className="bg-white dark:bg-black shadow-lg rounded-lg border-t-2 border-violet-600 py-8 px-4">
                        <h2 className="text-xl px-4 font-semibold ">Education</h2>
                        <div className="mt-3 mx-auto py-3 px-2">

                            <ol className=" border-l-2 pl-3 border-stone-600 relative ">
                                <div className="w-2 h-2 rounded-full absolute bg-violet-600 left-[-5px] "></div>
                                <li className="text-sm  mb-4 font-medium ">
                                    <div className="text-xs font-normal  opacity-70">2022-Present</div>
                                    <div className="text-md">B.Tech Computer Science</div>
                                    <div className="opacity-80 text-xs">CGPA 8.7 / 10</div>
                                    <div className=" font-normal opacity-85">PCTE Institute of Engineering and Technology</div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-violet-600 left-[-5px] "></div>
                                <li className="text-sm font-medium mb-4">
                                    <div className="text-xs font-normal  opacity-70">2019-2021 </div>
                                    <div className="">12<sup>th</sup> Higher Secondary</div>
                                    <div className="opacity-80 text-xs"> 90.6 % </div>
                                    <div className="font-normal  opacity-85">Punjab School Education Board</div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-violet-600 left-[-5px] "></div>
                                <li className="text-sm  mb-3 font-medium">
                                    <div className="text-xs font-normal  opacity-70">2018-2019</div>
                                    <div className="">10<sup>th</sup> Senior Secondary</div>
                                    <div className="opacity-80 text-xs"> 95.6 % </div>
                                    <div className=" font-normal  opacity-85">Punjab School Education Board</div>


                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Achievments */}

                    <div className="bg-white dark:bg-black  shadow-lg rounded-lg py-8 px-4 border-t-2 border-violet-600">
                        <h2 className="text-xl px-4 font-semibold  ">Achievments & Awards</h2>
                        <div className="mt-3 mx-auto py-3 px-2">

                            <ol className=" border-l-2 border-stone-600 pl-3 relative">
                                <div className="w-2 h-2 rounded-full absolute bg-violet-600 left-[-5px] "></div>
                                <li className="text-sm  mb-4 font-medium">
                                    <div className="text-xs font-normal  opacity-70">2024</div>
                                    <div className="">Finalist & Runner-up</div>
                                    <div className="font-normal opacity-85">At National Coding Hackathon organised by a Startup</div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-violet-600 left-[-5px] "></div>

                                <li className="text-sm font-medium mb-4">
                                    <div className="text-xs font-normal  opacity-70">2024</div>
                                    <div className="">Winner </div>
                                    <div className="font-normal opacity-85">Inter-College Coding Competition </div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-violet-600 left-[-5px] "></div>

                                <li className="text-sm  mb-3 font-medium">
                                    <div className="text-xs font-normal  opacity-70">2023</div>
                                    <div className="">Best Student Award for Academic excellence</div>
                                    <div className="font-normal opacity-85">By Indian School for Technical Education</div>

                                </li>
                            </ol>
                        </div>
                    </div>

                </div>

                {/* Projects */}
                <div className="col-span-2 font-sans  max-sm:mt-8 ">
                    <WorkExperience />
                    {/* my projects */}
                    <div className="projects-wrapper mt-8 shadow-xl bg-white
                    border-t-2 border-violet-600
                     dark:bg-black px-4 md:px-5 py-8 rounded-2xl">
                        <div className="flex text-2xl font-bold mb-8 justify-center ">
                            My Projects
                        </div>
                        <div className="projects grid grid-cols-1 lg:grid-cols-2 gap-4 max-md:place-items-center ">



                            {
                                myProjects?.map((item, index) =>
                                    <div
                                        className="rounded-2xl bg-gradient-to-t from-[#0a0a0a] via-[#1c1c1c] to-[#432e58]  
                                dark:bg-gradient-to-tr dark:from-[#0a0a0a] dark:via-[#1c1c1c] dark:to-[#432e58] 
                                shadow-lg hover:shadow-xl border-b-2 cursor-pointer border-b-violet-800 transform transition-transform 
                                duration-300 w-full overflow-clip min-h-[500px] max-h-fit mt-4"
                                        key={index}
                                    >
                                        {/* Image Container */}
                                        <div className=" overflow-hidden bg-gray-900 rounded-t-xl ">
                                            <img
                                                src={item.img}
                                                alt={item.title}

                                                className="w-full h-auto aspect-video max-h-[250px]  transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>

                                        {/* Title and Description */}
                                        <div className=" text-gray-300 p-6 ">
                                            <div className="text-center">
                                                <a
                                                    href={item.github_link}
                                                    target="_blank"

                                                    className="text-xl font-bold text-white transition-all duration-300 hover:text-slate-300"
                                                >
                                                    {item.title}
                                                </a>
                                            </div>
                                            <p className="opacity-70 text-sm mt-2">{item.desc.join(", ")}</p>

                                            {/* Tech Stack */}
                                            <div className="mt-2">
                                                <h4 className="text-white text-sm font-semibold">Tech Stack</h4>
                                                <div className="flex flex-wrap mt-2 gap-2">
                                                    {item?.techStack?.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className={`px-3 py-1  text-white text-xs font-medium rounded-full shadow-md
                                                                ${tech === "React.js" ? "bg-blue-800" : tech === "NodeJs" ? "bg-green-800" : tech === "Tailwind" ? "bg-slate-600" :
                                                                    tech === "Typescript" ? "bg-blue-500" : tech === "MongoDB" ? "bg-green-600" : tech === "Express" ? "bg-orange-800" :
                                                                        tech === "Javascript" ? "bg-yellow-600" : "bg-violet-600"}`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className=" text-center flex flex-wrap justify-start px-6 gap-3">
                                            {/* Live Button */}
                                            <a href={item.live_link} target="_blank" rel="noopener noreferrer">
                                                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-xs shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                                                    Live
                                                </button>
                                            </a>

                                            {/* GitHub Button */}
                                            <a href={item.github_link} target="_blank" rel="noopener noreferrer">
                                                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium text-xs shadow-md hover:from-gray-800 hover:to-black hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                                                    GitHub <FaGithub size={15} />
                                                </button>
                                            </a>

                                            {/* NPM Button */}
                                            {item.npm_link && (
                                                <a href={item.npm_link} target="_blank" rel="noopener noreferrer">
                                                    <button className="px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-red-600 text-white font-medium text-xs shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                                                        NPM <CgNpm size={15} />
                                                    </button>
                                                </a>
                                            )}
                                        </div>

                                    </div>


                                )
                            }


                        </div>
                    </div>

                    {/* Highlights */}
                    {/* <div className="projects-wrapper min-md:hidden mt-3 max-sm:mt-8 dark:mx-5 shadow-xl border-t-2 border-violet-600  bg-white py-6 text-center dark:bg-black px-4 md:px-10  rounded-2xl">
                        <div className="mb-4 text-2xl font-bold text-center  opacity-90">
                            Key Moments
                        </div>

                        <div className="highlights grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {
                                highlights?.map((item, index) =>
                                    <div key={index} className=" rounded-md h-40 overflow-clip shadow-xl  hover:shadow-2xl cursor-pointer">
                                        <img src={item.link} className=" bg-cover hover:scale-110 duration-200 transition-transform " alt={item.title} />
                                    </div>
                                )

                            }
                        </div>

                    </div> */}

                </div>


                {/* Footer */}
                <div className="bg-white  dark:bg-gradient-to-b from-black to-violet-700 shadow-lg rounded-lg py-8 mt-5 px-4 md:col-span-3 mx-auto w-full">
                    <div className="text-center text-lg font-semibold opacity-90">
                        Made with <span className="text-red-500">&hearts;</span> by <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-violet-500 dark:text-white font-bold">Aniket Gupta</span>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
