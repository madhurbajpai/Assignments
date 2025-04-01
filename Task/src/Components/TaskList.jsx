import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className='show'>
      <ul style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'end', 
        width: '100%', 
        padding: '0', 
        listStyleType: 'none' 
      }}>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            style={{ 
              wordWrap: 'break-word', 
              maxWidth: '90%', 
              margin: '10px 0', 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              backgroundColor: '#f9f9f9', 
              textAlign: 'left', 
              color: 'black'
            }}
          >
            {task.text} - {task.priority} 
            {task.weather && ` (Weather: ${task.weather})`}
            <button 
              onClick={() => dispatch(deleteTask(task.id))} 
              style={{ 
                marginLeft: '10px', 
                padding: '5px 10px', 
                backgroundColor: '#ff4d4d', 
                color: 'white', 
                border: 'none', 
                borderRadius: '3px', 
                cursor: 'pointer' 
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
