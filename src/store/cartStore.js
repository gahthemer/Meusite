const key = "hotel_cart";

export function setCart(cart){
    localStorage.setItem(key, JSON.stringify(cart));
}
export function getCart(){
    try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : { status: "draft", itens: []};
    }
    catch {
        return {status: "draft", itens: []};
    }
}

export function addItemToCart(item){
    const cart = getCart();
    cart.itens.push(item);
    setCart(cart);
    return cart;
}

export function removeItemHotel_cart(i){
    const cart = getCart();
    cart.itens.splice(i,1);
    setCart(cart);
    return cart;
}
export function clearhotel_cart(){
    setCart({
        status: "draft",
        itens:[]
    });
}

export function getTotals(){
    const {itens} = getCart();
    const total = itens.reduce((acc, it) => 
    acc + Number(it.subtotal || 0),0);

    return {
        total,
        qnt_itens:itens.length
    };
}