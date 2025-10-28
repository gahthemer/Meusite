import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";
import { listAllRoomsRequest } from "../api/roomsAPI.js";
import Revoltcard from "../components/revoltacarrossel.js";

export default function renderHomePage() {
    const navbar = NavBar();
    const nav = document.getElementById('navbar');

    const footer = Footer();
    const foot = document.getElementById('footer');

    const divRoot = document.getElementById('root');

    const hero = Hero();
    
    if (!nav || !foot || !divRoot) {
        console.error('Um ou mais elementos DOM não foram encontrados.');
        return;
    }
    
    nav.innerHTML = '';
    nav.appendChild(navbar);

    foot.innerHTML = '';
    foot.appendChild(footer);

    divRoot.innerHTML = '';

    divRoot.appendChild(hero);

    const date = DateSelector();
    divRoot.appendChild(date);
   
    
    const dateToday = new Date().toISOString().split("T")[0];

    const [ checkin, checkout ] = date.querySelectorAll('input[type="date"]');
    checkin.min = dateToday;
    checkout.min = dateToday;

    const guestAmount = date.querySelector('select');
    
    checkin.id = 'id-dateCheckIn';
    checkout.id = 'id-dateCheckOut';
    guestAmount.id = 'id-guestAmount';

    const btnSearchRoom = date.querySelector('button');


    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    cardsGroup.id = "cards-result";

    const cardAbout = document.createElement('div');
    cardAbout.className = "cards";

    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = "Conheça nosso hotel";
    tituloInfra.style.textAlign = "center";


    const revoltacardItems = [
        { path: "restauranthotel.png", title: "restaurante", text: "Nosso restaurante é um espaço" },
        { path: "restauranthotel.png", title: "restaurante", text: "Nosso restaurante é um espaço" },
        { path: "restauranthotel.png", title: "restaurante", text: "Nosso restaurante é um espaço" }
    ];

    for (let i = 0; i < revoltacardItems.length; i++) {
         const RevoltCard = Revoltcard(revoltacardItems[i], i);
         cardAbout.appendChild(RevoltCard);   //AQUI FOI MUDADO PARA QUE cardsGroupInfra incorpore cada card de infraestrutura do hotel
    }


    function getMinDateCheckout(checkin) {
        const minDaily = new Date(checkin);
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }

    checkin.addEventListener("change", async (e) => {
        if (checkin.value) {
            const minDateCheckout = getMinDateCheckout(checkin.value);
            checkout.min = minDateCheckout;
        

            if(checkout.value && checkout.value <= checkin.value){
            checkout.value = "";
            alert("A data de check-in não pode ser posterior ao check-out!")
            }
        }
    });

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
                return;
            }

            cardsGroup.innerHTML = '';
            quartos.forEach((itemCard, i) => {
                cardsGroup.appendChild(RoomCard(itemCard, i));
            });
        } catch (error) {
           console.log(error);
        }
    });
    
    divRoot.appendChild(cardsGroup);
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardAbout);

}