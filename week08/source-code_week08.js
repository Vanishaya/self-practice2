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



