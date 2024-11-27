     // Accordion for City Highlights
     document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".highlight h3").forEach((header) => {
          header.style.cursor = "pointer"; // Make headers clickable
          header.addEventListener("click", () => {
              const details = header.nextElementSibling;
              if (details.style.display === "block") {
                  details.style.display = "none"; // Hide details
              } else {
                  details.style.display = "block"; // Show details
              }
          });
      });
  });


// 4. "Back to Top" Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = 'Back to Top';
backToTopButton.id = 'backToTopBtn';
document.body.appendChild(backToTopButton); 

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener('click', function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
});