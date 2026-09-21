import { useState } from "react";

export const usePasswordCriteria = () => {
    const [length, setLength] = useState(16);
    const [includeCapital, setIncludeCapital] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumber, setIncludeNumber] = useState();
    const [specialChars, setSpecialChars] = useState();

    return {
        length,
        includeCapital,
        includeLower,
        includeNumber,
        specialChars,

        control: {
            setLength,
            setIncludeCapital,
            setIncludeLower,
            setIncludeNumber,
            setSpecialChars,
        }
    };
}

export type PasswordCriteria = ReturnType<typeof usePasswordCriteria>;
export type PasswordCriteriaInfo = Omit<PasswordCriteria, 'control'>;
export type PasswordCriteriaControl = PasswordCriteria['control'];