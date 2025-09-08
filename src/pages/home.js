import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Card from "../components/card.js";

export default function renderHomePage() {
    // Get DOM elements
    const nav = document.getElementById('navbar');
    const foot = document.getElementById('footer');
    const divRoot = document.getElementById('root');
    const card = document.getElementById('cards');

    // Verificar se os elementos existem
    if (!nav || !foot || !divRoot || !card) {
        console.error('Um ou mais elementos DOM não foram encontrados.');
        return;
    }

    // Clear existing content
    nav.innerHTML = '';
    foot.innerHTML = '';
    card.innerHTML = ''; // Limpa o elemento com ID 'cards'
    divRoot.innerHTML = '';

    // Create components
    const navbar = NavBar();
    const hero = Hero();
    const cards = Card(); // Certifique-se de que Card() retorna um elemento DOM
    const footer = Footer();

    // Append components to the correct DOM elements
    nav.appendChild(navbar);
    divRoot.appendChild(hero);
    card.appendChild(cards); // Corrigido: anexa cards ao elemento com ID 'cards'
    foot.appendChild(footer);

}

// Execute após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
});