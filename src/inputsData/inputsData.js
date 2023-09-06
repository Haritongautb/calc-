import useInput from "../hooks/input-hook/inputHook";

export const days = {
    lessThanAMonth: 90,
    moreThanAYear: 360
}

export const calcData = {
    debtStep: 100,
    debtMinAmount: 200,
    debtMaxAmount: 1000000,
    overdueStep: 1,
    overdueMinAmount: 1,
    overdueMaxAmount: 1095
}

// Для того, чтобы сделать еще один input достаточно просто добавить еще информацию о нем здесь, засовываешь в массив. Метод renderInputs сам создаст

export const inputsData = [
    {
        id: "calcInput",
        type: "number",
        htmlFor: "debtAmount",
        title: "The debt you need to recover",
        step: calcData.debtStep,
        min: calcData.debtMinAmount,
        max: calcData.debtMaxAmount,
    },
    {
        id: "calcInput",
        type: "range",
        htmlFor: "debtRange",
        title: "zl",
        step: calcData.debtStep,
        min: calcData.debtMinAmount,
        max: calcData.debtMaxAmount,
    },
    {
        id: "calcInput",
        type: "number",
        htmlFor: "overdueAmount",
        title: "Late payment (days):",
        step: calcData.overdueStep,
        min: calcData.overdueMinAmount,
        max: calcData.overdueMaxAmount,
    },
    {
        id: "calcInput",
        type: "range",
        htmlFor: "overdueRange",
        title: "days",
        step: calcData.overdueStep,
        min: calcData.overdueMinAmount,
        max: calcData.overdueMaxAmount,
    },
    {
        type: "text",
        htmlFor: "forText",
        title: "Simple text input",
    }
]

// export const inputsData = [
//     {
//         id: "debtAmount",
//         htmlFor: "debtAmount",
//         idRange: "debtRange",
//         htmlForRange: "debtRange",
//         step: calcData.debtStep,
//         min: calcData.debtMinAmount,
//         max: calcData.debtMaxAmount,
//         content: "zl",
//         title: "The debt you need to recover"
//     },
//     {
//         id: "overdueAmount",
//         htmlFor: "overdueAmount",
//         idRange: "overdueRange",
//         htmlForRange: "overdueRange",
//         step: calcData.overdueStep,
//         min: calcData.overdueMinAmount,
//         max: calcData.overdueMaxAmount,
//         content: "days",
//         title: "Late payment (days):"
//     }
// ]