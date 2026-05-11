<script lang="ts">
	import { t } from '$lib/i18n';
	import Projects from '$lib/components/projects.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{$t('meta.projects_title')}</title>
	<meta name="description" content={$t('meta.projects_description')} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('meta.projects_title')} />
	<meta property="og:description" content={$t('meta.projects_description')} />
	<meta property="og:site_name" content={$t('meta.site_name')} />
	<meta property="og:image" content="/favicon.svg" />
</svelte:head>

<Projects projects={data.projects} />
