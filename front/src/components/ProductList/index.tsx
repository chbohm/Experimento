import { IProduct } from "@/interfaces";
import ProductCard from "../ProductCard";
import { getProductsDB } from "@/helpers/productshelper";
import Link from "next/link";

const ProductList = async () => {
  const products = await getProductsDB();

  return (
    <div className="flex flex-row flex-wrap">
      {products && products.map((product) => (
        <Link key={product.id} href={`/detail/${product.id}`} passHref>
          <a>
            <ProductCard product={product} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
