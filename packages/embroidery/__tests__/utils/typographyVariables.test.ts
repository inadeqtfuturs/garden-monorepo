import { getTypographyVariables } from '../../src/utils/typography';

const defaultValues = {
  fontFamilies: { monospace: 'monospace', body: 'serif', heading: 'san-serif' },
  fontWeights: { light: 300, regular: 400, medium: 500, bold: 700 },
  letterSpacings: { normal: 'normal' },
  lineHeights: { normal: 'normal' }
};

describe('@--> generateTypographyVariables', () => {
  it('Returns default values', () => {
    const result = getTypographyVariables();
    expect(result).toEqual(defaultValues);
  });

  it('Overrieds at all namespaces', () => {
    const result = getTypographyVariables({
      fontFamilies: { monospace: 'test' },
      fontWeights: { light: 100 },
      letterSpacings: { normal: '0.2px' },
      lineHeights: { normal: 1.5 }
    });

    expect(result.fontFamilies.monospace).toEqual('test, monospace');
    expect(result.fontWeights.light).toEqual(100);
    expect(result.letterSpacings.normal).toEqual('0.2px');
    expect(result.lineHeights.normal).toEqual(1.5);
  });

  it('Extends all namespaces', () => {
    const result = getTypographyVariables({
      fontFamilies: { other: 'test' },
      fontWeights: { heavy: 900 },
      letterSpacings: { negative: '-0.2px' },
      lineHeights: { short: 0.9, test: 1.5, other: 'normal' }
    });

    expect(result.fontFamilies.other).toEqual('test');
    expect(result.fontWeights.heavy).toEqual(900);
    expect(result.letterSpacings.negative).toEqual('-0.2px');
    expect(result.lineHeights.short).toEqual(0.9);
  });
});
