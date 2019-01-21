import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
    render() {
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije Marca, Año y Tipo de Seguro':'El total es B.';

        return(
            <div className="gran-total">
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition 
                        classNames="resultado"
                        key={resultado}
                        timeout={{enter: 500, exit: 500}} >
                        <span> {mensaje} { resultado }</span>

                    </CSSTransition>
                </TransitionGroup>
                
            </div>
        );
    }
}

export default Resultado;