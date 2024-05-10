import { TaskType } from '@/types/interfaceTypes';
import { MdEditNote } from 'react-icons/md';
import { MdOutlineDeleteOutline } from 'react-icons/md';

type TaskListProps = {
	task: TaskType;
};

const TaskList = ({ task }: TaskListProps) => {
	return (
		<div className='relative group'>
			<li className='font-semibold text-xl capitalize bg-slate-200 my-2 p-2 rounded-md text-slate-500 flex items-center justify-between border border-slate-400'>
				<h4 className='break-after-50ch'>{task.taskName}</h4>
				<div className='flex items-center gap-2'>
					<MdEditNote color='black' cursor={'pointer'} />
					<MdOutlineDeleteOutline color='black' cursor={'pointer'} />
				</div>
			</li>
			<p className='mt-0 absolute top-0 left-0 bg-blue-500 w-[80px] z-[-1] rounded-md flex justify-center items-center capitalize group-hover:top-[-2%] group-hover:z-[1] transition-all'>
				{task.priorityLevel}
			</p>
		</div>
	);
};

export default TaskList;
