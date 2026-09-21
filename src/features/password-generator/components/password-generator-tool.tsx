import { Button } from "@/components/ui/button";
import { Password } from "./password";
import { PasswordCriteria } from "./password-criteria";
import { usePasswordCriteria } from "../lib/use-password-criteria";

export const PasswordGeneratorTool: React.FC = () => {
    const criteria = usePasswordCriteria();

    return <div className="flex flex-col gap-4">
        <div className="flex gap-2 w-full">
            <Password className="flex-1"/>
            <Button aria-label="Generate password">
                <i className="bi bi-arrow-clockwise"></i>
            </Button>
        </div>
        <PasswordCriteria criteria={criteria}/>
    </div>
};