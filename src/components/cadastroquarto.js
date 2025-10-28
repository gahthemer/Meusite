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

                    <input name="fotos[]" type="file" multiple id="formFileMultiple"
                        class="form-control" accept="image/*" 
                    />

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


    return container;
}