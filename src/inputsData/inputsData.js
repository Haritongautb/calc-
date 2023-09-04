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

export const inputsData = [
    {
        id: "debtAmount",
        htmlFor: "debtAmount",
        idRange: "debtRange",
        htmlForRange: "debtRange",
        step: calcData.debtStep,
        min: calcData.debtMinAmount,
        max: calcData.debtMaxAmount,
        content: "zl",
        title: "The debt you need to recover"
    },
    {
        id: "overdueAmount",
        htmlFor: "overdueAmount",
        idRange: "overdueRange",
        htmlForRange: "overdueRange",
        step: calcData.overdueStep,
        min: calcData.overdueMinAmount,
        max: calcData.overdueMaxAmount,
        content: "days",
        title: "Late payment (days):"
    }
]