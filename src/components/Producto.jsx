
function Producto({producto}) {

   const {nombre, precio_regular, precio_descuento, rutaImagen} = producto;

  return (
    <div className="card" >
        <img src={rutaImagen} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text text-decoration-line-through">{precio_regular}</p>
            <p className="card-text">{precio_descuento}</p>
            <a href="#" className="btn btn-primary">Ver información</a>
        </div>
    </div>
  )
}

export default Producto