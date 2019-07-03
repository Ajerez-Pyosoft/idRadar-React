import React from 'react';

import './styles/PageError.css';

function PageError (props) {
    return (
        <div className="PageError">
            error: {props.error.message}
        </div>
    );
}

export default PageError;