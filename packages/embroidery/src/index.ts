import { getFontSizes, Scale } from './utils/fontSizes';

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
  console.log('@--> config', { baseFontSize, scale, entries });
  const fontSizes = getFontSizes<S, E>({ baseFontSize, entries, scale });

  return {
    fontSizes
  };
}

export default embroidery;
