function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#generated-poem", {
    strings:
      "Roses are red, Violets are blue, please give me time, to think of a real poem for you...",
    autoStart: true,
    delay: 35,
    curosr: null,
  });
}

let poemFormElement = document.querySelector("#poem-form-input");
poemFormElement.addEventListener("submit", generatePoem);
