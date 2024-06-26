import ProductList from "@/components/ProductList";
import { productsToPreLoad } from "../../../public/data";



function Home() {
    return (
        <div>
            <ProductList products={productsToPreLoad} />
            
        </div>
    );
}

export default Home