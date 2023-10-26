import { NavLink } from "react-router-dom"


function BarraNavegacion() {


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">


                <NavLink
                        to="/"
                        className="navbar-brand fs-2"
                >El Rincón Enchilado</NavLink>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Reserva</a>
                    </li>

                    <li className="nav-item">
                        <NavLink
                                to="contacto"
                                className={({isActive}) =>
                                    "nav-link" + (isActive ? " bg-secondary" : "")
                                }
                            >
                            Contacto  
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="about"
                            className={({isActive}) =>
                            "nav-link" + (isActive ? " bg-secondary" : "")
                            }
                        >
                          Sobre Nosotros  
                        </NavLink>
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default BarraNavegacion