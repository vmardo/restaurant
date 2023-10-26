import Carta from "../components/Carta"
import Formulario from "../components/Formulario"
import InfoContacto from "../components/infoContacto"

function Home() {
  return (
    <>
        {/* Seccion Bienvenidos */}
        <div className="container mt-5">
            <h1 className="text-center">El Rincón del Sushi</h1>
            <h2 className="text-center text-warning mt-2">¡Bienvenidos!</h2>

            <div className="d-flex justify-content-between gap-5 mt-5">
                <div className="w-50">
                    <h3 className="fs-5">Nuestro restaurant nace como una respuesta a un nuevo paladar, para la gastronomía marina de Ovalle</h3>
                    <p>En un año de funcionamiento, El Rincón del Sushi se ha transformado en un lugar donde prima la calidez del servicio y en un ambiente donde el mar llega hasta la mesa, permitiendo degustar cada sabor como una nueva experiencia que transporta hacia el océano y sus costas.</p>
                </div>

                <div className="w-50">
                    <h4 className="fs-5">Horarios de Atención</h4>
                    <p>Martes a Viernes: Almuerzo 12:00 a 16:00 Hrs. – Cena 19:30 a 23:00 Hrs. | Sábado 12:00 a 17:00 Hrs. – Cena 19:30 a 23:00 hrs. | Domingo 12:00 a 17:00 Hrs.</p>
                    <button>Ver carta</button>
                </div>
            </div>
        </div> 
        <div className="container my-5">
            <Carta/>
            <div className="my-5"></div>
            <Formulario/>
            <div className="my-5"></div>
            <InfoContacto/>

        </div>

    </>
  )
}

export default Home