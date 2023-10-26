import Empleado from "../components/Empleado"
import { useState, useEffect } from "react"
import {collection, getDocs} from 'firebase/firestore'
import { db } from "../firebase"

function About() {

    const [empleados, setEmpleados] = useState([]);

    const consultarFirestore = async () => {

        const consulta = await getDocs(  collection( db, "empleados" )  );
        const datosEmpleados = [];
  
        consulta.forEach( documento => {
            datosEmpleados.push(
              {
                id: documento.id,
                nombre: documento.data().nombre,
                rutaImagen: documento.data().rutaImagen
              }
            )
        });

        console.log(datosEmpleados)
        setEmpleados(datosEmpleados)
    }

    useEffect(() =>{
        consultarFirestore();
    }, [] )



  return (
    <div className="container mt-5">
        
        <h3 className="my-5">Nuestra historia</h3>
        <p>
            El Rincón del Sushi

            El Rincón del Sushi nació en octubre de 2022, de la idea de Juan Pérez, un joven apasionado por la comida japonesa, en especial del sushi. Juan siempre había soñado con abrir su propio restaurante de sushi, para poder compartir su amor por esta deliciosa gastronomía con el mundo.

            Juan decidió abrir su restaurante en Ovalle, una pequeña ciudad de Chile. Elegía esta ciudad porque era su lugar de nacimiento y porque creía que había un gran potencial para la comida japonesa en la región.

            Juan trabajó duro para hacer realidad su sueño. Pasó meses aprendiendo sobre la cocina japonesa y buscando los mejores ingredientes. También se dedicó a crear un ambiente acogedor y agradable para sus clientes.

            El Rincón del Sushi abrió sus puertas en octubre de 2022, y fue un éxito inmediato. Juan ofrecía sushi de alta calidad a precios asequibles. También se preocupaba por ofrecer un servicio excelente a sus clientes.

            En poco tiempo, El Rincón del Sushi se convirtió en uno de los restaurantes de sushi más populares de Ovalle. Juan estaba muy feliz de haber podido compartir su amor por el sushi con el mundo.
        </p>

        <h4 className="my-5">Nuestro equipo</h4>

        <div className="row row-cols-1 row-cols-md-3 g-4">

            {

                empleados.map( empleado => (
                    <Empleado key={empleado.id} empleado={empleado} />
                ) )

            }

        </div>
        
    </div>
  )
}

export default About