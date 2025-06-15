// src/component/Competence.tsx
import React from "react";
// Import Assets
import cnc from "../assets/img/cnc_manufacturing.jpeg";
import coding from "../assets/img/coding.webp";
import blockchain from "../assets/img/blockchain.jpeg";
import ai from "../assets/img/ai.jpeg";

interface CompetenceItemProps {
  title: string;
  description: string;
  image: string;
  textPosition: "left" | "right";
}

const CompetenceItem: React.FC<CompetenceItemProps> = ({
  title,
  description,
  image,
  textPosition,
}) => {
  const textAlignment = textPosition === "left" ? "text-left" : "text-right";
  const flexJustify = textPosition === "left" ? "justify-start" : "justify-end";

  return (
    <div
      className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden flex items-center"
      style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay Gelap/Terang Adaptif Tema */}
      <div 
        className={`absolute inset-0 bg-black/70 dark:bg-black/80`}
      ></div>

      {/* Konten Teks */}
      <div 
        className={`relative z-10 w-full flex ${flexJustify} px-6 md:px-10 lg:px-16`}
      >
        <div 
          className={`w-full md:w-3/5 lg:w-1/2 p-4 ${textAlignment} text-white`}
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-3">
            {title}
          </h3>
          <p className="text-base md:text-lg leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Competence: React.FC = () => {
  return (
    <section className="relative mt-16 text-white overflow-x-clip">
      <div className="mb-10">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 dark:text-gray-100 opacity-90">
          COMPETENCIES
        </h1>
      </div>

      {/* Competence Items */}
      <div className="h-[0.996094px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
      <div className="grid grid-cols-1">
        <CompetenceItem
          title="Manufacturing"
          description="Proficient in CNC programming and operations, skilled in precision engineering and industrial automation to produce high-quality components and optimize production workflows."
          image={cnc}
          textPosition="left"
        />

        <CompetenceItem
          title="Programming"
          description="A strong foundation in modern web development, specializing in React, TypeScript, and server-side logic with PHP and Laravel, building robust and scalable applications."
          image={coding}
          textPosition="right"
        />

        <CompetenceItem
          title="Web3"
          description="Exploring the decentralized web, with an understanding of blockchain fundamentals, smart contracts, and cryptocurrency ecosystems to engage with innovative Web3 technologies."
          image={blockchain}
          textPosition="left"
        />

        <CompetenceItem
          title="AI Prompting"
          description="Skilled in crafting effective prompts for AI models, leveraging large language models (LLMs) to generate creative content, assist in problem-solving, and automate tasks efficiently."
          image={ai}
          textPosition="right"
        />
      </div>
      <div className="h-[0.996094px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
    </section>
  );
};

export default Competence;
