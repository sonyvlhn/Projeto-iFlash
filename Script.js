const item = document.querySelector('.container-cards');

let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;

item.addEventListener('mousedown', (e) => {
  isDown = true;
  isDragging = false;
  startX = e.pageX - item.offsetLeft;
  scrollLeft = item.scrollLeft;
  item.style.cursor = "grabbing";
});

item.addEventListener('mouseleave', () => {
  isDown = false;
  item.style.cursor = "grab";
});

item.addEventListener('mouseup', () => {
  isDown = false;
  item.style.cursor = "grab";
  setTimeout(() => (isDragging = false), 0);
});

item.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - item.offsetLeft;
  const walk = (x - startX) * 2;

  if (Math.abs(x - startX) > 5) {
    isDragging = true; 
  }

  item.scrollLeft = scrollLeft - walk;
});

item.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (isDragging) {
      e.preventDefault(); 
    }
  });
});
