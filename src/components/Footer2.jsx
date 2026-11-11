import HomeIcon from "../assets/footer/home.svg";
import mailIcon from "../assets/footer/mail.svg";
import phoneIcon from "../assets/footer/phone.svg";
import arrowIcon from "../assets/footer/arrow.svg";
import arrowsIcon from "../assets/footer/arrows.svg";

const navigation = [
  "Home",
  "About",
  "Portfolio",
  "Blog",
  "Services",
  "Contact",
];
const links = [
  "Our portfolio on Dribbble",
  "Free graphic materials",
  "Additional design elements",
  "Fact from the world of design",
  "Copyright and information",
];

// Turns "Our portfolio on Dribbble" into "our-portfolio-on-dribbble"
const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

// Defined outside Footer2 so it isn't re-created on every render
const LinkItem = ({ href, value }) => (
  <a
    href={"#" + slugify(href)}
    className="group flex items-center gap-1 py-1 text-sm text-[#9E9E9E] links
               transition-all duration-200 hover:text-white hover:translate-x-1"
  >
    {/* Both icons share the same box; we just swap which one is visible */}
    <span className="relative w-5 h-5 shrink-0">
      <img
        src={arrowIcon}
        alt=""
        className="absolute inset-0 w-5 h-5 transition-opacity duration-200 group-hover:opacity-0"
      />
      <img
        src={arrowsIcon}
        alt=""
        className="absolute inset-0 w-5 h-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />
    </span>
    <span>{value}</span>
  </a>
);

// Shared wrapper: every column is the same width cap and is centred in its grid cell
const Column = ({ title, children }) => (
  <div className="flex w-full max-w-sm flex-col gap-3 justify-self-center">
    <h2 className="text-white hero-title font-semibold">{title}</h2>
    {children}
  </div>
);

function Footer2() {
  return (
    <footer className="bg-[#212121] pt-12 pb-10 md:pt-20">
      {/*
        1 column  : phones
        2 columns : tablets / small laptops
        4 columns : wide screens (xl and up) -> all boxes in one row
      */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 md:grid-cols-2 md:gap-x-12 xl:grid-cols-4 xl:gap-x-8">
        {/* About */}
        <Column title="About Our Agency">
          <p className="text-[#9E9E9E] links text-sm">
            Together with our clients, we still want to look for new places for
            a positive message, the effect of which is Urho Creative Studio –
            the juicy and tempting freshness of your brand, in which customers
            will taste.
          </p>
          <button className="text-white font-semibold links text-sm cursor-pointer w-fit">
            Read more
          </button>
        </Column>

        {/* Contact */}
        <Column title="Contact Info">
          <div className="flex gap-2 items-start">
            <img src={HomeIcon} alt="" className="w-6 shrink-0" />
            <p className="text-[#9E9E9E] links text-sm break-words">
              1244 Mission College Blvd Santa Clara, CA 95188 United States
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <img src={mailIcon} alt="" className="w-6 shrink-0" />
            <p className="text-[#9E9E9E] links text-sm break-all">
              office@urhocreative.com
              <br /> info@urhocreative.com
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <img src={phoneIcon} alt="" className="w-6 shrink-0" />
            <p className="text-[#9E9E9E] links text-sm">
              +1 408-888-1700 <br /> +1 408-888-1900
            </p>
          </div>
        </Column>

        {/* Navigation */}
        <Column title="Navigation">
          <nav className="flex flex-col">
            {navigation.map((link) => (
              <LinkItem key={link} href={link} value={link} />
            ))}
          </nav>
        </Column>

        {/* Useful links */}
        <Column title="Useful Links">
          <nav className="flex flex-col">
            {links.map((link) => (
              <LinkItem key={link} href={link} value={link} />
            ))}
          </nav>
        </Column>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-14 max-w-7xl px-6 sm:px-8 md:mt-20">
        <div className="h-px w-full bg-[#9E9E9E]/60"></div>
      </div>

      <div className="mt-8 mb-2 px-6 text-center text-sm text-[#9E9E9E]">
        © 2022 • Urho • Creative Studio Template
      </div>
    </footer>
  );
}

export default Footer2;