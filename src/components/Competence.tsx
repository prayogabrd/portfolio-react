import React from "react";
import cnc from "../assets/img/cnc_manufacturing.jpeg";
import coding from "../assets/img/coding.webp";
import blockchain from "../assets/img/blockchain.jpeg";
import ai from "../assets/img/ai.jpeg";

const Competence: React.FC = () => {
  return (
    <section className="relative text-black dark:text-white overflow-x-clip transition-cinematic">
      <div className="mt-16 mb-10">
        <h1 className="text-center text-5xl roboto-semibold opacity-20 mb-10">
          Competence
        </h1>
        {(
          <div className="relative bg-[#47464E]">
            <div
              className="inline-block w-3/5 absolute top-0 bottom-0 right-0 bg-no-repeat bg-cover bg-left"
              style={{ backgroundImage: `url("${cnc}")` }}
            ></div>
            <div className="relative flex bg-gradient-to-l from-[#ffffff40] dark:from-[#000000c4] via-[#ffffffe6] dark:via-[#000000ed] to-[#ffffff] dark:to-[#000000] transition-cinematic">
              <div className="container my-3 ml-3 md:my-10 md:mx-auto">
                <div className="flex min-h-[10rem] md:min-h-[15rem] items-center justify-start">
                  <div className="w-3/5 md:w-1/2 text-start text-gray-700 dark:text-gray-300">
                    <h3 className="text-3xl roboto-semibold mb-2">Manufacturing</h3>
                    <p className="font-sans text-xl">
                      esse labore commodo ut in eu est et ullamco minim nisi consequat id excepteur ullamco magna consectetur aliqua fugiat velit non pariatur Lorem deserunt tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {(
          <div className="relative bg-[#0E0E0E]">
            <div
              className="inline-block w-3/5 absolute top-0 bottom-0 left-0 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url("${coding}")` }}
            ></div>
            <div className="relative flex bg-gradient-to-r from-[#ffffff40] dark:from-[#000000ba] via-[#ffffffe6] dark:via-[#000000df] to-[#ffffff] dark:to-[#000000] transition-cinematic">
              <div className="container my-3 mr-3 md:my-10 md:mx-auto">
                <div className="flex min-h-[10rem] md:min-h-[15rem] items-center justify-end">
                  <div className="w-3/5 md:w-1/2 text-end text-gray-700 dark:text-gray-300">
                    <h3 className="text-3xl roboto-semibold mb-2">Programming</h3>
                    <p className="font-sans text-xl">
                      esse labore commodo ut in eu est et ullamco minim nisi consequat id excepteur ullamco magna consectetur aliqua fugiat velit non pariatur Lorem deserunt tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {(
          <div className="relative bg-[#000D1A]">
            <div
              className="inline-block w-3/5 absolute top-0 bottom-0 right-0 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url("${blockchain}")` }}
            ></div>
            <div className="relative flex bg-gradient-to-l from-[#ffffff40] dark:from-[#000000be] via-[#ffffffe6] dark:via-[#000000ed] to-[#ffffff] dark:to-[#000000] transition-cinematic">
              <div className="container my-3 ml-3 md:my-10 md:mx-auto">
                <div className="flex min-h-[10rem] md:min-h-[15rem] items-center justify-start">
                  <div className="w-3/5 md:w-1/2 text-start text-gray-700 dark:text-gray-300">
                    <h3 className="text-3xl roboto-semibold mb-2">Web3</h3>
                    <p className="font-sans text-xl">
                      esse labore commodo ut in eu est et ullamco minim nisi consequat id excepteur ullamco magna consectetur aliqua fugiat velit non pariatur Lorem deserunt tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {(
          <div className="relative bg-[#162F57]">
            <div
              className="inline-block w-3/5 absolute top-0 bottom-0 left-0 bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url("${ai}")` }}
            ></div>
            <div className="relative flex bg-gradient-to-r from-[#ffffff40] dark:from-[#000000b8] via-[#ffffffe6] dark:via-[#000000ed] to-[#ffffff] dark:to-[#000000] transition-cinematic">
              <div className="container my-3 mr-3 md:my-10 md:mx-auto">
                <div className="flex min-h-[10rem] md:min-h-[15rem] items-center justify-end">
                  <div className="w-3/5 md:w-1/2 text-end text-gray-700 dark:text-gray-300">
                    <h3 className="text-3xl roboto-semibold mb-2">AI Prompting</h3>
                    <p className="font-sans text-xl">
                      esse labore commodo ut in eu est et ullamco minim nisi consequat id excepteur ullamco magna consectetur aliqua fugiat velit non pariatur Lorem deserunt tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Competence;
