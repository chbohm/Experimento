// import { IProduct, IProductProps } from "@/interfaces";
// import Image from "next/image";
// import Link from "next/link";
// const ProductCard: React.FC<IProductProps> = ({product}) => {
    

//     return (
//         <div className="flex flex-row items-center rounded-lg bg-gray-600 text-surface shadow-secondary w-[340px] h-[260px] md:flex-row gap-4">
//             <img className="h-full max-h-[260px] w-full max-w-[180px] rounded-t-lg object-cover md:w-48" src={product.image} 
//                 alt={`Product image ${product.name}`} 
                
                
//             />
       
           
//             <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-700 mb-4">Price: ${product.price}</p>
//             <p className="text-gray-700 mb-4">Stock:{product.stock}</p>
//             <Link href={`/detail/${product.id}`}>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
//             </Link>
//         </div>
//     );
// }

// export default ProductCard;

import { IProductProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<IProductProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Link href={`/detail/${product.id}`} passHref>
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden transition-transform duration-300 transform hover:scale-105 rounded-lg md:rounded-l-lg">
    <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover"
        priority
    />
</div>

      </Link>
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">Price: ${product.price}</p>
        <p className="text-gray-700 mb-4">Stock: {product.stock}</p>
        <Link href={`/detail/${product.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;


