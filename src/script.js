function displayPoem(response) {
  new Typewriter("#generated-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 35,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "ba054cd6f15a15c42o3b84c5df16bbtf";
  let context = `User input: Generate a poem using ${userInput.value}`;
  let prompt =
    "You are a cleaver and professional poem writer. Your mission is to create a short poem in basic HTML based on the user input. Each line separated with a <br/>. Do not include a title or a heading. After the poem, always sign <br/> 'SheCodes AI' always inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
  let poemElement = document.querySelector("#generated-poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating your '${userInput.value}' poem...`;
}

let poemFormElement = document.querySelector("#poem-form-input");
poemFormElement.addEventListener("submit", generatePoem);
