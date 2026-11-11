import ipsumLogo from "../assets/logos/ipsum.svg";
import saasLogo from "../assets/logos/saas.svg";
import behanceLogo from "../assets/logos/behance.svg";
import envatoLogo from "../assets/logos/envato.svg";
import jqueryLogo from "../assets/logos/jquery.svg";

function Logos() {
  const logos = [
    { src: ipsumLogo, name: "Ipsum" },
    { src: saasLogo, name: "SaaS" },
    { src: behanceLogo, name: "Behance" },
    { src: envatoLogo, name: "Envato" },
    { src: jqueryLogo, name: "jQuery" },
  ];

  return (
    <div className="mt-12 md:mt-16 lg:mt-24  mx-5 sm:mx-10 lg:mx-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 items-center justify-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="h-8 sm:h-10 lg:h-12 w-auto max-w-full object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Logos;