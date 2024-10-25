import Image from "next/image";

interface SmallThemeLogoProps {
  theme?: string;
  width?:number;
  height?:number;
}

const SmallThemeLogo: React.FC<SmallThemeLogoProps> = ({ theme, width, height }) => {

    return <Image src={`/icons/smallLogo-${theme || "Default"}.svg`} alt="logo" width={width} height={height} />;;
};

export default SmallThemeLogo;