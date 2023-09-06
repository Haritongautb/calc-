import React from "react";
import useInput from "../../hooks/input-hook/inputHook";
// const Input = ({ id, htmlFor, idRange, htmlForRange, step, min, max, content, title, handleChange, amount }) => {
//     return (
//         <div>
//             <label htmlFor={htmlFor}>
//                 {
//                     title
//                 }
//                 <input
//                     type="number"
//                     id={id}
//                     step={step}
//                     value={amount}
//                     min={min}
//                     max={max}
//                     onChange={event => handleChange(parseInt(event.target.value))} />
//             </label>
//             <label htmlFor={htmlForRange}>
//                 {
//                     content
//                 }
//                 <input
//                     type="range"
//                     id={idRange}
//                     value={amount}
//                     step={step}
//                     min={min}
//                     max={max}
//                     onChange={event => handleChange(parseInt(event.target.value))} />
//             </label>
//         </div>
//     )
// }
const Input = ({ type, title, htmlFor, step, value, min, max, handleChange }) => {

    // Если тебе нужен будет type password или type email просто сделай другой case
    switch (type) {
        case "number": {
            return (
                <label htmlFor={htmlFor}>
                    {title}
                    <input
                        type={type}
                        id={htmlFor}
                        step={step}
                        value={value}
                        min={min}
                        max={max}
                        onChange={event => handleChange(event.target.value)}
                    />
                </label>
            )
        }
        case "range": {
            return (
                <label htmlFor={htmlFor}>
                    {title}
                    <input
                        type={type}
                        id={htmlFor}
                        step={step}
                        value={value}
                        min={min}
                        max={max}
                        onChange={event => handleChange(event.target.value)}
                    />
                </label>
            )
        }
        case "text": {
            return (
                <label htmlFor={htmlFor}>
                    {title}
                    <input
                        type={type}
                        id={htmlFor}
                        value={value}
                        onChange={event => handleChange(event.target.value)}
                    />
                </label>
            )
        }
        default:
            break;
    }
}

export default Input;