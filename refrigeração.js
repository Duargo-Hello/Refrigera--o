document.addEventListener("DOMContentLoaded", function() {
    // Formulário de contato
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Mensagem enviada com sucesso!");
            contactForm.reset();
        });
    }

    // Rolagem suave ao clicar nos links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Botão de voltar ao topo
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "↑ Topo";
    backToTopButton.id = "back-to-top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px";
    backToTopButton.style.background = "#0077b6";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none";
    document.body.appendChild(backToTopButton);
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Alternância de modo escuro
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Modo Escuro";
    darkModeToggle.id = "dark-mode-toggle";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.background = "#333";
    darkModeToggle.style.color = "white";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);
    
    // Botão de sair
    const logoutButton = document.createElement("button");
    logoutButton.innerText = "Sair";
    logoutButton.id = "logout-button";
    logoutButton.style.position = "fixed";
    logoutButton.style.top = "100px";
    logoutButton.style.right = "20px";
    logoutButton.style.padding = "10px";
    logoutButton.style.background = "#d9534f";
    logoutButton.style.color = "white";
    logoutButton.style.border = "none";
    logoutButton.style.cursor = "pointer";
    document.body.appendChild(logoutButton);

    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "Modo Claro";
            document.documentElement.style.setProperty("--background-color", "#222");
            document.documentElement.style.setProperty("--text-color", "#fff");
            document.documentElement.style.setProperty("--button-bg", "#444");
            document.documentElement.style.setProperty("--button-text", "#fff");
        } else {
            darkModeToggle.innerText = "Modo Escuro";
            document.documentElement.style.setProperty("--background-color", "#f4f4f4");
            document.documentElement.style.setProperty("--text-color", "#333");
            document.documentElement.style.setProperty("--button-bg", "#0077b6");
            document.documentElement.style.setProperty("--button-text", "white");
        }
    });

    logoutButton.addEventListener("click", function() {
        const confirmLogout = confirm("Tem certeza que deseja sair?");
        if (confirmLogout) {
            window.location.href = "index.html"; // Redireciona para a página inicial
        }
    });

    // Aplicar as cores ao site inteiro
    document.documentElement.style.setProperty("--background-color", "#f4f4f4");
    document.documentElement.style.setProperty("--text-color", "#333");
    document.documentElement.style.setProperty("--button-bg", "#0077b6");
    document.documentElement.style.setProperty("--button-text", "white");

    document.body.style.backgroundColor = "var(--background-color)";
    document.body.style.color = "var(--text-color)";
    document.querySelectorAll("a, p, h1, h2, h3, h4, h5, h6, label, button").forEach(el => {
        el.style.color = "var(--text-color)";
    });
    document.querySelectorAll("button").forEach(button => {
        button.style.backgroundColor = "var(--button-bg)";
        button.style.color = "var(--button-text)";
    });
});