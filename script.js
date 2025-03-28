document.addEventListener("DOMContentLoaded", () => {
    // Mode clair/sombre
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "🌙 Mode Sombre";
    toggleThemeBtn.classList.add("theme-toggle");
    document.body.appendChild(toggleThemeBtn);
    
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleThemeBtn.textContent = "☀️ Mode Clair";
        } else {
            toggleThemeBtn.textContent = "🌙 Mode Sombre";
        }
    });

    // Effet de défilement fluide
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animation d'apparition des sections
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
