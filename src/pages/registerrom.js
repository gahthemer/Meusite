import cadastroquarto from "../components/cadastroquarto.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import{addRoom} from '../api/roomsAPI.js';

export default function renderRegisterQuartos() {
    
    const nav = document.getElementById("navbar");
    nav.innerHTML = "";
    nav.appendChild(NavBar()); 

    
    const divRoot = document.getElementById("root");
    divRoot.innerHTML = "";
    
    const formulario = cadastroquarto(); 
    divRoot.appendChild(formulario);     

    
    const foot = document.getElementById("footer");
    foot.innerHTML = "";
    foot.appendChild(Footer());

    formulario.addEventListener("submit",async (e) =>{
        e.preventDefault();

        try{
            const response = await addRoom(this);
            console.log("Resposta do Servidor:"+response);
        }
        catch{
            console.log("Erro:" + error.message);
        }
    })
}