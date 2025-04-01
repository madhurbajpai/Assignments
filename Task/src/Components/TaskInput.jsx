import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const API_KEY = import.meta.env.VITE_API_KEY

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [weather, setWeather] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = async () => {
    
    if (task.trim()) {
      let weatherInfo = '';

      if (task.toLowerCase().includes('outdoor')) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=${API_KEY}&units=metric`
          );
          const data = await response.json();
          weatherInfo = `${data.weather[0].description}, ${data.main.temp}°C`;
        } catch (error) {
          weatherInfo = 'Weather data unavailable';
        }
      }

      dispatch(addTask({ id: uuidv4(), text: task, priority, weather: weatherInfo }));
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask} style={{padding:"17px"}}>Add Task</button>
    </div>
  );
};

export default TaskInput;
