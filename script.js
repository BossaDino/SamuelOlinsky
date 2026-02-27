const observerElements = document.querySelectorAll('.hidden');

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Observe each element
observerElements.forEach((el) => observer.observe(el));


// Future soundcloud implementation
const iframeElement = document.querySelector('#sc-widget');
const widget = SC.Widget(iframeElement);

