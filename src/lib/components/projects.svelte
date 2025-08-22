<script lang="ts">
	import { t } from '$lib/i18n';
	import { fade } from 'svelte/transition';
	import { projects } from '$lib/stores/projects'

	let selected = "All";

  $: filtered = selected === "All"
    ? projects
    : projects.filter(p => p.type === selected);
</script>


<div>
	<h1>{$t('menu.projects')}</h1>
<div class="filters">
  {#each ["All", "Frontend", "Backend", "Full-Stack"] as category (category)}
    <button on:click={() => selected = category}>{category}</button>
  {/each}
</div>

<div class="grid">
  {#each filtered as project (project.name)}
    <div transition:fade={{ duration: 300 }}>{project.name}</div>
  {/each}
</div>
</div>
