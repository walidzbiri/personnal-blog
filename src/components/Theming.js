import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.myorange,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.myorange,
      link: colors.myorange,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, colors.myorange),
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: lighten(0.05, colors.myorange),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
