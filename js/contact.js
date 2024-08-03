// JavaScript specific to the Contact section
document.addEventListener('DOMContentLoaded', () => {
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      // Add form submission logic here (e.g., AJAX request)
      alert('Message sent successfully!');
      e.target.reset();
  });
});
