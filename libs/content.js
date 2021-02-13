export function generateLinkMarkup($contentElement) {
  console.log($contentElement, '$Content');
  const headings = [...$contentElement.querySelectorAll('h2, h3')];
  const parsedHeadings = headings.map((heading) => {
    return {
      title: heading.innerText,
      depth: heading.nodeName.replace(/\D/g, ''),
      id: heading.getAttribute('id'),
    };
  });

  return parsedHeadings;
}

function updateLinks(visibleId, $links) {
  $links.map((link) => {
    let href = link.getAttribute('href');
    link.classList.remove('text-primaryBlue', 'font-semibold');
    if (href === visibleId) link.classList.add('text-primaryBlue', 'font-semibold');
  });
}

function handleObserver(entries, observer, $links) {
  entries.forEach((entry) => {
    const { target, isIntersecting, intersectionRatio } = entry;
    if (isIntersecting && intersectionRatio >= 1) {
      const visibleId = `#${target.getAttribute('id')}`;
      updateLinks(visibleId, $links);
    }
  });
}

export function createObserver($links) {
  const options = {
    rootMargin: '0px 0px -200px 0px',
    threshold: 1,
  };
  const callback = (e, o) => handleObserver(e, o, $links);
  return new IntersectionObserver(callback, options);
}

export function initializeTOC($main, $aside) {
  // Part 3
  const $headings = [...$main.querySelectorAll('h2, h3')];
  const motionQuery = window.matchMedia('(prefers-reduced-motion)');
  console.log($aside, '$aside');
  const $links = [...$aside.querySelectorAll('a')];
  const observer = createObserver($links);
  $headings.map((heading) => observer.observe(heading));
}
