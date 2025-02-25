import React from 'react'

type PropOfTaskDeleted = {
    deletedTasks: string[];
}

export const TaskDeleted = ({deletedTasks}:PropOfTaskDeleted) => {
  return (
    <div>
      <p className="text-2xl font-bold">DONE TASK</p>
            <ul className="text-lg">
              {deletedTasks.map((task, index) => (
                  <li className="flex text-lg" key={index}>{task} </li>
              ))}
              
            </ul>
    </div>
  )
}

