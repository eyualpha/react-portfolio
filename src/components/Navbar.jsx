import { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className="w-full h-[82.18px] bg-[#222] px-12 flex">
        <div className="max-w-[1440px] flex justify-between mx-auto w-full items-center ">
          <div className=" flex justify-between items-center w-full">
            <div className="">
              <img className="w-20 h-20" src={logo} />
            </div>
            {/* DESKTOP MENU */}
            <ul className=" hidden md:flex items-center gap-16">
              <li className="text-white text-lg">Home</li>
              <li className="text-white text-lg">About</li>
              <li className="text-white text-lg">Services</li>
              <li className="text-white text-lg">Contact</li>
            </ul>
          </div>
          {/* MOBILE MENU */}
          <div className="flex md:hidden">
            {!showSidebar ? (
              <FiMenu size={30} color="#fff" onClick={handleSidebar} />
            ) : (
              <MdOutlineClose size={30} color="#fff" onClick={handleSidebar} />
            )}
          </div>

          <div
            className={
              showSidebar
                ? "absolute h-full w-8/12 bg-[#222] top-0 left-0 z-50 ease-in-out duration-300 md:hidden "
                : "absolute h-full w-8/12 bg-[#222] top-0 left-[-1000px] z-50 ease-in-out duration-300 md:hidden"
            }
          >
            <ul className="flex flex-col items-center gap-16 mt-[100px]">
              <li className="text-white text-lg">
                <a href="">Home</a>
              </li>
              <li className="text-white text-lg">
                <a href="">About</a>
              </li>
              <li className="text-white text-lg">
                <a href="">Services</a>
              </li>
              <li className="text-white text-lg">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
