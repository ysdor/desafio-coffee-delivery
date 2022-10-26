import 'styled-components'

import { defaultTheme } from './default'

type DefaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
