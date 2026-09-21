import { Field, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useCallback } from "react";
import type { PasswordCriteria as Criteria } from "../lib/use-password-criteria";
import { Badge } from "@/components/ui/badge";

type Props = {
  criteria: Criteria;
};

export const PasswordCriteria: React.FC<Props> = ({ criteria }) => {
  const {
    control: { setLength, setIncludeCapital, setIncludeLower, setIncludeNumber },
    length,
    includeCapital,
    includeLower,
    includeNumber,
  } = criteria;

  const onLengthValueChange = useCallback(
    (v: number | readonly number[]) => {
      if (typeof v === "number") {
        setLength(v);
      }
    },
    [setLength]
  );

  const toggleCapitalLettersClick = useCallback(
    () => setIncludeCapital((prev) => !prev),
    [setIncludeCapital]
  );

  const toggleLowerLettersClick = useCallback(
    () => setIncludeLower((prev) => !prev),
    [setIncludeLower]
  );

  const toggleNumbersClick = useCallback(
    () => setIncludeNumber((prev) => !prev),
    [setIncludeNumber]
  );

  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal">
        <Slider
          min={4}
          max={128}
          value={length}
          onValueChange={onLengthValueChange}
        />
        <FieldLabel>{length}</FieldLabel>
      </Field>

      <div className="flex flex-wrap gap-2">
        <Badge
          className="cursor-pointer select-none"
          variant={includeCapital ? "default" : "outline"}
          onClick={toggleCapitalLettersClick}
        >
          Capital letters
        </Badge>

        <Badge
          className="cursor-pointer select-none"
          variant={includeLower ? "default" : "outline"}
          onClick={toggleLowerLettersClick}
        >
          Lowercase letters
        </Badge>

        <Badge
          className="cursor-pointer select-none"
          variant={includeNumber ? "default" : "outline"}
          onClick={toggleNumbersClick}
        >
          Numbers
        </Badge>
      </div>
    </div>
  );
};