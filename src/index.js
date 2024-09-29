function displayPoem(response){
    console.log("poem generated");

    new Typewriter ("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
});
}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "df73cc7f5588b777fa97d5409151t3of";
    let context =
      "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 lines poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element";
    let promp = "User instructions: Generate a French poem about ${instructionInput.value}";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> ⏳ Generating a French poem about ${instructionsInput.value}</div>`;

    console.log("generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    axios.get(apiUrl).then(displayPoem);

    }

let poemFormatElement = document.querySelector("#poemgenerator");
poemFormatElement.addEventListener("submit", generatePoem)