// 1.
let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)
 
let p = document.createElement("p");
p.setAttribute("format", "italic");
 
p.innerHTML = "<i>Sample Italic Text</i>";
 
let p2 = document.createElement("p");
p2.setAttribute("format", "italic");
p2.innerText = "<i>Sample Italic Text</i>";
 
let p3 = document.createElement("p");
p3.setAttribute("format", "italic");
p3.textContent = "<i>Sample Italic Text</i>";
 
el.appendChild(p);
el.appendChild(p2);
el.appendChild(p3);

