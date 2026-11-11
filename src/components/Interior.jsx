import InteriorImg from "../assets/interior.svg";
import winIcon from "../assets/icons/win.svg";
import growthIcon from "../assets/icons/growth.svg";
import cloudIcon from "../assets/icons/cloud.svg";

function Interior() {
  const items = [
    {
      title: "Wins and Prizes",
      icon: winIcon,
      text: "Over the years, we have won prizes and awards in the field of graphic design and website positioning.",
    },
    {
      title: "Visitor Growth",
      icon: growthIcon,
      text: "Our proprietary system will provide you and your website more visitors, which will improve product sales.",
    },
    {
      title: "Data Storage",
      icon: cloudIcon,
      text: "We provide effective storage of all data that will be necessary to create your new brand or redesign the current.",
    },
  ];
  return (
    <div className="pt-10 md:pt-14 pb-10">
      <button className="text-white mb-12 md:mb-20 lg:mb-30 mx-auto block links font-semibold text-sm md:text-base bg-[#212121] py-3 px-10 md:py-4 md:px-16 rounded-lg w-fit cursor-pointer hover:text-white hover:bg-[#3D5AFE] transition-all duration-300">
        View more
      </button>

      <div id="services" className="flex flex-col lg:flex-row gap-10 lg:gap-20 mx-5 sm:mx-10 lg:mx-20 items-center">
        <img
          src={InteriorImg}
          alt="Our agency interior"
          className="w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-1/2 h-auto lg:h-[90vh] object-contain"
        />

        <div className="flex flex-col gap-6 md:gap-10 text-center lg:text-left items-center lg:items-start">
          <h2 className="text-[#3D5AFE] links font-semibold">OUR INTERIOR</h2>
          <h1 className="text-[#212121] hero-title font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
            Get to Know Our Agency Even Closer
          </h1>
          <div>
            <p className="text-[#616161] links text-sm md:text-base">
              Our agency creates something more than websites. We build websites
              whose main task is to generate leads. We treat their business
              aspect as a priority when designing new websites.
            </p>
            <br />
            <p className="text-[#616161] links text-sm md:text-base">
              We have already completed over 400 designs of websites and online
              stores. This is the number that allowed us not only to gain vast
              experience in the design and coding of websites and mobile
              applications.
            </p>
          </div>
          <button className="text-white block links font-semibold text-sm md:text-base bg-[#3D5AFE] py-3 px-10 md:py-4 md:px-16 rounded-lg w-fit cursor-pointer hover:text-white hover:bg-[#212121] transition-all duration-300">
            Read more
          </button>
        </div>
      </div>

      <div className="h-px mx-5 sm:mx-10 lg:mx-20 bg-[#E0E0E0] mt-12 md:mt-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mx-5 sm:mx-10 lg:mx-20 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 md:gap-6 items-start"
          >
            <img
              src={item.icon}
              alt=""
              className="w-12 md:w-16 shrink-0"
            />
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="text-[#212121] hero-title font-semibold text-base md:text-lg">
                {item.title}
              </h3>
              <p className="text-[#616161] links text-xs md:text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interior;