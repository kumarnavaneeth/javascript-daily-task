import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
test("add and delete note",()=>{
  render(<App/>);
  fireEvent.change(screen.getByPlaceholderText(/enter note/i),{
    target:{value:"New Note"}
  });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText(/New Note/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/delete/i));
  expect(screen.queryByText(/New Note/i)).not.toBeInTheDocument();
});
