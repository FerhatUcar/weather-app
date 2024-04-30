import { normalizeCityName } from '../utils/normalize';

describe('normalizeCityName', () => {
  it('should convert a city name to lowercase', () => {
    const input = 'New York';
    const expectedOutput = 'new york';
    const result = normalizeCityName(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty input', () => {
    const input = '';
    const expectedOutput = '';
    const result = normalizeCityName(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle already lowercase input', () => {
    const input = 'los angeles';
    const expectedOutput = 'los angeles';
    const result = normalizeCityName(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle special characters', () => {
    const input = 'San Francisco!';
    const expectedOutput = 'san francisco!';
    const result = normalizeCityName(input);
    expect(result).toEqual(expectedOutput);
  });

  // Add more test cases as needed
});
