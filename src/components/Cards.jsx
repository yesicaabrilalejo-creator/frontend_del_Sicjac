function Cards() {
    const cards = [
        {
            titulo: "Clientes",
            icono: "👥",
            descripcion: "Administra la información de tus clientes."
        },
        {
            titulo: "Productos",
            icono: "📦",
            descripcion: "Controla el inventario y los productos."
        },
        {
            titulo: "Facturación",
            icono: "🧾",
            descripcion: "Genera y administra las facturas."
        },
        {
            titulo: "Reportes",
            icono: "📊",
            descripcion: "Consulta reportes y estadísticas."
        }
    ];

    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "25px",
                padding: "50px",
                background: "#f5f5f5"
            }}
        >
            {cards.map((card, index) => (
                <div
                    key={index}
                    style={{
                        background: "#fff",
                        padding: "25px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,.15)",
                        textAlign: "center"
                    }}
                >
                    <h1>{card.icono}</h1>

                    <h3 style={{ color: "#D32F2F" }}>
                        {card.titulo}
                    </h3>

                    <p>{card.descripcion}</p>

                    <button
                        style={{
                            background: "#D32F2F",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "6px",
                            cursor: "pointer"
                        }}
                    >
                        Ver más
                    </button>
                </div>
            ))}
        </section>
    );
}

export default Cards;