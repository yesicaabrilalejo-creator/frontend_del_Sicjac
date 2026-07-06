import { useState, useEffect, useCallback } from "react";
import { obtenerProductos, guardarProducto } from "../services/productoService";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const [formData, setFormData] = useState({
        nombre: "",
        categoria: "",
        precio: "",
        stock: ""
    });

    const cargarProductos = useCallback(async () => {
        try {
            const response = await obtenerProductos();
            setProductos(response.data);
        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    }, []);

    useEffect(() => {
        const fetchInicial = async () => {
            await cargarProductos();
        };
        fetchInicial();
    }, [cargarProductos]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const stockIngresado = parseInt(formData.stock, 10);
        const precioIngresado = parseFloat(formData.precio);

        if (stockIngresado < 0) {
            alert("El stock no puede ser un número negativo.");
            return;
        }

        if (precioIngresado < 0) {
            alert("El precio no puede ser un número negativo.");
            return;
        }

        const nuevoProducto = {
            nombre: formData.nombre,
            categoria: formData.categoria,
            precio: precioIngresado,
            stock: stockIngresado
        };

        try {
            // Guardamos el producto en la base de datos
            await guardarProducto(nuevoProducto);

            // Ocultamos y limpiamos el formulario
            setMostrarFormulario(false);
            setFormData({ nombre: "", categoria: "", precio: "", stock: "" });

            // Recargamos la lista desde la base de datos para ver los cambios
            await cargarProductos();
        } catch (error) {
            console.error("Error al guardar el producto:", error);
            alert("Hubo un error al guardar el producto.");
        }
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1 style={{ color: "#D32F2F", marginBottom: "20px" }}>
                Gestión de Productos
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
                {mostrarFormulario ? "Cancelar" : "Nuevo Producto"}
            </button>

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
                        placeholder="Nombre del Producto"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />

                    <input
                        type="text"
                        name="categoria"
                        placeholder="Categoría"
                        value={formData.categoria}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", flexGrow: 1 }}
                    />

                    <input
                        type="number"
                        name="precio"
                        placeholder="Precio (Bs.)"
                        step="0.01"
                        min="0"
                        value={formData.precio}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "120px" }}
                    />

                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        min="0"
                        value={formData.stock}
                        onChange={handleInputChange}
                        required
                        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100px" }}
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
                    <th style={{ padding: "12px" }}>Categoría</th>
                    <th style={{ padding: "12px" }}>Precio</th>
                    <th style={{ padding: "12px" }}>Stock</th>
                </tr>
                </thead>

                <tbody>
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <tr key={producto.id}>
                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                {producto.nombre}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                {producto.categoria}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                {producto.precio}
                            </td>

                            <td style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #eee" }}>
                                {producto.stock}
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
                            No existen productos registrados
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default Productos;