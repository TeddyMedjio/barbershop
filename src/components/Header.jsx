import Link from "next/link";
import arrow from "../../public/arrow.svg";
import Image from "next/image";
import Whatsapp from "../../public/whatsapp.svg";
import time from "../../public/time.svg";
import location from "../../public/location.svg";

const Header = () => {
  return (
    <div className="relative h-screen mx-auto bg-light-gray">
      <div className="arrow bottom-20 p-5 rounded-full opacity-80 z-50 absolute top-1/2 md:top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
        <Link rel="stylesheet" href="#about">
          <Image
            src={arrow}
            height={45}
            alt="icon arrow"
            className="animate-bounce hidden md:block"
          />
        </Link>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover h-full w-full"
        poster="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1695504054/yvbrpfixmrretz8n0elq.png"
      >
        <source
          src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1695503489/gnrpk9fkqqzyn53itm3l.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1695503459/zberj4pbi6qt6nb0eick.webm"
          type="video/webm"
        />
      </video>
      <div className=" text-center absolute top-1/2 md:top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[80%]">
        <h1 className=" uppercase text-center font-heading text-5xl md:text-6xl text-white leading-[60px] md:leading-[80px]">
          <span className=" text-gold">Nos Coiffures </span>
          <br />
          Améliorent Votre Sourire.
        </h1>
        <p className="font-inter text-white mt-6 mb-20 text-xl">
          Nous serions ravis d’avoir l’opportunité d’être votre barbier de
          choix.
        </p>
        <Link
          target="_blank"
          href="/img/grille_tarifaire.pdf"
          className="text-white tracking-widest hover:bg-black font-inter font-semibold px-6 md:px-16 py-3 uppercase absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 button transition-all duration-500 ease-in-out border border-gold rounded animate-pulse"
        >
          nos tarifs
        </Link>
      </div>
      <div className="bg-black py-10 flex items-center justify-center">
        <div className="flex flex-col items-start md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-20">
          <div className="flex items-center">
            <Image src={Whatsapp} alt="icon whatsapp" />

            <div className="ml-4">
              <p className="text-white font-semibold"> +237 6 99 68 17 56</p>
              <p className="text-light-gray text-xs">Service Client</p>
            </div>
          </div>
          <div className="flex items-center ">
            <Image src={time} alt="icon time" />

            <div className="ml-4">
              <p className="text-white font-semibold"> De Mardi à Dimanche</p>
              <p className="text-light-gray text-xs">Ouvert de 10h - 18h</p>
            </div>
          </div>
          <div className="flex items-center">
            <Image src={location} alt="icon location" />

            <div className="ml-4">
              <p className="text-white font-semibold text"> Logbessou</p>
              <p className="text-light-gray text-xs">
                STATION-SERVICE PETROLEX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
