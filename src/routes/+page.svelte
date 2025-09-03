<script lang="ts">
	import { t } from '$lib/i18n';
	import { ChevronDown } from '@lucide/svelte';

	import Projects from '$lib/components/projects.svelte';
	import Skills from '$lib/components/skills.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Education from '$lib/components/education.svelte';
	import Development from '$lib/components/development.svelte';

	export let data;
</script>

<svelte:head>
	<title>{$t('menu.home')}</title>
	<meta name="description" content="Nikola Kubeczková" />
</svelte:head>

<section>
	<h1>{$t('landing.name')}</h1>
	<h3>{$t('landing.tagline')}</h3>
	<p>{$t('landing.intro')}</p>
	<h3>
		<ChevronDown size={30} />
		{$t('landing.call-to-action')}
		<ChevronDown size={30} />
</h3>
</section>

<Skills data={data}/>

<Development />

<Projects data={data}/>

<Education />

<Contact />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
