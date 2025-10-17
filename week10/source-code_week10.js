// 1.
document.addEventListener("DOMContentLoaded", () => {
const savedFontSize = localStorage.getItem("fontSize");
const savedBgColor = localStorage.getItem("backgroundColor");
const savedFontColor = localStorage.getItem("fontColor");
if (savedFontSize) {
    document.body.style.fontSize = savedFontSize;
    document.getElementById("fontSize").value = savedFontSize;
}
if (savedBgColor) {
    document.body.style.backgroundColor = savedBgColor;
    document.getElementById("backgroundColor").value = savedBgColor;
    }
if (savedFontColor) {
document.body.style.color = savedFontColor;
document.getElementById("fontColor").value = savedFontColor;
}
document.getElementById("saveBtn").addEventListener("click", () => {
const fontSize = document.getElementById("fontSize").value;
const backgroundColor = document.getElementById("backgroundColor").value;
const fontColor = document.getElementById("fontColor").value;
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("backgroundColor", backgroundColor);
    localStorage.setItem("fontColor", fontColor);
document.body.style.fontSize = fontSize;
document.body.style.backgroundColor = backgroundColor;
document.body.style.color = fontColor;
});

document.getElementById("resetBtn").addEventListener("click", () => {
localStorage.removeItem("fontSize");
localStorage.removeItem("backgroundColor");
localStorage.removeItem("fontColor");
document.body.style.fontSize = "16px";
document.body.style.backgroundColor = "#ffffff";
document.body.style.color = "#000000";
document.getElementById("fontSize").value = "16px";
document.getElementById("backgroundColor").value = "#ffffff";
document.getElementById("fontColor").value = "#000000";
    });
});

// 2.
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("username");
  const message = document.getElementById("message");

  
  const username = getCookie("username");
  if (username) {
    message.textContent = `Welcome back, ${username}!`;
  }

  document.getElementById("saveBtn").addEventListener("click", () => {
    const name = input.value.trim();
    if (name) {
      const expires = new Date();
      expires.setDate(expires.getDate() + 7); // เก็บไว้ 7 วัน
      document.cookie = `username=${encodeURIComponent(name)}; expires=${expires.toUTCString()}; path=/`;
      message.textContent = `Saved! Welcome, ${name}.`;
    }
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    message.textContent = "Cleared cookie.";
  });
});

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

// 3.
document.addEventListener("DOMContentLoaded", () => {
  let count = sessionStorage.getItem("refreshCount");
  if (count === null) count = 1;
  else count++;
  sessionStorage.setItem("refreshCount", count);

  document.getElementById("count").textContent =
    `คุณรีเฟรชหน้านี้ไปแล้ว ${count} ครั้งใน session นี้`;
});

// 4.
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);

  document.getElementById("toggleTheme").addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  });
});

