import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAllRoomsRequest } from "../api/roomsAPI.js";
import Revoltcard from "../components/revoltacarrossel.js";

export default function renderHomePage() {
    const nav = document.getElementById('navbar');
    const foot = document.getElementById('footer');
    const divRoot = document.getElementById('root');
    
    if (!nav || !foot || !divRoot) {
        console.error('Um ou mais elementos DOM não foram encontrados.');
        return;
    }

    nav.innerHTML = '';
    foot.innerHTML = '';
    divRoot.innerHTML = '';

    const navbar = NavBar();
    const hero = Hero();
    const date = DateSelector();
    const footer = Footer();
    
    const dateToday = new Date().toISOString().split("T")[0];

    const [ checkin, checkout ] = date.querySelectorAll('input[type="date"]');
    const guestAmount = date.querySelector('select');
    const btnSearchRoom = date.querySelector('button');

    checkin.min = dateToday;
    checkout.min = dateToday;

    function getMinDateCheckout(checkin) {
        const minDaily = new Date(checkin);
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }

    checkin.addEventListener("change", (e) => {
        if (checkin.value) {
            const minDateCheckout = getMinDateCheckout(checkin.value);
            checkout.min = minDateCheckout;
        

        if(checkout.value && checkout.value <= checkin.value){
            checkout.value = "";
            alert("A data de check-in não pode ser posterior ao check-out!")
        }
    }
    });

    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    cardsGroup.id = "cards-result";

    const cardAbout = document.createElement('div');
    cardAbout.className = "cards";

    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();

        const inicio = (checkin?.value || "").trim();
        const fim = (checkout?.value || "").trim();
        const qnt = parseInt(guestAmount?.value || "0", 10);

        if (!inicio || !fim || Number.isNaN(qnt) || qnt <= 0) {
            console.log("Preencha todos os campos!");
            return;
        }


        console.log("Buscando quartos disponíveis...");

        try {
            const quartos = await listAllRoomsRequest({ inicio, fim, qnt });
            
            if (!quartos.length) {
                console.log("Nenhum quarto disponível para esse período!");
                cardsGroup.innerHTML = '';
                return;
            }

            cardsGroup.innerHTML = '';
            quartos.forEach((itemCard, i) => {
                cardsGroup.appendChild(RoomCard(itemCard, i));
            });
        } catch (error) {
            console.error("Erro ao buscar quartos:", error);
            cardsGroup.innerHTML = '';
        }
    });

    const revoltacardItems = [
        { path: "restauranthotel.png", title: "restaurante", text: "Nosso restaurante é um espaço" },
        { path: "restauranthotel.png", title: "restaurante", text: "Nosso restaurante é um espaço" },
        { path: "restauranthotel.png", title: "restaurante", text: "Nosso restaurante é um espaço" }
    ];

    nav.appendChild(navbar);
    divRoot.appendChild(hero);
    divRoot.appendChild(date);
    
    revoltacardItems.forEach((item, i) => {
        const revoltacard = Revoltcard(item, i);
        cardAbout.appendChild(revoltacard);
    });
    
    divRoot.appendChild(cardsGroup);
    divRoot.appendChild(cardAbout);
    foot.appendChild(footer);
}