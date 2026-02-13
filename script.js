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
    } else {
        noBtn.textContent = "Please? 🥺";
    }

    // Dynamic scaling using CSS variable
    const scaleFactor = 1 + (noClickCount * 2);
    yesBtn.style.setProperty('--scale', scaleFactor);

    // Move the no button away to give more space - increased distance
    const moveX = noClickCount * 100; // Increased from 60 to 100 for more space
    noBtn.style.transform = `translateX(${moveX}px)`;

    // Only hide after 5 clicks (when reaching the 6th text)
    if (noClickCount >= 5) {
        yesBtn.classList.add('full-screen');
        noBtn.style.display = 'none';

        // Update text to be more dramatic
        yesBtn.textContent = "YES";
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

