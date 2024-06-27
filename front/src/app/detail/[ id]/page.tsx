function Detail({params}: { params:{id:string}}) {
    const productId=params.id
    
    return (
       <div className="text-white">
            <h1>{productId} </h1>
            <h2>name</h2>
            <p>description</p>
            <h4> $ price</h4>
            <button className="text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">Add to Cart</button>
        </div>

    );
}

export default Detail;