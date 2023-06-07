import React from "react";
import Image from 'next/image';
import Man from '../public/man.png';

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Jr. in Data Science of Engineering at the Royal University of Phnom
            Penh
          </p>
          <p className="py-2 text-gray-600">
            As a student, I have been actively pursuing my interest in
            technology and computers. I have always been drawn to the field of programming.
            In 2021, I began working with HTML and CSS to make minor projects, which sparked my passion for programming.
            Since then, I have been dedicated to furthering my knowledge and
            skills in this domain.
          </p>
          <p className="py-2 text-gray-600">
          My journey continued as I started learning JavaScript, which further fueled my enthusiasm for creating interactive websites. Presently, I am fully committed to honing my skills by working on projects utilizing React JS, and actively exploring new technologies. My aim is to continually expand my knowledge and expertise in the field of web development.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4">
          <Image 
          src={Man}
          width={250}
          height={250}
          alt="man" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;
