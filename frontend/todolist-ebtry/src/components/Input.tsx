import React, { useState } from 'react'
import Itask from '../interfaces/Itask';

function Input() {
  const [taskValue , setTaskValue] = useState('');
  const [selectValue , setSelectValue] = useState('pendente');
  const [arrayTasks, setArrayTasks] = useState<Itask[]>([]);

  const addTask = () => { 
    const newTask = {
      content: taskValue,
      status: selectValue,
    }
    setArrayTasks([...arrayTasks, newTask])
    console.log('requisição na API para adicionar a TASK') }
  
  const deleteTask = () => { console.log('requisição na API para detelar a TASK selecionada') }
  const updateTask = () => { console.log('requisição na API para atualizar a TASK selecionada') }

  return (
    <>
      <form>
      <label>
        Task:
        <input
          type="text"
          name="task"
          value={ taskValue }
          onChange={ e => setTaskValue(e.target.value) }
          placeholder="Detalhe sua tarefa aqui"
        />
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

    <table>
      {arrayTasks.map((task, index) => (
        <tr>
          <input type="checkbox" name="" id="" />
          <td key={index}>{task.content}--</td>
          <td key={index}>--{task.status}</td>
        </tr>
      ))}
    </table>
    </>
  )
}

export default Input