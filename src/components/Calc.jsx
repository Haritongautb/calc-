import React from "react";
import Input from "./input/InputRange";
import { inputsData, calcData, days } from "../inputsData/inputsData";
import useInput from "../hooks/input-hook/inputHook";
import "./calc.css";

const Calc = () => {
    // либо так
    // Я создал отдельный хук для использования input, если тебе понадобится input с text
    const { value, handleChange } = useInput("");
    // либо так
    // const [value, setValue] = React.useState("");
    const [debtAmount, setDebtAmount] = React.useState(200);
    const [overdueAmount, setOverdueAmount] = React.useState(1);
    const [provision, setProvision] = React.useState(0);


    React.useEffect(() => {
        setProvision(calculateProvision());
    }, [debtAmount, overdueAmount])

    const calculateProvision = () => {
        // Нужен прайс лист, поскольку запутанно все. Нужен изначальный прайс цены
        /* 
            Пример - когда нужно умножать на 0.21, если в твоем коде на 0.21 умножается, когда amount <= 90 и <= 360
        */
        switch (true) {
            case ((debtAmount <= 5000 && overdueAmount <= days.moreThanAYear) || (debtAmount <= 5000 && overdueAmount > days.moreThanAYear)):
                return Math.round(debtAmount * 0.21);
            case ((debtAmount <= 5000 && overdueAmount <= days.lessThanAMonth) || (debtAmount <= 5000 && overdueAmount > days.moreThanAYear)):
                return Math.round(debtAmount * 0.16);
            case ((debtAmount <= 30000 && overdueAmount <= days.moreThanAYear) || (debtAmount <= 50000 && overdueAmount > days.moreThanAYear)):
                return Math.round(debtAmount * 0.13);
            case ((debtAmount <= 30000 && overdueAmount <= days.lessThanAMonth) || (debtAmount <= 50000 && overdueAmount <= days.moreThanAYear) || (debtAmount > 50000 && overdueAmount > days.moreThanAYear)):
                return Math.round(debtAmount * 0.11);
            case (debtAmount > 50000 && overdueAmount <= days.moreThanAYear):
                return Math.round(debtAmount * 0.09);
            case (debtAmount <= 50000 && overdueAmount <= days.lessThanAMonth):
                return Math.round(debtAmount * 0.08);
            case (debtAmount > 50000 && overdueAmount <= days.lessThanAMonth):
                return Math.round(debtAmount * 0.06);
            default:
                return 0;
        }
    }

    // const renderInputs = arr => arr.map((item, index) => <Input
    //     key={index}
    //     {...item}
    //     amount={item.step === calcData.debtStep ? debtAmount : overdueAmount}
    //     handleChange={item.step === calcData.debtStep ? setDebtAmount : setOverdueAmount}
    // />)

    const renderInputs = arr => arr.map((item, index) => <Input
        key={index}
        {...item}
        value={item.id === "calcInput" ? item.step === calcData.debtStep ? debtAmount : overdueAmount : value}
        handleChange={item.id === "calcInput" ? item.step === calcData.debtStep ? setDebtAmount : setOverdueAmount : handleChange}
    />)

    const contents = renderInputs(inputsData);

    // <div>Amount for work: {provision}</div>
    // <div>The cost of competition will be: {debtAmount && overdueAmount ? Math.round(debtAmount * 0.06) : 0}</div>
    return (
        <div className="calc">
            {
                contents
            }
            <div>Amount for work: {provision}</div>
            <div>The cost of competition will be: {debtAmount && overdueAmount ? Math.round(debtAmount * 0.06) : 0}</div>
        </div>
    )
}

export default Calc; 