import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import {
  CheckoutButton,
  HeaderContainer,
  ItemsOnRight,
  LocationBadge,
} from './styles'

import logoCoffeeDelivery from '../../../public/logoCoffeeDelivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" end>
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <ItemsOnRight>
        <LocationBadge>
          <MapPin size={22} />
          Angra dos Reis, RJ
        </LocationBadge>

        <NavLink to="/checkout">
          <CheckoutButton>
            <ShoppingCart size={22} />
          </CheckoutButton>
        </NavLink>
      </ItemsOnRight>
    </HeaderContainer>
  )
}
