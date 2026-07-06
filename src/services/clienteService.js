import axios from "axios";

const API_URL = "http://localhost:8080/clientes";

export const obtenerClientes = () => axios.get(API_URL);

export const obtenerCliente = (id) => axios.get(`${API_URL}/${id}`);

export const guardarCliente = (cliente) => axios.post(API_URL, cliente);

export const actualizarCliente = (id, cliente) =>
    axios.put(`${API_URL}/${id}`, cliente);

export const eliminarCliente = (id) =>
    axios.delete(`${API_URL}/${id}`);