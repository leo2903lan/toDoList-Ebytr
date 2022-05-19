import React from 'react'

function Input() {
  return (
    <form>
      <input type="checkbox" />
    <label>
      Task:
      <input type="text" name="name" />
    </label>
    <select>
      <option selected value="pendente">Pendente</option>
      <option value="andamento">Andamento</option>
      <option value="pronto">Pronto</option>
    </select>
    <button type="submit" value="Add" >Add Task</button>
    <button type="submit" value="DELETE" >DELETE</button>
    <button type="submit" value="Atualizar" >Atualizar</button>
  </form>
  )
}

export default Input