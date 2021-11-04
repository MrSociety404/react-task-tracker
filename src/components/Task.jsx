import { FaTimes, FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditTask from './EditTask.jsx'

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <div>
          <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
          <FaEdit onClick={() => setEdit(!edit)} />
        </div>
      </h3>
      {edit ? (
        <EditTask task={task} onEdit={onEdit} onClose={() => setEdit(!edit)}/>
      ) : (
        <p> {task.day} </p>
      )}
    </div>
  );
};

export default Task;
