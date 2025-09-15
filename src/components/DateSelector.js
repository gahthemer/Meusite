
export default function DateSelector() {
  const date = document.createElement('div');

  date.innerHTML = `
  <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Reserva</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <form class="border p-4 rounded shadow">
                    <div class="row g-3">
                        <div class="col-md-4">
                            <label for="checkin" class="form-label">Check-in</label>
                            <input type="date" class="form-control" id="checkin" required>
                        </div>
                        <div class="col-md-4">
                            <label for="checkout" class="form-label">Check-out</label>
                            <input type="date" class="form-control" id="checkout" required>
                        </div>
                        <div class="col-md-2">
                            <label for="pessoas" class="form-label">Pessoas</label>
                            <select class="form-select" id="pessoas" required>
                                <option value="" disabled selected>Selecione</option>
                                <option value="1">1 pessoa</option>
                                <option value="2">2 pessoas</option>
                                <option value="3">3 pessoas</option>
                                <option value="4">4 pessoas</option>
                                <option value="5">5+ pessoas</option>
                            </select>
                        </div>
                        <div class="col-md-2 d-flex align-items-end">
                            <button type="submit" class="btn btn-primary w-100">Pesquisar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;

  return date;
}