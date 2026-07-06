import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                background: "#D32F2F",
                padding: "15px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    color: "white",
                    margin: 0,
                    fontSize: "28px",
                }}
            >
                SICJAC
            </h2>

            <div style={{ display: "flex", gap: "25px" }}>
                <Link style={link} to="/">Inicio</Link>
                <Link style={link} to="/clientes">Clientes</Link>
                <Link style={link} to="/productos">Productos</Link>
                <Link style={link} to="/facturacion">Facturación</Link>
                <Link style={link} to="/reportes">Reportes</Link>
                <Link style={link} to="/acerca">Acerca de</Link>
            </div>
        </nav>
    );
}

const link = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "17px",
};

export default Navbar;