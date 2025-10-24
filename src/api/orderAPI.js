export async function endOrder(itens) {
    const url = "api/pedidos/reservas";

    const body = {
        cliente_id: 41,
        pagamento: "pix",
        quartos: itens.map(it => ({

            id : it.quartosId,
            inicio: it.checkin,
            fim: it.checkout
        }
    ))
    }
     const res = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify(body)
    });

     let data = null;
    try {
        //Retorno em json() da requisição armazenado em data
        data = await res.json();
    }
    catch { data = null; }
    if (!data) {
        const message = `Erro ao enviar pedido: ${res.status}`;
        return {ok: false, raw: data, message}; }
    return {
        ok: true,
        raw: data
    }
}