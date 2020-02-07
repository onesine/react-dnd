import React from 'react';

const RadioGroup = (props) => {
    const jsx = (
        <div className="form-group col">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                       value="option1" />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Default radio
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                       value="option2" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                    Second default radio
                </label>
            </div>
            <div className="form-check disabled">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                       value="option3" disabled />
                <label className="form-check-label" htmlFor="exampleRadios3">
                    Disabled radio
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

export default RadioGroup;