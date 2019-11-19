// @flow

export function positiveMod(input: number, modulus: number): number {
  let output = input % modulus;
  while (output < 0) output += modulus;
  return output;
}
