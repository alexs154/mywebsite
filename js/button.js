    const button = document.getElementById("viewBtn");
    button.addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "../pages/projects.html"; // replace with your projects page
      }, 500); // match animation duration
    });