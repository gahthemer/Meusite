import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Card from "../components/card.js";
import imput from "../components/DateSelector.js";
import DateSelector from "../components/DateSelector.js";

export default function renderHomePage() {
    // Get DOM elements
    const nav = document.getElementById('navbar');
    const foot = document.getElementById('footer');
    const divRoot = document.getElementById('root');


    // Verificar se os elementos existem
    if (!nav || !foot || !divRoot) {
        console.error('Um ou mais elementos DOM não foram encontrados.');
        return;
    }

    // Clear existing content
    nav.innerHTML = '';
    foot.innerHTML = '';
    divRoot.innerHTML = '';

    // Create components
    const navbar = NavBar();
    const hero = Hero();
    const date = DateSelector ();
    const footer = Footer();
    

    // Append components to the correct DOM elements
    nav.appendChild(navbar);
    divRoot.appendChild(hero);
    divRoot.appendChild(date);
    foot.appendChild(footer);

    for( var i=0; i < 3; i++){

        const card = Card();
        divRoot.appendChild(card);

    }

}

// Execute após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
});