import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { modifyTask, modifyTaskodifyTask } from '../features/tasksSlice';

const EditTaskPage = () => {
  const { id } = useParams();
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    dispatch(modifyTask({ id, completed }));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <label>
        Status:
        <select value={completed} onChange={(e) => setCompleted(e.target.value === 'true')}>
          <option value="false">Incomplete</option>
          <option value="true">Completed</option>
        </select>
      </label>
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
};

export default EditTaskPage;
