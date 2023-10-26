
function Empleado({empleado}) {


    const {rutaImagen, nombre} = empleado;

  return (
    <div className="card" >
        <img src={rutaImagen} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">{nombre}</h5>
        </div>
    </div>
  )
}

export default Empleado