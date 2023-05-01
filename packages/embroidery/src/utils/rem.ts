import { FontSizeUnit } from '../types';

export const rem = (px: number): FontSizeUnit =>
  `${parseFloat((px / 16).toFixed(3))}rem`;
