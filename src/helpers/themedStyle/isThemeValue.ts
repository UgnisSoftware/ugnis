import type { TTheme } from './parse'
import type { Pseudos } from 'csstype'

export const isThemeValue = <U, K extends keyof TTheme, T extends TTheme>(
  value: any,
  scale: K,
  theme: T,
): value is keyof T[K] => value in theme[scale]
