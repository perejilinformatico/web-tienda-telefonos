const i = document.getElementById("menu_hamburgesa");
const x = document.querySelector(".desplegable_menu");
const f = document.getElementById("menu_cierre");
const a = document.querySelectorAll(".a_link_js");
let s = 1;

i.addEventListener("click", () => {
   if (s == 1) {
        x.style.display = "flex";
   } else {
     x.style.display = "none";
   }
});

a.forEach(element => {
  element.addEventListener("click", () => {
    if (s == 1) {
        x.style.display = "none";
    }
  });  
});

f.addEventListener("click", () => {
    if (s == 1) {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
});
