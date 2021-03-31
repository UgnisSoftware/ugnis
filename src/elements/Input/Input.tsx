import React from 'react'
import styled from 'styled-components'

import { Text } from '../Text/Text'
import { themedStyle } from '../../helpers/themedStyle/themedStyle'
import type { Configuration } from '../../helpers/themedStyle/parse'
import type { Theme } from '../../Theme'

type InputValue = string | ReadonlyArray<string> | number

type InputVariant = 'round' | 'borderless'

type InputProps = {
  value?: InputValue
  onChange: (value: InputValue) => void
  name: string
  error?: string
  disabled?: boolean
  label: string
  placeholder?: string
  variant?: InputVariant
}

const InputStyle: Configuration<Theme, InputProps> = {
  borderRadius: 1,
  border: 0,
  borderColor: 'neutral200',
  padding: '15px 12px 11px 12px',
  color: 'accent500',
  fontSize: 'size3',
  ':hover': {
    borderColor: 'accent800',
  },
  state: {
    disabled: {
      backgroundColor: 'primary400',
    },
  },
  variants: {
    borderless: {
      border: 'none',
      backgroundColor: 'lightblue',
    },
    round: {
      borderRadius: 'pill',
    },
  },
}

const StyledInput = styled.input`
  ${themedStyle(InputStyle)};
`

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, name, error, disabled, label, placeholder, variant }, ref) => (
    <label>
      <Text variant="caption" textColor="neutral800" pb={0.25}>
        {label}
      </Text>
      <StyledInput
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        placeholder={placeholder}
        value={value}
        ref={ref}
        variant={variant}
      />
    </label>
  ),
)
