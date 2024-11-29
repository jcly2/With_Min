// Food information data
const foodData = [
    { name: "Kimchi Jjigae", description: "About Kimchi Jjigae....", image: "img/kimchijjigae.jpg" },
    { name: "Samgyeobsal", description: "About Samgyeobsal.....", image: "img/samgyeobsal.jpg" },
    { name: "Jabchae", description: "About Jabchae....", image: "img/Jabchae.jpg" },
    { name: "Galbi", description: "About Galbi.....", image: "img/galbi.jpg" },
    { name: "Gorgonzola Pizza", description: "About Gorgonzola Pizza....", image: "img/Gorgonzola_Pizza.jpg" }
];

// Function to generate random review scores
function generateRandomScores() {
    let scores = new Array(5); // Create an array with a length of 5
    for (let i = 0; i < 5; i++) {
        scores[i] = Math.floor(Math.random() * 5) + 1; // Assign random number directly to each index
    }
    return scores;
}

// Function to calculate average review score
function calculateAverage(scores) {
    let total = 0;

    // Use a for loop to calculate the total
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }    
    return total / scores.length;
}

// Function to display food information
function displayFoodInfo() {
    const foodNumber = parseInt(document.getElementById("food-number").value);
    const foodInfoDiv = document.getElementById("food-info");

    // Validate input
    if (isNaN(foodNumber) || foodNumber < 1 || foodNumber > 5) {
        foodInfoDiv.innerHTML = "<p>Please enter a valid number between 1 and 5.</p>";
        return;
    }

    const food = foodData[foodNumber - 1]; // Get selected food data
    const scores = generateRandomScores();
    const averageScore = calculateAverage(scores);

    // Display food information
    foodInfoDiv.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <h2>${food.name}</h2>
        <p>${food.description}</p>
        <p><strong>Average Review Score:</strong> ${averageScore}</p>
    `;
}