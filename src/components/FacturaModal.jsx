import { useState, useEffect } from "react";

function FacturaModal({
                          mostrar,
                          cerrar,
                          guardar,
                          factura,
                          modoEditar
                      }) {

    const estadoInicial = {
        id: null,
        numeroFactura: "",
        cliente: "",
        monto: "",
        fecha: ""
    };

    const [datos, setDatos] = useState(estadoInicial);

    useEffect(() => {
        if (mostrar) {
            if (factura) {
                setDatos(factura);
            } else {
                setDatos(estadoInicial);
            }
        }
    }, [mostrar, factura]);

    if (!mostrar) {
        return null;
    }

    const cambiarDato = (e) => {
        const { name, value } = e.target;

        setDatos((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const enviar = (e) => {
        e.preventDefault();
        guardar(datos);
    };

    return (
        <div className="modal">
            <div className="modal-content">

                <h2>
                    {modoEditar ? "Editar Factura" : "Nueva Factura"}
                </h2>

                <form onSubmit={enviar}>

                    <input
                        type="text"
                        name="numeroFactura"
                        placeholder="Número de factura"
                        value={datos.numeroFactura}
                        onChange={cambiarDato}
                        required
                    />

                    <input
                        type="text"
                        name="cliente"
                        placeholder="Cliente"
                        value={datos.cliente}
                        onChange={cambiarDato}
                        required
                    />

                    <input
                        type="number"
                        name="monto"
                        placeholder="Monto"
                        value={datos.monto}
                        onChange={cambiarDato}
                        required
                    />

                    <input
                        type="date"
                        name="fecha"
                        value={datos.fecha}
                        onChange={cambiarDato}
                        required
                    />

                    <div className="modal-buttons">

                        <button
                            type="submit"
                            className="guardar"
                        >
                            {modoEditar ? "Actualizar" : "Guardar"}
                        </button>

                        <button
                            type="button"
                            className="cancelar"
                            onClick={cerrar}
                        >
                            Cancelar
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}

export default FacturaModal;