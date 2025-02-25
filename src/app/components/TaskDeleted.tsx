import React from 'react'

type PropOfTaskDeleted = {
    deletedTasks: string[];
}

export const TaskDeleted = ({deletedTasks}:PropOfTaskDeleted) => {
  return (
    <div>
      <p className="text-xl font-bold text-black bg-red-200">DELETED TASKS</p>
            <ul className="text-lg">
              {deletedTasks.map((task, index) => (
                  <li className="flex text-lg bg-red-200 text-black" key={index}>{task} </li>
              ))}
              
            </ul>
    </div>
  )
}

