<script lang="ts">
	import { t } from '$lib/i18n';

	import Projects from '$lib/components/projects.svelte';

	import { allProjects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>{$t('landing.name')}</title>
	<meta />
</svelte:head>

<Projects projects={allProjects} />
