import { IProduct, IProductProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
const ProductCard: React.FC<IProductProps> = ({product}) => {
    

    return (
        <div className="flex flex-row itmens-center rounded-lg bg-white shadow-secondary  w=[200px] h=[200px]">
            <img className="h-full max-h-[200px] w-full-[180px] rounded-t-lg object-cover md:w:48"
                src={product.image} 
                alt={product.name} 
                
            />
           
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <Link href={`/detail/${product.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
            </Link>
        </div>
    );
}

export default ProductCard;
