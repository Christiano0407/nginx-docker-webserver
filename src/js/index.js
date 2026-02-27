import { router } from "./router/router.js"; 

document.addEventListener("click", e => {
  if(e.target.matches("[data-link]")) {
    e.preventDefault; 
    router.navigate(e.target.href); 
  }
}); 

window.addEventListener("popstate", router.render); 