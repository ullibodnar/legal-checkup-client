export function getTodos (state = {}) {
  console.log('state', JSON.stringify({ ...state, router: undefined }, null, 2))

  return state.todos
}
