# embroidery

like `typography` but for `stitches`

## overview

Creating a typographical system in `stitches` requires at least two steps:

1. Create some tokens in the theme object
2. Apply those tokens to semantic html elements so that, for example, all `p` tags have the same styles

`embroidery` simplifies this process and reduces boilerplate by generating typography from a set of primitive tokens including base font size, typographical scale, font families, and font weights. Given these primitives, the function exports token values to use in `createStitches` as well as typographical values for semantic html elements, which can be spread and exported in `globalCss`.

## api

``` ts
// stitches.config.ts
import { createStitches } from '@stitches/react';
import embroidery from 'embroidery';

const { typography, globalTypography } = embroidery()
export const { css, globalCss, theme } = createStitches({
  ...typography
})

export const globalStyles = globalCss({
  ...globalTypography
  // or
  ...globalTypography(theme)
}) 
```

## config

```typescript
type Scale = {
  entries?: number;
  scale?: number | keyof typeof scales | object extends { [key: string | number]: CSSUnit }
} 

const config = {
  baseFontSize: number;
  scale?: Scale;
  fontFamilies: FontFamilies;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  letterSpacings: LetterSpacings;
}
```
