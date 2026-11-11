function Solutions() {
  return (
    <div className="mt-16 lg:mt-30 relative">
      <div
        className="absolute inset-x-0 top-1/5 bottom-1/5 flex"
        aria-hidden="true"
      >
        <div className="bg-[#3D5AFE] w-1/3"></div>
        <div className="bg-[#D9D9D9] w-2/3"></div>
      </div>

      <div className="relative px-5 sm:px-10 lg:px-0">
        <div className="bg-[#F5F5F5] w-full lg:w-1/2 lg:ml-[15%] p-6 sm:p-10 lg:p-20 flex flex-col gap-4 md:gap-6">
          <h2 className="text-[#3D5AFE] links font-semibold text-base md:text-lg">
            BEST SOLUTIONS
          </h2>
          <h1 className="text-[#212121] hero-title font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
            Only The Latest Technologies
          </h1>
          <div>
            <p className="text-[#616161] links text-sm md:text-base">
              We often get people who have been looking forward to the initial
              design of a website that they have ordered from another company
              for six months. For us, such situations are unacceptable.
            </p>
            <br />
            <p className="text-[#616161] links text-sm md:text-base">
              We know how much a company can gain from a good website, and at
              the same time how much it can lose when its website is not working
              properly.
            </p>
          </div>
          <button className="text-white mt-4 links font-semibold text-sm md:text-lg bg-[#3D5AFE] rounded-lg cursor-pointer w-fit px-16 py-3 hover:bg-[#212121] transition-all duration-300 ">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
export default Solutions;
