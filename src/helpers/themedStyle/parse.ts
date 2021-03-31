import { isPseudo } from './isPseudo'
import { isStateSpecificStyle } from './isStateSpecificStyle'
import { SCALES_MAP } from './constants/ThemeScaleMap'
import { isVariantsStyle } from './isVariantsStyle'
import { isScalesMapKey } from './isScalesMapKey'
import { isThemeValue } from './isThemeValue'
import type { ThemedCSS, CSSObj, Entries, TTheme, FlatThemedCSS } from './types'

export const parse = <Theme extends TTheme, Props>(
  config: FlatThemedCSS<Theme, Props>,
  theme: Theme,
  rest: Omit<Props, 'theme'>,
): CSSObj => {
  return (Object.entries(config) as Entries<typeof config>).reduce<CSSObj>((acc, tuple) => {
    const cssProp = tuple![0]
    const value = tuple![1]
    if (isPseudo(cssProp)) {
      acc[cssProp] = parse(value as ThemedCSS<Theme, Props>, theme, rest)
    } else if (isStateSpecificStyle(cssProp)) {
      const extractedConf = extractStateConf(value, theme, rest)
      const parsedConf = parse(extractedConf, theme, rest)
      return { ...acc, ...parsedConf }
    } else if (isVariantsStyle(cssProp)) {
      const extractedConf = extractVariantConf(value, theme, rest)
      const parsedConf = parse(extractedConf, theme, rest)
      return { ...acc, ...parsedConf }
    } else {
      if (isScalesMapKey(cssProp)) {
        const scale = SCALES_MAP[cssProp]
        if (
          isThemeValue(value, scale, theme) &&
          value !== undefined &&
          (typeof value === 'string' || typeof value === 'number')
        ) {
          const themeValue = theme[scale]
          const b = value
          // const c = cssProp
        }
      }
      // acc[cssProp] = scale && theme[scale][value] ? theme[scale][value] : value
      return acc
    }
    return acc
  }, {})
}

const extractStateConf = (config, theme, rest) =>
  Object.entries(config).reduce((acc, [prop, value]) => {
    if (rest[prop]) {
      return { ...acc, ...value }
    } else return acc
  }, {})

const extractVariantConf = (config, theme, rest) =>
  Object.entries(config).reduce((acc, [prop, value]) => {
    if (rest.variant === prop) {
      return { ...acc, ...value }
    } else return acc
  }, {})
