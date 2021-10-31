import React from "react";
import styled from "styled-components";
import { db } from "./firebase";

function Product({ title, price, rating, image, id }) {
  // unpacked the props

  const addToCart = () => {
    const cartitems = db.collection("cartitems").doc(id);
    cartitems.get().then((doc) => {
      if (doc.exists) {
        cartitems.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartitems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };
  return (
    <Container>
      <Title>
        {title} {/* dont need to do props.title */}
      </Title>

      <Price>${price}</Price>

      <Rating>
        {
          Array(rating) // makes an empty array by how many numbers are in rating prop
            .fill() //fills the empty array
            .map((rating) => (
              <p>🌟</p>
            )) //loops and adds 🌟 to empty array
        }
      </Rating>

      <Image src={image} />

      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  min-width: 250px;
`;

const Title = styled.span``;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;

const Rating = styled.div`
  display: flex;
`;

const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
`;
