import { writable } from 'svelte/store';

export class Task {
	name: string;
	generator: TaskGenerator | null;

	constructor(name: string) {
		this.name = name;
		this.generator = null;
	}
}

export class TaskGenerator {
	name: string;
	subtasks: Task[];

	constructor(name: string, subtasks: Task[]) {
		this.name = name;
		this.subtasks = subtasks;
		this.subtasks.forEach((task) => {
			task.generator = this;
		});
	}

	update(subtask: Task) {
		subtask.generator = this;
		this.subtasks.push(subtask);
	}

	remove(subtask: Task) {
		this.subtasks.splice(this.subtasks.indexOf(subtask), 1);
	}
}
const unplannedTasks = writable<TaskGenerator[]>([
	new TaskGenerator('Work', [new Task('Finish the report'), new Task('Prepare presentation'), new Task('Reply to emails'), new Task('Attend team meeting')]),
	new TaskGenerator('Home', [new Task('Clean the kitchen'), new Task('Do laundry'), new Task('Organize closet'), new Task('Water plants')]),
	new TaskGenerator('Personal', [new Task('Go for a run'), new Task('Read a book')]),
	new TaskGenerator('Fitness', [new Task('Attend yoga class'), new Task('Go for a hike'), new Task('Try a new workout')]),
	new TaskGenerator('Hobbies', [new Task('Paint a picture'), new Task('Play a musical instrument'), new Task('Write a story')]),
	new TaskGenerator('Social', [new Task('Meet friends for dinner'), new Task('Attend a party'), new Task('Plan a game night')])
  ]);
  
const plannedTasks = writable<Task[]>([]);

// tasks.subscribe(updatedTasks => {
//     updatedTasks.forEach(generator => {
//         generator.subtasks.forEach(task => {
//             task.generator = generator;
//         });
//     });
// });

export { unplannedTasks, plannedTasks };
