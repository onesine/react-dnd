import React from 'react';

const TextField = (props) => {
    const jsx = (
        <div className="form-group col">
            <label>{props.dataInput.label}</label>
            <input
                type={props.dataInput.type}
                className="form-control"
                placeholder={props.dataInput.placeholder}
                // value={props.dataInput.value}
            />
        </div>
    );

    return props.dataInput.outside_div ? (
        <div className="form-row">
            {
                jsx
            }
        </div>
    ) : (
        jsx
    )
};

export default TextField;