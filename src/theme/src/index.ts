import components from "./components"
import foundations from "./foundations"
import styles from "./styles"
import type { ThemeConfig, ThemeDirection } from "./theme.types"

const direction = "ltr" as ThemeDirection

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra",
}

export const theme = {
  direction,
  ...foundations,
  components,
  styles,
  config,
}

export type Theme = typeof theme

export * from "./theme.types"

export default theme
