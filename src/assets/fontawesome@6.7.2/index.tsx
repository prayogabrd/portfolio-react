import React from "react";
import "./css/all.css";

interface FontAwesomeIconProps {
  icon: string;
}

const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ icon }) => {
  return <i className={icon} />;
};

export default FontAwesomeIcon;
