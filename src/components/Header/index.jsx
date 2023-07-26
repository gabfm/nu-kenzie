import logo from '../../assets/Nu Kenzie.png'

import { StyledHeader , ResponsiveHeader } from '../../styles/header'

export const Header = () => {
  return (
    <StyledHeader>
      <ResponsiveHeader>
        <figure>
          <img src={ logo } alt='Logo da Nu Kenzie' />
        </figure>
      </ResponsiveHeader>
    </StyledHeader>
  )
}