function generatePoem(event){
    event.preventDefault();

    new Typewriter ("#poem", {
        strings: "La tombe dit à la rose",
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let poemFormatElement = document.querySelector("#poemgenerator");
poemFormatElement.addEventListener("submit", generatePoem)