<script lang="ts">
	import { t } from '$lib/i18n';

	import Projects from '$lib/components/projects.svelte';
	import Skills from '$lib/components/skills.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Education from '$lib/components/education.svelte';
	import Development from '$lib/components/development.svelte';
	import Landing from '\$lib/components/landing.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$t('menu.home')}</title>
	<meta />
</svelte:head>

<Landing />

<Skills data={data}/>

<Development />

<Projects data={data}/>

<Education />

<Contact />
