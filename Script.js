const containerCards = document.querySelector('.container-cards');
let isDown = false;
let startX;
let scrollLeft;

containerCards.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - containerCards.offsetLeft;
  scrollLeft = containerCards.scrollLeft;
});

containerCards.addEventListener('mouseup', () => {
  isDown = false;

  // Desativa os links
  containerCards.classList.add("disabled");

  // Reativa após 10s
  setTimeout(() => {
    containerCards.classList.remove("disabled");
  }, 10000);
});

containerCards.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - containerCards.offsetLeft;
  const walk = (x - startX) * 2;
  containerCards.scrollLeft = scrollLeft - walk;
});
