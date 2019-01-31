import React,{Component} from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';
import PropTypes from 'prop-types';


export default class ControlPresupuesto extends Component {

    render() {
        return (
            <div className="class-name">
                Desde Control
                <Presupuesto
                    presupuesto = {this.props.presupuesto}
                />
                <Restante
                    presupuesto = {this.props.presupuesto}
                    restante = {this.props.restante}
                />
            </div>
        );
    }
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}