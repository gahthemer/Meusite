export default function cadastroQuarto() {
    const container = document.createElement('div');
    container.className = "container mt-4";
    container.id = "cadastroquarto";

    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8">
                <form id="formQuarto" novalidate>
                    <h1 class="text-center mb-4">Cadastrar Quarto</h1>
                    
                    <div id="alertContainer"></div>

                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome do Quarto</label>
                        <input type="text" class="form-control" id="nome" placeholder="Ex: Suíte Luxo" required>
                        <div class="invalid-feedback">Por favor, insira o nome do quarto.</div>
                    </div>

                    <div class="mb-3">
                        <label for="numero" class="form-label">Número do Quarto</label>
                        <input type="text" class="form-control" id="numero" placeholder="Ex: 101" required>
                        <div class="invalid-feedback">Número do quarto já existe ou é inválido.</div>
                    </div>

                    <div class="mb-3">
                        <label for="camasCasal" class="form-label">Camas de Casal</label>
                        <input type="number" class="form-control" id="camasCasal" min="0" value="0" required>
                    </div>

                    <div class="mb-3">
                        <label for="camasSolteiro" class="form-label">Camas de Solteiro</label>
                        <input type="number" class="form-control" id="camasSolteiro" min="0" value="0" required>
                    </div>

                    <div class="mb-3">
                        <label for="preco" class="form-label">Preço por Diária (R$)</label>
                        <input type="number" class="form-control" id="preco" min="0.01" step="0.01" placeholder="Ex: 150.00" required>
                        <div class="invalid-feedback">O preço deve ser maior que zero.</div>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="disponivel" checked>
                        <label class="form-check-label" for="disponivel">Quarto Disponível</label>
                    </div>

                    <button type="submit" class="btn btn-primary w-100" id="btnSubmit">
                        <span class="spinner-border spinner-border-sm d-none" role="status"></span>
                        Cadastrar Quarto
                    </button>
                </form>
            </div>
        </div>
    `;

    function initForm() {
        const form = container.querySelector('#formQuarto');
        const btnSubmit = container.querySelector('#btnSubmit');
        const spinner = btnSubmit.querySelector('.spinner-border');
        const alertContainer = container.querySelector('#alertContainer');

        
        function showAlert(message, type = 'danger') {
            alertContainer.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
        }

        
        function validateForm(dados) {
            const quartos = JSON.parse(localStorage.getItem('quartos') || '[]');
            const numeroExiste = quartos.some(q => q.numero === dados.numero);

            if (numeroExiste) {
                showAlert('Este número de quarto já está cadastrado.', 'warning');
                container.querySelector('#numero').classList.add('is-invalid');
                return false;
            }

            if (dados.preco <= 0) {
                showAlert('O preço deve ser maior que zero.', 'danger');
                container.querySelector('#preco').classList.add('is-invalid');
                return false;
            }

            return true;
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            
            container.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

            const formData = new FormData(form);
            const dados = {
                nome: formData.get('nome').trim(),
                numero: formData.get('numero').trim(),
                camasCasal: parseInt(formData.get('camasCasal')) || 0,
                camasSolteiro: parseInt(formData.get('camasSolteiro')) || 0,
                preco: parseFloat(formData.get('preco')),
                disponivel: formData.get('disponivel') === 'on',
                id: Date.now().toString() // ID único
            };

            
            if (!validateForm(dados)) return;

            
            btnSubmit.disabled = true;
            spinner.classList.remove('d-none');

           
            setTimeout(() => {
                try {
                    const quartos = JSON.parse(localStorage.getItem('quartos') || '[]');
                    quartos.push(dados);
                    localStorage.setItem('quartos', JSON.stringify(quartos));

                    showAlert('Quarto cadastrado com sucesso!', 'success');
                    form.reset();
                } catch (err) {
                    showAlert('Erro ao salvar quarto. Tente novamente.', 'danger');
                    console.error(err);
                } finally {
                    btnSubmit.disabled = false;
                    spinner.classList.add('d-none');
                }
            }, 800);
        });

        
        ['nome', 'numero', 'preco'].forEach(id => {
            const input = container.querySelector(`#${id}`);
            input.addEventListener('input', () => {
                input.classList.remove('is-invalid');
            });
        });
    }

   
    const observer = new MutationObserver((mutations, obs) => {
        if (document.contains(container)) {
            initForm();
            obs.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return container;
}