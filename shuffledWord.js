let word = "elephant";

// Step 1: Split the string into an array of characters
let letters = word.split("");

// Step 2: Shuffle the array (Fisher-Yates shuffle)
for (let i = letters.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));
    // Swap letters[i] with letters[j]
    [letters[i], letters[j]] = [letters[j], letters[i]];
}

// Step 3: Join the array back to a string
let shuffledWord = letters.join("");

// Step 4: Print the result
console.log(shuffledWord);