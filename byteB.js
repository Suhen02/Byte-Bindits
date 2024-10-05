// script.js

// Function to toggle the visibility of the case studies section
function toggleCaseStudies() {
    const caseStudiesSection = document.getElementById('case-studies');
    if (caseStudiesSection.style.display === 'none' || caseStudiesSection.style.display === '') {
        caseStudiesSection.style.display = 'block'; // Show the section
    } else {
        caseStudiesSection.style.display = 'none'; // Hide the section
    }
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Case Studies';
    toggleButton.style.margin = '20px';
    toggleButton.style.padding = '10px 15px';
    toggleButton.style.fontSize = '16px';
    toggleButton.style.cursor = 'pointer';
    
    // Append the button before the case studies section
    const introductionSection = document.getElementById('introduction');
    introductionSection.parentNode.insertBefore(toggleButton, document.getElementById('case-studies'));

    // Set initial display style for case studies
    const caseStudiesSection = document.getElementById('case-studies');
    caseStudiesSection.style.display = 'none'; // Hide initially

    // Attach click event to the button
    toggleButton.addEventListener('click', toggleCaseStudies);
});