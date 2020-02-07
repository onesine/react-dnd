import React from 'react';
import "../OverViewExample/OverViewExample.css"
import formSeeder from "../../constants/formSeeder";
import TextField from "../form/TextField.jsx";
import File from "../form/File.jsx";
import CheckboxGroup from "../form/CheckboxGroup.jsx";
import RadioGroup from "../form/RadioGroup.jsx";
import Select from "../form/Select";

function OverViewExample() {
    const printForm = (element, index) => {
        if (element.type === "panel") {
            return (
                <div key={index} className="card panel col" style={{padding: 0}}>
                    <div className="card-header">{element.label}</div>
                    <div className="card-body">
                        {
                            element.content.map( (child, indexChild) => {
                                return printForm(child, indexChild)
                            })
                        }
                    </div>
                </div>
            )
        } else if (element.type === "div") {
            return (
                <div key={index} className={"form-row"}>
                    {
                        element.content.map( (child, indexChild) => {
                            return printForm(child, indexChild)
                        })
                    }
                </div>
            )
        } else {
            return (
                printJsxInput(element, index)
            )
        }
    };

    const printJsxInput = (element, index) => {
        switch (element.type) {
            case "text":
                return (
                    <TextField key={index} dataInput={element}/>
                );
            case "tel":
                return (
                    <TextField key={index} dataInput={element}/>
                );
            case "password":
                return (
                    <TextField key={index} dataInput={element}/>
                );
            case "file":
                return (
                    <File key={index} dataInput={element}/>
                );
            case "select":
                return (
                    <Select key={index} dataInput={element}/>
                );
            case "email":
                return (
                    <TextField key={index} dataInput={element}/>
                );
            case "checkbox-group":
                return (
                    <CheckboxGroup key={index} dataInput={element}/>
                );
            case "radio-group":
                return (
                    <RadioGroup key={index} dataInput={element}/>
                );
            default:
                return (
                    ""
                );
        }
    };

    return (
        <div className={"container content"}>
            <form>

                {
                    formSeeder.map(printForm)
                }
                <div className="form-group">
                    <button className={"btn btn-primary"}>
                        Envoyer
                    </button>
                </div>

            </form>
        </div>
    );
}

export default OverViewExample;
