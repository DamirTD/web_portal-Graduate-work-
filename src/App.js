import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/shop/Navbar";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "./components/shop/Cancel";
import Shop from "./pages/Shop";
import Success from "./components/shop/Success";
import CartProvider from "./components/shop/CartContext";

function App() {
    return (
        <CartProvider>
            <Container>
                <NavbarComponent></NavbarComponent>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Shop/>} />
                        <Route path="success" element={<Success />} />
                        <Route path="cancel" element={<Cancel />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </CartProvider>
    );
}

export default App;