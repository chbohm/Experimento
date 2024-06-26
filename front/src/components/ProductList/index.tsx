import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductCard";

function ProductList({products}:IProductListProps){
return(
    <div>
        {products.map((product:IProduct)=>(
            <ProductCard product={product} key={product.id} />
        ))}
    </div>
)
}
export default ProductList;