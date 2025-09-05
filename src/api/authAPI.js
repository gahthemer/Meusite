export async function loginRequest(email,senha) {
    
    const dados = { email,password: senha};

    const response = await fetch ("api/login",{
        method: "POST",
        headers: {
            "Accept":"application/json",
            "content-Type": "application/json"
        },


        body : json.stringify(dados),
        //body: new URLSearchParams({email,senha}).toString(),

        credentials: "same-origin"
    });

    let data = null;
    try{
        data = await response.json();
    }
    catch{
        data = null;
    }

    if (!data || !data.token){
        const message = "Token ausente";
        return {ok: false, token:null ,raw: data, message};
    }

    return {
        ok: true,
        token: data.token,
        raw: data
    };


}

export function saveToken(token){
    localStorage.setItem("auth_token",token);
}

export function getToken(){
   return localStorage.getItem("auth_token");
}

export function clearToken(){
    localStorage.removeItem("auth_token");
}