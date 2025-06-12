import React from "react";

interface BlobProps {
  wrap: string;
  innerBlobClasses: string;
}

const Blob: React.FC<BlobProps> = ({ wrap, innerBlobClasses }) => {
  return (
    <div className={`inline-block absolute opacity-30 blur-3xl ${wrap}`}>
      <div
        className={`inline-block w-full h-full bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 rounded-full animate-spin ${innerBlobClasses}`}
        style={{ animationDuration: "8s" }}
      ></div>
    </div>
  );
};

export default Blob;
