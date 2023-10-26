import Producto from "./Producto"
import {collection, doc, getDocs} from 'firebase/firestore'
import { db } from "../firebase"
import { useState, useEffect } from "react"

function Carta() {

    //Simulando consulta a api de productos
    // const productos = [
    //     {
    //       nombre: "HIT PARA 2 ESPECIAL (20 PIEZAS )",
    //       precio_regular: "30.200",
    //       precio_descuento: "15.100",
    //       rutaImagen: "https://assets.niusushi.cl/production/images/f9677b31-da3e-47d2-b2f7-647d753883a0/large/Hit-2-especial.webp?1673210735",
    //     },
    //     {
    //       nombre: "HIT PARA 2 PREMIUM (24 PIEZAS)",
    //       precio_regular: "33.600",
    //       precio_descuento: "16.800",
    //       rutaImagen: "https://assets.niusushi.cl/production/images/c235c7e8-0325-4c8d-b04c-47aceca6280b/large/Hit-2-premium.webp?1673210742",
    //     },
    //     {
    //       nombre: "HIT PARA 4 ESPECIAL (48 PIEZAS)",
    //       precio_regular: "67.400",
    //       precio_descuento: "33.700",
    //       rutaImagen: "https://assets.niusushi.cl/production/images/d39acc15-2fdd-4fbf-b69b-b5b92e0c75d1/large/hit-4-especial.webp?1673210749",
    //     },
    //     {
    //       nombre: "HIT PARA 4 PREMIUM (45 PIEZAS)",
    //       precio_regular: "69.400",
    //       precio_descuento: "34.700",
    //       rutaImagen: "https://assets.niusushi.cl/production/images/7acf325c-fe8a-42f8-804a-b173d7dea72e/large/hit-4-premium.webp?1673210755",
    //     },
    //     {
    //       nombre: "HIT PARA 6 ESPECIAL (68 PIEZAS)",
    //       precio_regular: "102.400",
    //       precio_descuento: "51.200",
    //       rutaImagen: "https://assets.niusushi.cl/production/images/4343cadf-240f-4541-881c-55afce2fbc6e/large/hit-6-especial.webp?1673210763",
    //     },
    //     {
    //       nombre: "HIT PARA 6 PREMIUM (69 PIEZAS)",
    //       precio_regular: "103.200",
    //       precio_descuento: "51.600",
    //       rutaImagen: "https://assets.niusushi.cl/production/images/70fcba29-80e6-4676-b805-032c271eb921/large/hit-6-premium.webp?1673210772",
    //     },
    //   ]
    
    const [productos, setProductos] = useState([])  
    

    const consultarFirestore = async () => {

      const consulta = await getDocs(  collection( db, "productos" )  );
      const datosProductos = [];

      consulta.forEach( documento => {
          datosProductos.push(
            {
              id: documento.id,
              data: documento.data()
            }
          )
      });

      setProductos(datosProductos)

    }

    useEffect( () => {
       
      consultarFirestore();

    }, [])

  if (productos.length === 0) {
    return(
      <div>

        <p>Cargando</p>
      </div>
    )
    
  }


  return (
    <div>
        
        <h2 className="text-center">Nuestra carta</h2>
       

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            
                {
                    productos.map( (producto) => (
                        <div key={producto.id} className="col">
                            <Producto producto={producto.data} />
                        </div>
                    ))
                }
            
        </div>

        

    </div>
  )
}

export default Carta