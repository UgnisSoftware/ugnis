import type { SCALES_MAP } from './constants/ThemeScaleMap'
import type { Properties, Pseudos } from 'csstype'

export type EmptyTheme = {
  colors?: {}
  space?: {}
  fontSizes?: {}
  fonts?: {}
  fontWeights?: {}
  lineHeights?: {}
  letterSpacings?: {}
  sizes?: {}
  borderWidths?: {}
  borders?: {}
  radii?: {}
  shadows?: {}
  zIndexes?: {}
  transitions?: {}
}

export type TTheme = { [k in keyof EmptyTheme]?: { [b: string]: number | string } | string[] }

type ThemeableCssProps = keyof typeof SCALES_MAP

export type CSS = Properties<string | number>

export type FlatThemedCSS<Theme extends EmptyTheme = {}, Props = {}> = {
  [k in keyof CSS]?: (k extends ThemeableCssProps ? keyof Theme[typeof SCALES_MAP[k]] : never) | CSS[k]
}

type NestedThemedCSS<Theme extends EmptyTheme = {}, Props = {}> = { [K in Pseudos]?: FlatThemedCSS<Theme, Props> } &
  { [K in Pseudos & string as `&${K}`]?: FlatThemedCSS<Theme, Props> }

export type ThemedCSS<Theme extends EmptyTheme = {}, Props = {}> = FlatThemedCSS<Theme, Props> &
  NestedThemedCSS<Theme, Props> & {
    state?: {
      [K in keyof Props]?: Props[K] extends boolean | undefined ? NestedThemedCSS<Theme, Props> : never
    }
  } & {
    variants?: Props extends { variant?: any } ? { [K in Props['variant']]?: NestedThemedCSS<Theme, Props> } : never
  }

export type CSSObj = CSS & { [K in Pseudos]?: CSS } & { [K in Pseudos & string as `&${K}`]?: CSS }

export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]
