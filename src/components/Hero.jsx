import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/img.png";
import img2 from "../assets/img_1.png";
import img3 from "../assets/img_2.png";

function Hero() {
    return (
        <>
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img
                        src={img1}
                        alt="Imagen 1"
                        style={{
                            width: "100%",
                            height: "380px",
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div>
                    <img
                        src={img2}
                        alt="Imagen 2"
                        style={{
                            width: "100%",
                            height: "380px",
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div>
                    <img
                        src={img3}
                        alt="Imagen 3"
                        style={{
                            width: "100%",
                            height: "380px",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </Carousel>

            <section
                style={{
                    textAlign: "center",
                    padding: "50px 20px",
                    background: "#fff",
                }}
            >
                <h1
                    style={{
                        color: "#D32F2F",
                        fontSize: "42px",
                        marginBottom: "15px",
                    }}
                >
                    Sistema Contable SICJAC
                </h1>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#555",
                        maxWidth: "800px",
                        margin: "0 auto 30px",
                    }}
                >
                    Plataforma web para la administración de clientes,
                    productos, facturación y reportes empresariales.
                </p>

                <button
                    style={{
                        background: "#D32F2F",
                        color: "#fff",
                        border: "none",
                        padding: "15px 35px",
                        borderRadius: "8px",
                        fontSize: "18px",
                        cursor: "pointer",
                    }}
                >
                    Ingresar al Sistema
                </button>
            </section>
        </>
    );
}

export default Hero;