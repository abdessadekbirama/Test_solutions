import aboutImg from "../assets/about.svg";
import cut from "../assets/about/cut.svg";
import Webimg from "../assets/about/img.svg";
import webDesign from "../assets/about/web-design.svg";
import webDev from "../assets/about/web-dev.svg";

function About() {
  const items = [
    {
      icon: cut,
      title: "Creative Tools",
      description:
        "We only have the latest tools made available by producers of creative products and programs.",
    },
    {
      icon: Webimg,
      title: "Image Building",
      description:
        "We only have the latest tools made available by producers of creative products and programs.",
    },
    {
      icon: webDesign,
      title: "Web Design",
      description:
        "We only have the latest tools made available by producers of creative products and programs.",
    },
    {
      icon: webDev,
      title: "Website Positioning",
      description:
        "We only have the latest tools made available by producers of creative products and programs.",
    },
  ];

  return (
    <div id="about" className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-10 md:py-20 px-5 md:px-10 lg:px-20">
      <img
        src={aboutImg}
        alt="About"
        className="w-3/4 max-w-xs sm:max-w-sm lg:w-[40%] lg:max-w-md"
      />

      <div className="flex flex-col gap-4 md:gap-6 lg:flex-1 text-center lg:text-left">
        <h3 className="text-[#3D5AFE] font-semibold text-base md:text-lg links">
          FIND OUT MORE
        </h3>
        <h1 className="text-[#212121] font-semibold text-3xl sm:text-4xl lg:text-5xl hero-title">
          About Our Agency and Why Us
        </h1>
        <p className="text-[#616161] links text-base md:text-lg">
          Thoughtful and consistent advertising on the internet of your company
          is the basis for its effective operation and success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 md:gap-3">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <h3 className="text-[#212121] font-semibold text-lg hero-title">
                {item.title}
              </h3>
              <p className="text-[#616161] links text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;