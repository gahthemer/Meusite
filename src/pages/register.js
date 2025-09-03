import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";

export default function renderRegisterPage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const formulario = LoginForm();

    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";

    //Seleciono o elemento form que está presente em ./componentes/LoginForm.js
    const contentForm = formulario.querySelector('form');

    //Crio o input para nome, estilizo e adiciono em contentForm
    const nome = document.createElement('input');
    nome.type = 'text';
    nome.placeholder = "Digite seu nome";

    /*Para adicionar input nome ao contentForm, preciso localizar onde está o input
    email, pois quero necessariuamente adicionar anteriormente a ele */
    const inputEmail = formulario.querySelector('input[type="email"]');
    contentForm.insertBefore(nome, inputEmail);

    //Criar o input para confirmar senha e adicionar em contentForm
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = "Confirme sua senha";

    /*Adicionar confSenha como "child" de Form que já contém 4 elementos: input nome[0],
    input email[1], input password[2], button btn[3], ao adicionar input confSenha 
    antes de btn[3] ele ocupará a posição [3] e button btn passará para [4] */
    contentForm.insertBefore(confSenha, contentForm.children[3]);

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta!";
}

