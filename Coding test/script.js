// Get button elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Track the number of "No" clicks
let noClickCount = 0;

// Array of text changes for "No" button - 5 stages total
const noTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Don't do this to me",
    "I will be very sad...",
    "I will be very very very sad"
];

// Handle "No" button clicks
noBtn.addEventListener('click', function () {
    noClickCount++;

    // Update button text based on click count
    if (noClickCount < noTexts.length) {
        noBtn.textContent = noTexts[noClickCount];
    }

    // Grow the "Yes" button progressively through 5 stages
    // Remove all previous grow classes first
    yesBtn.classList.remove('grow-1', 'grow-2', 'grow-3', 'grow-4', 'grow-5');

    // Remove all previous move classes from No button
    noBtn.classList.remove('move-1', 'move-2', 'move-3', 'move-4');

    if (noClickCount === 1) {
        yesBtn.classList.add('grow-1');
        noBtn.classList.add('move-1');
    } else if (noClickCount === 2) {
        yesBtn.classList.add('grow-2');
        noBtn.classList.add('move-2');
    } else if (noClickCount === 3) {
        yesBtn.classList.add('grow-3');
        noBtn.classList.add('move-3');
    } else if (noClickCount === 4) {
        yesBtn.classList.add('grow-4');
        noBtn.classList.add('move-4');
    } else if (noClickCount >= 5) {
        yesBtn.classList.add('grow-5');
        // Hide the "No" button when it reaches final stage
        noBtn.classList.add('hidden');
    }
});

// Handle "Yes" button clicks
yesBtn.addEventListener('click', function () {
    // Add final grow animation
    yesBtn.classList.add('grow-final');

    // Navigate to success page after animation
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 800);
});

