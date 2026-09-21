import { LOWERCASE_CHARS, NUMBER_CHARS, UPPERCASE_CHARS } from "../constants/password-chars";
import type { PasswordCriteria } from "./use-password-criteria";

export function generatePassword(criteria: PasswordCriteria): string {
  const { length, includeCapital, includeLower, includeNumber, specialChars } = criteria;

  const charPools: string[] = [];

  if (includeLower) charPools.push(LOWERCASE_CHARS);
  if (includeCapital) charPools.push(UPPERCASE_CHARS);
  if (includeNumber) charPools.push(NUMBER_CHARS);

  const symbols = specialChars;
  if (symbols && symbols.length > 0) {
    charPools.push(symbols.join(''));
  }

  if (charPools.length === 0 || length <= 0) {
    return '';
  }

  const passwordChars: string[] = [];

  for (const pool of charPools) {
    if (passwordChars.length < length) {
      passwordChars.push(getRandomChar(pool));
    }
  }

  const fullPool = charPools.join('');
  while (passwordChars.length < length) {
    passwordChars.push(getRandomChar(fullPool));
  }

  return shuffleArray(passwordChars).join('');
}

function getRandomChar(pool: string): string {
  const randomBuffer = new Uint32Array(1);
  crypto.getRandomValues(randomBuffer);
  return pool[randomBuffer[0] % pool.length];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  const randomBuffer = new Uint32Array(1);

  for (let i = shuffled.length - 1; i > 0; i--) {
    crypto.getRandomValues(randomBuffer);
    const j = randomBuffer[0] % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}