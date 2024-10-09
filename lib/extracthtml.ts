export const extractTextFromHTML = (htmlString: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const pTag = doc.querySelector("p");
  return pTag ? pTag.textContent || "" : ""; // Return the text content of the <p> tag
};
