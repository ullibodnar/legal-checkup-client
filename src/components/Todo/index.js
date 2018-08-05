import React from 'react'

export default function Todo ({ handleBlur }) {
  return (
    <form>
      <div>
        <label>To do</label>
        <br />
        <input type='text' name='todo' onBlur={handleBlur} />
      </div>
    </form>
  )
}
