import React from "react";
import { differenceInDays, formatDistanceToNow} from 'date-fns'
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  
  const distance = formatDistanceToNow(
    new Date(taskObj.deadline),
    {addSuffix: true, 
     locale: tr
    }, 
  );

  const isDeadlineClose =  differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  ) <= 3;

  return (
    <div className="p-6 bg-[#fff] rounded-[5px] leading-6 mt-4 shadow-[0_4px_5px_0_rgba(0,0,0,0.1)] ">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">son teslim: <span className={isDeadlineClose? "bg-[#ffd9d4] p-1" : "bg-[none] p-1" } >{distance}</span></div>
      <p className="text-xs pt-2 pb-2 text-[#444]" >{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 text-xs mr-1 mb-1.5 rounded-3xl border-solid border-[1px] border-zinc-300" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)} className="block py-1 px-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgba(0,0,0,0.05)] rounded-[3px] border-0 cursor-pointer text-sm">Tamamlandı</button>}
    </div>
  );
};

export default Task;
