import { connect } from 'react-redux'

import { Todo } from '../../components'
import { todoAdded } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleBlur: event => dispatch(todoAdded(event.currentTarget.value))
  }
}

export default connect(undefined, mapDispatchToProps)(Todo)
