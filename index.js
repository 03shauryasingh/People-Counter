let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("total-count");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log("Button inc clicked");
}

function decrement() {
  count -= 1;
  countEl.innerText = count;
  console.log("Button dec clicked");
}

function saveCount() {
  let saved = " " + count + " - ";
  saveEl.textContent += saved;
  console.log(count);
}
