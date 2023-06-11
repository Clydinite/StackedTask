<script lang="ts">
	import { TaskGenerator, plannedTasks } from './stores';
	import { Task } from './stores';

	export let generator: TaskGenerator;
	export let subtasks: Task[];
	export let name: string;

	let newTasks = '';
</script>

<div class="h-full bg-freeSpeechBlue-500 p-3 text-white flex">
	<div class="flex items-center justify-center flex-1">
		<p class="inline-block text-xl font-bold">
			{name}
		</p>
	</div>

	<div class="float-right">
		<input
			type="text"
			bind:value={newTasks}
			class="m-0 rounded-lg p-3 text-black"
			on:keydown={(e) => {
				if (e.key == 'Enter') {
					for (const newTask of newTasks.split(' ')) {
						generator.update(new Task(newTask));
					}

					$plannedTasks = $plannedTasks; // triggers the update
					newTasks = '';
				}
			}}
		/>
		<button
			class="mx-3 rounded-xl bg-slate-400 p-3"
			on:click={() => {
				for (const newTask of newTasks.split(' ')) {
					generator.update(new Task(newTask));
				}

				$plannedTasks = $plannedTasks; // triggers the update
				newTasks = '';
			}}
		>
			Submit
		</button>
	</div>
</div>

<div class="m-5 flex flex-wrap min-h-10" >
	{#each subtasks as subtask (subtask)}
		<!-- keyed each block -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="m-3 rounded-lg bg-white p-3 text-black"
			on:click={() => {
				subtask.generator?.remove(subtask);
				$plannedTasks.push(subtask);
				$plannedTasks = $plannedTasks; // triggers the update
			}}
		>
			{subtask.name}
		</div>
	{/each}
</div>
