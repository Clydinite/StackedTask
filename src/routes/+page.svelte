<script>
	import GeneratorObject from './GeneratorObject.svelte';
	import { unplannedTasks, plannedTasks, TaskGenerator } from './stores';

	let newGenerator = '';
</script>

<div class="mx-auto flex h-full flex-row">
	<div class="w-1/2 overflow-y-auto rounded-r-xl bg-neutral-900">
		<div class="flex flex-col">
				{#each $unplannedTasks as task}
					<GeneratorObject generator={task} {...task} />
				{/each}
			<div class="flex">
				<input
					on:keydown={(e) => {
						if (e.key == 'Enter') {
							$unplannedTasks.push(new TaskGenerator(newGenerator, []));
							$unplannedTasks = $unplannedTasks;
							newGenerator = '';
						}
					}}
					type="text"
					bind:value={newGenerator}
					class="m-0 rounded-lg p-3 text-black"
				/>
				<button
					class="mx-3 rounded-xl bg-slate-400 p-3"
					on:click={() => {
						$unplannedTasks.push(new TaskGenerator(newGenerator, []));
						$unplannedTasks = $unplannedTasks;
						newGenerator = '';
					}}>New Generator</button
				>
			</div>
		</div>
	</div>

	<div class="mx-auto flex w-1/2 flex-col-reverse overflow-y-auto">
		{#each $plannedTasks as task}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="min-h-20 mx-auto w-80 border-t-4 border-freeSpeechBlue-300 bg-theme-light p-4 text-white last:rounded-t-xl last:border-0"
			>
				<div class="h-min w-min rounded-xl bg-freeSpeechBlue-500 p-2 text-white">
					<p>{task?.generator?.name}</p>
				</div>
				<p class="p-2 text-black">
					{task.name}
				</p>
				<button
					on:click={() => {
						$plannedTasks.splice($plannedTasks.indexOf(task), 1);
						$plannedTasks = $plannedTasks;
					}}
				>
					<p class="p-2 pt-0 text-black">Delete</p></button
				>
				<button
					on:click={() => {
						task.generator?.update(task);
						$plannedTasks.splice($plannedTasks.indexOf(task), 1);
						$plannedTasks = $plannedTasks;
					}}><p class="p-2 pt-0 text-black">Put Back</p></button
				>
			</div>
		{/each}
	</div>
</div>
