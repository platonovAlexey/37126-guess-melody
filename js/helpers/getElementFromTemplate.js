const getElementFromTemplate = (templateString) => {
  const div = document.createElement(`div`);
  div.innerHTML = templateString;
  return div.children[0];
};

export default getElementFromTemplate;