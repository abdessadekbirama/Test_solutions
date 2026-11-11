import { useState } from "react";
import HeroBody from "./HeroBody";
const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div id="home" className="bg-[#3D5AFE] min-h-screen md:max-h-screen overflow-hidden">
      {/* Hero Header */}
      <div className="flex justify-between items-center py-6 px-5 md:px-10">
        <a href="#home" className="text-white font-normal text-4xl logo">
          urho.
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-8 links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white font-semibold text-lg after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop button */}
        <button className="hidden lg:block text-white text-base font-semibold links border-2 rounded-lg py-3 px-5 hover:bg-white cursor-pointer hover:text-[#3D5AFE] transition-all duration-300 hover:border-white">
          Get a quote
        </button>

        {/* Hamburger icon (turns into an X) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col justify-between w-7 h-5 cursor-pointer"
        >
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ${
              open ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-5 pb-6 md:px-10 links items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="relative w-fit text-white font-semibold text-lg after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <button className="text-white text-base font-semibold border-2 rounded-lg py-3 px-5 w-fit hover:bg-white hover:text-[#3D5AFE] hover:border-white transition-all duration-300 cursor-pointer">
            Get a quote
          </button>
        </nav>
      </div>

      <HeroBody />
    </div>
  );
}

export default Hero;
