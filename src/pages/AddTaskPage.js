import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { useNavigate } from 'react-router-dom';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, completed: false }));
    navigate('/');
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg mx-auto p-4">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Task Manager</h1>
  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add Task</button>
</div>

    </div>
  );
};

export default AddTaskPage;
