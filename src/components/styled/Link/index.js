import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none
  color: black;

  &:hover {
    color: red;
  }
`
Link.displayName = 'StyledLink'

export default Link