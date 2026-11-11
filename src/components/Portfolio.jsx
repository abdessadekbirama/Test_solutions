function Portfolio() {
  const boxes = [
    {},
    { title: "Awesome Design Bag", category: "Branding" },
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  const isLight = (index, columns) =>
    (Math.floor(index / columns) + (index % columns)) % 2 === 0;

  return (
    <div id="portfolio" className="pt-16 md:pt-24 bg-[#F5F5F5] flex flex-col gap-8 md:gap-12">
      <div className="flex flex-col items-center gap-4 md:gap-8 w-full max-w-3xl mx-auto px-5 text-center">
        <h3 className="text-[#3D5AFE] links font-semibold text-base md:text-lg">
          OUR PORTFOLIO
        </h3>
        <h1 className="text-[#212121] hero-title font-semibold text-4xl sm:text-5xl lg:text-7xl">
          Latest Best Projects
        </h1>
        <p className="text-[#616161] links text-sm md:text-lg">
          Check out our latest projects and see for yourself if you are ready to
          cooperate with our creative agency! Choose a good choice and trust our
          designers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {boxes.map((box, index) => (
          // height 0 + paddingBottom 100% always makes a square, whatever the width
          <div
            key={index}
            className={`${
              isLight(index, 2) ? "bg-[#D9D9D9]" : "bg-[#CDCDCD]"
            } ${isLight(index, 4) ? "md:bg-[#D9D9D9]" : "md:bg-[#CDCDCD]"}`}
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingBottom: "100%",
            }}
          >
            {box.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-white flex flex-col items-center justify-center gap-1 md:gap-2 px-2 py-3 md:py-8 text-center">
                <h3 className="text-[#212121] hero-title font-semibold text-sm sm:text-base lg:text-xl">
                  {box.title}
                </h3>
                <span className="text-[#3D5AFE] links text-xs sm:text-sm lg:text-lg">
                  {box.category}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Portfolio;
