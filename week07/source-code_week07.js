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

// 2.
const divElement = document.getElementById('exampleElement');
const divChildren = divElement.childNodes;

divChildren.forEach(child => {
  console.log('nodeName:', child.nodeName);
  console.log('nodeType:', child.nodeType);
  console.log('nodeValue:', child.nodeValue);
});

// 3.
const pElement = document.getElementById("myText");
const children = pElement.childNodes;

children.forEach(node => {
  if (node.nodeType === Node.TEXT_NODE) {
    console.log("ข้อความจาก Text Node:", node.nodeValue.trim());
  }
});

// 4.
const div = document.getElementById("example");

console.log("Element nodeType:", div.nodeType); 

// แสดง attribute ทั้งหมด
const attrs = div.attributes;
for (let attr of attrs) {
  console.log(`ชื่อแอตทริบิวต์: ${attr.name}`);
  console.log(`ค่า: ${attr.value}`);
  console.log(`nodeType: ${attr.nodeType}`); 
}
