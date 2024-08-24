import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { Card, Button } from "react-bootstrap";
import productsData from "../products.json";

const Products = () => {
  // const CartProducts = useSelector((state) => state.cart);
  const [products, setProducts] = useState(productsData.products);
  const dispatch = useDispatch();
  
  const isProductInCart = (productId) => {
    // for (let x of CartProducts) {
    //   if (x.id === productId) {
    //     return true;
    //   }
    // }
    // return false;
  };
  // console.log(CartProducts);
  const toggleCart = (product) => {
    if (isProductInCart(product.id)) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
    }
  };
  
  useEffect(() => {
    console.log({productsData});  
    const fetchProducts = () => {
      // fetch("/mocks/products.json")
      // .then((response) => response.json())
      // .then((result) => {
      //   console.log({result});
      //   setProducts(result.products)
      // })
      // .catch((e) => console.log(e));
    }
    fetchProducts();
  }, []);

  const cards = products.map((product) => (
    <div className="card-container" key={product.id}>
      <div className="card-products">
        <Card style={{ width: "18rem" }} className="cards">
          <img
            variant="top"
            src={product.thumbnail}
            style={{ width: "250px", height: "200px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              Current Price: <i className="fa fa-inr"></i>
              {product.price}
            </Card.Text>
            <Button
              variant="primary"
              className="add"
              onClick={() => {
                toggleCart(product);
              }}
            >
              {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-white">Shopping Cart Using React-Redux</h1>
      <div className="card-products">{cards}</div>
    </>
  );
};

export default Products;