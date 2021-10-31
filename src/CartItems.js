import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartItems = ({ cartItems }) => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />

      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;

const Container = styled.div`
  background-color: white;
  flex: 0.8;
  margin-right: 18px;
  padding: 20px;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
`;
const hr = styled.div``;

const ItemsContainer = styled.div``;
