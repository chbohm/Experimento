function Checkout() {
    const products:string[] = []; 
    return (
        <div>
            <div>
                <span>PRODUCT</span>
            </div>
            <div>
                <span>PRICE</span>
            </div> 
            <div>
                <span>REMOVE</span>
            </div> 
            {products.length === 0 ? (
                <h1>YOUR CART IS EMPTY</h1>
            ) : (
                <h1>YOUR CART</h1>
            )}
        </div>
    );
}

export default Checkout;
