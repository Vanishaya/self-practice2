// 1.
const box = document.getElementById("box")
const button = document.querySelectorAll("button")
button.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.dataset.color;
    box.style.backgroundColor = color;
    box.textContent = color.toUpperCase();
  });
});

// 2.
const addButton = document.getElementById("add")
addButton.addEventListener("click",()=>{
    const box = document.getElementById("box");
    box.classList.add("bordered");
})
 
const removeButton = document.getElementById("remove")
removeButton.addEventListener("click",()=>{
    const box = document.getElementById("box");
    box.classList.remove("bordered");
})
 
const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
    const box = document.getElementById("box");
    box.classList.toggle("bordered");
});

// 3.
const menu = document.getElementById("menu");

const first = menu.firstElementChild;
const last = menu.lastElementChild;
const nextOfFirst = first.nextElementSibling;

console.log("firstElementChild:", first.textContent);
console.log("lastElementChild:", last.textContent);
console.log("nextElementSibling ของ first:", nextOfFirst.textContent);

// 4.
const byId = document.getElementById("title");
const byClass = document.getElementsByClassName("topic");
const byTag = document.getElementsByTagName("li");
const byQuery = document.querySelector(".list li");
const byQueryAll = document.querySelectorAll(".list li");

console.log("getElementById:", byId.textContent);
console.log("getElementsByClassName:", byClass.length, "รายการ");
console.log("getElementsByTagName:", byTag.length, "รายการ");
console.log("querySelector:", byQuery.textContent);
console.log("querySelectorAll:", byQueryAll.length, "รายการ");

// 5.
const list = document.getElementById("langList");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `New Item ${list.children.length + 1}`;
  list.appendChild(newItem);
});

removeBtn.addEventListener("click", () => {
  const lastItem = list.lastElementChild;
  if (lastItem) list.removeChild(lastItem);
});



