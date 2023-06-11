import type { Property, DataType } from 'csstype';

export type FontSizeUnit = `${number}${'rem' | 'px'}`;

export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type ValueOf<T> = T[keyof T];
export type Entries<T> = [keyof T, ValueOf<T>][];

export type Merge<T, U> = {
  [K in keyof T | keyof U]?: K extends keyof T
    ? T[K]
    : K extends keyof U
    ? U[K]
    : never;
};

export type RequireKeys<T> = {
  [K in keyof T]-?: T[K];
};

type FontFamily = string | DataType.GenericFamily;

export type FontFamilies = {
  body?: FontFamily | FontFamily[];
  heading?: FontFamily | FontFamily[];
  monospace?: FontFamily | FontFamily[];
};

export type FontWeights = {
  light?: Property.FontWeight;
  regular?: Property.FontWeight;
  medium?: Property.FontWeight;
  bold?: Property.FontWeight;
};

export type LineHeights = {
  normal?: Property.LineHeight;
};

export type LetterSpacings = {
  normal?: Property.LetterSpacing;
};

export type TypographyConfig = {
  fontFamilies?: FontFamilies & { [key: string]: FontFamily | FontFamily[] };
  fontWeights?: FontWeights & { [key: string]: Property.FontWeight };
  letterSpacings?: LetterSpacings & { [key: string]: Property.LetterSpacing };
  lineHeights?: LineHeights & { [key: string]: Property.LineHeight };
};

export type TypographyVariables<T extends TypographyConfig> = {
  fontFamilies: Merge<FontFamilies, T['fontFamilies']>;
  fontWeights: Merge<FontWeights, T['fontWeights']>;
  letterSpacings: Merge<LetterSpacings, T['letterSpacings']>;
  lineHeights: Merge<LineHeights, T['lineHeights']>;
};
