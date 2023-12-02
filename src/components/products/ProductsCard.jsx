import React from 'react'

const ProductsCard = ({title, image, price}) => {
    return (
            <div className="card">
                <div className="price">
                    <h3>{price}$</h3>
                </div>
                <img src={image} alt={title} />
                <div className="card__over">
                    <h2>{title}</h2>
                </div>
            </div>   
    );
};

export default ProductsCard