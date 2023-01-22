import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "./components/shop/Cancel";
import Shop from "./pages/Shop";
import Success from "./components/shop/Success";
import CartProvider from "./components/shop/CartContext";
import Main from "./pages/Main";
import React from "react";
import HealthyFood from "./pages/main/healthy-food";

function App() {
    return (
        <CartProvider>
            <Container>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Main />} />
                        <Route path="/healthy-food" element={<HealthyFood/>} />

                        <Route path="shop" element={<Shop/>} />
                        <Route path="success" element={<Success />} />
                        <Route path="cancel" element={<Cancel />} />
                        {/*<Route path="/blog" component={<Blog />} />*/}
                    </Routes>
                </BrowserRouter>
            </Container>
        </CartProvider>
    );
}

export default App;