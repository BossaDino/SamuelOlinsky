// Select all elements with the class 'hidden'
const observerElements = document.querySelectorAll('.hidden');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the element is visible on the screen
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: Remove class if you want it to animate every time you scroll up and down
            // entry.target.classList.remove('show'); 
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible
});

// Observe each element
observerElements.forEach((el) => observer.observe(el));

const iframeElement = document.querySelector('#sc-widget');
const widget = SC.Widget(iframeElement);

