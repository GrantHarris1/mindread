let bigText = document.getElementById("bigText");
let smallText = document.getElementById("smallText");
let nextButton = document.getElementById("nextButton");
let resetButton = document.getElementById("resetButton");

let page = 1;

let symbol = ["!", "@", "#", "$", "%", "&", "*", "+", "~", "^"]; //create list of symbols





function changePage() {
    if (page == 1) {
        bigText.innerHTML = "I can read your mind.";
        smallText.innerHTML = "MindReader";
        actionButton.innerHTML = "GO";
        actionButton.style.display = "block";
        resetButton.innerHTML = ""; // need to hide
        resetButton.style.display = "none";
    } else if (page == 2) {
        bigText.innerHTML = "Pick a number 1-99";
        smallText.innerHTML = "When you have your number click next";
        actionButton.innerHTML = "Next";
        resetButton.innerHTML = "Reset";
        resetButton.style.display = "block";
    } else if (page == 3) {
        bigText.innerHTML =
            "Add both digits together to get a new number";
        smallText.innerHTML =
            "Ex 14 is 1 + 4 = 5 Click Next to Proceed";
        actionButton.innerHTML = "Next";
        resetButton.innerHTML = "Reset";
        resetButton.style.display = "block";
    } else if (page == 4) {
        bigText.innerHTML =
            "Subtract your new number from the original number.";
        smallText.innerHTML = "Click Next to continue";
        actionButton.innerHTML = "Next";
        resetButton.innerHTML = "Reset";
        resetButton.style.display = "block";
    } else if (page == 5) {
        bigText.innerHTML = shuffle();
        smallText.innerHTML =
            "Find your number.  Note the symbol beside your number.";
        actionButton.innerHTML = "Reveal";
        resetButton.innerHTML = "Reset";
        resetButton.style.display = "block";
    } else if (page == 6) {
        bigText.innerHTML =
            "Your symbol is...<br>" + winner;
        smallText.innerHTML = "";
        actionButton.innerHTML = "";
        actionButton.style.display = "none";
        resetButton.innerHTML = "Reset";
        resetButton.style.display = "block";
        
    }
}
