let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("total-count");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function decrement() {
  count -= 1;
  countEl.innerText = count;
}

function saveCount() {
  let saved = " " + count + ", ";
  saveEl.textContent += saved;
  countEl.textContent = 0;
  count = 0;
}

function resetEverything() {
  document.getElementById("total-count").textContent = "Previous Entries:";
  countEl.textContent = 0;
  count = 0;
}
