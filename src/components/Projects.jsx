import React from "react";
import project1 from "../assets/project-thumbnail-1.png";
import project2 from "../assets/project-thumbnail-2.png";
import ViewIcon from "../assets/View Icon.png";
const Projects = () => {
  return (
    <>
      <div className=" w-full bg-[#161513] flex items-center py-12">
        <div className="max-w-[1440px] flex  mx-auto w-full flex-col items-center">
          <h1 className="p-0 text-4xl md:text-5xl text-transparent bg-gradient-to-b from-orange-400 bg-clip-text to-orange-900 text-center font-extrabold">
            PROJECTS
          </h1>
          <div className=" flex gap-8 items-center mt-12 text-[#fff]">
            <div className=" bg-[#2A2A2A] rounded-2xl">
              <img src={project1} alt="" />
              <div className=" flex justify-between items-center">
                <div className=" flex flex-col uppercase p-4">
                  <p className=" text-sm hover:cursor-pointer hover:underline">
                    click here to visit
                  </p>
                  <h1 className=" font-bold text-2xl">HTML tutorial</h1>
                </div>
                <img
                  src={ViewIcon}
                  alt=""
                  className="px-4 hover:scale-120 duration-300"
                />
              </div>
            </div>
            <div className="bg-[#2A2A2A] rounded-2xl">
              <img src={project2} alt="" />
              <div className=" flex justify-between items-center">
                <div className=" flex flex-col uppercase p-4">
                  <p className=" text-sm hover:cursor-pointer hover:underline">
                    click here to visit
                  </p>
                  <h1 className=" font-bold text-2xl">CSS tutorial</h1>
                </div>
                <img
                  src={ViewIcon}
                  alt=""
                  className="px-4 hover:scale-120 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
