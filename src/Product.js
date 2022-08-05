import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const history=useHistory()

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    }).then(()=>{
      
    })
   
  };

  return (
   <div className="container">
     <div className="product">
      <div className="product__info">
        <p>{title}</p>
        </div>
        <div className="product__price">
         <span className="price">
         <small >$</small>
          <strong>{price}</strong>
         </span>
        </div>
        
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <div>🌟</div>
            ))}
        </div>
      

      <img src={image} alt="" />
      <Link to ='/checkout'>

      <button onClick={addToBasket}>Add to Basket</button>
      </Link>
    </div>
   </div>
  );
}

export default Product;