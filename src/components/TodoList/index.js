import React from 'react'
import { addIndex, map } from 'ramda'

const indexedMap = addIndex(map)

export default function TodoList (props) {
  console.log('TodoList props', JSON.stringify(props, null, 2))

  return (
    <div>
      <p>
        This is the TodoList component. It gets the todos from the state via the
        TodoList <i>container</i> as a "todos" prop and then displays them in an
        HTML UL list.
      </p>
      <ul>
        {indexedMap(
          ({ todo }, idx) => (
            <li key={idx} data-index={idx}>
              {todo}
            </li>
          ),
          props.todos || []
        )}
      </ul>
    </div>
  )
}
