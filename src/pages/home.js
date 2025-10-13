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
    const cardAboult = document.createElement('div');
    cardAboult.className = "cards";
    


    
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
    const dateToday = new Date().toISOString.split("T")[0];

    

    const [checkin,checkout] = date.querySelectorAll('input[type="date"]');
    const guestAmout = date.querySelector('select');
    const btnSearchRoom = date.querySelector('button');
    checkin.min = dateToday;
    checkout.min = dateToday;

    function getMinDatecheckout(dateToday){
        const minDate = new Date(dateCheckin);
        minDaily.setDate(minDaily.getDate()+1);
        return minDaily.toISOString().split('T')[0];
    }

    dateCheckin.addEventListener("change",async (e) => {
        if(this.value){
            const minDatecheckout = getMinDatecheckout(this.value);
            dateCheckout.min = minDatecheckout;
        }
    });
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    cardsGroup.id = "cards-result";

    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();

        const inicio = (checkin?.value ||"").trim();
        const fim = (checkout?.value ||"").trim();
        const qnt = parseInt(guestAmout?.value || "0",10);

        if(!inicio || !fim || Number.isNaN(qnt) || qnt <= 0 ){
            console.log("Preencha todos os campos!");
            return;
        }

        const dtinicio = new Date (inicio);
        const dtfim = new Date (fim);

        if(isNaN(dtinicio) || isNaN(dtfim) || dtinicio >= dtfim){
            console.log("A data de check-in nao pode ser posterior ao check-out!");
            return;
        }

        console.log("Buscando quartos disponiveis...");

        try{
            const quartos = await listAllRoomsRequest({inicio,fim,qnt});
            if(!quartos.length){
                console.log("Nenhum quarto disponivel para esse periodo!");
                return;
            }
            cardsGroup.innerHTML = '';
            quartos.forEach((itemcard,i)=>{
                cardAboult.appendChild(RoomCard(itemcard,i));
            });
        }
        catch (error){
            console.log(error);
        }
    });

    const revoltacarditem = [
        {path: "restauranthotel.png",title:"restaurante",text:"Nosso restaurante e um espaço"},
        {path: "restauranthotel.png",title:"restaurante",text:"Nosso restaurante e um espaço"},
        {path: "restauranthotel.png",title:"restaurante",text:"Nosso restaurante e um espaço"}
    ];

    nav.appendChild(navbar);
    divRoot.appendChild(hero);
    divRoot.appendChild(date);
    foot.appendChild(footer);

    for(let i = 0; i<revoltacarditem.length; i++){
        const revoltacard = Revoltcard (revoltacarditem[i],i);
        cardAboult.appendChild(revoltacard);
    }
    
    divRoot.appendChild(cardsGroup);
    divRoot.appendChild(cardAboult);
    

}

