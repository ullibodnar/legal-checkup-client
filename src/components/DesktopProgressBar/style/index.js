import styled from 'styled-components'

const StyledNavButton = styled.button`
  width: 50px;
  height: 32px;
  background-color: #ededed;
`
StyledNavButton.displayName = 'StyledNavButton'

const StyledNavButtonBack = StyledNavButton.extend`
  border-radius: 5px 0 0 5px;
`
StyledNavButtonBack.displayName = 'StyledNavButtonBack'

const StyledNavButtonForward = StyledNavButton.extend`
  border-radius: 0 5px 5px 0;
`
StyledNavButtonForward.displayName = 'StyledNavButtonForward'

export { StyledNavButtonBack, StyledNavButtonForward }
