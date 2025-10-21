import cadastroquarto from "../components/cadastroquarto.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderRegisterQuartos() {
    
    const nav = document.getElementById("navbar");
        nav.innerHTML = "";
        nav.appendChild(NavBar());

    const foot = document.getElementById("footer");
        foot.innerHTML = "";
        foot.appendChild(Footer());

    const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = ""; // LIMPA TUDO
        const formulario = cadastroquarto();
        mainContent.appendChild(formulario);
    const form = document.getElementById("formQuarto");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const dados = {
                nome: formData.get('nome'),
                numero: formData.get('numero'),
                camasCasal: parseInt(formData.get('camasCasal')),
                camasSolteiro: parseInt(formData.get('camasSolteiro')),
                preco: parseFloat(formData.get('preco')),
                disponivel: formData.get('disponivel') === 'on'
            };

            try {
                // SUBSTITUA PELA SUA FUNÇÃO REAL
                console.log("Dados enviados:", dados);
                // await createRequest(dados);
                
                alert("Quarto criado com sucesso!");
                form.reset();
            } catch (error) {
                console.error("Erro ao criar quarto:", error);
                alert("Erro ao criar quarto. Tente novamente.");
            }
        });
    }