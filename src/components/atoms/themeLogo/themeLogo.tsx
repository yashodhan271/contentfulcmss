import React from "react";
import Image from "next/image";

interface themeLogoProps {
  theme?: string;
}

const ThemeLogo: React.FC<themeLogoProps> = ({ theme }) => {

  return <Image src={`/icons/Logo-${theme || "Default"}.svg`} alt="logo" width={100} height={100} />;;
};

export default ThemeLogo;