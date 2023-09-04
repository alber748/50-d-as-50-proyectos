let cards;

(() => {
  cards = document.querySelectorAll(".panel");

  cards.forEach((panel) => {
    panel.addEventListener("click", (event) => {
      setActive(event.target);
    });
  });
  
})();

/**
 * 
 * @param {HTMLDivElement} panel 
 */
const setActive = (panel) => {
  cards.forEach((panel) => {
    panel.classList.remove("active");
  });

  panel.classList.add("active");
};
