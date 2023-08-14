document.getElementById("submit-btn").addEventListener("click", function () {
  const textAreaElement = document.getElementById("text-area");
  const textAreaValue = textAreaElement.value;

  const container = document.getElementById("review");

  const p = document.createElement("p");
  p.innerText = textAreaValue;
  container.appendChild(p);
  textAreaElement.value = " ";
});

// Enter Button

document
  .getElementById("text-area")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const textAreaElement = document.getElementById("text-area");
      const textAreaValue = textAreaElement.value;

      const container = document.getElementById("review");

      const p = document.createElement("p");
      p.innerText = textAreaValue;
      container.appendChild(p);
      textAreaElement.value = " ";
    }
  });
