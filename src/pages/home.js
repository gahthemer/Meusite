import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderHomePage() { 
const nav = document.getElementById('navbar');
        nav.innerHTML = '';
    
        const navbar = NavBar();
        

        const foot = document.getElementById('footer');
        nav.innerHTML = '';
    
        const footer = Footer();
        nav.appendChild(navbar);
        foot.appendChild(footer);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = Hero();
    divRoot.appendChild(hero);
}