import { useEffect, useState } from "react";
import "../styles/Facturacion.css";
import FacturaModal from "../components/FacturaModal";

import {
    obtenerFacturas,
    guardarFactura,
    actualizarFactura,
    eliminarFactura
} from "../services/facturaService";

function Facturacion() {

    const [facturas, setFacturas] = useState([]);

    const [buscar, setBuscar] = useState("");

    const [mostrarModal, setMostrarModal] = useState(false);

    const [modoEditar, setModoEditar] = useState(false);

    const [facturaActual, setFacturaActual] = useState({

        id: null,

        numeroFactura: "",

        cliente: "",

        monto: "",

        fecha: ""

    });
    useEffect(() => {
        cargarFacturas();
    }, []);

    async function cargarFacturas() {

        try {

            const response = await obtenerFacturas();

            setFacturas(response.data);

        } catch (error) {

            console.error("Error al cargar facturas:", error);

        }

    };

    const abrirNuevo = () => {

        setFacturaActual({
            id: null,
            numeroFactura: "",
            cliente: "",
            monto: "",
            fecha: ""
        });

        setModoEditar(false);

        setMostrarModal(true);

    };
    const editarFactura = (factura) => {

        setFacturaActual(factura);

        setModoEditar(true);

        setMostrarModal(true);

    };

    const eliminar = async (id) => {

        const confirmar = window.confirm("¿Desea eliminar esta factura?");

        if (!confirmar) return;

        try {

            await eliminarFactura(id);

            cargarFacturas();

        } catch (error) {

            console.error("Error al eliminar:", error);

        }

    };

    const guardar = async (factura) => {

        try {

            if (modoEditar) {

                await actualizarFactura(factura.id, factura);

            } else {

                await guardarFactura(factura);

            }

            setMostrarModal(false);

            cargarFacturas();

        } catch (error) {

            console.error("Error al guardar:", error);

        }

    };
    const facturasFiltradas = facturas.filter((factura) =>
        factura.numeroFactura.toLowerCase().includes(buscar.toLowerCase()) ||
        factura.cliente.toLowerCase().includes(buscar.toLowerCase())
    );

    return (
        <div className="facturacion">

            <h1 className="titulo">
                Gestión de Facturación
            </h1>

            <div className="barra">

                <input
                    type="text"
                    className="buscar"
                    placeholder="Buscar factura..."
                    value={buscar}
                    onChange={(e) => setBuscar(e.target.value)}
                />

                <button
                    className="nuevo"
                    onClick={abrirNuevo}
                >
                    + Nueva Factura
                </button>

            </div>
            <table>

                <thead>

                <tr>

                    <th>N° Factura</th>

                    <th>Cliente</th>

                    <th>Fecha</th>

                    <th>Monto</th>

                    <th>Acciones</th>

                </tr>

                </thead>

                <tbody>

                {facturasFiltradas.map((factura) => (

                    <tr key={factura.id}>

                        <td>{factura.numeroFactura}</td>

                        <td>{factura.cliente}</td>

                        <td>{factura.fecha}</td>

                        <td>Bs. {factura.monto}</td>

                        <td>

                            <button
                                className="editar"
                                onClick={() => editarFactura(factura)}
                            >
                                Editar
                            </button>

                            <button
                                className="eliminar"
                                onClick={() => eliminar(factura.id)}
                            >
                                Eliminar
                            </button>

                        </td>

                    </tr>

                ))}

                </tbody>

            </table>
            <FacturaModal
                mostrar={mostrarModal}
                cerrar={() => setMostrarModal(false)}
                guardar={guardar}
                factura={facturaActual}
                modoEditar={modoEditar}
            />

        </div>
    );
}

export default Facturacion;