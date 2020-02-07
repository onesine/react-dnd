import React from 'react';

const Date = (props) => {
    const jsx = (
        <div className="form-group col">
            <label>{props.dataInput.label}</label>
            <input
                type={props.dataInput.type}
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

export default Date;