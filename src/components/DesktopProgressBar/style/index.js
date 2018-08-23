import styled from 'styled-components'

const StyledDesktopProgressBar = styled.nav`
  display: flex;
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
  width: 41px;
  height: 31px;
`
StyledTopic.displayName = 'StyledTopic'

const StyledQuestions = styled.ul`
  list-style: none;
  padding: 0;
  background: #e0e0e0;
`
StyledQuestions.displayName = 'StyledQuestions'

const StyledQuestion = styled.li`
  display: inline-block;
`
StyledQuestion.displayName = 'StyledQuestion'

export {
  StyledDesktopProgressBar,
  StyledNavButtonBack,
  StyledNavButtonForward,
  StyledTopic,
  StyledQuestions,
  StyledQuestion
}
