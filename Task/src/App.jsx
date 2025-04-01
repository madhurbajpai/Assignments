import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Advanced To-Do Application</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
