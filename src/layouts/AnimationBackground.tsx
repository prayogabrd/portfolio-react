import React from "react";
import Blob from "./element/Blob";

const AnimationBackground: React.FC = () => {
  return (
    <div className="h-screen w-screen absolute top-0">
      <div className="h-1/2 overflow-clip">
        <Blob
          wrap="w-80 h-96 scale-150 lg:scale-[2.5] bottom-full left-full translate-x-[-60%] translate-y-[70%]"
          innerBlobClasses="opacity-70"
        />
      </div>
      <div className="h-1/2 overflow-x-clip">
        <Blob
          wrap="w-96 h-96 lg:scale-150 top-full right-full translate-x-[60%] translate-y-[-70%]"
          innerBlobClasses="opacity-60"
        />
      </div>
    </div>
  );
};

export default AnimationBackground;
