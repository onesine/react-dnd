import React from 'react';

const CheckboxGroup = (props) => {
    const jsx = (
        <div className="form-group col">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""/>
                <label className="form-check-label">
                    Default checkbox
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""/>
                <label className="form-check-label">
                    Disabled checkbox
                </label>
            </div>
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

export default CheckboxGroup;