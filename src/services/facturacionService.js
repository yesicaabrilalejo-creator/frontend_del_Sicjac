import axios from "axios";

const API_URL = "https://sicjac-backend-1.onrender.com/facturacion";

export const obtenerFacturas = () => axios.get(API_URL);

export const obtenerFactura = (id) => axios.get(`${API_URL}/${id}`);

export const guardarFactura = (factura) => axios.post(API_URL, factura);

export const actualizarFactura = (id, factura) =>
    axios.put(`${API_URL}/${id}`, factura);

export const eliminarFactura = (id) =>
    axios.delete(`${API_URL}/${id}`);