import { useState } from "react"

const EditTask = ({task, onEdit, onClose}) => {
  
  const [text, setText] = useState(task.text);
  const [day, setDay] = useState(task.day);
  const [reminder, setReminder] = useState(task.reminder);

  const onSubmit = (e, id) => {
    e.preventDefault()
    onEdit({text, day, reminder, id })
    onClose()
  }
  
  return (
    <form className="add-form" onSubmit={(e) => {onSubmit(e, task.id)}} >
      <div className="form-control">
        <label>task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Edit task" className="btn btn-block" />
      <input type="reset" value="Cancel" className="btn btn-block btn-cancel" onClick={onClose} />
    </form>
  )
}

export default EditTask