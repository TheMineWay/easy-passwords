import { Field, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useCallback } from "react";
import type { PasswordCriteria as Criteria } from "../lib/use-password-criteria";

type Props = {
    criteria: Criteria;
};

export const PasswordCriteria: React.FC<Props> = ({ criteria }) => {

    const { control: { setLength }, length } = criteria;

    const onLengthValueChange = useCallback((v: number | readonly number[]) => {
        if (typeof v === 'number') {
            setLength(v);
        }
    }, [setLength]);

    return <div className="flex">
        <Field orientation="horizontal">
            <Slider min={4} max={128} value={length} onValueChange={onLengthValueChange}/>
            <FieldLabel>
                {length}
            </FieldLabel>
        </Field>
    </div>
}