'use client'

import { useState } from 'react';
import Task from './TaskComponent';

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTaskObj = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
      iscompleted: false,
    };
    setTaskList([...taskList, newTaskObj]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    const updatedTasks = taskList.map((task) => {
      if (task.id === taskId) {
        return { ...task, iscompleted: !task.iscompleted };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  return (
    <div className='min-h-screen bg-purple-500 flex items-center justify-center p-4'>
      <div className='max-w-[500px] w-full bg-white rounded-lg shadow-lg p-6'>
        <div className='mb-4 text-center'>
          <h3 className='text-2xl font-semibold text-purple-900'>To Do List</h3>
        </div>
        <div className='flex gap-2 mb-4'>
          <input
            type='text'
            className='flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400  text-zinc-950'
            placeholder='new task'
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className='bg-purple-700 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-purple-900 transition'
            onClick={addTask}
            disabled={!newTask.trim()}
          >
            add
          </button>
        </div>
        <div>
          {taskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}