import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { createRequest } from "../api/clietsAPI.js";

export default function renderRegisterPage() {
  
  const nav = document.getElementById("navbar");
  nav.innerHTML = "";
  const navbar = NavBar();
  nav.appendChild(navbar);

 
  const foot = document.getElementById("footer");
  foot.innerHTML = "";
  const footer = Footer();
  foot.appendChild(footer);

 
  const formulario = LoginForm();
  const titulo = formulario.querySelector("h1");
  titulo.textContent = "Cadastre-se";

 
  const contentForm = formulario.querySelector("form");

 
  const inputNome = document.createElement("input");
  inputNome.type = "text";
  inputNome.placeholder = "Digite seu nome";
  inputNome.required = true;

 
  const inputEmail = formulario.querySelector('input[type="email"]');
  if (!inputEmail) {
    console.error("Email input not found in LoginForm");
    return;
  }

 
  const inputCpf = document.createElement("input");
  inputCpf.type = "text";
  inputCpf.placeholder = "Digite seu CPF";
  inputCpf.required = true;

  
  const inputTelefone = document.createElement("input");
  inputTelefone.type = "tel";
  inputTelefone.placeholder = "Digite seu telefone";
  inputTelefone.required = true;

 
  const inputSenha = contentForm.querySelector('input[type="password"]');
  if (!inputSenha) {
    inputSenha = document.createElement("input");
    inputSenha.type = "password";
    inputSenha.placeholder = "Digite sua senha";
    inputSenha.required = true;
  }

 
  const inputConfSenha = document.createElement("input");
  inputConfSenha.type = "password";
  inputConfSenha.placeholder = "Confirme sua senha";
  inputConfSenha.required = true;

  
  contentForm.insertBefore(inputNome, inputEmail);
  contentForm.insertBefore(inputCpf, inputEmail.nextSibling);
  contentForm.insertBefore(inputTelefone, inputCpf.nextSibling);
  contentForm.insertBefore(inputSenha, inputTelefone.nextSibling);
  contentForm.insertBefore(inputConfSenha, inputSenha.nextSibling);

 
  const btnRegister = formulario.querySelector("button");
  btnRegister.textContent = "Criar conta";

  
  contentForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = inputNome.value.trim();
    const cpf = inputCpf.value.trim();
    const telefone = inputTelefone.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();
    const confSenha = inputConfSenha.value.trim();

   
    if (senha !== confSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const result = await createRequest(nome, cpf, telefone, email, senha);
      alert("Conta criada com sucesso!");
      
      contentForm.reset();
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Erro inesperado ao criar conta. Tente novamente.");
    }
  });


  document.getElementById("main-content")?.appendChild(formulario);
}