import axios from "axios";

const API_URL = "http://localhost:8080/api/facturas";

export const obtenerFacturas = () => {
    return axios.get(API_URL);
};

export const guardarFactura = (factura) => {
    return axios.post(API_URL, factura);
};

export const actualizarFactura = (id, factura) => {
    return axios.put(`${API_URL}/${id}`, factura);
};

export const eliminarFactura = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};