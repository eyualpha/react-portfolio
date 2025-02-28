import avatarBackground from "../assets/avatar Background.png";
import avatar from "../assets/avatar.png";
const Hero = () => {
  return (
    <>
      <div className=" w-full flex justify-center bg-[#161513] h-screen mx-auto">
        <div className="max-w-[1440px] flex mx-auto w-full items-center flex-col px-12">
          <div className="w-full justify-center flex mt-24 relative">
            <img src={avatarBackground} alt="" className=" flex " />
            <img src={avatar} alt="" className=" absolute flex" />
          </div>
          <div className=" md:text-7xl sm:text-6xl text-5xl text-white text-center font-bold max-w-[800px] mx-auto mt-12">
            <h1>
              I do code and make content{" "}
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-800">
                {" "}
                about it!
              </span>
            </h1>
          </div>

          <div className=" text-[#C5C5C5] text-center max-w-[1080px] mx-auto mt-12 lg:text-4xl md:text-3xl sm:text-2xl text-xlfont-extralight">
            <p>
              I am a seasoned full-stack software engineer with over 8 years of
              professional experience, specializing in backend development. My
              expertise lies in crafting robust and scalable SaaS-based
              architectures on the Amazon AWS platform.
            </p>
          </div>

          <div className=" flex mt-12 gap-8">
            <button className="bg-white sm:font-bold sm:text-2xl  text-xl sm:py-4 py-2 sm:px-8 px-4 rounded-full">
              Get In Touch
            </button>
            <button className="bg-black text-white sm:font-bold sm:text-2xl text-xl sm:py-4 py-2 sm:px-8 px-4 rounded-full border-2 border-white">
              Download Cv
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
