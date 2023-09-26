import ScrollToTop from "react-scroll-to-top";
import Image from "next/image";
import Head from "next/head";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Galery from "@/components/Galery";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Signature from "@/components/Signature";
import Talk from "@/components/Talk";
import Whatsapp from "@/components/Whatsapp";
// import arrow from "../../public/arrow.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>OZ Barbershop</title>
        <meta name="description" content="Salon de coiffure" />
        <meta
          name="keywords"
          content="Meilleur salon de coiffure de la ville de Douala"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative z-[2]">
        <ScrollToTop
          smooth
          className=" hidden md:flex items-center justify-center"
        >
          <svg
            width="47"
            height="52"
            viewBox="0 0 47 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 27.3729L23.5 48.264L44 27.3729M23.5 45.3624L23.5 3"
              stroke="#ffff"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ScrollToTop>
        {/* <button
          onClick={scrollToTop}
          className="absolute bottom-0 left-8 text-white bg-black z-10 rotate-180 p-5 rounded-full animate-pulse mt-[150vh]"
        >
          <Image src={arrow} height={30} />
        </button> */}
        <Navbar />
        <Header />
        <About />
        <Galery />
        <Talk />
        <Whatsapp />
        <Footer />
        <Signature />
      </main>
    </>
  );
}
