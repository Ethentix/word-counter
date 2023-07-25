function updateWordCounter() {
  const inputText = document.getElementById("input").value;

  const characters = inputText.length;
  document.getElementById("characters").textContent = characters;

  const words = inputText.trim().split(/\s+/).filter(Boolean).length;
  document.getElementById("words").textContent = words;

  const sentences = inputText.split(/[.!?]/).filter(Boolean).length;
  document.getElementById("sentences").textContent = sentences;

  const paragraphs = inputText.split(/\n\s*\n/).filter(Boolean).length;
  document.getElementById("paragraphs").textContent = paragraphs;

  const spaces = inputText.split(" ").length - 1;
  document.getElementById("spaces").textContent = spaces;

  const letters = inputText.replace(/[^a-zA-Z]/g, "").length;
  document.getElementById("letters").textContent = letters;

  const digits = inputText.replace(/[^0-9]/g, "").length;
  document.getElementById("digits").textContent = digits;

  const specialCharacters = inputText.replace(/[a-zA-Z0-9\s]/g, "").length;
  document.getElementById("specialcharacters").textContent = specialCharacters;

  const outputs = document.querySelectorAll("output");
  outputs.forEach((output) => {
    output.classList.add("highlight");
    setTimeout(() => output.classList.remove("highlight"), 300);
  });
}
function showNotification() {
  const container = document.querySelector(".container");
  container.classList.add("blur");
  document.getElementById("notification").style.display = "block";
}

window.addEventListener("load", function () {
  setTimeout(showNotification, 1000);
});

document.getElementById("close").addEventListener("click", function () {
  const container = document.querySelector(".container");
  container.classList.remove("blur");
  document.getElementById("notification").style.display = "none";
});

document.getElementById("input").addEventListener("input", updateWordCounter);
