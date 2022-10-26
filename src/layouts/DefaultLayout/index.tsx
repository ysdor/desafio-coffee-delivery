import { Outlet } from 'react-router-dom'

import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <header>Header</header>

      <Outlet />
    </DefaultLayoutContainer>
  )
}
