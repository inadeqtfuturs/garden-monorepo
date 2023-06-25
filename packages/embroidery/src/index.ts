import type { Scale } from './utils/fontSizes';
import { getFontSizes } from './utils/fontSizes';
import { getTypographyVariables } from './utils/typographyVariables';
import { getTypography } from './utils/typography';
import type { TypographyVariableConfig } from './types';

type Config<S, E, TV> = {
  baseFontSize?: number;
  scale?: S;
  entries?: E;
  typographyVariables?: TV;
};

function embroidery<
  S extends Scale = 'majorThird',
  E extends number = 10,
  TV extends TypographyVariableConfig = object
>({
  baseFontSize,
  scale,
  entries,
  typographyVariables
}: Config<S, E, TV> = {}) {
  // 1. generate fontSize object
  const fontSizes = getFontSizes<S, E>({ baseFontSize, entries, scale });

  // 2. generate typography variables
  const typographyVariableResult = getTypographyVariables(typographyVariables);

  // 3. generate typography
  const typography = getTypography({
    fontSizes,
    typographyVariables
  });

  return {
    fontSizes,
    typographyVariables: typographyVariableResult,
    typography
  };
}

export default embroidery;
