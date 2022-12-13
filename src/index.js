import { showHome } from "./home";
import { showMenu } from "./menu";
import { showContact } from "./contact";

const PageController = (function() {

    const pageContent = document.querySelector("#content");
    const pagesButtons = Array.from(document.querySelectorAll("nav button"));

    const pagesLoaders = {
        home: showHome(),
        menu: showMenu(),
        contact: showContact()
    };

    let actualPage = "home";
    
    const removeContent = () => {
       pageContent.innerHTML = ""; 
    }

    const show = (page) => {
        if (actualPage !== page) {
            removeContent();
            let pageToShow = pagesLoaders[page];
            pageContent.append(pageToShow);

            pageToShow.style.transition = "opacity .4s";
            pageToShow.style.opacity = "0";
            window.setTimeout(function() {
                pageToShow.style.opacity = "1";
            }, 100);

            actualPage = page;
        }
    } 

    for (let button of pagesButtons) {
        button.addEventListener("click", () => {
            let pageName = button.getAttribute("data-page");
            show(pageName); 
        })
    }
    
    return {
        show
    };
})();
