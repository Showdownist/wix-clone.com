
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const scrollY = window.scrollY;
  
    sections.forEach((section, index) => {
      const offset = index * window.innerHeight;
      if (scrollY > offset) {
        section.style.transform = `translateY(${-(scrollY - offset)}px)`;
      } else {
        section.style.transform = `translateY(0)`;
      }
    });
  });
  
