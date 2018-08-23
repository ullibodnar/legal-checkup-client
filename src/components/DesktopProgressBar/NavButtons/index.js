import React from 'react'

import { StyledNavButtonForward, StyledNavButtonBack } from '../style'

export default function NavButtons () {
  return (
    <div>
      <StyledNavButtonBack>◀</StyledNavButtonBack>
      <StyledNavButtonForward>►</StyledNavButtonForward>
    </div>
  )
}
