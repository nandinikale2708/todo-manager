import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from './features/tasksSlice';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';


function App() {
  const dispatch = useDispatch(); // To dispatch actions
  const tasks = useSelector((state) => state.tasks.tasks); // Read tasks from state

  useEffect(() => {
    dispatch(getTasks()); // Fetch tasks when the app loads
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
