import { useEffect, useState, useCallback } from "react";
import { obtenerClientes, guardarCliente } from "../services/clienteService";

function Clientes() {
    const [clientes, setClientes] = useState([]);

    // Estados para manejar el formulario
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        telefono: ""
    });

    // Envolvemos la función en useCallback para evitar problemas de dependencias en useEffect
    const cargarClientes = useCallback(async () => {
        try {
            const response = await obtenerClientes();
            setClientes(response.data);
        } catch (error) {
            console.error("Error al cargar clientes:", error);
        }
    }, []);

    useEffect(() => {
        // Envolvemos la llamada en una función asíncrona interna para evitar el warning
        // "Promise returned is ignored" de ESLint.
        const fetchInicial = async () => {
            await cargarClientes();
        };

        fetchInicial();
    }, [cargarClientes]);

    // Manejador para los cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejador para enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await guardarCliente(formData);
            // Ocultar y limpiar el formulario después de guardar
            setMostrarFormulario(false);
            setFormData({ nombre: "", apellido: "", correo: "", telefono: "" });
            // Faltaba el await aquí (soluciona el warning "Missing await...")
            await cargarClientes();
        } catch (error) {
            console.error("Error al guardar el cliente:", error);
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1 style={{ color: "#D32F2F", marginBottom: "20px" }}>
                Gestión de Clientes
            </h1>

            <button
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
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
                {mostrarFormulario ? "Cancelar" : "Nuevo Cliente"}
            </button>

            {/* Formulario condicional para nuevo cliente */}
            {mostrarFormulario && (
                <form
                    onSubmit={handleSubmit}
                    style={{
                        marginBottom: "20px",
                        padding: "20px",
                        backgroundColor: "white",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <input
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <input
                        type="email"
                        name="correo"
                        placeholder="Correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <input
                        type="text"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}
                    >
                        Guardar
                    </button>
                </form>
            )}

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
                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                {cliente.nombre}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                {cliente.apellido}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                {cliente.correo}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
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