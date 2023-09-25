import Head from "next/head";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Galery from "@/components/Galery";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Signature from "@/components/Signature";
import Talk from "@/components/Talk";
import Whatsapp from "@/components/Whatsapp";

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
      <main>
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
