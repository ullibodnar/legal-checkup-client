import styled from 'styled-components'

const StyledDesktopProgressBar = styled.nav`
  display: flex;
  align-items: flex-end;
`
StyledDesktopProgressBar.displayName = 'StyledDesktopProgressBar'

const StyledNavButton = styled.button`
  width: 50px;
  height: 32px;
  background-color: #ededed;
  outline: none;
  border: 0;
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

const StyledTopic = styled.div`
  transform: rotate(-45deg);
  height: 31px;
  text-align: center;
`
StyledTopic.displayName = 'StyledTopic'

const StyledQuestions = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 1px 0 1px;
  background: #e0e0e0;
`
StyledQuestions.displayName = 'StyledQuestions'

const StyledQuestion = styled.li`
  display: inline-block;
  font-size: 13px;
  text-align: center;
  line-height: 16px;
  height: 16px;
  width: 16px;
  padding: 8px;
  border-radius: 5px;
`
StyledQuestion.displayName = 'StyledQuestion'

const StyledTopicQuestions = styled.div`
  display: relative;
`

export {
  StyledDesktopProgressBar,
  StyledNavButtonBack,
  StyledNavButtonForward,
  StyledTopic,
  StyledQuestions,
  StyledQuestion,
  StyledTopicQuestions
}
