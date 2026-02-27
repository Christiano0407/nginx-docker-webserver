import { Home } from "../pages/home.js"; 
import { About } from "../pages/about.js"; 

const routes = {
  "/":Home, 
  "/about":About
}; 

export const router = {
  navigate(url) {
    history.pushState(null,null,url); 
    this.render(); 
  },
  render() {
    const path = location.pathname;
    const view = routes[path]|| Home;
    document.getElementById("appId").innerHTML=view();  
  }
}; 