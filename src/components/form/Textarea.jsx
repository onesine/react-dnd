import React from 'react';

const Textarea = (props) => {
    const jsx = (
        <div className="form-group col">
            <label>{props.dataInput.label}</label>
            <textarea
                className="form-control"
                rows={props.dataInput.rows}
                cols={props.dataInput.cols}
                placeholder={props.dataInput.placeholder}
                value={props.dataInput.value}
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

export default Textarea;