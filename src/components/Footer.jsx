import twitterLogo from "../assets/footer/twitter.svg";
import facebookLogo from "../assets/footer/facebook.svg";
import instLogo from "../assets/footer/instagram.svg";
import linkedinLogo from "../assets/footer/linkedin.svg";

function Footer() {
  return (
    <div id="contact" className="bg-[#3D5AFE] flex flex-col md:flex-row gap-5 md:gap-0 items-center py-7 justify-evenly ">
      <h1 className="text-white links  ">Urho Creative Studio</h1>
      <h1 className="text-white logo text-3xl ">urho.</h1>
      <nav className="flex flex-row gap-3">
        <img src={twitterLogo} className="cursor-pointer w-6" alt="" />
        <img src={facebookLogo} className="cursor-pointer w-6" alt="" />
        <img src={instLogo} className="cursor-pointer w-6" alt="" />
        <img src={linkedinLogo} className="cursor-pointer w-6" alt="" />
      </nav>
    </div>
  );
}

export default Footer;
