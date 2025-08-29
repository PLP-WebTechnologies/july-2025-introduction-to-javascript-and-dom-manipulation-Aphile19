// ==============================================
// Part 1: Variables and Conditionals
// ==============================================

// Variable declarations
let userAge;
let ageMessage;

// Function to check age based on user input
function checkAge() {
    // Get user input
    userAge = document.getElementById('userAge').value;
    const ageResult = document.getElementById('ageResult');
    
    // Conditional logic
    if (userAge === '') {
        ageResult.textContent = 'Please enter your age.';
        ageResult.style.color = '#e74c3c';
    } else if (userAge < 0) {
        ageResult.textContent = 'Age cannot be negative!';
        ageResult.style.color = '#e74c3c';
    } else if (userAge < 13) {
        ageResult.textContent = 'You are a child.';
        ageResult.style.color = '#3498db';
    } else if (userAge >= 13 && userAge < 20) {
        ageResult.textContent = 'You are a teenager.';
        ageResult.style.color = '#2ecc71';
    } else if (userAge >= 20 && userAge < 65) {
        ageResult.textContent = 'You are an adult.';
        ageResult.style.color = '#f39c12';
    } else {
        ageResult.textContent = 'You are a senior.';
        ageResult.style.color = '#9b59b6';
    }
}

// ==============================================
// Part 2: Functions
// ==============================================

// Function 1: Calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function 2: Calculate difference of two numbers
function calculateDifference(a, b) {
    return a - b;
}

// Function 3: Calculate product of two numbers
function calculateProduct(a, b) {
    return a * b;
}

// Main function to handle calculation and display results
function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    // Use functions to calculate results
    const sum = calculateSum(num1, num2);
    const difference = calculateDifference(num1, num2);
    const product = calculateProduct(num1, num2);
    
    // Display results
    document.getElementById('sumResult').textContent = sum;
    document.getElementById('diffResult').textContent = difference;
    document.getElementById('productResult').textContent = product;
}

// ==============================================
// Part 3: Loops
// ==============================================

// Example 1: For loop
function runForLoop(number) {
    let result = '';
    for (let i = 1; i <= number; i++) {
        result += `Iteration ${i}`;
        if (i < number) result += ' → ';
    }
    return result;
}

// Example 2: While loop
function runWhileLoop(number) {
    let result = '';
    let count = 1;
    while (count <= number) {
        result += `Count: ${count}`;
        if (count < number) result += ' • ';
        count++;
    }
    return result;
}

// Function to run both loops and display results
function runLoops() {
    const number = parseInt(document.getElementById('loopNumber').value) || 5;
    
    // Validate input
    if (number < 1 || number > 10) {
        alert('Please enter a number between 1 and 10');
        return;
    }
    
    // Run loops and display results
    document.getElementById('forLoopResult').textContent = runForLoop(number);
    document.getElementById('whileLoopResult').textContent = runWhileLoop(number);
}

// ==============================================
// Part 4: DOM Manipulation
// ==============================================

// DOM Interaction 1: Change text content
function changeText() {
    const textElement = document.getElementById('changeableText');
    const texts = [
        'JavaScript is awesome!',
        'DOM manipulation is powerful!',
        'You can create dynamic web pages!',
        'Functions make code reusable!',
        'Loops help automate repetitive tasks!'
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    textElement.textContent = texts[randomIndex];
    
    // Add visual feedback
    textElement.style.color = '#e74c3c';
    setTimeout(() => {
        textElement.style.color = '';
    }, 500);
}

// DOM Interaction 2: Toggle theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Update button text based on current theme
    const themeButton = document.querySelector('button[onclick="toggleTheme()"]');
    if (body.classList.contains('dark-theme')) {
        themeButton.textContent = 'Switch to Light Mode';
    } else {
        themeButton.textContent = 'Switch to Dark Mode';
    }
}

// DOM Interaction 3: Add list item
function addListItem() {
    const list = document.getElementById('itemList');
    const newItem = document.createElement('li');
    const itemNumber = list.children.length + 1;
    newItem.textContent = `Dynamic item ${itemNumber} added via JavaScript!`;
    
    // Add with animation
    newItem.style.opacity = '0';
    list.appendChild(newItem);
    
    // Animate appearance
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.1;
        newItem.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fadeIn);
    }, 50);
}

// Reset function
function resetAll() {
    // Reset Part 1
    document.getElementById('userAge').value = '';
    document.getElementById('ageResult').textContent = '';
    
    // Reset Part 2
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('sumResult').textContent = '-';
    document.getElementById('diffResult').textContent = '-';
    document.getElementById('productResult').textContent = '-';
    
    // Reset Part 3
    document.getElementById('loopNumber').value = '5';
    document.getElementById('forLoopResult').textContent = '';
    document.getElementById('whileLoopResult').textContent = '';
    
    // Reset Part 4
    document.getElementById('changeableText').textContent = 'This text will change when you click the button!';
    const list = document.getElementById('itemList');
    while (list.children.length > 2) {
        list.removeChild(list.lastChild);
    }
    
    // Reset theme if dark
    if (document.body.classList.contains('dark-theme')) {
        toggleTheme();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Fundamentals Assignment Loaded!');
});
