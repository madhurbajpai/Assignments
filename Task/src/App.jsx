import React from "react";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <div className="header">
        <h1>Advanced To-Do Application</h1>
        {isAuthenticated ? <Logout /> : ''}
      </div>
      {isAuthenticated ? (
        <>
          {/* <Logout /> */}
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
      <h6>Another version of this app <a target="_blank" href="https://manage-tasks-a2z.vercel.app/" > Click Here</a></h6>
    </div>
  );
}

export default App;
