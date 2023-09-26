import Image from "next/image";
import picture1 from "../../public/img/picture1.jpg";
import picture2 from "../../public/img/picture2.jpg";
import picture3 from "../../public/img/picture3.jpg";
import picture4 from "../../public/img/picture4.jpg";
import picture5 from "../../public/img/picture5.jpg";
import picture6 from "../../public/img/picture6.jpg";
import picture7 from "../../public/img/picture7.jpg";
import picture8 from "../../public/img/picture8.jpg";

const Galery = () => {
  return (
    <div className="bg-black-gray relative pb-20 overflow-x-hidden">
      <div className=" absolute top-0 h-32 bg-gradient-to-b from-black-gray w-full z-50"></div>
      <div className=" absolute bottom-20 h-32 bg-gradient-to-t from-black-gray w-full z-50"></div>
      <div className="marquee__group flex items-center min-w-full -z-50">
        <Image src={picture1} alt="photo coiffure" />
        <Image src={picture2} alt="photo coiffure" />
        <Image src={picture3} alt="photo coiffure" />
        <Image src={picture4} alt="photo coiffure" />
        <Image src={picture5} alt="photo coiffure" />
        <Image src={picture6} alt="photo coiffure" />
        <Image src={picture7} alt="photo coiffure" />
        <Image src={picture8} alt="photo coiffure" />
        <Image src={picture1} alt="photo coiffure" />
        <Image src={picture2} alt="photo coiffure" />
        <Image src={picture3} alt="photo coiffure" />
        <Image src={picture4} alt="photo coiffure" />
        <Image src={picture8} alt="photo coiffure" />
        <Image src={picture1} alt="photo coiffure" />
      </div>
      <div className="marquee__grouptwo flex items-center min-w-full -z-50">
        <Image src={picture5} alt="photo coiffure" />
        <Image src={picture6} alt="photo coiffure" />
        <Image src={picture7} alt="photo coiffure" />
        <Image src={picture8} alt="photo coiffure" />
        <Image src={picture1} alt="photo coiffure" />
        <Image src={picture2} alt="photo coiffure" />
        <Image src={picture3} alt="photo coiffure" />
        <Image src={picture4} alt="photo coiffure" />
        <Image src={picture5} alt="photo coiffure" />
        <Image src={picture6} alt="photo coiffure" />
        <Image src={picture7} alt="photo coiffure" />
        <Image src={picture8} alt="photo coiffure" />
        <Image src={picture1} alt="photo coiffure" />
        <Image src={picture2} alt="photo coiffure" />
        <Image src={picture3} alt="photo coiffure" />
        <Image src={picture5} alt="photo coiffure" />
        <Image src={picture4} alt="photo coiffure" />
      </div>
    </div>
  );
};

export default Galery;
