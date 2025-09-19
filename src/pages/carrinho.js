import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import carrinhoForm from "../components/carrinhoForm.js";

export default function renderCarrinhoPage() {
    const nav = document.getElementById("navbar");
    nav.innerHTML = "";
    const navbar = NavBar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    const cart = carrinhoForm();
    divRoot.appendChild(cart);

    const foot = document.getElementById("footer");
    foot.innerHTML = "";
    const footer = Footer();
    foot.appendChild(footer);
}