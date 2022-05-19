import React, { useState } from 'react'

function Input() {
  const [taskValue , setTaskValue] = useState('');
  const [selectValue , setSelectValue] = useState('pendente');

  const addTask = () => { console.log('requisição na API para adicionar a TASK') }
  const deleteTask = () => { console.log('requisição na API para detelar a TASK selecionada') }
  const updateTask = () => { console.log('requisição na API para atualizar a TASK selecionada') }

  return (
    <form>
      <label>
        Task:
        <input type="text" name="task" value={ taskValue } onChange={ e => setTaskValue(e.target.value) } />
      </label>
      
      <select value={ selectValue } onChange={ e => setSelectValue(e.target.value) }>
        <option selected value="pendente">Pendente</option>
        <option value="andamento">Andamento</option>
        <option value="pronto">Pronto</option>
      </select>

      <button type="button" value="Add" onClick={addTask}>Add Task</button>
      <button type="button" value="DELETE" onClick={deleteTask}>DELETE</button>
      <button type="button" value="Atualizar" onClick={updateTask}>Atualizar</button>
    </form>
  )
}

export default Input