import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import Facturacion from "./pages/Facturacion";
import Reportes from "./pages/Reportes";
import Acerca from "./pages/Acerca";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/facturacion" element={<Facturacion />} />
                <Route path="/reportes" element={<Reportes />} />
                <Route path="/acerca" element={<Acerca />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
