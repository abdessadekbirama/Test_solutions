import checkIcon from "../assets/check-icon.svg";
import img2 from "../assets/img2.svg";

function FeaturesSection() {
  const steps = [
    "The only and unique style",
    "Modern technologies",
    "Proprietary solutions for companies",
    "Professional approach to individual projects",
    "Innovative portfolio",
    "Exellent opinion on the internet",
    "Access to huge photo collections",
  ];

  return (
    <div className="mt-16 md:mt-24 mx-auto max-w-6xl flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-8 px-5 md:px-10">
      {/* left column */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-6 w-full lg:w-2/5 lg:self-center">
        <h3 className="text-[#3D5AFE] links font-semibold text-base md:text-lg">
          THE FEATURES
        </h3>
        <h1 className="text-[#212121] hero-title font-semibold text-3xl sm:text-4xl lg:text-5xl">
          That Make Our Team Stand Out
        </h1>
        <div className="flex flex-col gap-3 md:gap-4 w-fit text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-3 md:gap-4"
            >
              <img src={checkIcon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[#616161] links text-sm md:text-base">
                {step}
              </span>
            </div>
          ))}
        </div>
        <button className="text-white text-sm md:text-base links font-semibold rounded-lg py-3 px-12 md:px-14 w-fit bg-[#3D5AFE] hover:bg-[#212121] transition-all duration-300 cursor-pointer">
          Read more
        </button>
      </div>

      {/* right column */}
      <img
        src={img2}
        alt=""
        className="block w-1/2 md:w-[40%] max-w-sm sm:max-w-md lg:max-w-full"
      />
    </div>
  );
}

export default FeaturesSection;
