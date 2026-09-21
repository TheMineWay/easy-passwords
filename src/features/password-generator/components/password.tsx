import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useId } from "react";

type PasswordProps = {
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: (v: string) => void;
}

export const Password: React.FC<PasswordProps> = ({ value, placeholder, className, onChange }) => {
    const id = useId();

    return <Field className={className}>
        <Input id={id} placeholder={placeholder} value={value} onChange={(e) => onChange?.(e.target.value)}/>
    </Field>
}