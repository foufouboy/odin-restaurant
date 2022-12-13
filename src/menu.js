export const showMenu = () => {


    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");
    menuPage.style.display = "flex";
    menuPage.style.flexDirection = "column";
    menuPage.style.gap = "50px";
    
    
    const pizzaImgs = [];

    for (let i = 0; i < 3; i++) {
        const pizzaImg = document.createElement("img");
        pizzaImg.classList.add("pizza");
        pizzaImgs.push(pizzaImg);
        menuPage.appendChild(pizzaImgs[i]); 
    }
    
    pizzaImgs[0].src = "/assets/pizza1.jpeg"
    pizzaImgs[0].alt = "pizza1";
    pizzaImgs[1].src = "/assets/pizza2.jpeg";
    pizzaImgs[1].alt = "pizza2";
    pizzaImgs[2].src = "/assets/pizza3.jpeg";
    pizzaImgs[2].alt = "pizza3";

    return menuPage;
};
