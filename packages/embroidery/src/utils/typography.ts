import type CSS from 'csstype';
import type {
  FontFamilies,
  FontWeights,
  LineHeights,
  LetterSpacings
} from '../types';

type Elements = {
  heading?: string[];
  body?: string[];
  monospace?: string[];
} & Record<string, string[]>;

export const defaultElements: Elements = {
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  body: [
    'p',
    'a',
    'span',
    'small',
    'ol',
    'ul',
    'li',
    'blockquiote',
    'table',
    'tr',
    'th',
    'td'
  ],
  monospace: ['code', 'pre']
};

type StackPrimitive = {
  fontFamily?: keyof FontFamilies;
  fontWeight?: keyof FontWeights;
  lineHeight?: keyof LineHeights;
  letterSpacing?: keyof LetterSpacings;
} & Omit<
  CSS.Properties,
  'fontFamily' | 'fontWeight' | 'lineHeight' | 'letterSpacing'
>;

type ElementMap = (
  variables: ThemeVariables & FontSizes,
  element: string,
  index: number
) => StackPrimitive;

type StackSettings = StackPrimitive & { map?: ElementMap };

export function getTypography<F, V>({
  fontSizes,
  typographyVariables
}: {
  fontSizes: F;
  typographyVariables: V;
}): { fontSizes: F; typographyVariables: V } {
  return { fontSizes, typographyVariables };
}
