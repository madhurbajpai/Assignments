import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end'}}>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} - {task.priority} 
          {task.weather && ` (Weather: ${task.weather})`}
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
