import type { Scale } from './utils/fontSizes';
import { getFontSizes } from './utils/fontSizes';
import { getTypographyVariables } from './utils/typography';

type Config<S, E> = {
  baseFontSize?: number;
  scale?: S;
  entries?: E;
};

function embroidery<S extends Scale = 'majorThird', E extends number = 10>({
  baseFontSize,
  scale,
  entries
}: Config<S, E> = {}) {
  // 1. generate fontSize object
  const fontSizes = getFontSizes<S, E>({ baseFontSize, entries, scale });

  // 2. generate typography variables
  const typographyVariables = getTypographyVariables();

  return {
    fontSizes,
    typographyVariables
  };
}

export default embroidery;
