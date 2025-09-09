import { loginRequest, saveToken } from "../api/authAPI.js";
import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderLoginPage() {
  // Clear and set up the navbar
  const nav = document.getElementById("navbar");
  nav.innerHTML = "";
  const navbar = NavBar();
  nav.appendChild(navbar);

  // Clear and set up the footer
  const foot = document.getElementById("footer");
  foot.innerHTML = "";
  const footer = Footer();
  foot.appendChild(footer);

  // Create and configure the login form
  const formulario = LoginForm();
  const contentForm = formulario.querySelector("form");
  const inputEmail = contentForm.querySelector('input[type="email"]');
  const inputSenha = contentForm.querySelector('input[type="password"]');

  // Add submit event listener to the form
  contentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();

    try {
      const result = await loginRequest(email, senha);
      saveToken(result.token);
      console.log("Login realizado com sucesso! " + result.token);

      window.location.pathname = "/Meusite/home"; // Commented out redirect
      
    } catch {
      console.log("Erro inesperado!");
    }
  });

  // Create and append text with registration link
  const texto = document.createElement("p");
  texto.textContent = "Não possui uma conta? ";
  texto.className = "texto";

  const link = document.createElement("a");
  link.href = "cadastro";
  link.textContent = "Cadastre-se!";

  texto.appendChild(link);
  contentForm.insertBefore(texto, contentForm.children[3]);
}