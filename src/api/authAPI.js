export async function loginRequest(email,senha) {
    
    const response = await fetch ("/api/login.php",{
        method: "POST",
        headers: {
            "Accept":"application/json",
            "content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: new URLSearchParams({email,senha}).toString(),

        credentials: "same-origin"
    });

    let data = null;
    try{
        data = await response.json();
    }
    catch{
        data = null;
    }
    return {
        ok: true,
        user: data.user ?? null,
        raw: data
    };

}