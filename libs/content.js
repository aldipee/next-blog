export function generateLinkMarkup($contentElement) {
  const headings = [...$contentElement.querySelectorAll("h2, h3")];
  const parsedHeadings = headings.map((heading) => {
    return {
      title: heading.innerText,
      depth: heading.nodeName.replace(/\D/g, ""),
      id: heading.getAttribute("id"),
    };
  });

  return parsedHeadings;
}
