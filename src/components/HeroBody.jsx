import heroShapes from "../assets/hero-shapes.svg";
import heroBg from "../assets/hero-bg.svg";
import heroImg from "../assets/hero.svg";

function HeroBody() {
  return (
    <div className="hero-body relative flex flex-col md:flex-row items-center gap-12 md:gap-6 mt-6 md:mt-4 px-5 md:px-10 lg:px-20 overflow-x-clip">
      <div className="flex flex-col items-center md:items-start md:self-center text-center md:text-left gap-3 md:gap-5 w-full md:w-1/2">
        <img
          src={heroShapes}
          alt="Hero shapes"
          className="w-16 md:w-20 lg:w-24 self-center"
        />
        <h1 className="text-[#E3F2FD] font-semibold text-base md:text-lg links">
          OFFER FOR INDIVIDUAL
        </h1>
        <p className="text-white font-semibold text-4xl sm:text-5xl lg:text-6xl hero-title">
          We Create Great
          <br /> & Better Solutions
        </p>
        <p className="text-[#E3F2FD] font-normal text-sm md:text-base max-w-md links">
          The sense of advertising changes every day, so don't wait and check
          what our agency can offer your company now!
        </p>
        <button className="text-[#212121] text-base md:text-lg links font-semibold border-2 rounded-lg py-3 px-10 md:px-14 w-fit bg-white hover:bg-[#212121] hover:text-white border-transparent transition-all duration-300 cursor-pointer">
          Read more
        </button>
      </div>

      <div className="relative z-20 w-full md:w-1/2 flex justify-end items-end md:absolute bottom-10 md:bottom-0 md:right-0 pointer-events-none">
        <img
          src={heroBg}
          alt="Hero background"
          className="float-zigzag absolute z-0 bottom-0 right-0 w-[150%] md:w-[150%] max-w-none"
        />
        <img
          src={heroImg}
          alt="Hero image"
          className="float-up relative z-10 block w-3/4 sm:w-2/3 md:w-full max-w-md"
        />
      </div>
    </div>
  );
}

export default HeroBody;