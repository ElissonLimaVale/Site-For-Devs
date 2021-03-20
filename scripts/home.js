let staticHeight = {'Devs/inicio': 500, 'Devs/artigos': 500, 'Devs/sobre': 580,'Devs/contato': 500, 'Devs/duvidas': 500};
let heightPhone = {'Devs/inicio': 500, 'Devs/artigos': 500, 'Devs/sobre': 950,'Devs/contato': 800, 'Devs/duvidas': 500};

let ActionMenu = {
    "DEV FULL": () => {
        document.querySelector("iframe").src = "inicio.html";
        resizing();
    },
    "Artigos": () => {
        document.querySelector("iframe").src = "artigos.html";
        resizing();
    },
    "Sobre": () => {
        document.querySelector("iframe").src = "sobre.html";
        resizing();
    },
    "Contato": () => {
        document.querySelector("iframe").src = "contato.html";
        resizing();
    },
    "Dúvidas": () => {
        document.querySelector("iframe").src = "duvidas.html";
        resizing();
    }
};

document.querySelector("#inicio").addEventListener("click", function(e){activeMenu(document.querySelector("#inicio").textContent);});
document.querySelector("#artigos").addEventListener("click", function(e){activeMenu(document.querySelector("#artigos").textContent);});
document.querySelector("#sobre").addEventListener("click", function(e){activeMenu(document.querySelector("#sobre").textContent);});
document.querySelector("#contato").addEventListener("click", function(e){activeMenu(document.querySelector("#contato").textContent);});
document.querySelector("#duvidas").addEventListener("click", function(e){activeMenu(document.querySelector("#duvidas").textContent);});

function activeMenu(text){
    ActionMenu[text]();
}

//adaptação de layout ao tamanho da tela
window.addEventListener("resize", resizing);

function resizing(){
    let iframe = document.querySelector("iframe");
    let page = iframe.src.substring(iframe.src.indexOf("Devs/"),iframe.src.indexOf(".html"));
    if(window.innerWidth > 950){
        iframe.height = staticHeight[page];
    }else {
        iframe.height = heightPhone[page];
    }
}