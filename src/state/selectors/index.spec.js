import { getTodos } from './'

describe('selectors', () => {
  describe('getTodos', () => {
    it('returns the todo list', () => {
      const todos = [{ todo: 'first todo' }, { todo: 'second todo' }]
      const state = {
        todos
      }

      expect(getTodos(state)).toEqual(todos)
    })
  })
})
