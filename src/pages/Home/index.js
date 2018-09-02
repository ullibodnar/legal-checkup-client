import React from 'react'

import { Layout } from '../../components'
import { Todo, TodoList } from '../../containers'

export default function Home () {
  return (
    <div>
      <Todo />
      <hr />
      <TodoList />
    </div>
  )
}
