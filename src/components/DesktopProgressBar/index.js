import React from 'react'

import { NavButtonBack, NavButtonForward } from './NavButtons'
import TopicQuestions from './TopicQuestions'

export default function DesktopProgressBar () {
  return (
    <nav>
      <NavButtonBack />
      <TopicQuestions />
      <NavButtonForward />
    </nav>
  )
}
