import React from 'react'

import {
  StyledTopic,
  StyledQuestions,
  StyledQuestion,
  StyledTopicQuestions
} from '../style'

export default function TopicQuestions () {
  return (
    <StyledTopicQuestions>
      <StyledTopic>Money</StyledTopic>
      <StyledQuestions>
        <StyledQuestion>1</StyledQuestion>
        <StyledQuestion>2</StyledQuestion>
        <StyledQuestion>3</StyledQuestion>
        <StyledQuestion>4</StyledQuestion>
      </StyledQuestions>
    </StyledTopicQuestions>
  )
}
