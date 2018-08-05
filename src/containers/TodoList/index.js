import { connect } from 'react-redux'

import { TodoList } from '../../components'
import { getTodos } from '../../state'

function mapStateToProps (state) {
  return {
    todos: getTodos(state)
  }
}

export default connect(mapStateToProps)(TodoList)
