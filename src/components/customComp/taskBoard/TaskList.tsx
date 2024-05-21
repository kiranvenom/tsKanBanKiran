import popUpColors from '@/data/popUpColor';
import { TaskType } from '@/types/interfaceTypes';
import { MdEditNote } from 'react-icons/md';
import { MdOutlineDeleteOutline } from 'react-icons/md';

type TaskListProps = {
	task: TaskType;
	onDelete?: (taskName: string) => void;
};

const TaskList = ({ task, onDelete }: TaskListProps) => {
	return (
		<div className='relative group'>
			<li className='font-semibold text-xl capitalize bg-slate-200 my-2 p-2 rounded-md text-slate-500 flex items-center justify-between border border-slate-400'>
				<h4 className='break-after-50ch'>{task.taskName}</h4>
				<div className='flex items-center gap-2'>
					<MdEditNote color='black' cursor={'pointer'} />
					<MdOutlineDeleteOutline
						onClick={() => onDelete && onDelete(task.taskName)}
						color='black'
						cursor={'pointer'}
					/>
				</div>
			</li>
			<p
				style={{
					backgroundColor: popUpColors[task.priorityLevel],
				}}
				className='mt-0 absolute top-0 left-1/2 text-white w-[80px] z-[-1] rounded-md flex justify-center items-center capitalize group-hover:top-[-10%] group-hover:z-[1] transition-all'>
				{task.priorityLevel}
			</p>
			<div
				style={{
					backgroundColor: popUpColors[task.priorityLevel],
				}}
				className='w-[5px] h-[5px] rounded-full absolute top-1 right-1'></div>
		</div>
	);
};

export default TaskList;
