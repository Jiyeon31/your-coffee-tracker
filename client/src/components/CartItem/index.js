import React from 'react';

import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  return (
    <div className="flex-row">
      <div>
        <Link to={`/products/${item._id}`}>
        <img
          src={`/images/${item.image}`}
          alt=""
          className="cartcoffee"
        />
        
      </Link>
        
      </div>
      <div>
        <div>{item.name}</div>
        <div>
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;