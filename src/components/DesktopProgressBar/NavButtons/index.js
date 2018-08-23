import React from 'react'

import { StyledNavButtonForward, StyledNavButtonBack } from '../style'

function NavButtonBack () {
  return <StyledNavButtonBack>◀</StyledNavButtonBack>
}

function NavButtonForward () {
  return <StyledNavButtonForward>►</StyledNavButtonForward>
}

export { NavButtonBack, NavButtonForward }
