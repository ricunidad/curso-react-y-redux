import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

        return (
            <nav>
                <div className="nav-wrapper light-blue darken-3">
                    <span className="brand-logo center">{props.titulo}</span>
                </div>
            </nav>
        );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;