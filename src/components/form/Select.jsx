import React from 'react';

const Select = (props) => {
    console.log(props.dataInput);
    const jsx = (
        <div className="form-group col">
            <label>Select</label>
            <select className="form-control">
                <option>Cotonou</option>
                <option>Porto</option>
            </select>
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
    );
};

export default Select;