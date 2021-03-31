import { SCALES_MAP } from './constants/ThemeScaleMap'

export const isScalesMapKey = <T>(value: T): value is Extract<keyof typeof SCALES_MAP, T> => value in SCALES_MAP
