import { TEXT_FONT_SIZES, TEXT_FONTS, TEXT_LETTER_SPACING, TEXT_VARIANTS, FONT_FAMILY } from './elements/Text/tokens'

export const breakpoints = {
  xl: '1192px',
  /** Between 1024 and  1191 */
  lg: '1024px',
  /** Between 900 and 1023 */
  md: '900px',
  /** Between 768 and  899 */
  sm: '768px',
  /** Below 767 */
  xs: '767px',
}

export const unitlessBreakpoints = {
  /** Above 1192 */
  xl: parseInt(breakpoints.xl, 10),
  /** Between 1024 and  1191 */
  lg: parseInt(breakpoints.lg, 10),
  /** Between 900 and 1023 */
  md: parseInt(breakpoints.md, 10),
  /** Between 768 and  899 */
  sm: parseInt(breakpoints.sm, 10),
  /** Below 767 */
  xs: parseInt(breakpoints.xs, 10),
}

export const COLORS = {
  white: '#FFF',
  black: '#000',

  primary000: '#E0E8F9',
  primary100: '#BED0F7',
  primary200: '#98AEEB',
  primary300: '#7B93DB',
  primary400: '#647ACB',
  primary500: '#4C63B6',
  primary600: '#4055A8',
  primary700: '#35469C',
  primary800: '#2D3A8C',
  primary900: '#19216C',

  neutral000: '#F5F7FA',
  neutral100: '#E4E7EB',
  neutral200: '#CBD2D9',
  neutral300: '#9AA5B1',
  neutral400: '#7B8794',
  neutral500: '#616E7C',
  neutral600: '#52606D',
  neutral700: '#3E4C59',
  neutral800: '#323F4B',
  neutral900: '#1F2933',

  accent000: '#E3F8FF',
  accent100: '#B3ECFF',
  accent200: '#81DEFD',
  accent300: '#5ED0FA',
  accent400: '#40C3F7',
  accent500: '#2BB0ED',
  accent600: '#1992D4',
  accent700: '#127FBF',
  accent800: '#0B69A3',
  accent900: '#035388',

  error000: '#FFE3E3',
  error100: '#FFBDBD',
  error200: '#FF9B9B',
  error300: '#F86A6A',
  error400: '#EF4E4E',
  error500: '#E12D39',
  error600: '#CF1124',
  error700: '#AB091E',
  error800: '#8A041A',
  error900: '#610316',

  warning000: '#FFFBEA',
  warning100: '#FFF3C4',
  warning200: '#FCE588',
  warning300: '#FADB5F',
  warning400: '#F7C948',
  warning500: '#F0B429',
  warning600: '#DE911D',
  warning700: '#CB6E17',
  warning800: '#B44D12',
  warning900: '#8D2B0B',

  success000: '#EFFCF6',
  success100: '#C6F7E2',
  success200: '#8EEDC7',
  success300: '#65D6AD',
  success400: '#3EBD93',
  success500: '#27AB83',
  success600: '#199473',
  success700: '#147D64',
  success800: '#0C6B58',
  success900: '#014D40',
}

/**
 * We alias breakpoints onto the scale so that styled-system has access
 * to the named breakpoints as well as the scale
 */
const BREAKPOINTS_SCALE = Object.assign([breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl], breakpoints)

export const themeProps = {
  borders: ['1px solid', '2px solid'],
  breakpoints: BREAKPOINTS_SCALE,
  colors: COLORS,
  fontFamily: FONT_FAMILY,
  fonts: TEXT_FONTS,
  fontSizes: TEXT_FONT_SIZES,
  letterSpacings: TEXT_LETTER_SPACING,
  lineHeights: {
    solid: 1,
    title: 1.25,
    body: 1.5,
  },
  mediaQueries: {
    xl: `(min-width: ${breakpoints.xl})`,
    lg: `(min-width: ${breakpoints.lg}) and (max-width: ${parseInt(breakpoints.xl, 10) - 1})`,
    md: `(min-width: ${breakpoints.md}) and (max-width: ${parseInt(breakpoints.lg, 10) - 1})`,
    sm: `(min-width: ${breakpoints.sm}) and (max-width: ${parseInt(breakpoints.md, 10) - 1})`,
    xs: `(max-width: ${parseInt(breakpoints.sm, 10) - 1})`,
    /** Determines if the input device has the notion of hover, e.g. mouse. */
    hover: `not all and (pointer: coarse), not all and (-moz-touch-enabled: 1)`,
  },
  // https://github.com/dragma/styled-bootstrap-grid#styled-bootstrap-grid
  grid: {
    breakpoints: unitlessBreakpoints,
    container: {
      padding: 0,
    },
    row: {
      padding: 0,
    },
    col: {
      padding: 0,
    },
  },
  space: {
    0.25: '4px',
    0.5: '8px',
    1: '12px',
    1.5: '16px',
    2: '24px',
    3: '32px',
    4: '48px',
    5: '64px',
    6: '96px',
    9: '128px',
    12: '256px',
  },
  sizes: {
    // switch: {
    //   height: '22px',
    //   width: '44px',
    // },
  },
  typeSizes: {
    sans: {
      '0': {
        fontSize: '8px',
        lineHeight: '8px',
      },
      '1': {
        fontSize: '10px',
        lineHeight: '14px',
      },
      '2': {
        fontSize: '12px',
        lineHeight: '16px',
      },
      '3': {
        fontSize: '14px',
        lineHeight: '24px',
      },
      '3t': {
        fontSize: '14px',
        lineHeight: '20px',
      },
      '4': {
        fontSize: '16px',
        lineHeight: '26px',
      },
      '4t': {
        fontSize: '16px',
        lineHeight: '22px',
      },
      '5': {
        fontSize: '18px',
        lineHeight: '30px',
      },
      '5t': {
        fontSize: '18px',
        lineHeight: '26px',
      },
      '6': {
        fontSize: '22px',
        lineHeight: '30px',
      },
      '8': {
        fontSize: '28px',
        lineHeight: '36px',
      },
      '10': {
        fontSize: '42px',
        lineHeight: '50px',
      },
      '12': {
        fontSize: '60px',
        lineHeight: '66px',
      },
      '14': {
        fontSize: '80px',
        lineHeight: '84px',
      },
      '16': {
        fontSize: '100px',
        lineHeight: '104px',
      },
    },
    serif: {
      '1': {
        fontSize: '12px',
        lineHeight: '16px',
      },
      '2': {
        fontSize: '14px',
        lineHeight: '18px',
      },
      '3': {
        fontSize: '16px',
        lineHeight: '24px',
      },
      '3t': {
        fontSize: '16px',
        lineHeight: '20px',
      },
      '4': {
        fontSize: '18px',
        lineHeight: '26px',
      },
      '4t': {
        fontSize: '18px',
        lineHeight: '22px',
      },
      '5': {
        fontSize: '22px',
        lineHeight: '32px',
      },
      '5t': {
        fontSize: '22px',
        lineHeight: '28px',
      },
      '6': {
        fontSize: '26px',
        lineHeight: '32px',
      },
      '8': {
        fontSize: '32px',
        lineHeight: '38px',
      },
      '10': {
        fontSize: '44px',
        lineHeight: '50px',
      },
      '12': {
        fontSize: '60px',
        lineHeight: '70px',
      },
    },

    display: {
      '2': {
        fontSize: '10px',
        lineHeight: '12px',
      },
      '3t': {
        fontSize: '12px',
        lineHeight: '16px',
      },
      '4t': {
        fontSize: '14px',
        lineHeight: '18px',
      },
      '5t': {
        fontSize: '16px',
        lineHeight: '20px',
      },
      '6': {
        fontSize: '18px',
        lineHeight: '22px',
      },
      '8': {
        fontSize: '22px',
        lineHeight: '24px',
      },
    },
  },
  fontWeights: {
    regular: 400,
    semibold: 500,
  },
  radii: {
    '1': '4px',
    round: '50%',
    pill: '100px',
  },
  textVariants: TEXT_VARIANTS,
}

export type Theme = typeof themeProps
export type SpacingUnit = keyof typeof themeProps['space']
export type Color = keyof typeof themeProps['colors']
export type Breakpoint = keyof typeof breakpoints
export type TypeSizes = typeof themeProps.typeSizes
export type SansSize = keyof TypeSizes['sans'] | Array<keyof TypeSizes['sans']>
export type SerifSize = keyof TypeSizes['serif'] | Array<keyof TypeSizes['serif']>
export type DisplaySize = keyof TypeSizes['display'] | Array<keyof TypeSizes['display']>
