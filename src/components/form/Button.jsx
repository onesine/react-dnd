import React from 'react';

const Button = (props) => {
    return (
        <div className="form-group">
            <button
                type={props.dataInput.type}
                className={"btn btn-"+props.dataInput.style}
                value={props.dataInput.value}>
                {props.dataInput.label}
            </button>
        </div>
    )
};

export default Button;