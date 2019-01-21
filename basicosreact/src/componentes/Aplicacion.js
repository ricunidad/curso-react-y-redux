import React from 'react';

import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends React.Component{
    state = {
        productos : []

    }

    componentDidMount(){


        const productos =  [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Disco de Música', precio: 100},
            {nombre: 'Instrumento Musical', precio: 800},
            {nombre: 'Reproductor de Música', precio: 1500},
            {nombre: 'Album Ed. Especial', precio: 500}
        ];

        setTimeout(() =>{
            this.setState({
                productos : productos
            });
        }, 3000);
        
    }

    render(){
        return (
            <div>
                <Header 
                    titulo = "Nuestra Tienda Virtual"
                />
                <Productos 
                    productos={this.state.productos}
                />
                <Footer/>
            </div>
        )
    }
}


export default Aplicacion;