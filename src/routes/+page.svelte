<script>
	import Generator from './Generator.svelte';
	import { tasks } from './stores.js';
</script>

<div class="mx-auto flex h-full flex-row">
	<div class="rounded-r-xl bg-freeSpeechBlue-200">
		<div class="flex flex-col">
			<Generator folder="math" name="1-2 1-3 1-4" />
			<Generator folder="coding" name="12 48 451" />
			<Generator folder="fix" name="abc cde efg" />
		</div>
	</div>

	<div class="mx-auto flex flex-col-reverse overflow-y-auto">
		{#each $tasks as task}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="min-h-20 mx-auto w-80 border-t-4 border-freeSpeechBlue-300 bg-theme-light p-4 text-white last:rounded-t-xl last:border-0"

			>
				<div class="h-min w-min rounded-xl bg-freeSpeechBlue-500 p-2 text-white">
					<p>{task.folder}</p>
				</div>
				<p class="p-2 text-black">
					{task.name}
				</p>
				<button on:click={() => {
					
					$tasks.splice($tasks.indexOf(task), 1);
					$tasks = $tasks

				}}>Delete</button>
				<button on:click={() => {

					const f = document.getElementById(task.folder)
					
					$tasks.splice($tasks.indexOf(task), 1);
					$tasks = $tasks
					

				}}>Put Back</button>
			</div>
		{/each}
	</div>
</div>
