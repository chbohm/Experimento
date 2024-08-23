


import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductCard";
import Link from "next/link";

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {products &&
      products.map((product: IProduct) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} {...product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;


// import { IProduct } from "@/interfaces";
// import ProductCard from "../ProductCard";
// import { getProductsDB } from "@/helpers/productshelper";
// import Link from "next/link";

// const ProductList = async () => {

//   const products= await getProductsDB();

//   return (
//     <div className="flex flex-row flex-wrap">
//       {products &&
//         products.map((product: IProduct) => (
//           <Link href={/product/${product.id}} key={product.id}>
//             <ProductCard product={product} {...product} />
//           </Link>
//           //hace que al hacer click, el evento se dispare y traiga los detalles del producto
//         ))}
//     </div>
//   );
// };

// export default ProductList;