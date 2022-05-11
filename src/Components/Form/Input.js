
import React from "react";

function Input({ label , type , value , onchangeFunction , name}) {

    return (
        <>
            <label htmlFor={name}>{label}
                <input name={name} type={type} value={value} onChange={onchangeFunction} data-name={name} />
            </label>
        </>
    )
}

export default Input;