import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";
import About from "./pages/About.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) setTasks(loadedTodos);
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(tasks);
    localStorage.setItem("todos", temp);
  }, [tasks]);

  /**
   * Add a new task
   */
  const addTask = async (task) => {
    setTasks([...tasks, task]);
  };

  /**
   * delete a task
   * @param {int} id of the task
   */
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Toggle reminder
   * @param {int} id of the tasj
   */
  const toggleReminder = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const editTask = async (task) => {
    setTasks(
      tasks.map((updateTask) => (updateTask.id === task.id ? task : updateTask))
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                  onEdit={editTask}
                />
              ) : (
                "No Tasks to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
