import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Itask from '../interfaces/Itask';

function Input() {
  const [taskValue , setTaskValue] = useState('');
  const [selectValue , setSelectValue] = useState('pendente');
  const [arrayTasks, setArrayTasks] = useState<Itask[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3005/task")
    .then(response => setArrayTasks(response.data))
    .catch(error => console.error(error));
  }, [])
  

  const addTask = () => {
    const newTask = {
      content: taskValue,
      status: selectValue,
    }
    axios.post("http://localhost:3005/task", newTask)
    .then(response => console.log('response addTask>>>>',response));
    setArrayTasks([...arrayTasks, newTask])
    console.log('requisição na API para adicionar a TASK')
  }
  
  const cleanList = () => { 
    axios.delete("http://localhost:3005/task");
    setArrayTasks([]);
    console.log('requisição na API para detelar toda lista')
  };

  const deleteTask = (e: any) => { 
    axios.delete(`http://localhost:3005/task/${e}`);
    axios.get("http://localhost:3005/task")
    .then(response => setArrayTasks(response.data))
    .catch(error => console.error(error));
    console.log('requisição na API para detelar toda lista')
  };

  const updateTask = (e: any) => {
    const newStatus = {
      status: selectValue,
    };

    axios.put(`http://localhost:3005/task/${e}`, newStatus)
    console.log('requisição na API para atualizar a TASK selecionada') }

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
        <option value="pendente">Pendente</option>
        <option value="andamento">Andamento</option>
        <option value="pronto">Pronto</option>
      </select>

      <button type="button" value="Add" onClick={addTask}>Add Task</button>
      <button type="button" value="LIMPAR" onClick={cleanList}>LIMPAR LISTA</button>
    </form>

    <ul>
      {arrayTasks.map((task, index) => (
        <li key={index}>
          <input type="checkbox" name="" id={task.id?.toString()} />
          <span>{task.content}--</span>
          <span>--{task.status}</span>
          <button type="button" value="Atualizar" onClick={() => updateTask(task.id)}>Atualizar</button>
          <button type="button" onClick={() => deleteTask(task.id)}>DELETAR</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Input