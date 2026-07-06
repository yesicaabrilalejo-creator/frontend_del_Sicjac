function Reportes(){

    return(

        <div style={{padding:"40px"}}>

            <h1
                style={{
                    color:"#D32F2F",
                    marginBottom:"35px"
                }}>
                Reportes del Sistema
            </h1>

            <div
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
                    gap:"25px"
                }}>

                <Card
                    titulo="Ventas"
                    cantidad="Bs 52.300"
                    icono="💰"
                />

                <Card
                    titulo="Facturas"
                    cantidad="126"
                    icono="🧾"
                />

                <Card
                    titulo="Clientes"
                    cantidad="84"
                    icono="👥"
                />

                <Card
                    titulo="Productos"
                    cantidad="230"
                    icono="📦"
                />

            </div>

            <div
                style={{
                    marginTop:"45px",
                    background:"white",
                    padding:"25px",
                    borderRadius:"10px",
                    boxShadow:"0 0 10px rgba(0,0,0,.15)"
                }}>

                <h2>Resumen General</h2>

                <table
                    style={{
                        width:"100%",
                        borderCollapse:"collapse",
                        marginTop:"20px"
                    }}>

                    <thead>

                    <tr
                        style={{
                            background:"#D32F2F",
                            color:"white"
                        }}>

                        <th style={{padding:"15px"}}>Reporte</th>

                        <th>Descripción</th>

                        <th>Acción</th>

                    </tr>

                    </thead>

                    <tbody>

                    <Fila
                        nombre="Ventas Mensuales"
                        descripcion="Reporte completo de ventas."
                    />

                    <Fila
                        nombre="Clientes Registrados"
                        descripcion="Listado de clientes."
                    />

                    <Fila
                        nombre="Productos"
                        descripcion="Inventario disponible."
                    />

                    <Fila
                        nombre="Facturación"
                        descripcion="Facturas emitidas."
                    />

                    </tbody>

                </table>

            </div>

        </div>

    );

}

function Card({titulo,cantidad,icono}){

    return(

        <div
            style={{
                background:"white",
                borderRadius:"10px",
                padding:"30px",
                textAlign:"center",
                boxShadow:"0 0 10px rgba(0,0,0,.15)"
            }}>

            <h1>{icono}</h1>

            <h2>{titulo}</h2>

            <h1 style={{color:"#D32F2F"}}>

                {cantidad}

            </h1>

        </div>

    );

}

function Fila({nombre,descripcion}){

    return(

        <tr>

            <td style={{padding:"15px"}}>{nombre}</td>

            <td>{descripcion}</td>

            <td>

                <button
                    style={{
                        background:"#D32F2F",
                        color:"white",
                        border:"none",
                        padding:"10px 20px",
                        cursor:"pointer",
                        borderRadius:"6px"
                    }}>

                    Descargar PDF

                </button>

            </td>

        </tr>

    );

}

export default Reportes;