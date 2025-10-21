export default function cadastroquarto() {
    const container = document.createElement('div');
    container.className = "container mt-4";
    container.id = "cadastroquarto";

    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8">
                <form id="formQuarto">
                    <h1 class="text-center mb-4">Cadastre-se</h1>
                    
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome do Quarto</label>
                        <input type="text" class="form-control" id="nome" placeholder="Digite o Nome do Quarto" required>
                    </div>

                    <div class="mb-3">
                        <label for="numero" class="form-label">Número do Quarto</label>
                        <input type="text" class="form-control" id="numero" placeholder="Ex: 101" required>
                    </div>

                    <div class="mb-3">
                        <label for="camasCasal" class="form-label">Camas de Casal</label>
                        <input type="number" class="form-control" id="camasCasal" placeholder="Quantas camas de casal?" min="0" required>
                    </div>

                    <div class="mb-3">
                        <label for="camasSolteiro" class="form-label">Camas de Solteiro</label>
                        <input type="number" class="form-control" id="camasSolteiro" placeholder="Quantas camas de solteiro?" min="0" required>
                    </div>

                    <div class="mb-3">
                        <label for="preco" class="form-label">Preço por Diária (R$)</label>
                        <input type="number" class="form-control" id="preco" placeholder="Ex: 150" min="0" step="0.01" required>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="disponivel">
                        <label class="form-check-label" for="disponivel">Quarto Disponível</label>
                    </div>

                    <button type="submit" class="btn btn-primary w-100">Cadastrar Quarto</button>
                </form>
            </div>
        </div>
    `;

    return container;
}