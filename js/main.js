const translations =
{
    en:
    {
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",

        hero_tag: "// INDIE GAME DEVELOPER",

        hero_title: "Building Games,<br>Systems & Worlds.",

        hero_desc:
            "Unity developer focused on gameplay systems, procedural generation, multiplayer experiences and scalable game architecture.",

        hero_projects: "View Projects",

        about_title: "Hi, I'm Sergio.",

        about_text:
            "I'm a game developer from Spain focused on creating gameplay-driven experiences in Unity. My work revolves around modular systems, procedural generation, AI behaviour, multiplayer architecture and FPS mechanics. Currently building several projects while continuously expanding my technical skills.",

        stat_years: "Years Programming",
        stat_engine: "Main Engine",
        stat_language: "Primary Language",
        stat_ideas: "Ideas Waiting",

        projects_title: "Projects",

        hm_status: "RELEASED",

        hm_desc:
            "A multiplayer horror experience set in abandoned mines. Explore, survive and uncover what hides beneath.",

        skills_title: "Tech Stack",
        contact_title: "Find Me Online"
    },

    es:
    {
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_skills: "Tecnologías",
        nav_contact: "Contacto",

        hero_tag: "// DESARROLLADOR INDIE",

        hero_title: "Creando Juegos,<br>Sistemas y Mundos.",

        hero_desc:
            "Desarrollador de Unity enfocado en sistemas de gameplay, generación procedural, experiencias multijugador y arquitectura escalable.",

        hero_projects: "Ver Proyectos",

        about_title: "Hola, soy Sergio.",

        about_text:
            "Soy un desarrollador de videojuegos de España enfocado en crear experiencias centradas en la jugabilidad en Unity. Trabajo con sistemas modulares, generación procedural, IA, arquitectura multijugador y mecánicas FPS. Actualmente desarrollo varios proyectos mientras sigo ampliando mis habilidades técnicas.",

        stat_years: "Años Programando",
        stat_engine: "Motor Principal",
        stat_language: "Lenguaje Principal",
        stat_ideas: "Ideas Esperando",

        projects_title: "Proyectos",

        hm_status: "LANZADO",

        hm_desc:
            "Una experiencia de terror multijugador en minas abandonadas. Explora, sobrevive y descubre qué se esconde debajo.",

        skills_title: "Tecnologías",
        contact_title: "Encuéntrame Online"
    }
};

function applyLanguage(lang)
{
    const dict = translations[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang]").forEach(el =>
    {
        const key = el.dataset.lang;

        if (!dict[key]) return;

        // IMPORTANTE: usar innerHTML SOLO cuando hay <br>
        if (dict[key].includes("<br>"))
        {
            el.innerHTML = dict[key];
        }
        else
        {
            el.textContent = dict[key];
        }
    });

    // UI buttons
    document.getElementById("lang-en").classList.remove("active");
    document.getElementById("lang-es").classList.remove("active");

    document.getElementById(`lang-${lang}`).classList.add("active");

    localStorage.setItem("language", lang);
}

// events
document.getElementById("lang-en").addEventListener("click", () => applyLanguage("en"));
document.getElementById("lang-es").addEventListener("click", () => applyLanguage("es"));

// init
applyLanguage(localStorage.getItem("language") || "en");