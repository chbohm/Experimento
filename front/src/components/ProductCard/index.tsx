import { IProduct, IProductProps } from "@/interfaces";
import Image from "next/image";

function ProductCard({product}:IProductProps){
    return(
        <div>
            <img src={product.image} alt={product.name} />
            <h2>{product.name} </h2>
            <p> ${product.price} </p>
            <p>{product.description} </p>
            <button>Add to Cart</button>
        </div>
    )
}
export default ProductCard;
