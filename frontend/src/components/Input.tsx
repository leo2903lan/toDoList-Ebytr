import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Itask from '../interfaces/Itask';
import { Icon } from '@iconify/react';
import '../style/input.css';

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

    <ul className="ul-box">
      {arrayTasks.map((task, index) => (
        <li key={index}>
          <Icon className="icon-button update" icon="fa:refresh" onClick={() => updateTask(task.id)} />
          {/* <input type="checkbox" name="" id={task.id?.toString()} /> */}
          <span>{task.content}--</span>
          <span>--{task.status}</span>
          <Icon className="icon-button trash"icon="wpf:full-trash" onClick={() => deleteTask(task.id)} />
        </li>
      ))}
    </ul>
    </>
  )
}

export default Input