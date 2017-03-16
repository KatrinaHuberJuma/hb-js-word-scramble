var WORDS = ["booger", "apple", "hackbright", "mango"];
// var SCRAMBLED = ["oogreb", "papel", "backrhight", "goman"];

var playing = true;

while (playing) {

    // Grab a random word from the WORDS array.
    var randomIndex = Math.floor(Math.random() * WORDS.length);
    var realWord = WORDS[randomIndex]
    // // Grab the corresponding scrambled word from the SCRAMBLED array.
    // var scambledWord = SCRAMBLED[randomIndex];
    // console.log(scambledWord)

    var splitWord = realWord.split("");

    for (var i=0; i<splitWord.length; i++) {
        var letter = splitWord.pop();
        splitWord.splice(Math.floor(Math.random() * splitWord.length), 0, letter);
        console.log(splitWord);
    }

    var scambledWord = splitWord.join("");

    // Prompt the user to guess the original word when given the scrambled word.
    var guess = prompt("What is this scrambled word?\n"
                       + scambledWord).toLowerCase().replace(/\s/g, '');

    // If the user guesses wrong, tell them they were wrong and show the right word.
    // if (guess === realWord){
    //     alert("Good guess!");
    // } else {
    //     alert("Wrong, you failure! The word was " + realWord);
    // }
    while (guess !== realWord) {
        var guess = prompt("Wrong you failure, try again\nWhat is this scrambled word?\n"
                       + scambledWord)
    }
    alert("Great guess you awesome engineer!")
    // If the user guesses the correct word, congratulate them.

    playing = confirm("Press OK To keep playing or Cancel to quit");

    // What does confirm() return?
    // What does setting the playing variable do?
}

alert("goodbye!");