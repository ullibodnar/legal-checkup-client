import { connect } from 'react-redux'

import { DesktopProgressBar } from '../../components'
import { getActiveQuestion, getQuestions, getTopicList } from '../../state'

function mapStateToProps (state) {
  return {
    activeQuestion: getActiveQuestion(state),
    questions: getQuestions(state),
    topics: getTopicList(state)
  }
}

export default connect(mapStateToProps)(DesktopProgressBar)
