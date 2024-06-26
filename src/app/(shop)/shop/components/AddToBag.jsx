"use client";

import React from "react";
import { Button } from "../../../../components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../../../../lib/sanity";

function AddToBag({ currency, description, image, name, price, price_id }) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
      className="bg-blue-400 text-white"
    >
      Add To Cart
    </Button>
  );
}

export default AddToBag;
