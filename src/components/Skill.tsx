import React, { useRef } from "react";
import useRelativeMatrics from "../utils/useRelativeMatrics";
import Blob from "../layouts/element/Blob";
// Import Assets
// IT
import tsLogo from "../assets/vector/typescript.svg";
import jsLogo from "../assets/vector/javascript.svg";
import phpLogo from "../assets/vector/php.svg";
import reactLogo from "/react.svg";
import laravelLogo from "../assets/vector/laravel.svg";
import vueLogo from "../assets/vector/vue.svg";
import wpLogo from "../assets/vector/webpack.svg";
import twLogo from "../assets/vector/tailwindcss.svg";
// Finance
import btcLogo from "../assets/vector/bitcoin-btc-logo.svg";
import bnbLogo from "../assets/vector/bnb-bnb-logo.svg";
import xrpLogo from "../assets/vector/xrp-xrp-logo.svg";

// --- Sub-komponen untuk Kolom IT Skills ---
const ITSkillsColumn: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setTargetRef, metrics } = useRelativeMatrics(containerRef);

  return (
    <div className="relative min-h-full p-[0.9px]" ref={containerRef}>
      <div className="absolute top-0 bottom-0 right-0 left-0 overflow-clip rounded-sm bg-gray-900 dark:bg-fuchsia-50">
        {metrics["header"] && (
          <div
            className="absolute bg-purple-50 dark:bg-black blur-xl top-0 translate-x-[-25%] translate-y-[-50%]"
            style={{
              left: `${metrics["header"].left}px`,
              height: `calc(${metrics["header"].height}px + 4rem)`,
              width: `calc(${metrics["header"].width}px + 3rem)`
            }}
          ></div>
        )}
        {metrics["langH3"] && (
          <div
            className="absolute bg-purple-50 dark:bg-black blur-lg left-0 translate-x-[-50%] translate-y-[-25%]"
            style={{
              top: `${metrics["langH3"].top}px`,
              height: `calc(${metrics["langH3"].height}px + 3rem)`,
              width: `${metrics["langH3"].width}px`
            }}
          ></div>
        )}
        {metrics["fwH3"] && (
          <div
            className="absolute bg-purple-50 dark:bg-black blur-lg left-0 translate-x-[-50%] translate-y-[-25%]"
            style={{
              top: `${metrics["fwH3"].top}px`,
              height: `calc(${metrics["fwH3"].height}px + 3rem)`,
              width: `${metrics["fwH3"].width}px`
            }}
          ></div>
        )}
        <div className="absolute bg-purple-50 dark:bg-black blur-lg left-1/2 bottom-0 translate-x-[-30%] translate-y-[50%] w-1/2 h-10"></div>
      </div>
      <div className="relative min-h-full rounded-sm bg-purple-50 dark:bg-[#111111] py-14">
        <span
          className="absolute left-3 translate-y-[-40%] font-serif font-light top-0"
          ref={setTargetRef("header")}
        >
          Skills
        </span>
        <div className="relative">
          <h3
            className="font-serif font-light text-3xl absolute left-0 translate-x-[-10%] top-0"
            ref={setTargetRef("langH3")}
          >
            Language
          </h3>
          <div
            className="pl-5 md:pl-8"
            style={{
              paddingTop: metrics["langH3"]
                ? `calc(${metrics["langH3"].height}px + 2rem)`
                : "5rem"
            }}
          >
            <div className="flex flex-wrap items-start justify-start gap-4 md:gap-8">
              <div className="flex flex-nowrap gap-x-1 items-center">
                <img className="w-14" src={tsLogo} alt="TypeScript" />
                <div>
                  <h4 className="text-xl roboto-semibold">Type Script</h4>
                  <span>.ts</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-1 items-center">
                <img className="w-14" src={jsLogo} alt="JavaScript" />
                <div>
                  <h4 className="text-xl roboto-semibold">Java Script</h4>
                  <span>.js</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-2 items-center">
                <img className="w-14" src={phpLogo} alt="PHP" />
                <div>
                  <h4 className="text-xl roboto-semibold">PHP</h4>
                  <span>.php</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-16">
          <h3
            className="font-serif font-light text-3xl absolute left-0 top-0 max-w-[60%]"
            style={{ transform: "matrix(1, 0, 0, 1, -13.9209, 0)" }}
            ref={setTargetRef("fwH3")}
          >
            Framework and Library
          </h3>
          <div
            className="pl-5 md:pl-8"
            style={{
              paddingTop: metrics["fwH3"]
                ? `calc(${metrics["fwH3"].height}px + 2rem)`
                : "5rem"
            }}
          >
            <div className="flex flex-wrap items-start justify-start gap-4 md:gap-8">
              <div className="flex flex-nowrap gap-x-2 items-center">
                <img className="w-14" src={reactLogo} alt="React" />
                <div>
                  <h4 className="text-xl roboto-semibold">React</h4>
                  <span>react.dev</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-1 items-center">
                <img className="w-14" src={laravelLogo} alt="Laravel" />
                <div>
                  <h4 className="text-xl roboto-semibold">Laravel</h4>
                  <span>laravel.com</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-1 items-center">
                <img className="w-14" src={vueLogo} alt="Vue.js" />
                <div>
                  <h4 className="text-xl roboto-semibold">Vue.js</h4>
                  <span>vuejs.org</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-1 items-center">
                <img className="w-14" src={wpLogo} alt="Webpack" />
                <div>
                  <h4 className="text-xl roboto-semibold">Webpack</h4>
                  <span>webpack.js.org</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-1 items-center">
                <img className="w-14" src={twLogo} alt="Tailwind" />
                <div>
                  <h4 className="text-xl roboto-semibold">TailwindCSS</h4>
                  <span>tailwindcss.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-komponen untuk Kolom Finance/Portfolio ---
const FinancePortfolioColumn: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setTargetRef, metrics } = useRelativeMatrics(containerRef);

  return (
    <div className="relative min-h-full p-[0.9px]" ref={containerRef}>
      <div className="absolute top-0 bottom-0 right-0 left-0 overflow-clip rounded-sm bg-gray-900 dark:bg-fuchsia-50">
        {metrics["header"] && (
          <div
            className="absolute bg-purple-50 dark:bg-black blur-xl top-0 translate-x-[-25%] translate-y-[-50%]"
            style={{
              left: `${metrics["header"].left}px`,
              height: `calc(${metrics["header"].height}px + 4rem)`,
              width: `calc(${metrics["header"].width}px + 3rem)`
            }}
          ></div>
        )}
        {metrics["crypto"] && (
          <div
            className="absolute bg-purple-50 dark:bg-black blur-lg
            left-0 translate-x-[-50%] translate-y-[-20%]"
            style={{
              top: `${metrics["crypto"].top}px`,
              height: `calc(${metrics["crypto"].height}px + 3rem)`,
              width: `${metrics["crypto"].width}px`
            }}
          ></div>
        )}
        <div className="absolute bg-purple-50 dark:bg-black blur-lg bottom-1/2 right-0 translate-y-[80%] translate-x-[50%] h-1/2 w-10"></div>
      </div>
      <div className="relative min-h-full rounded-sm bg-purple-50 dark:bg-[#111111] py-14">
        <span
          className="absolute left-3 translate-y-[-40%] font-serif font-light top-0"
          ref={setTargetRef("header")}
        >
          Portfolio
        </span>
        <div className="relative">
          <h3
            className="font-serif font-light text-3xl absolute left-0 top-0 max-w-[60%]"
            style={{ transform: "matrix(1, 0, 0, 1, -13.9209, 0)" }}
            ref={setTargetRef("crypto")}
          >
            Liquid Digital Assets
          </h3>
          <div
            className="pl-5 md:pl-8"
            style={{
              paddingTop: metrics["crypto"]
                ? `calc(${metrics["crypto"].height}px + 2rem)`
                : "5rem"
            }}
          >
            <div className="flex flex-wrap items-start justify-start gap-4 md:gap-8">
              <div className="flex flex-nowrap gap-x-2 items-center">
                <img className="w-10" src={btcLogo} alt="Bitcoin" />
                <div>
                  <h4 className="text-xl roboto-semibold">Bitcoin</h4>
                  <span>BTC</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-2 items-center">
                <img className="w-10" src={bnbLogo} alt="Binance" />
                <div>
                  <h4 className="text-xl roboto-semibold">Binance</h4>
                  <span>BNB</span>
                </div>
              </div>
              <div className="flex flex-nowrap gap-x-2 items-center">
                <img className="w-10" src={xrpLogo} alt="XRP" />
                <div>
                  <h4 className="text-xl roboto-semibold">Ripple</h4>
                  <span>XRP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Skills Component ---
const Skills: React.FC = () => {
  return (
    <section className="relative mt-16 text-black dark:text-fuchsia-50 overflow-x-clip transition-cinematic">
      <Blob
        wrap="w-[70%] lg:w-[50%] aspect-square bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2"
        innerBlobClasses="opacity-50 blur-2xl"
      />
      <div className="mx-8 md:container md:mx-auto py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-14 lg:gap-x-20">
          <ITSkillsColumn />
          <FinancePortfolioColumn />
        </div>
      </div>
    </section>
  );
};

export default Skills;
