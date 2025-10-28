
export async function addRoom(formulario) {
    const formData = new FormData(formulario);
    const typeAccept = ['image/jpeg','image/png'];
    const inputFotos = formulario.querySelector('#formeFileMultiple');
    const imgs = inputFotos.files;

    for(let i = 0; i < imgs.length; i++){
        if(!typeAccept.includes(imgs[i].type)){
            throw new Error(`Arquivo" ${imgs[i].name}"nao e suportado`)
        }
    }

    const url = 'api/room';
    const response = await fetch(url,{
        method:"POST",
        body:formData
    });

    let result = null;
    try {
        result = await response.json();
    }
    catch {
        result = null; }
    if(!response.ok) {
        throw new Error(`Erro ao enviar requisição: ${response.status}`);
    }
    return result; }   



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