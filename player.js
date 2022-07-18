const gridsize = 5;
const cards = [];
for (let i = 0; i < gridsize * gridsize; i++) {
  cards.push(i);
}


const shuffles = 5;
// Shuffle
for (let k = 0; k <= shuffles; k++) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = cards[j];
    cards[j] = cards[i];
    cards[i] = t;
  }
};


function label(idx) {
  let col = idx % gridsize;
  let row = Math.floor(idx / gridsize);

  return String.fromCharCode(col+65) + " " + row;
}

window.addEventListener('load', () => {
  let offset = 0;

  document.querySelectorAll('.card').forEach((c) => {
    const h = () => {
      c.innerText = label(cards[offset]);
      offset++;
    }
    c.addEventListener('click', h)
    h();
  });
});
