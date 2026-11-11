import coverImage from "../assets/logo/logo.svg";

const items = [
  {
    date: "03 Jan 2022 by Robert Daniels",
    title: "Why is it Worth Investing in New Solutions?",
    text: "Donec eget eros vel ante vehicula efficitur eu et purus. Donec ut nibh eget ex dignissim pellentesque. ",
    bg: "from-[#3D5AFE] to-[#7C8DFF]",
  },
  {
    date: "16 Dec 2021 by Sandra Owen",
    title: "Graphic Design at Home or Office in Corporate?",
    text: "Nullam aliquet, nibh quis semper posuere, turpis sem ornare leo, sit amet egestas sem ligula.",
    bg: "from-[#212121] to-[#3D5AFE]",
  },
  {
    date: "22 Nov 2020 by Robert Daniels",
    title: "Graphic Trends in The Upcoming 2023",
    text: "Aenean ut gravida dui. Sed id est quis risus bibendum ultrices. Phasellus eleifend elit eget diam finibus.",
    bg: "from-[#536DFE] to-[#B39DDB]",
  },
  {
    date: "01 May 2020 by Admin",
    title: "Designing Mobile Applications in Figma",
    text: "Integer dolor urna, porttitor tempor rhoncus non, convallis ac augue. Vivamus venenatis ex sem.",
    bg: "from-[#1A237E] to-[#3D5AFE]",
  },
];

function Blog() {
  return (
    <section id="blog" className="px-5 sm:px-10 lg:px-20 py-16 md:py-24 flex flex-col gap-2 items-center mt-10">
      {/* Heading */}
      <div className="text-center md:text-left">
        <p className="text-[#3D5AFE] font-semibold links text-sm md:text-lg tracking-wide text-center">
          FROM THE BLOG
        </p>
        <h2 className="text-[#212121] font-semibold hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3">
          Recent News
        </h2>
      </div>

      {/* Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 md:mt-12">
        {items.map((item, index) => (
          <article
            key={index}
            className="cursor-pointer group flex flex-col h-full bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Cover: same image on every card, on a brand gradient */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={coverImage}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3 py-5 sm:py-4 px-2 flex-1">
              <span className="text-[#9E9E9E] links text-xs sm:text-sm">
                {item.date}
              </span>
              <h3 className="text-[#212121] font-semibold hero-title text-lg group-hover:text-[#3D5AFE] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#616161] links text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
