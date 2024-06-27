import { IProduct, IProductProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }: IProductProps) {
    return (
        <div>
            <img src={product.image} alt={product.name} />
           
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link href={`/detail/${product.id}`}>
                <button>SHOW DETAILS {">"}</button>
            </Link>
        </div>
    );
}

export default ProductCard;
