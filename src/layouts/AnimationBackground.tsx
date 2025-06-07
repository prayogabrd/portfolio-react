import React from "react";

const AnimationBackground: React.FC = () => {
  return (
    <div className="h-screen w-screen absolute top-0">
      <div className="h-1/2 overflow-clip">
        <div className="inline-block w-80 h-96 scale-150 lg:scale-[2.5] absolute opacity-30 blur-3xl bottom-full left-full translate-x-[-60%] translate-y-[70%]">
          <div
            className="inline-block w-full h-full bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 rounded-full animate-spin opacity-70"
            style={{ animationDuration: "8s" }}
          ></div>
        </div>
      </div>
      <div className="h-1/2 overflow-x-clip">
        <div className="inline-block w-96 h-96 lg:scale-150 absolute opacity-30 blur-3xl top-full right-full translate-x-[60%] translate-y-[-70%]">
          <div
            className="inline-block w-full h-full bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 rounded-full animate-spin opacity-60"
            style={{ animationDuration: "8s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AnimationBackground;
