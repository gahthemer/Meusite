import { getToken } from "./authAPI";

export async function listAllRoomsRequest() {
    
    const token = getToken();
    const response = await fetch("api/rooms",{
        method: "GET",
        headers: {
             "Accept":"application/json",
            "content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    
}