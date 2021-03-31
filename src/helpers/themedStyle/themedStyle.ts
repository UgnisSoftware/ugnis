import { parse } from './parse'

export const themedStyle = (conf) => ({ theme, ...rest }) => parse(conf, theme, rest)
