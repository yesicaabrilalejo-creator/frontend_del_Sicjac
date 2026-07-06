import axios from "axios";

const API_URL = "https://sicjac-backend-1.onrender.com/clientes";

export const obtenerProductos = () => axios.get(API_URL);

export const obtenerProducto = (id) => axios.get(`${API_URL}/${id}`);

export const guardarProducto = (producto) => axios.post(API_URL, producto);

export const actualizarProducto = (id, producto) =>
    axios.put(`${API_URL}/${id}`, producto);

export const eliminarProducto = (id) =>
    axios.delete(`${API_URL}/${id}`);