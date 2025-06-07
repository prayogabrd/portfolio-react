import React, { useEffect, useState } from "react";
import AnimationBackground from "../layouts/AnimationBackground";
import FontAwesomeIcon from "../assets/fontawesome@6.7.2";
import reactLogo from "/react.svg";
import viteLogo from "../assets/vector/vite.svg";
import tsLogo from "../assets/vector/typescript.svg";
import tailwindLogo from "../assets/vector/tailwindcss.svg";
import fontawesomeLogo from "../assets/vector/fontawesome.svg";

const Hero: React.FC = () => {
  const fullText = "I'm PrayogaBRd";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen text-black dark:text-white transition-cinematic overflow-x-clip">
      <AnimationBackground />
      <div className="relative">
        <div className="pt-48">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-2">
              {typed}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-purple-300 font-light">
              react dev & web3 explorer
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 md:gap-6 mt-10">
          <a
            className="px-3 py-2 bg-gray-800 text-purple-50 dark:bg-purple-50 dark:text-gray-900 active:bg-purple-600 active:dark:bg-purple-600 active:dark:text-white transition rounded-md"
            href="https://github.com/prayogabrd"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-github fa-xl" />
          </a>
          <a
            className="px-3 py-2 bg-gray-800 text-purple-50 dark:bg-purple-50 dark:text-gray-900 active:bg-purple-600 active:dark:bg-purple-600 active:dark:text-white transition rounded-md"
            href="https://www.tiktok.com/@prayogabrd"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-tiktok fa-xl" />
          </a>
          <a
            className="px-3 py-2 bg-gray-800 text-purple-50 dark:bg-purple-50 dark:text-gray-900 active:bg-purple-600 active:dark:bg-purple-600 active:dark:text-white transition rounded-md"
            href="https://www.instagram.com/prayogabrd"
            target="_blank"
          >
            <FontAwesomeIcon icon="fa-brands fa-instagram fa-xl" />
          </a>
        </div>
        <div className="mt-24 text-center opacity-25 fa-bounce">
          <span className="block font-light text-sm">Swipe Up</span>
          <span className="block">
            <FontAwesomeIcon icon="fa-solid fa-sort-down fa-xl" />
          </span>
        </div>
        <div className="relative h-72 mt-36">
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-600 opacity-30"></div>
          <div className="relative h-full p-10">
            <h3 className="absolute inline-block text-6xl roboto-semibold opacity-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:top-0 md:left-0 md:translate-x-0 md:translate-y-0 whitespace-nowrap md:pt-10 md:pl-10 transition-cinematic">
              Made with:
            </h3>
            <div className="flex flex-wrap h-full justify-evenly items-center gap-x-6 gap-y-4">
              <div className="inline-block h-20 aspect-square flex items-center justify-center">
                <img
                  src={reactLogo}
                  alt="React"
                  className="w-full grayscale hover:grayscale-0 transition-cinematic max-w-[4rem] md:max-w-[100%]"
                />
              </div>
              <div className="inline-block h-20 aspect-square flex items-center justify-center">
                <img
                  src={viteLogo}
                  alt="Vite"
                  className="w-full grayscale hover:grayscale-0 transition-cinematic max-w-[4rem] md:max-w-[100%]"
                />
              </div>
              <div className="inline-block h-20 aspect-square flex items-center justify-center">
                <img
                  src={tsLogo}
                  alt="TypeScript"
                  className="w-full grayscale hover:grayscale-0 transition-cinematic max-w-[4rem] md:max-w-[100%]"
                />
              </div>
              <div className="inline-block h-20 aspect-square flex items-center justify-center">
                <img
                  src={tailwindLogo}
                  alt="TailwindCSS"
                  className="w-full grayscale hover:grayscale-0 transition-cinematic max-w-[4rem] md:max-w-[100%]"
                />
              </div>
              <div className="inline-block h-20 aspect-square flex items-center justify-center">
                <img
                  src={fontawesomeLogo}
                  alt="Font Awesome"
                  className="w-full grayscale hover:grayscale-0 transition-cinematic max-w-[4rem] md:max-w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
