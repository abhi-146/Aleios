document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);
  
    const elementsToAnimate = document.querySelectorAll('.fadeIn, .slideInLeft, .slideInRight, .bounce');
  
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

  });
  