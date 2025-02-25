import { FaCheck } from "react-icons/fa6";

type PropOfTaskDone = {
    doneTasks: string[];
}
export const TaskDone = ({doneTasks}:PropOfTaskDone) => {
  return (
    <div>
      <p className="text-xl font-bold">DONE TASK</p>
      <ul className="text-lg">
        {doneTasks.map((task, index) => (
            <li className="flex text-lg" key={index}>{task}<FaCheck/> </li>
        ))}
        
      </ul>
    </div>
  )
}

