 
 export default function carrinhoForm() {
 
 const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.height = "100vh";

    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '400px';
    divRoot.appendChild(container);

    const titulo = document.createElement('h1');
    titulo.textContent = 'Seu Carrinho';
    titulo.className = 'titulo';

     const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = "Pagar";
    btn.className = 'btn btn-primary';
    formulario.appendChild(btn); 
    
    container.appendChild(titulo);
 }