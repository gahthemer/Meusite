import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAllRoomsRequest } from "../api/roomsAPI.js";


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
    const date = DateSelector();
    const footer = Footer();

    const btnSearchRoom = date.querySelector('button');

    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();

        const inicio = "2025-10-01";
        const fim = "2025-10-05";
        const qnt = 2;

        try{
            const quartos = listAllRoomsRequest({inicio,fim,qnt});
        }
        catch (error){
            console.log(error);
        }
    });
    

    // Append components to the correct DOM elements
    nav.appendChild(navbar);
    divRoot.appendChild(hero);
    divRoot.appendChild(date);
    foot.appendChild(footer);

    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";

    for (var i=0; i < 3; i++) {
        const cards = RoomCard(i);
        cardsGroup.appendChild(cards);
    }

    divRoot.appendChild(cardsGroup);

}

