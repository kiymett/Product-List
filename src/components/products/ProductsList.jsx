import React from 'react'
import ProductsCard from './ProductsCard';
import "./Products.scss";

// const Productslist = ({products}) => {
//     console.log(products)
//   return (
//     <div>Productslist</div>
//   )
// }

const ProductsList = ({ products }) => {
    console.log(products);
    return (
      <div className="products-list">
         {/* {products.map(({price, title, image, id})=>(
    //         <div>
    //             <div>
    //                 <h1>{price}</h1>
    //             </div>
    //             <img src={image} alt={title} width="100px"/>
    //             <div>
    //                 <h2>{title}</h2>
    //             </div>
    //         </div>     
    //    ))}  */}
     {products.map((product) => (
        <ProductsCard key={product.id} {...product} />
      ))}
      </div>
    
      )
    }
    
export default ProductsList