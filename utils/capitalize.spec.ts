import { capitalizeFirstLetter } from "../utils/capitalize";

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = capitalizeFirstLetter(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty string if input is empty', () => {
    const input = '';
    const expectedOutput = '';
    const result = capitalizeFirstLetter(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle strings with one character', () => {
    const input = 'a';
    const expectedOutput = 'A';
    const result = capitalizeFirstLetter(input);
    expect(result).toEqual(expectedOutput);
  });
});
