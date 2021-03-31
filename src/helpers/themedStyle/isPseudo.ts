import type { Pseudos } from 'csstype'
import { PSEUDOS } from './constants/Pseudos'

export const isPseudo = (cssKey: string): cssKey is Pseudos =>
  Object.keys(PSEUDOS).includes(cssKey) ||
  Object.keys(PSEUDOS)
    .map((val) => `&${val}`)
    .includes(cssKey)
