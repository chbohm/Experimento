import ProductList from "@/components/ProductList";
import { productsToPreLoad } from "../../../public/data";



async function Home() {
    return (
        <div>
            <ProductList products={productsToPreLoad} />
            
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
