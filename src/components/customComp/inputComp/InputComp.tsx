import React, { ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TaskType } from '@/types/interfaceTypes';

interface InputCompProps {
	handleOnchange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleOnSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
	taskType: TaskType;
}

const InputComp: React.FC<InputCompProps> = ({
	handleOnchange,
	handleOnSubmit,
	handleOnSelect,
	taskType,
}) => {
	return (
		<div>
			<form
				onSubmit={handleOnSubmit}
				className='w-[700px] m-auto my-10 flex gap-2'>
				<Input
					onChange={handleOnchange}
					placeholder='Add New Task'
					value={taskType.taskName}
					className='mt-0 placeholder:select-none border border-slate-400'
				/>

				<select
					value={taskType.priorityLevel}
					className='border border-slate-400 rounded-md px-4'
					onChange={handleOnSelect}>
					<option disabled value=''>
						Priority
					</option>
					<option value='high'>High</option>
					<option value='medium'>Medium</option>
					<option value='low'>Low</option>
				</select>

				<Button
					type='submit'
					className='bg-blue-700 hover:bg-blue-600 px-6'>
					Add New Task
				</Button>
			</form>
		</div>
	);
};

export default InputComp;
