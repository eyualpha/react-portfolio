import React from "react";
import googleIcon from "../assets/google-logo.png";
import appleIcon from "../assets/apple-logo.png";
import metaIcon from "../assets/meta-logo.png";

const Experience = () => {
  return (
    <div className=" w-full bg-[#161513] p-12 flex  justify-center">
      <div className=" max-w-[1280px] w-full mx-auto flex items-center flex-col">
        <h1 className="p-0 text-4xl md:text-5xl text-transparent bg-gradient-to-b from-[#5BADFF] bg-clip-text to-[#1373D1] text-center font-extrabold uppercase">
          Experience
        </h1>

        <div className=" flex flex-col w-full pt-12">
          <div className=" flex flex-col gap-4">
            <div className="md:flex justify-between">
              <div className="md:flex items-center py-4">
                <img src={googleIcon} alt="" className=" mb-2 md:mb-0" />
                <h1 className=" font-bold lg:text-3xl text-2xl text-white md:pl-4">
                  Lead Software Engineer at Google
                </h1>
              </div>
              <p className=" text-[#8491A0] text-xl pt-4">Nov 2019 - Present</p>
            </div>
            <p className=" text-[#8491A0] text-lg">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </div>

        <div className=" flex flex-col w-full pt-12">
          <div className=" flex flex-col gap-4">
            <div className="md:flex justify-between">
              <div className="md:flex items-center py-4">
                <img src={appleIcon} alt="" className=" mb-2 md:mb-0" />
                <h1 className=" font-bold lg:text-3xl text-2xl text-white md:pl-4">
                  Junior Software Engineer at Apple
                </h1>
              </div>
              <p className=" text-[#8491A0] text-xl">Nov 2019 - Present</p>
            </div>
            <p className=" text-[#8491A0] text-lg">
              During my tenure at Apple, I held the role of Software Architect,
              where I played a key role in shaping the architecture of
              mission-critical software projects. Responsible for designing
              scalable and efficient systems, I provided technical leadership to
              a cross-functional team.
            </p>
          </div>
        </div>

        <div className=" flex flex-col w-full pt-12">
          <div className=" flex flex-col gap-4">
            <div className="md:flex justify-between">
              <div className="md:flex items-center py-4">
                <img src={metaIcon} alt="" className=" mb-2 md:mb-0" />
                <h1 className="  font-bold lg:text-3xl text-2xl text-white md:pl-4">
                  Software Engineer at Meta
                </h1>
              </div>
              <p className=" text-[#8491A0] text-xl">Nov 2019 - Present</p>
            </div>
            <p className=" text-[#8491A0] text-lg">
              At Meta, I served as a Software Engineer, focusing on the design
              and implementation of backend systems for the social media giant's
              dynamic platform. Working on projects that involved large-scale
              data processing and user engagement features, I leveraged my
              expertise to ensure seamless functionality and scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
