import React, { useState } from "react";

const DropDown = ({ options, onSelect }) => {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value);
        onSelect(e.target.value);
    };

    return (
        <select value={selected} onChange={handleChange} style={styles.select}>
            <option value="" disabled>
                선택하세요
            </option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

const styles = {
    select: {
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
};

export default DropDown;
