"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import picture1 from "../../public/img/picture1.jpg";
import picture5 from "../../public/img/picture5.jpg";
import picture8 from "../../public/img/picture8.jpg";
import picture7 from "../../public/img/picture7.jpg";

export default function FancyTestimonialsSlider() {
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  const testimonials = [
    {
      img: picture1,
      quote:
        "La précision chez OZ Barbershop est sans précédent. Des sièges en cuir chaleureux aux mains magistrales du barbier, tout en fait une expérience précieuse.",
      name: "Arthur M.",
      role: "Client satisfait",
    },
    {
      img: picture5,
      quote:
        "Les mains expertes du barbier, combinées aux produits les plus adaptés et à un environnement apaisant, redéfinissent pour moi l'expérience du salon de coiffure. ",
      name: "Brandon N",
      role: "Client satisfait",
    },
    {
      img: picture8,
      quote:
        "Je n'ai jamais été déçu. L'attention portée aux détails est impeccable. Ils comprennent vraiment ce que je veux. De l’accueil chaleureux à la finition finale, tout est au top.",
      name: "Medjio T.",
      role: "Client satisfait",
    },
    {
      img: picture7,
      quote:
        "Toujours sympathique et professionnel, beaucoup de détails dans leurs coupes de cheveux! Salon de coiffure décontracté et chic. Je n'irais nulle part ailleurs, vous vous sentez très bien accueilli.",
      name: "Georges B.",
      role: "Client satisfait",
    },
  ];

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-gold before:via-gray-500/5 before:via-25% before:to-gray-500/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <Image
                  className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                  src={testimonial.img}
                  width={76}
                  height={76}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className=" font-inter text-2xl font-medium text-white before:content-['\201C'] after:content-['\201D']">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
              active === index
                ? "bg-gold text-white shadow-indigo-950/10"
                : "bg-white hover:bg-light-gray hover:text-white "
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span className="font-semibold font-inter">{testimonial.name}</span>{" "}
            {/* <span
              className={`${
                active === index ? "text-black " : "text-gold px-2 "
              }`}
            >
              -
            </span>{" "}
            <span>{testimonial.role}</span> */}
          </button>
        ))}
      </div>
    </div>
  );
}
