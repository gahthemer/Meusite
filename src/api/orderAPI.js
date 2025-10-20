export async function endOrder(itens) {
    const url = "api/pedidos/reservas";

    const body = {
        pagamento: "pix",
        quartos: itens.map(it => ({

            id : it.quartosId,
            inicio: it.checkin,
            fim: it.checkout
        }
    ))
    }
     const res = await fetch(url,{
        method :"POST",
        headers: {
            "Accept": "application/json",
            "Content-Type":"application/json"
        },
        credentials:"same-origin",
        body: JSON.stringify(body)
     });

     if(!res.ok){
        const message = 'Erro ao enviar pedido: ${res.status}';
        throw new Error(message);
     }
     return res.json();
}