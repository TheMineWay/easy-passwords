import { useState } from "react";

export const usePasswordCriteria = () => {
    const [passwordLength, setPasswordLength] = useState(16);

    return {
        passwordLength,
        control: {
            setPasswordLength,
        }
    };
}

export type PasswordCriteria = ReturnType<typeof usePasswordCriteria>;
export type PasswordCriteriaInfo = Omit<PasswordCriteria, 'control'>;
export type PasswordCriteriaControl = PasswordCriteria['control'];