import React from 'react'
import Itask from '../interfaces/Itask'

function Tasks(arrayTasks: Itask[]) {
  return (
    <table>
    {arrayTasks.map((task, index) => (
      <tr>
        <input type="checkbox" name="" id="" />
        <td key={index}>{task.content}--</td>
        <td key={index}>--{task.status}</td>
      </tr>
    ))}
  </table>
  )
}

export default Tasks