const topBar = document.querySelector("#top-bar")
const links = document.querySelector("#links")

const topBarLinks = document.querySelectorAll(".top-bar-link");
const linkMenuLinks = document.querySelectorAll(".links-link")

const topBarHome = document.querySelector("#home");
const topBarProjects = document.querySelector("#projects");
const topBarDiary = document.querySelector("#diary");
const topBarAbout = document.querySelector("#about");

const topBarMenu = document.querySelector(".menu-btn");

const linksMenuHome = document.querySelector("#home-in-links")
const linksMenuAbout = document.querySelector("#about-in-links")
const linksMenuProjects = document.querySelector("#projects-in-links")
const linksMenuDiary = document.querySelector("#diary-in-links")

let alternator = true;


function switchMenu() {

    if (alternator) {
        topBarMenu.style.backgroundImage = "url(./menu-inverse.png)"
        if (window.matchMedia("(max-width: 406px)").matches) {
            links.style.width = '200px'
        } else {

            links.style.width = '350px';
        }

        links.style.height = '200px';
        links.style.padding = '10px';


        linksMenuHome.innerText = "HOME"
        linksMenuAbout.innerText = "ABOUT"
        linksMenuProjects.innerText = "PROJECTS"
        linksMenuDiary.innerText = "DIARY"

        alternator = false;
    }
    else if (alternator == false) {
        topBarMenu.style.backgroundImage = "url(./menu.png)"
        links.style.width = '0';
        links.style.height = '0';
        links.style.padding = '0';
        alternator = true;

        linkMenuLinks.forEach(link => {
            link.innerText = "";
        });
    }

}

function goTo(link) {
    window.open("https://evodev-tech.onrender.com/" + link + ".html")
}


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('resize', function () {

        if (window.matchMedia("(max-width: 1120px)").matches) {
            topBarLinks.forEach(link => {
                link.innerText = "";
            });

            linkMenuLinks.forEach(link => { link.innerText = "" });

        }

        if (window.matchMedia("(min-width: 1120px)").matches) {
            topBarHome.innerText = "HOME"
            topBarProjects.innerText = "PROJECTS"
            topBarAbout.innerText = "ABOUT"
            topBarDiary.innerText = "DIARY"

            linkMenuLinks.forEach(link => {
                link.innerText = "";
            });
        }





    });

    window.addEventListener('load', function () {

        if (window.matchMedia("(max-width: 1120px)").matches) {
            topBarLinks.forEach(link => {
                link.innerText = "";
            });

            linkMenuLinks.forEach(link => {
                link.innerText = "";
            });


        }

        if (window.matchMedia("(min-width: 1120px)").matches) {
            topBarHome.innerText = "HOME"
            topBarProjects.innerText = "PROJECTS"
            topBarAbout.innerText = "ABOUT"
            topBarDiary.innerText = "DIARY"

            linkMenuLinks.forEach(link => {
                link.innerText = "";
            });


        }


    });
});