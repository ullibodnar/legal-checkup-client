import { todoAdded } from '.'
import { TODO_ADDED } from '..'

describe('actions', () => {
  describe('todoAdded', () => {
    it('creates a todoAdded action with the correct payload', () => {
      const todo = 'This is a todo'

      expect(todoAdded(todo)).toMatchObject({
        type: TODO_ADDED,
        payload: { todo }
      })
    })
  })
})
