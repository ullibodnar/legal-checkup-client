import React from 'react'

import { NavButtonBack, NavButtonForward } from './NavButtons'
import TopicQuestions from './TopicQuestions'
import { StyledDesktopProgressBar } from './style'

export default function DesktopProgressBar () {
  return (
    <StyledDesktopProgressBar>
      <NavButtonBack />
      <TopicQuestions />
      <NavButtonForward />
    </StyledDesktopProgressBar>
  )
}
