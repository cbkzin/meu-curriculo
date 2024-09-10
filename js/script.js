// Responsive Menu

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

let listItemsHeader = document.querySelectorAll('.list-item-header');

listItemsHeader.forEach(link => {
    link.addEventListener('click', () => {
        menuShow();
    });
});

// Typewriter Effect

const typewriterElements = document.querySelectorAll('.typewriter-text');
let currentIndex = 0;

function runTypewriterEffect(index) {
    const currentElement = typewriterElements[index];
    const textArray = currentElement.textContent.split('');
    let displayedText = '';
    let cursorVisible = true;

    function toggleCursor() {
        if (cursorVisible) {
            currentElement.textContent = displayedText + '|';
        } else {
            currentElement.textContent = displayedText;
        }
        cursorVisible = !cursorVisible;
    }

    function type() {
        if (textArray.length > 0) {
            displayedText += textArray.shift();
            toggleCursor();
            setTimeout(type, 120);
        } else {
            toggleCursor();
            setTimeout(() => {

                typewriterElements.forEach((element) => {
                    element.textContent = element.textContent.replace('|', '');
                });

                if (index + 1 < typewriterElements.length) {
                    currentIndex = (index + 1) % typewriterElements.length;
                    runTypewriterEffect(currentIndex);
                } else {
                    currentIndex = 0;
                    runTypewriterEffect(currentIndex);
                }
            }, 1000);
        }
    }

    toggleCursor();

    type();
}

runTypewriterEffect(currentIndex);


// Change Language WebSite

$(function () {
    $(".brazil-flag").click(function () {
        // Header
        $(".ul-tag-header li:eq(0) a").text("Início");
        $(".ul-tag-header li:eq(1) a").text("Sobre");
        $(".ul-tag-header li:eq(2) a").text("Habilidades");
        $(".ul-tag-header li:eq(3) a").text("Projetos");
        $(".ul-tag-header li:eq(4) a").text("Contato");
        $(".mobile-menu .ul-tag-header li:eq(0) a").text("Início");
        $(".mobile-menu .ul-tag-header li:eq(1) a").text("Sobre");
        $(".mobile-menu .ul-tag-header li:eq(2) a").text("Habilidades");
        $(".mobile-menu .ul-tag-header li:eq(3) a").text("Projetos");
        $(".mobile-menu .ul-tag-header li:eq(4) a").text("Contato");
        // Home
        $(".hello-text").text("Olá, sou");
        $(".profession-text").text("Desenvolvedor Front-end");
        // About
        $("#about-me-content .title-section").text("Sobre Mim");
        $(".me-description-text").text("Olá pessoal! Eu sou Cícero Bernhard Kessler, tenho 21 anos e sou desenvolvedor web. Sou formado em Análise e Desenvolvimento de Sistemas e possuo um forte conhecimento em Front-end. Atualmente estou ampliando minhas habilidades estudando Back-end, e também me dedico a um inglês avançado curso focado em conversação.");
        $(".download-text").text("Baixar Cv");
        // Skills
        $("#skills-content .title-section").text("Habilidades");
        // Projects
        $("#projects-content .title-section").text("Projetos");
        $(".project-one").text("Projeto Um");
        $(".project-two").text("Projeto Dois");
        $(".project-three").text("Projeto Três");
        $(".project-four").text("Projeto Quatro");
        $(".description-project-text").text("Não existe tradução para o termo Lorem Ipsum. O nome desse recurso de diagramação corresponde as duas palavras iniciais da amostragem textual: Lorem e Ipsum. Alguns especialistas sugerem que Lorem Ipsum deriva do termo Dolores Ipsum, o que seria traduzido como “A dor em si”.")
        $(".open-project-text").text("Abrir Projeto");
        $(".repository-text").text("Repositório");
        // Contact
        $("#contact-content .title-section").text("Contato");
        // Footer
        $(".footer").text(" © 2022 Cícero | Todos os direitos reservados");
    });
});

$(function () {
    $(".usa-flag").click(function () {
        // Header
        $(".ul-tag-header li:eq(0) a").text("Home");
        $(".ul-tag-header li:eq(1) a").text("About");
        $(".ul-tag-header li:eq(2) a").text("Skills");
        $(".ul-tag-header li:eq(3) a").text("Projects");
        $(".ul-tag-header li:eq(4) a").text("Contact");
        $(".mobile-menu .ul-tag-header li:eq(0) a").text("Home");
        $(".mobile-menu .ul-tag-header li:eq(1) a").text("About");
        $(".mobile-menu .ul-tag-header li:eq(2) a").text("Skills");
        $(".mobile-menu .ul-tag-header li:eq(3) a").text("Projects");
        $(".mobile-menu .ul-tag-header li:eq(4) a").text("Contact");
        // Home
        $(".hello-text").text("Hello, I'm");
        $(".profession-text").text("Front-end developer");
        // About
        $("#about-me-content .title-section").text("About Me");
        $(".me-description-text").text("Hey guys! I'm Cícero Bernhard Kessler, I'm 21 years old and I'm a web developer. I have a degree in Systems Analysis and Development and have strong knowledge in Front-end. I am currently expanding my skills by studying Back-end, and I am also dedicating myself to an advanced English course focused on conversation.");
        $(".download-text").text("Download Cv");
        // Skills
        $("#skills-content .title-section").text("Skills");
        // Projects
        $("#projects-content .title-section").text("Projects");
        $(".project-one").text("One project");
        $(".project-two").text("Two project");
        $(".project-three").text("Three project");
        $(".project-four").text("Four project");
        $(".description-project-text").text("Não existe tradução para o termo Lorem Ipsum. O nome desse recurso de diagramação corresponde as duas palavras iniciais da amostragem textual: Lorem e Ipsum. Alguns especialistas sugerem que Lorem Ipsum deriva do termo Dolores Ipsum, o que seria traduzido como “A dor em si”.")
        $(".open-project-text").text("Open project");
        $(".repository-text").text("Repository");
        // Contact
        $("#contact-content .title-section").text("Contact");
        // Footer
        $(".footer").text(" © 2022 Cícero | All Rights Reserved");
    });
});


// Flag Select

let languageFlags = document.querySelectorAll('.language-flag');

languageFlags.forEach(function (flag) {
    flag.addEventListener('click', function () {

        languageFlags.forEach(function (flag) {
            flag.classList.remove('selected');
        });

        this.classList.add('selected');
    });
});
