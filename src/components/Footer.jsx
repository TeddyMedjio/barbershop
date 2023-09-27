import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <div id="contact" className="bg-[#0C0C0C]">
      <div className="mx-auto w-full max-w-7xl py-20 px-5 md:px-10 lg:px-0">
        <div className="flex flex-wrap items-center justify-center lg:justify-between space-y-10 lg:space-y-0">
          <Image src={logo} height={183} width={301} alt="logo oz barbershop" />
          <div className="space-y-10">
            <p className="text-white text-lg text-center md:text-start space-y-1">
              <span className="font-bold text-xl ">OZ coiffure SARL</span>{" "}
              <br /> BP 1590 Douala <br />{" "}
              <span className="text-gold"> Mail: </span>
              ozbarbershop237@gmail.com <br />
              <span className="text-gold">Tél: </span> 6 56 66 01 03 / / 6 50 01
              96 21
            </p>
            <div>
              <Link
                href="#"
                className="text-white border border-gold hover:border-white hover:bg-[#3b5998] transition-all duration-700 ease-in-out px-5 py-1"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-white border border-gold hover:border-white hover:bg-gradient-to-br from-[#515BD4] via-[#8134AF] to-[#FEDA77] transition-all duration-700 ease-in-out px-5 py-1 ml-4"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-white border border-gold hover:bg-gold transition-all duration-700 ease-in-out px-5 py-1 ml-4"
              >
                Tiktok
              </Link>
            </div>
          </div>
          <div className="block md:hidden lg:block w-full lg:max-w-[208px]">
            <div className="text-white flex items-center justify-between border-[#7C7C7C] border-b-[0.5px] py-1 mb-1">
              <p className="font-semibold">Lundi</p>
              <p className="font-semibold">Fermé</p>
            </div>
            <div className="text-white flex items-center justify-between border-[#7C7C7C] border-b-[0.5px] py-1 mb-1">
              <p className="font-semibold">Mardi</p>
              <p className="font-semibold">08h - 20h30</p>
            </div>
            <div className="text-white flex items-center justify-between border-[#7C7C7C] border-b-[0.5px] py-1 mb-1">
              <p className="font-semibold">Mercredi</p>
              <p className="font-semibold">08h - 20h30</p>
            </div>
            <div className="text-white flex items-center justify-between border-[#7C7C7C] border-b-[0.5px] py-1 mb-1">
              <p className="font-semibold">Jeudi</p>
              <p className="font-semibold">08h - 20h30</p>
            </div>
            <div className="text-white flex items-center justify-between border-[#7C7C7C] border-b-[0.5px] py-1 mb-1">
              <p className="font-semibold">Vendredi</p>
              <p className="font-semibold">08h - 20h30</p>
            </div>
            <div className="text-white flex items-center justify-between border-[#7C7C7C] border-b-[0.5px] py-1 mb-1">
              <p className="font-semibold">Samedi</p>
              <p className="font-semibold">08h - 20h30</p>
            </div>
            <div className="text-white flex items-center justify-between">
              <p className="font-semibold">Dimanche</p>
              <p className="font-semibold">08h - 20h30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
