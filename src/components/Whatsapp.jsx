import Image from "next/image";
import Link from "next/link";
import bg from "../../public/img/bg3.jpg";
import whatsapp from "../../public/img/whatsapp.png";

const Whatsapp = () => {
  return (
    <div className="w-full relative">
      <Link
        href="https://wa.me/23750019621"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1CAE09] px-7 py-4  rounded border-white border flex items-center space-x-5 drop-shadow-lg hover:px-10 transition-all duration-500 ease-in-out"
      >
        <p className="text-white uppercase font-bold text-lg">Nous écrire</p>
        <Image
          src={whatsapp}
          height={40}
          alt="logo whatsapp"
          className=" animate-pulse hidden md:block"
        />
      </Link>
      <Image
        src={bg}
        alt="background whatsapp"
        className="w-full object-cover h-[207px] "
      />
    </div>
  );
};

export default Whatsapp;
