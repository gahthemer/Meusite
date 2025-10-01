export async function createRequest(nome,cpf,telefone,email,senha) {
    const dados = (nome,cpf,telefone,email,senha);
    const response = await fetch("api/cliente",{
        method: "Post",
        headers: {
            "Accept":"application/json",
            "content-Type": "application/json"
        },
         body : JSON.stringify(dados),
        //body: new URLSearchParams({email,senha}).toString(),

        credentials: "same-origin"
    })
    
}