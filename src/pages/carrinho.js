import NavBar from "../components/Navbar.js";
import carrinhoForm from "../components/carrinhoForm.js";
import Footer from "../components/Footer.js";

export default function renderCarrinhoPage() {
  const nav = document.getElementById("navbar");
  const divRoot = document.getElementById("root");
  const footer = document.getElementById("footer");

  // Clear existing content
  if (nav) nav.innerHTML = "";
  if (divRoot) divRoot.innerHTML = "";
  if (footer) footer.innerHTML = "";

  // Append the navbar
  if (nav) {
    const navbar = NavBar();
    nav.appendChild(navbar);
  }

  // Append the cart form
  if (divRoot) {
    const cart = carrinhoForm(); // Get the cart element
    divRoot.appendChild(cart);
  }

  // Append the footer
  if (footer) {
    const footerContent = Footer(); // Get the footer component
    footer.appendChild(footerContent);
  }
}