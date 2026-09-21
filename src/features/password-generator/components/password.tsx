import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useId } from "react";

type PasswordProps = {
    value?: string;
    placeholder?: string;
    className?: string;
    onChange?: (v: string) => void;
    visible?: boolean;
}

export const Password: React.FC<PasswordProps> = ({ value, placeholder, className, onChange, visible }) => {
    const id = useId();

    return <Field className={className}>
        <Input type={visible ? "text" : "password"} id={id} placeholder={placeholder} value={value} onChange={(e) => onChange?.(e.target.value)}/>
    </Field>
}