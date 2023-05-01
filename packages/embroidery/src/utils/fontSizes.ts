import { Enumerate, FontSizeUnit } from '../types';
import { rem } from './rem';

export const scales = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  goldenRatio: 1.618
} as const;

export type Scale = number | object | keyof typeof scales;

export type FontSizes<
  S extends Scale = 'majorThird',
  E extends number = 10
> = E extends number
  ? S extends object
    ? { [K in keyof S]: FontSizeUnit }
    : { [K in Exclude<Enumerate<E, []>, never>]: FontSizeUnit }
  : never;

export function getFontSizes<
  S extends Scale = 'majorThird',
  E extends number = 10
>({
  baseFontSize,
  scale,
  entries
}: {
  baseFontSize?: number;
  scale?: S;
  entries?: E;
} = {}): FontSizes<S, E> {
  if (typeof scale === 'object') {
    return scale as unknown as FontSizes<S, E>;
  }

  console.log('@--> baseFontSize', baseFontSize);

  const baseSize = baseFontSize || 16;
  const s =
    scales[scale as keyof typeof scales] || scale || scales['majorThird'];
  const length = entries || 10;

  const entryArray = Array.from({ length }, (_, i) => [
    i,
    rem(baseSize * Math.pow(s, i - 2))
  ]);

  console.log('@--> entryArray', entryArray);

  return Object.fromEntries(entryArray);
}
