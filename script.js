const userInput = document.querySelector(".quantity");
const generateButton = document.querySelector(".generate-button");
const textSection = document.querySelector(".text-section");
const resetButton = document.querySelector(".reset-button");

window.addEventListener("DOMContentLoaded", () => {
    const generateWords = () => {
        const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;

        const words = loremIpsumText.split(" ");

        let allWords = words.slice(0, userInput.value).join(" ");
        let alternate = words.join(" ");

        let text = document.createElement("h2");
        text.classList.add("text");

        if (userInput.value <= words.length) {
            text.innerHTML = allWords;
            textSection.appendChild(text);
        } else {
            text.innerHTML = alternate;
            textSection.appendChild(text);
        }

        userInput.value = "";
    }


    generateButton.addEventListener("click", () => {
        generateWords();
    });


    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            if (userInput.value > 0) {
                generateWords();
            } else if (userInput.value <= 0) {
                alert("Please enter a valid number !");
            }
        }
    })

    resetButton.addEventListener("click", () => {
        textSection.innerHTML = "";
    })
})