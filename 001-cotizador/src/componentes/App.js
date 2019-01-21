import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';

import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  state = {
    resultado : '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de año  
    const diferencia  = obtenerDiferenciaAnio(year);

    // por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3)*resultado)/100;

    // Americano 15% Asiatico 5% y eropeo 30% de incremento al valor actual
    resultado = calcularMarca(marca)*resultado;

    // el plan del auto, el básico incrementa el valor 20% y cobertura completa 50%
    resultado = obtenerPlan(plan)*resultado;

    // Arreglar decimales
    resultado = parseFloat(resultado).toFixed(2);


    // Crear el objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    }


    // Ya tenemos el costo
    this.setState({
      resultado: resultado,
      datos: datosAuto
    });
  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo = 'Cotizador de Seguro de Auto' />
        <div className="contenedor-formulario">
          <Formulario 
            cotizarSeguro={ this.cotizarSeguro}
          />
          <Resumen
            datos={this.state.datos}
            resultado = {this.state.resultado}
          />
        </div>
        

      </div>

    );
  }
}

export default App;