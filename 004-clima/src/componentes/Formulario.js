import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    // crear lo refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima= (e) => {
        e.preventDefault();
        // leer los refs y crear el objeto
        const respuesta  =  {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value

        }

        // enviar por props
        this.props.datosConsulta(respuesta);

        // opcilanl resetear el form

        //console.log(respuesta);
    }
    
    render() { 
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" ref={this.ciudadRef} type="text" />
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select id="pais" ref={this.paisRef} >
                                    <option value="" defaultValue>Elige un país</option>
                                    <option value="AR" defaultValue>Argentina</option>
                                    <option value="CO" defaultValue>Colombia</option>
                                    <option value="CR" defaultValue>ArgentinaCosta Rica</option>
                                    <option value="ES" defaultValue>España</option>
                                    <option value="US" defaultValue>Estados Unidos</option>
                                    <option value="MX" defaultValue>Mexico</option>
                                    <option value="PE" defaultValue>Peru</option>
                                    <option value="BO" defaultValue>Bolivia</option>
                                </select>
                                <label htmlFor="pais">Pais:</label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar" />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

Formulario.protoType = {
    datosConsulta: PropTypes.func.isRequired
}
 
export default Formulario;