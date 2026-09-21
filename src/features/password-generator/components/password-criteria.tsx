import { Field, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useCallback } from "react";
import type { PasswordCriteria as Criteria } from "../lib/use-password-criteria";

type Props = {
    criteria: Criteria;
};

export const PasswordCriteria: React.FC<Props> = ({ criteria }) => {

    const { control: { setPasswordLength }, passwordLength } = criteria;

    const onLengthValueChange = useCallback((v: number | readonly number[]) => {
        if (typeof v === 'number') {
            setPasswordLength(v);
        }
    }, [setPasswordLength]);

    return <div className="flex">
        <Field orientation="horizontal">
            <Slider min={4} max={128} value={passwordLength} onValueChange={onLengthValueChange}/>
            <FieldLabel>
                {passwordLength}
            </FieldLabel>
        </Field>
    </div>
}