import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../features/tasksSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.completed ? 'Completed' : 'Incomplete'}</p>
          </li>
        ))}
      </ul>
      <div className="max-w-screen-lg mx-auto p-4">
  <h1 className="text-2xl font-bold">Task Manager</h1>
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
</div>

    </div>
    
  );
};

export default HomePage;
