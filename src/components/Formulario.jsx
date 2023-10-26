import { useState } from "react";


function Formulario() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    //codigo js
    const manejarFormulario = (e) =>{

        e.preventDefault();

        if (nombre.trim().length < 1) {
            alert('el campo de nombre es invalido')
            return;
        }

        if (!email.includes('.')) {
            alert('le falta un punto a tu correo')
            return;
        }


        //enviamos el formulario
        //codigo para llamar a api
        alert('formulario enviado!')


    }



    return (
    <form 
        className="row g-4"
        onSubmit={manejarFormulario}
    >

        <div className="col-12 col-md-5">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    placeholder="Tu nombre"
                    onChange={ (e) => setNombre( e.target.value ) }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Tu email"
                    required="required"
                    onChange={ (e) => setEmail( e.target.value ) }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="asunto" className="form-label">Asunto</label>
                <input type="text" className="form-control" id="asunto" placeholder="Tu asunto"/>
            </div>
            <div className="mb-3">
                <input className="btn btn-success" type="submit" value="Enviar"/>
            </div>
        </div>

        <div className="col-12 col-md-7">
            <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribe tu mensaje aquí"></textarea>
            </div>
        </div>

    </form>
  )
}

export default Formulario