<script lang="ts">
	import { t } from '$lib/i18n';

	import Contact from '$lib/components/contact.svelte';
	import Landing from '$lib/components/landing.svelte';
	import Development from '$lib/components/development.svelte';
	import Projects from '$lib/components/projects.svelte';

	import { myProjects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>{$t('landing.name')}</title>
	<meta />
</svelte:head>

<Landing />
<Projects projects={myProjects} want_more={true} />
<Development />
<Contact />
