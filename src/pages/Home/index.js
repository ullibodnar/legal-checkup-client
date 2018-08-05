import React from 'react'

import { Layout } from '../../components'
import { Todo, TodoList } from '../../containers'

const todos = [{ todo: 'first todo' }, { todo: 'second todo' }]

export default function Home () {
  return (
    <Layout>
      <p>This is the Home page</p>
      <Todo />
      <TodoList todos={todos} />
    </Layout>
  )
}
