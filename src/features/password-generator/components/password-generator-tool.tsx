import { Button } from "@/components/ui/button";
import { Password } from "./password";
import { PasswordCriteria } from "./password-criteria";
import { usePasswordCriteria } from "../lib/use-password-criteria";
import { useCallback, useState } from "react";
import { generatePassword } from "../lib/generate-password";
import { ButtonGroup } from "@/components/ui/button-group";
import { cn } from "@/lib/utils";

export const PasswordGeneratorTool: React.FC = () => {
    const criteria = usePasswordCriteria();
    const [password, setPassword] = useState(() => generatePassword(criteria));

    const onGeneratePasswordClick = useCallback(() => setPassword(generatePassword(criteria)), [setPassword, criteria]);

    /* COPY */
    const [isCopied, setIsCopied] = useState(false);

    const onCopyClick = useCallback(async () => {
        if (!password) return;

        try {
            await navigator.clipboard.writeText(password);
            setIsCopied(true);
            
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Clipboard error");
        }
    }, [password]);

    /* Component */

    return <div className="flex flex-col gap-4">
        <div className="flex gap-2 w-full">
            <Password className="flex-1" value={password} onChange={setPassword}/>
            <ButtonGroup>
                <Button aria-label="Generate password" onClick={onCopyClick}>
                    <i className={cn("bi", isCopied ? "bi-check" : "bi-clipboard")}></i>
                </Button>
                <Button aria-label="Generate password" onClick={onGeneratePasswordClick}>
                    <i className="bi bi-arrow-clockwise"></i>
                </Button>
            </ButtonGroup>
        </div>
        <PasswordCriteria criteria={criteria}/>
    </div>
};