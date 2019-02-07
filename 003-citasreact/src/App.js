import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from "./componentes/AgregarCita";
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount(){
    //console.log('Esta listo');
    const citasLS = localStorage.getItem('citas');
    if (citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  componentWillMount(){
    //console.log('Yo me ejecuto antes');
  }

  componentWillUnmount(){
    //console.log('Yo hasta que cierra el componente');
  }

  componentDidUpdate(){
    //console.log('Algo cambio');
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    this.setState({citas});
    //console.log(citas);
  }

  borrarCita = id => {
    // obtener copia del state
    const citasActuales = [...this.state.citas];

    // borrar elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);

    // actualizar el state
    this.setState({ citas});

    console.log(id)
    console.log(citasActuales);
  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo = 'Administrador de Pacientes de Verinaria'
        />

        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearCita = {this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas = {this.state.citas}
              borrarCita = {this.borrarCita}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
