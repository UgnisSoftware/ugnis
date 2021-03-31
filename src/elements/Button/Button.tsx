import React, { ReactNode, useMemo } from 'react'
import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components'
import { borderRadius, borders, height, space, textAlign, width } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Theme, themeProps } from '../../Theme'
import type { BoxProps } from '../Box/Box'
import { Text } from '../Text/Text'
import { Spinner, SpinnerSizes } from '../Spinner/Spinner'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'
export type ButtonSize = 'small' | 'medium'

export interface ButtonProps extends BoxProps {
  children: ReactNode
  size?: ButtonSize
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export interface ButtonBaseProps extends ButtonProps {
  variantStyle: FlattenInterpolation<ThemeProps<Theme>>
  sizeStyle: FlattenInterpolation<ThemeProps<Theme>>
}

const ButtonBase = styled.button<ButtonBaseProps>`
  display: block;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  border-style: none;
  border-radius: ${themeGet('radii.1')};
  ${(props) => props.sizeStyle};

  ${borders};
  ${borderRadius};
  ${space};
  ${textAlign};
  ${width};
  ${height};

  ${(props) => {
    if (!props.loading) {
      return `
        transition: 0.25s ease;
      `
    }
  }};

  ${(props) => props.variantStyle};

  &.loading {
    transition: none;
    background-color: transparent;
    color: transparent;
    border: 0;
    cursor: auto;
  }

  svg {
    color: currentColor;
    ${(props) => (props.loading ? 'opacity: 0;  pointer-events: none;' : '')}
  }
`

const HiddenText = styled(Text)`
  opacity: 0;
  pointer-events: none;
`

const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: calc(50% - ${SpinnerSizes.small / 2}px);
  left: calc(50% - ${SpinnerSizes.small / 2}px);
`

const getVariantStyle = (variant: ButtonVariant) => {
  switch (variant) {
    default:
    case 'primary':
      return css`
        ${(props) => {
          const {
            theme: { colors },
          } = props
          return css`
            background-color: ${colors.primary500};
            color: ${colors.white};

            @media ${themeProps.mediaQueries.hover} {
              &:hover {
                background-color: ${colors.primary400};
                color: ${colors.white};
              }
            }
            &:active {
              background-color: ${colors.primary600};
              transform: translateY(1px);
            }
            &:disabled {
              background-color: ${colors.neutral200};
              color: ${colors.neutral000};
              pointer-events: none;
            }
          `
        }}
      `
    case 'secondary':
      return css`
        ${(props) => {
          const { colors } = props.theme
          return css`
            background-color: ${colors.neutral100};
            color: ${colors.neutral800};

            @media ${themeProps.mediaQueries.hover} {
              &:hover {
                background-color: ${colors.neutral000};
              }
            }
            &:active {
              background-color: ${colors.neutral200};
              transform: translateY(1px);
            }
            &:disabled {
              background-color: ${colors.neutral000};
              color: ${colors.neutral200};
              pointer-events: none;
            }
          `
        }}
      `
    case 'outline':
      return css`
        ${(props) => {
          const { colors } = props.theme
          return css`
            color: ${colors.neutral800};
            border: ${themeGet('borders.0')} ${colors.primary300};
            background-color: transparent;
            @media ${themeProps.mediaQueries.hover} {
              &:hover {
                border-color: ${colors.primary400};
                color: ${colors.neutral700};
              }
            }
            &:active {
              transform: translateY(1px);
              border-color: ${colors.primary200};
              color: ${colors.neutral900};
            }
            &:disabled {
              color: ${colors.neutral300};
              border-color: ${colors.neutral200};
              pointer-events: none;
            }
          `
        }}
      `
    case 'text':
      return css`
        ${(props) => {
          const { colors } = props.theme
          return css`
            color: ${colors.neutral800};
            background-color: transparent;
            @media ${themeProps.mediaQueries.hover} {
              &:hover {
                color: ${colors.neutral700};
              }
            }
            &:active {
              transform: translateY(1px);
              color: ${colors.neutral900};
            }
            &:disabled {
              color: ${colors.neutral300};
              pointer-events: none;
            }
          `
        }}
      `
  }
}

const getSizeStyle = (size: ButtonSize) => {
  switch (size) {
    default:
    case 'medium':
      return css`
        padding: ${themeGet('space.1')} ${(props: ThemeProps<typeof themeProps>) => props.theme.space['1.5']};
      `
    case 'small':
      return css`
        padding: ${(props: ThemeProps<typeof themeProps>) => props.theme.space['0.5']} ${themeGet('space.1')};
      `
  }
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => {
  const variantStyle = useMemo(() => getVariantStyle(variant), [variant])
  const sizeStyle = useMemo(() => getSizeStyle(size), [size])
  const textSize = size === 'medium' ? 'body2' : 'caption'
  const spinnerVariant = size === 'medium' ? 'small' : 'xsmall'
  const variantSpinnerColor = variant === 'primary' ? 'white' : 'neutral800'
  return (
    <ButtonBase sizeStyle={sizeStyle} variantStyle={variantStyle} {...rest} display="flex">
      {loading && (
        <>
          <StyledSpinner variant={spinnerVariant} color={variantSpinnerColor} />
          <HiddenText variant={textSize} fontWeight="semibold" lineHeight="solid" display="flex" alignItems="center">
            {iconLeft}
            {children}
            {iconRight}
          </HiddenText>
        </>
      )}
      {!loading && (
        <>
          <Text variant={textSize} fontWeight="semibold" lineHeight="solid" display="flex" alignItems="center">
            {iconLeft}
            {children}
            {iconRight}
          </Text>
        </>
      )}
    </ButtonBase>
  )
}
