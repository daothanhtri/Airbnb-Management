"use strict";

document.addEventListener('DOMContentLoaded', function() {
  // 1. "Explore Dashboard" button functionality (Smooth scroll to Dashboard Overview)
  const exploreDashboardButton = document.querySelector('.hero button');
  const dashboardOverviewSection = document.querySelector('.dashboard-overview');

  if (exploreDashboardButton && dashboardOverviewSection) {
      exploreDashboardButton.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default button behavior if it's inside a form
          dashboardOverviewSection.scrollIntoView({ behavior: 'smooth' });
      });
  }

  // 2. Search bar functionality (Basic - log search term to console on input change)
  const searchInput = document.querySelector('.search-bar input[type="text"]');

  if (searchInput) {
      searchInput.addEventListener('input', function() {
          console.log('Search term:', searchInput.value);
          // In a real application, you would implement filtering logic here based on searchInput.value
      });
  }

  // 3. "Send Message" button functionality (Basic - alert message sent and clear textarea)
  const sendMessageButton = document.querySelector('.guest-interaction button');
  const messageTextarea = document.querySelector('.guest-interaction textarea');

  if (sendMessageButton && messageTextarea) {
      sendMessageButton.addEventListener('click', function() {
          const message = messageTextarea.value;
          if (message.trim() !== "") {
              alert('Message sent: ' + message); // Or console.log('Message sent:', message);
              messageTextarea.value = ""; // Clear the textarea after sending
          } else {
              alert('Please enter a message to send.');
          }
      });
  }

  // --- Optional: Example of adding a simple hover effect to navigation links ---
  const navLinks = document.querySelectorAll('header nav ul li a');

  navLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          this.style.color = '#007bff'; // Example hover color - you can adjust in CSS instead for better practice
      });
      link.addEventListener('mouseout', function() {
          this.style.color = ''; // Reset to default color
      });
  });

  // --- Optional: Example of making "View all..." links interactive (basic alert) ---
  const viewAllLinks = document.querySelectorAll('a[href="#"]'); // Selects all links with href="#"

  viewAllLinks.forEach(link => {
      if (link.textContent.includes('View all') || link.textContent.includes('View schedule details')) { // Target specific "View all..." links
          link.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent page from jumping to top if href="#"
              alert('You clicked on: ' + this.textContent); // Basic alert for demonstration
              // In a real application, you would expand sections, load more data, or navigate to a new page here.
          });
      }
  });

});