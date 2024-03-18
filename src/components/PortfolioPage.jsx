import avatar from "../assets/avatar.jpg"
import { FaInstagram, FaLinkedinIn, FaRegStar, FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { LuGitFork } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { IoDownloadOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandGithub, TbBrandLeetcode } from "react-icons/tb";


import { myGithubProjects, myProjects, mySkills, personalDetails } from "./data/myData";
import { useEffect, useState } from "react";


const PortfolioPage = () => {
    const [mode, setMode] = useState(() =>
        localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) :
            false);

  
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
        <div className=" min-h-[100vh] bg-slate-200 text-black dark:bg-[#1d232a] duration-500 dark:text-white py-5 p-5 font-sans">
            <div className="main-wrapper grid grid-cols-1  place-items-start md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">
                <div className="personal-details grid grid-cols-1 gap-4 ">
                    {/* Theme */}
                    <div className="bg-white  dark:bg-[#333a42] shadow-lg rounded-lg  pl-6 pr-2 py-4">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-semibold">
                                <p className="opacity-70">Theme</p>
                                <p className="text-sm font-normal opacity-60">{mode ? "Dark" : "Light"}</p>
                            </div>

                            <div className="p-3 opacity-80 hover:bg-gray-100 dark:hover:dark:bg-[#2a2e34] rounded-lg font-medium cursor-pointer" onClick={modeChange}>
                                Change Theme
                                {
                                    mode ? <FaToggleOn className="inline-block mx-2 duration-100" size={25} /> :
                                        <FaToggleOff className="inline-block mx-2 duration-100" size={25} />
                                }
                            </div>
                        </div>
                    </div>
                    {/* About me */}
                    <div className="bg-white shadow-lg dark:bg-[#333a42] rounded-lg py-8">
                        <div className="grid place-items-center">
                            <div className="avatar">
                                <div className="mb-5 w-32 h-32 rounded-full ring ring-offset-2 ring-indigo-500 overflow-clip">
                                    <img src={avatar} alt="aniket" />
                                </div>
                            </div>

                            <div className="mx-auto p-3">
                                <h1 className="text-3xl font-bold opacity-70">Aniket Gupta</h1>
                            </div>

                            <div className="text-center mx-auto p-2">
                                ⚡ MERN Full Stack Developer | ML Enthusiast | JavaScript | Node.js | React ⚡
                            </div>

                            <a href="#"><button className="p-2 px-3 border-2 border-offset-1 rounded-xl mt-5 hover:shadow-xl text-sm font-medium inline-flex items-center">Download Resume
                                <IoDownloadOutline className="inline-block mx-1 text-blue-600" />

                            </button></a>

                        </div>
                    </div>

                    {/* Details */}
                    <div className="bg-white dark:bg-[#333a42] shadow-lg rounded-lg py-8 px-4">
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
                                            <a href={item?.link} target="_blank">{item.answer}</a>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="bg-white dark:bg-[#333a42] shadow-lg rounded-lg py-8 px-4">
                        <h2 className="text-xl px-4 font-semibold  opacity-80">My Skills</h2>
                        <div className="text-center mt-2 py-2">
                            {
                                mySkills?.map((item, index) =>
                                    <div key={index} className="cursor-pointer shadow-lg  inline-block m-1 px-3 py-1 bg-blue-600 rounded-2xl text-sm text-white font-semibold">
                                        {item}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Education */}

                    <div className="bg-white dark:bg-[#333a42] shadow-lg rounded-lg py-8 px-4">
                        <h2 className="text-xl px-4 font-semibold  opacity-80">Education</h2>
                        <div className="mt-3 mx-auto py-3 px-2">

                            <ol className=" border-l-2 pl-3 relative">
                                <div className="w-2 h-2 rounded-full absolute bg-slate-500 left-[-5px] opacity-50"></div>
                                <li className="text-sm  mb-2 font-medium">
                                    <div className="text-xs opacity-70">2022-Present</div>
                                    <div className="opacity-80">B.Tech Computer Science</div>
                                    <div className="opacity-85">PCTE Institute of Engineering and Technology</div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-slate-500 left-[-5px] opacity-50"></div>
                                <li className="text-sm font-medium mb-2">
                                    <div className="text-xs opacity-70">2019-2021 </div>
                                    <div className="opacity-80">12<sup>th</sup></div>
                                    <div className="opacity-85">SDP Sen Sec School</div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-slate-500 left-[-5px] opacity-50"></div>
                                <li className="text-sm  mb-2 font-medium">
                                    <div className="text-xs opacity-70">2018-2019</div>
                                    <div className="opacity-80">10<sup>th</sup></div>
                                    <div className="opacity-85">Bharat Sewak Adarsh Vidiyalya</div>

                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Achievments */}

                    <div className="bg-white dark:bg-[#333a42]  shadow-lg rounded-lg py-8 px-4">
                        <h2 className="text-xl px-4 font-semibold  opacity-80">Achievments</h2>
                        <div className="mt-3 mx-auto py-3 px-2">

                            <ol className=" border-l-2 pl-3 relative">
                                <div className="w-2 h-2 rounded-full absolute bg-slate-500 left-[-5px] opacity-50"></div>
                                <li className="text-sm  mb-2 font-medium">
                                    <div className="text-xs opacity-70">2024</div>
                                    <div className="opacity-80">First Runners Up</div>
                                    <div className="opacity-85">At Upkill Mafia Hackathon in MERN</div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-slate-500 left-[-5px] opacity-50"></div>
                                <li className="text-sm font-medium mb-2">
                                    <div className="text-xs opacity-70">2024 </div>
                                    <div className="opacity-80">Among the Top 2 </div>
                                    <div className="opacity-85">At Inter College Coding Competition in Arya College</div>

                                </li>
                                <div className="w-2 h-2 rounded-full absolute bg-slate-500 left-[-5px] opacity-50"></div>
                                <li className="text-sm  mb-2 font-medium">
                                    <div className="text-xs opacity-70">2023</div>
                                    <div className="opacity-80">Best Student Awardee</div>
                                    <div className="opacity-85">By Indian School for Technical Education</div>

                                </li>
                            </ol>
                        </div>
                    </div>

                </div>

                <div className="col-span-2 font-sans  max-sm:mt-8 ">

                    {/* my projects */}
                    <div className="projects-wrapper mt-8 md:mt-0 lg:mt-0 shadow-xl   bg-white dark:bg-[#333a42] px-4 md:px-10 py-8 rounded-2xl">
                        <div className="flex text-2xl font-bold opacity-55 mb-8 pl-8">
                            My Projects
                        </div>
                        <div className="projects grid grid-cols-1 lg:grid-cols-2 gap-7 ">
                            {
                                myProjects?.map((item, index) =>
                                    <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#2a2e34] shadow-xl  hover:shadow-2xl cursor-pointer" key={index}>
                                        <div>
                                            <h3 className="text-center text-xl my-2 font-semibold opacity-65">{item.title}</h3>
                                            <div className="overflow-clip mx-auto md:w-[70%] max-w-[320px] h-40 rounded-xl relative">
                                                <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-fill" />
                                            </div>

                                            <div className="p-2 my-2 opacity-60 text-sm">
                                                <ul className="min-h-12">
                                                    {
                                                        item?.desc?.map((item, idx) =>
                                                            <li className="px-3 my-1" key={idx}>{item}</li>
                                                        )
                                                    }
                                                </ul>
                                                <div className=" mt-3 pl-1">
                                                    <h4 className="pl-2 font-semibold">Tech Stack</h4>
                                                    <div className="flex gap-2 ">
                                                        {
                                                            item?.techStack?.map((item, idx) =>
                                                                <div key={idx} className="cursor-pointer shadow-lg  inline-block m-1 px-3 py-1 bg-slate-500 rounded-2xl text-xs text-white font-semibold">
                                                                    {item}
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 my-3 text-sm">
                                                <a href={item.live_link} target="_blank"><button className="min-w-16 px-3 py-2 mx-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-500">Live</button></a>
                                                <a href={item.github_link} target="_blank"><button className="min-w-16 px-3 py-2 mx-2 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-500">Github <TbBrandGithub className="mx-1 inline-block" size={15} /></button></a>
                                            </div>

                                        </div>

                                    </div>
                                )
                            }


                        </div>
                    </div>

                    {/* github projects */}
                    <div className="projects-wrapper mt-8 shadow-xl bg-white dark:bg-[#333a42] px-4 md:px-10 py-8 rounded-2xl">
                        <div className="flex text-2xl font-bold opacity-55 mb-8 pl-8">
                            My Github Projects
                        </div>

                        <div className="github-projects grid grid-cols-1 lg:grid-cols-2 gap-7">
                            {
                                myGithubProjects.map((item, index) =>
                                    <div key={index} className="py-4 px-6 rounded-xl bg-slate-100 dark:bg-[#2a2e34] shadow-xl  hover:shadow-2xl cursor-pointer">
                                        <a href={item.github_link} target="_blank"><h3 className="text-lg font-semibold opacity-70">{item.title} <TbBrandGithub className="inline-block mx-2" size={20} /></h3>
                                        <div className="text-sm min-h-14 py-2 opacity-60">
                                            <p>⚡{item.desc}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="flex-grow">
                                                <div className="stars mr-3 inline-flex gap-1 items-center">
                                                    <FaRegStar className="inline-block" />
                                                    {item.stars}
                                                </div>
                                                <div className="forks ml-3 inline-flex gap-1 items-center">
                                                    <LuGitFork />
                                                    {item.forks}
                                                </div>
                                            </div>

                                            <div className="lang-used">
                                                <div className={`inline-block w-3 h-3 rounded-full mx-2 ${item.language === "JavaScript" ? "bg-yellow-300" : item.language === "HTML" ? "bg-red-400" : item.language === "EJS" ? "bg-pink-400" : "bg-slate-500"}`}>
                                                </div>
                                                <span>{item.language}</span>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                )

                            }
                        </div>

                    </div>

                </div>


                {/* Footer */}
                <div className="bg-white dark:bg-[#333a42] shadow-lg rounded-lg py-8 mt-5 px-4 md:col-span-3 mx-auto w-full">
                    <div className="text-center text-lg font-semibold opacity-90">
                        Made with <span className="text-red-500">&hearts;</span> by Aniket Gupta
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
