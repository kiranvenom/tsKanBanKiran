import { ScrollArea } from '@/components/ui/scroll-area';
import { TaskType } from '@/types/interfaceTypes';
import TaskList from '@/components/customComp/taskBoard/TaskList';

type TaskBoardProps = {
	heading: string;
	tasks?: TaskType[];
};

const TaskBoard = ({ heading, tasks }: TaskBoardProps) => {
	return (
		<>
			<div>
				<h1 className='font-bold text-2xl uppercase'>{heading}</h1>
				<ScrollArea className='h-[70vh] w-[25vw] rounded-md border border-slate-500'>
					<ul className='p-2 mt-4'>
						{tasks?.map((task, idx) => {
							return <TaskList key={idx} task={task} />;
						})}
					</ul>
				</ScrollArea>
			</div>
		</>
	);
};

export default TaskBoard;
