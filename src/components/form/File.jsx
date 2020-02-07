import React from 'react';

const File = (props) => {
    const jsx = (
        <div className="form-group col">
            <label>{props.dataInput.label}</label>
            <input
                type={props.dataInput.type}
                className="form-control"
                placeholder={props.dataInput.placeholder}
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

export default File;