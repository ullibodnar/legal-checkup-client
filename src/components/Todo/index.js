import React from 'react'

export default function Todo ({ handleBlur }) {
  return (
    <form>
      <div>
        <p>
          This is the Todo component where you can add a tod. The Todo{' '}
          <i>component</i> is wrapped by the Todo <i>container</i>
          which provides a "handleBlur" function (as a prop) to dispatch the new
          todo to the state.
        </p>
        <br />
        <label>Add a todo:</label>{' '}
        <input type='text' name='todo' onBlur={handleBlur} />
      </div>
    </form>
  )
}
