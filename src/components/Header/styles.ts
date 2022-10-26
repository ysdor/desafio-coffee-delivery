import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-block: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ItemsOnRight = styled.div`
  display: flex;
  gap: 0.75rem;
`

const BaseButtonLayout = styled.span`
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
`

export const LocationBadge = styled(BaseButtonLayout)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  font-size: 0.875rem;
  line-height: 130%;

  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

export const CheckoutButton = styled(BaseButtonLayout)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
