import { Button } from "@/components/ui/button";
import { Password } from "./password";
import { PasswordCriteria } from "./password-criteria";
import { usePasswordCriteria } from "../lib/use-password-criteria";
import { useCallback, useState } from "react";
import { generatePassword } from "../lib/generate-password";

export const PasswordGeneratorTool: React.FC = () => {
    const criteria = usePasswordCriteria();
    const [password, setPassword] = useState(() => generatePassword(criteria));

    const onGeneratePasswordClick = useCallback(() => setPassword(generatePassword(criteria)), [setPassword, criteria]);

    return <div className="flex flex-col gap-4">
        <div className="flex gap-2 w-full">
            <Password className="flex-1" value={password} onChange={setPassword}/>
            <Button aria-label="Generate password" onClick={onGeneratePasswordClick}>
                <i className="bi bi-arrow-clockwise"></i>
            </Button>
        </div>
        <PasswordCriteria criteria={criteria}/>
    </div>
};