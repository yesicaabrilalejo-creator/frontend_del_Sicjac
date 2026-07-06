import axios from "axios";

const API_URL = "https://sicjac-backend-1.onrender.com/informes";

export const obtenerReportes = () => axios.get(API_URL);

export const obtenerReporte = (id) => axios.get(`${API_URL}/${id}`);

export const guardarReporte = (reporte) => axios.post(API_URL, reporte);

export const actualizarReporte = (id, reporte) =>
    axios.put(`${API_URL}/${id}`, reporte);

export const eliminarReporte = (id) =>
    axios.delete(`${API_URL}/${id}`);