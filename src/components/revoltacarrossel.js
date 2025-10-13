export default function Revoltcard(revoltacarditem,index){
    const {
        path,
        title,
        text
    }= revoltacarditem || {}
    const revoltacard = document.createElement('div');
    revoltacard.innerHTML = 
    `<div class="card" style="width: 18rem;">
        <img src="public/assets/img/${path}" class="card-img-top" alt="...">
 
        <div class="btn-group dropup" >
            <button type="button" class="btn"
                data-bs-toggle="dropdown" aria-expanded="false" style="border": none";>
                <img src="public/assets/img/caret-up-fill.svg" width="20" height="20">
                <h3 class="card-text" style="font-size: 1rem;font-weight: 700;">${title}Restaurante.</h3>
            </button>
           
            <ul class="dropdown-menu" style="border-radius: 0.375rem 0.375rem 0 0;">
                <p class = "card-text" style="text-align:center";>${text} Restaurante despojado e simples para sua familia</p>
            </ul>
        </div>
       
    </div>`
    return revoltacard;
}