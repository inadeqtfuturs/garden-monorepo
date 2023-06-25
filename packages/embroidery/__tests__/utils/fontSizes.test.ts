import { getFontSizes } from '../../src/utils/fontSizes';

const defaultFontSizes = {
  '0': '0.64rem',
  '1': '0.8rem',
  '2': '1rem',
  '3': '1.25rem',
  '4': '1.563rem',
  '5': '1.953rem',
  '6': '2.441rem',
  '7': '3.052rem',
  '8': '3.815rem',
  '9': '4.768rem'
};

describe('@--> fontSizes', () => {
  it('Returns defaults', () => {
    const result = getFontSizes();
    expect(result).toEqual(defaultFontSizes);
  });

  it('Returns a provided object', () => {
    const fontSizes = {
      0: '1rem',
      1: '1rem',
      2: '1rem',
      3: '1rem',
      4: '1rem'
    };
    const result = getFontSizes({ scale: fontSizes });
    expect(result).toEqual(fontSizes);
  });

  it('Returns based on different number of entries', () => {
    const result = getFontSizes({ entries: 7 });
    expect(Object.entries(result).length).toEqual(7);
  });
});
