import React from 'react'

import { StyledTopic, StyledQuestions, StyledQuestion } from '../style'

export default function TopicQuestions () {
  return (
    <div>
      <StyledTopic>Money</StyledTopic>
      <StyledQuestions>
        <StyledQuestion>1</StyledQuestion>
        <StyledQuestion>2</StyledQuestion>
        <StyledQuestion>3</StyledQuestion>
        <StyledQuestion>4</StyledQuestion>
      </StyledQuestions>
    </div>
  )
}
