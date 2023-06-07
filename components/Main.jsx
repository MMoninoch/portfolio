import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-2-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Moninoch</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a front-end developer specializing in building exceptional
            digital experiences, and I also have experience in designing.
            Currently, my main focus is on developing responsive front-end web
            applications, while simultaneously expanding my knowledge of
            back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                    <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                    <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                    <BsFillPersonLinesFill />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
