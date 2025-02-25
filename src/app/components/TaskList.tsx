import React from 'react'

type PropOfList = {
    tasks: string[];
    setToDone:(index:number) => void;
    removeTask: (index: number) => void;
}

export const TaskList = ({tasks,setToDone,removeTask}:PropOfList) => {
  return (
    <div>
      <div className="relative overflow-x-auto mt-3 ">
                <table className=" rounded-md border w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xl">
                                Task List
                            </th>
                            <th scope="col" className="px-6 py-3 text-xl">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th scope="row" className="px-6 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task}
                                </th>
                                <td className="px-6 py-4 bg-white">
                                    <button className='text-green-700 bg-green-200 pt-1 pb-1 pl-5 pr-5 border border-green-700 rounded-full' onClick={() => setToDone(index)}>Done</button>
                                    <button className='ml-2 text-red-700 bg-red-200 pt-1 pb-1 pl-5 pr-5 border border-red-700 rounded-full' onClick={() => removeTask(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

