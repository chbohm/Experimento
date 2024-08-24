import { IProduct, IProductProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
const ProductCard: React.FC<IProductProps> = ({product}) => {
    

    return (
        <div className="flex flex-row items-center rounded-lg bg-gray-600 text-surface shadow-secondary w-[340px] h-[260px] md:flex-row gap-4">
            <img className="h-full max-h-[260px] w-full max-w-[180px] rounded-t-lg object-cover md:w-48" src={product.image} 
                alt={`Product image ${product.name}`} 
                
                
            />
           
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">Price: ${product.price}</p>
            <p className="text-gray-700 mb-4">Stock:{product.stock}</p>
            <Link href={`/detail/${product.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
            </Link>
        </div>
    );
}

export default ProductCard;



