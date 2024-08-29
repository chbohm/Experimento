
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { getProductsDB } from "@/helpers/productshelper";
import { IProduct } from "@/interfaces";
import { useEffect, useState } from "react";



async function Home() {
    const products= await getProductsDB();
    return (
        <div>
            <ProductList products={products} />
            
        </div>
    );
}

export default Home




// import ProductCard from "@/components/ProductCard";
// import ProductList from "@/components/ProductList";
// import { getProductsDB } from "@/helpers/productshelper";
// import { IProduct } from "@/interfaces";
// import { useEffect, useState } from "react";
// import { productsToPreLoad } from "../../../public/data";
// import Link from "next/link";



// async function Home() {
//     const products= await getProductsDB();
//     return (
//         <div className="bg-red-700">
//              <div className="flex flex-row flex-wrap">
//             {/* <ProductList products={products} /> */}
//             <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       
//         <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden transition-transform duration-300 transform hover:scale-105 rounded-lg md:rounded-l-lg">
//     <img
//         src="https://storecba.com/wp-content/uploads/2021/06/home-pod-mini-2.jpg"
//         alt="pepe"
        
//     />
// </div>

      
//       <div className="p-4 flex flex-col justify-between">
//         <h2 className="text-lg font-semibold mb-2">"image"</h2>
//         <p className="text-gray-700 mb-4">Price: $200</p>
//         <p className="text-gray-700 mb-4">Stock: 5</p>
        
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
        
//       </div>
//     </div>
//     <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       
//        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden transition-transform duration-300 transform hover:scale-105 rounded-lg md:rounded-l-lg">
//    <img
//        src="https://storecba.com/wp-content/uploads/2021/06/home-pod-mini-2.jpg"
//        alt="pepe"
       
//    />
// </div>

     
//      <div className="p-4 flex flex-col justify-between">
//        <h2 className="text-lg font-semibold mb-2">"image"</h2>
//        <p className="text-gray-700 mb-4">Price: $200</p>
//        <p className="text-gray-700 mb-4">Stock: 5</p>
       
//          <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
       
//      </div>
//    </div>
//             </div>
//         </div>
        
//     );
// }

// export default Home

