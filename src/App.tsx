import React, { useState, ChangeEvent, FormEvent } from 'react';
import InputComp from '@/components/customComp/inputComp/InputComp';
import TaskBoard from '@/components/customComp/taskBoard/TaskBoard';
import useLocalStorage from '@/hooks/localstorage';
import { TaskType } from './types/interfaceTypes';

const App: React.FC = () => {
	const [taskType, setTaskType] = useState<TaskType>({
		taskName: '',
		priorityLevel: '',
	});
	const [tasks, setTasks] = useLocalStorage<TaskType[]>('tasks', []);

	const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
		setTaskType((prevState) => ({
			...prevState,
			taskName: e.target.value,
		}));
	};

	const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		setTaskType((prevState) => ({
			...prevState,
			priorityLevel: e.target.value,
		}));
	};

	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newTask = {
			taskName: taskType.taskName,
			priorityLevel: taskType.priorityLevel,
		};

		if (newTask.taskName !== '' && newTask.priorityLevel !== '') {
			setTasks([...(tasks ?? []), newTask]);

			setTaskType({
				taskName: '',
				priorityLevel: '',
			});
		}
	};

	return (
		<div className='max-w-[1200px] m-auto'>
			<InputComp
				handleOnchange={handleOnchange}
				handleOnSubmit={handleOnSubmit}
				handleOnSelect={handleOnSelect}
				taskType={taskType}
			/>
			<div className='flex justify-between'>
				<TaskBoard
					heading='Task'
					tasks={tasks !== null ? tasks : undefined}
				/>
				<TaskBoard heading='Ongoing' />
				<TaskBoard heading='Completed' />
			</div>
		</div>
	);
};

export default App;
