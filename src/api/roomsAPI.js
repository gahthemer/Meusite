export async function listAllRoomsRequest({inicio,fim,qnt}) {
    
 const params = new URLSearchParams();

    if(inicio) params.set("inicio",inicio);
    if(fim) params.set("fim",fim);
    if(qnt !== null && qnt !== "")params.set("qnt",String(qnt));

    const url = `api/room/disponiveis?${params.toString()}`;

    const response = await fetch(url,{
        method:"GET",
        headers:{
            "Accept":"application/json",
        },
        credentials:"same-origin"
    });
    let data = null;
    try{
        data = await response.json();
    }
    catch{
        data = null;
    }
    if(!response.ok){
        const msg = data?.message || "falha ao buscar quartos disponiveis!";
        throw new Error("msg");
        
    }

    const quartos= Array.isArray(data?.Quartos) ? data.Quartos : [];
    console.log(quartos);
    return quartos;
    
}