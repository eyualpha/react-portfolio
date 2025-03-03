import React from "react";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
const ExperienceWith = () => {
  return (
    <>
      <div className="w-full bg-[#161513] text-[#C5C5C5] py-12">
        <div className="max-w-[1280px] mx-auto flex items-center flex-col"></div>
        <h1 className="md:text-5xl sm:text-4xl text-3xl  text-center">
          Experience With
        </h1>
        <div className="flex justify-center gap-8 mt-12 md:gap-16">
          <img src={nodejs} alt="" className=" w-10 sm:w-12 md:w-16" />
          <img src={css} alt="" className=" w-10 sm:w-12 md:w-16" />
          <img src={reactjs} alt="" className=" w-10 sm:w-12 md:w-16" />
          <img src={javascript} alt="" className=" w-10 sm:w-12 md:w-16" />
          <img src={html} alt="" className=" w-10 sm:w-12 md:w-16" />
        </div>
      </div>
    </>
  );
};

export default ExperienceWith;
