import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends Component {

  state ={
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidMount(){
    this.setState({
      error: false,
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta)
    this.consultarApi();
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

   // Leer la url y agregar el api key
    const appId = '7d97c273bcc82f8c58fc85f5bbf3929c';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

    // Query con fecch api

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        this.setState({
          resultado: datos
        })
      });
  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad ==='' || respuesta.pais === ''){
      this.setState({
        error: true
      })
    }else{
      this.setState({
        error: false,
        consulta: respuesta
      });
    }
  }

  render() {

    const {error} = this.state,
          {cod} = this.state.resultado;


    let resultado;
    if(error){
      resultado= <Error mensaje="Ambos campos son obligatorios" />
    }else if(cod === '404'){
      resultado= <Error mensaje="Ciudad no Encontrada" />
    }else {
      resultado = <Clima resultado={this.state.resultado}/>
    }

    return (
      <div className="app">
        <Header 
          titulo = "Clima React"
        />
        <Formulario 
          datosConsulta = {this.datosConsulta}
        />

        {resultado}

      </div>
    );
  }
}

export default App;
