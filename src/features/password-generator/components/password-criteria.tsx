import { Field, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useCallback, type HTMLAttributes } from "react";
import type { PasswordCriteria as Criteria } from "../lib/use-password-criteria";
import { Badge } from "@/components/ui/badge";
import { DEFAULT_SPECIAL_CHARS, LOWERCASE_CHARS, NUMBER_CHARS, UPPERCASE_CHARS } from "../constants/password-chars";
import { Input } from "@/components/ui/input";

type Props = {
  criteria: Criteria;
};

export const PasswordCriteria: React.FC<Props> = ({ criteria }) => {
  const {
    control: { setLength, setIncludeCapital, setIncludeLower, setIncludeNumber, setSpecialChars },
    length,
    includeCapital,
    includeLower,
    includeNumber,
    specialChars,
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

  const togglespecialCharsClick = useCallback(() => setSpecialChars((prev) => {
    if (prev === null) return DEFAULT_SPECIAL_CHARS;
    return null;
  }), []);

  const setSpecialCharsValue: HTMLAttributes<HTMLInputElement>['onChange'] = useCallback((ev) => {
    const value = ev.target.value.trim();

    const ALL_CHARS = [...NUMBER_CHARS, ...LOWERCASE_CHARS, ...UPPERCASE_CHARS];
    const filtered = value.split('').filter((char) => char !== '' && !ALL_CHARS.includes(char));
    const nonRepeated = new Set(filtered);
    setSpecialChars([...nonRepeated]);
  }, [setSpecialChars, specialChars])

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

        <div className="flex gap-2">
            <Badge
                className="cursor-pointer select-none"
                variant={specialChars === null ? 'outline' : 'default'}
                onClick={togglespecialCharsClick}
            >
                Special characters
            </Badge>
            {specialChars !== null && (
                <Field>
                    <Input value={specialChars.join('')} onChange={setSpecialCharsValue}/>
                </Field>
            )}
        </div>
      </div>
    </div>
  );
};