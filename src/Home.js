import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "./firebase";

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    //this will fetch for (products) in the database
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => ({
        // this will loop through the array and grab the info stored in them
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
      // saving into the STATE
    });
  };
  // useEffect so that the data only renders once
  useEffect(() => {
    getProducts(products);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  display: flex;
  justify-content: space-around;
`;
