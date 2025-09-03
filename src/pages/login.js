import { loginRequest } from "../api/authAPI.js";
import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";

export default function renderLoginPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const formulario = LoginForm();
    const contentForm = formulario.querySelector('form');
    const inputEmail = contentForm.querySelector('input[type="email"]');
    const inputSenha = contentForm.querySelector('input[type="password"]');
    const btn = contentForm.querySelector('button[type="submit"]');


    contentForm.addEventListener("submit",async (e) => {
        e.preventDefault();
        const email = inputEmail.ariaValueMax.trim();
        const senha = inputSenha.ariaValueMax.trim();

        try{
            const result = await loginRequest (email,senha);
            console.log("Login realizado com sucesso!");
            window.location.pathname = Meusite/home;
        }
        catch{
            console.log("Erro inesperado!");

        }

    });

    const texto = document.createElement('p');
    texto.textContent = 'Não possui uma conta? ';
    texto.className = 'texto';

    const link = document.createElement('a');
    link.href = "cadastro";
    link.textContent = 'Cadastre-se!';

    texto.appendChild(link)
    contentForm.insertBefore(texto, contentForm.children[3]);
}
