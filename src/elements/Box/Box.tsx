import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system'

import type { themeProps } from '../../Theme'

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    ColorProps<typeof themeProps>,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TextAlignProps {}

export const boxMixin = compose(background, border, color, flexbox, layout, position, space, textAlign)

export const Box = styled.div<BoxProps>`
  ${boxMixin}
`

Box.displayName = 'Box'