import ProductList from "@/components/ProductList";
import { productsToPreLoad } from "../../../public/data";
import ProductCard from "@/components/ProductCard";
import { getProductsDB } from "@/helpers/productshelper";



async function Home() {
    const products= await getProductsDB();
    return (
        <div>
            <ProductList products={products} />
            
        </div>
    );
}

export default Home



// import ProductList from "@/components/ProductList";
// import { IProduct } from "@/interfaces";



// const HomePage = () => {
//   return (
//     <div>
//       <h1>Bienvenido a la tienda</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default HomePage;
