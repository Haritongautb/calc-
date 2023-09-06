import React from "react";

const useInput = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);

    const handleChange = (newValue) => {
        setValue(newValue);
    }

    return {
        value,
        handleChange
    }
}

export default useInput;