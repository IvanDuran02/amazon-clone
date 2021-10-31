import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartitems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  return (
    <Router>
      {
      !user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header 
          user={user}
          signOut={signOut} 
          cartItems={cartItems} />

          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
           
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #eaeded;
`;
