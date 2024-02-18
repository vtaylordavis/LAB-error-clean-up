const renderToDOM = (selector, content) => {
  const element = document.querySelector(selector);
  element.innerHTML = content;
};

export default renderToDOM;
