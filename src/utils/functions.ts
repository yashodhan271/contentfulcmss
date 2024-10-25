import themeStyles from "@/styles/themes.module.scss";

export const convertCommonTagToLabel = (str: string) => {
  if (str?.startsWith("commons")) {
    const restOfString = str.substring("commons".length);

    const spacedString = restOfString
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return spacedString + " Commons";
  }
  return str;
};

export const truncateTitle = (title: string) => {
  if (title.length <= 85) return title;
  const truncated = title.substring(0, title.substring(0, 85).lastIndexOf(' '));
  return truncated + '...';
};


export function formatCommonType(commonType: string) {
  const formattedCommonType = commonType.replace(/\s/g, "");
  const themeClass = formattedCommonType
    ? themeStyles[formattedCommonType]
    : themeStyles.Default;
  const themeClassPrimary = formattedCommonType
    ? themeStyles[`${formattedCommonType}-primary`]
    : themeStyles["Default-primary"];
  return { formattedCommonType, themeClass, themeClassPrimary };

  
}

export const italicizeText = (text: string) => {
  const highlight = text;
  const startIndex = highlight.indexOf("<i>") + 3;
  const endIndex = highlight.indexOf("</i>", startIndex);

  if (startIndex !== -1 && endIndex !== -1) {
    const beforeHighItalicText = text.slice(0, startIndex - 3);
    const italicText = highlight.slice(startIndex, endIndex);
    const afterItalicText = text.slice(endIndex + 4); 

    return `${beforeHighItalicText}<i>${italicText}</i>${afterItalicText}`;
  }

  return text;
};