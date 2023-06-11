import type {
  FontFamilies,
  FontWeights,
  LineHeights,
  LetterSpacings,
  TypographyConfig,
  TypographyVariables
} from '../types';

// https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#values
const defaultFontFamilies: FontFamilies = {
  monospace: 'monospace',
  body: 'serif',
  heading: 'san-serif'
};

// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
const defaultFontWeights: FontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

// https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing#PropertyValues
const defaultLetterSpacings: LetterSpacings = {
  normal: 'normal'
};

//https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#PropertyValues
const defaultLineHeights: LineHeights = {
  normal: 'normal'
};

const defaultTypographyVariables = {
  fontFamilies: defaultFontFamilies,
  fontWeights: defaultFontWeights,
  letterSpacings: defaultLetterSpacings,
  lineHeights: defaultLineHeights
};

export function getTypographyVariables<T extends TypographyConfig>(
  typographyConfig?: T
) {
  const typographyEntries = Object.entries(typographyConfig || {});

  const typography = typographyEntries.reduce((a, [k, c]) => {
    // concat fontfamilies so we always return a value
    if (k === 'fontFamilies' && c) {
      const fontFamilyEntries = Object.entries(c);
      const concatFontFamilies = fontFamilyEntries.reduce(
        (acc, [family, font]) => {
          const familyValue = acc[family as keyof FontFamilies];
          if (!!font && familyValue) {
            const concatFont = font.concat(', ', familyValue);
            return { ...acc, [family]: concatFont };
          }
          return { ...acc, [family]: font };
        },
        defaultFontFamilies
      );
      return { ...a, fontFamilies: concatFontFamilies };
    }
    return { ...a, [k]: { ...a[k], ...c } };
  }, defaultTypographyVariables);

  return typography as TypographyVariables<T>;
}
