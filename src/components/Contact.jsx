import React from "react";
import { BsInstagram, BsTwitterX, BsX, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" bg-[#191919] w-full flex items-center justify-center px-12 text-[#C5C5C5] border-gray-800 border-t-1">
      <div className=" w-full mx-auto max-w-[1280px] flex  flex-col py-12">
        <h1 className="font-bold text-4xl text-white">Contact</h1>
        <p className="mt-4 text-lg">
          Seasoned Full Stack Software Engineer with over 8 years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions. Adept at leveraging a comprehensive skill
          set encompassing front-end and back-end technologies{" "}
        </p>
        <div className=" flex gap-4 items-center mt-8">
          <MdEmail size={20} />
          <p className=" font-bold">abmcodehub@gmail.com</p>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <BsYoutube size={20} />
          <BsInstagram size={20} />
          <BsTwitterX size={20} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
