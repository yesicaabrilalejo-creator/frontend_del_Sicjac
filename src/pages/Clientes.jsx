import { useEffect, useState } from "react";
import { obtenerClientes } from "../services/clienteService";

function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function cargarClientes() {
            try {
                const response = await obtenerClientes();
                setClientes(response.data);
            } catch (error) {
                console.error("Error al cargar clientes:", error);
            }
        }

        cargarClientes();
    }, []);

    return (
        <div style={{ padding: "40px" }}>
            <h1 style={{ color: "#D32F2F", marginBottom: "20px" }}>
                Gestión de Clientes
            </h1>

            <button
                style={{
                    backgroundColor: "#D32F2F",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginBottom: "20px",
                }}
            >
                Nuevo Cliente
            </button>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "white",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
            >
                <thead
                    style={{
                        backgroundColor: "#D32F2F",
                        color: "white",
                    }}
                >
                <tr>
                    <th style={{ padding: "12px" }}>Nombre</th>
                    <th style={{ padding: "12px" }}>Apellido</th>
                    <th style={{ padding: "12px" }}>Correo</th>
                    <th style={{ padding: "12px" }}>Teléfono</th>
                </tr>
                </thead>

                <tbody>
                {clientes.length > 0 ? (
                    clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td style={{ padding: "10px", textAlign: "center" }}>
                                {cliente.nombre}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center" }}>
                                {cliente.apellido}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center" }}>
                                {cliente.correo}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center" }}>
                                {cliente.telefono}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                textAlign: "center",
                                padding: "20px",
                            }}
                        >
                            No existen clientes registrados
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Clientes;