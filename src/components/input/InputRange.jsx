import React from "react";

const Input = ({ id, htmlFor, idRange, htmlForRange, step, min, max, content, title, handleChange, amount }) => {
    return (
        <div>
            <label htmlFor={htmlFor}>
                {
                    title
                }
                <input
                    type="number"
                    id={id}
                    step={step}
                    value={amount}
                    min={min}
                    max={max}
                    onChange={event => handleChange(Number(event.target.value))} />
            </label>
            <label htmlFor={htmlForRange}>
                {
                    content
                }
                <input
                    type="range"
                    id={idRange}
                    value={amount}
                    step={step}
                    min={min}
                    max={max}
                    onChange={event => handleChange(Number(event.target.value))} />
            </label>
        </div>
    )
}

export default Input;