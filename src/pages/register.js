import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderRegisterPage() {
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

  // Create and configure the registration form
  const formulario = LoginForm();
  const titulo = formulario.querySelector("h1");
  titulo.textContent = "Cadastre-se";

  // Select the form element from LoginForm component
  const contentForm = formulario.querySelector("form");

  // Create and style input for name, insert before email input
  const nome = document.createElement("input");
  nome.type = "text";
  nome.placeholder = "Digite seu nome";
  const inputEmail = formulario.querySelector('input[type="email"]');
  contentForm.insertBefore(nome, inputEmail);

  // Create and style input for password confirmation, insert before submit button
  const confSenha = document.createElement("input");
  confSenha.type = "password";
  confSenha.placeholder = "Confirme sua senha";
  contentForm.insertBefore(confSenha, contentForm.children[3]);

  // Update submit button text
  const btnRegister = formulario.querySelector("button");
  btnRegister.textContent = "Criar conta!";
}