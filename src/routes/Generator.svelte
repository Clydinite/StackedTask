<script lang="ts">
	import { tasks } from './stores';
	export let folder: string;
	export let name: string;
	$: subtasks = name.split(' ');
</script>

<div class="m-5 flex h-10" id={folder}>
	<div class="mx-3 my-0 rounded-lg bg-freeSpeechBlue-500 p-3 text-white">{folder}</div>

	<input type="text" bind:value={name} class="m-0 rounded-lg p-3 text-black" />
	{#each subtasks as subtask}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="mx-3 my-0 rounded-lg bg-white p-3 text-black"
			on:click={() => {
				console.log(subtask);
				$tasks.push({
					folder: folder,
					name: subtask,
					due: new Date('2023-06-15T09:00:00')
				});
				$tasks = $tasks; // triggers the update
				console.log($tasks);
			}}
		>
			{subtask}
		</div>
	{/each}
</div>
