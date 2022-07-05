import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza input text para as task, com as options de select "Pendente", "Andamento" ou "Pronto"', async () => {
  render(<App />);

  const inputElement = await screen.findAllByPlaceholderText("Detalhe sua tarefa aqui");
  const selectElementPendente = screen.queryByTestId("pendente");
  const selectElementPronto = screen.queryByTestId("pronto");
  const selectElementAndamento =  screen.queryByTestId("andamento");
  const buttonAdd = await screen.findByText('Add Task');

  expect(inputElement).toBeTruthy();
  expect(selectElementPronto?.textContent).toBe("Pronto");
  expect(selectElementAndamento?.textContent).toBe("Andamento");
  expect(selectElementPendente?.textContent).toBe("Pendente");
  expect(buttonAdd).toBeInTheDocument();
});

test('deveria renderizar a lista de tarefas', () => {
  render(<App />);

  const taskList = screen.queryAllByRole('list');

  expect(taskList).toBeTruthy();

});