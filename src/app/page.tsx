'use client';
import {useState,useEffect} from "react";
import { TaskList } from "./components/TaskList";
import { TaskDone } from "./components/TaskDone";
import { TaskDeleted } from "./components/TaskDeleted";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [doneTasks, setDone] = useState<string[]>([]);
  const [deletedTasks, setToDeleted] = useState<string[]>([]);
  const [initial, setInitial] = useState("");

  useEffect(() => {
    console.log("All tasks: ", tasks);
    console.log("Done tasks: ", doneTasks);
    console.log("Deleted tasks: ", deletedTasks);
  },[tasks,doneTasks,deletedTasks]);


  const addTask = () => {
    if(initial.trim().length > 0){
      setTasks([...tasks, initial.trim()]);
      setInitial("");
    }else {
      alert("Please enter a task");
    }
  }

  const setToDone = (index:any) => {
    const newTasks = [...tasks];
    const completedTask = tasks[index];
    setDone([...doneTasks, completedTask]);
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const removeTask = (index:any) => {
    const newTasks = [...tasks];
    const deleteTask = tasks[index];
    setToDeleted([...deletedTasks, deleteTask]);
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="m-4 sm:m-10 md:m-20 bg-white">
      <div className="p-3">
        <form className="w-full max-w-lg mx-auto">
          <div className="relative">
            <input 
              type="text"  
              className="text-lg block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What do you want to do?" 
              value={initial} 
              onChange={(e) => setInitial(e.target.value)} 
              required 
            />
            <button 
              type="submit" 
              className="text-lg text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <TaskList tasks={tasks} setToDone={setToDone} removeTask={removeTask} />
        </div>

        <div className="mt-3 border px-6 py-3 bg-green-200">
          <div className="mt-2">
            <TaskDone doneTasks={doneTasks} />
          </div>
        </div>

        <div className="mt-3 border px-6 py-3 bg-red-200">
          <TaskDeleted deletedTasks={deletedTasks} />
        </div>
      </div>
    </div>

  );
}
