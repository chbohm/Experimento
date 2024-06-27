function Detail({params}: { params:{id:string}}) {
    const productId=params.id
    
    return (

        <div>
            <h1>{productId} </h1>
            <h2>name</h2>
            <p>description</p>
            <h4> $ price</h4>
            <button>Add to Cart</button>
        </div>

    );
}

export default Detail