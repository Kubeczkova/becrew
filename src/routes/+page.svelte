<script lang="ts">
	import { t } from '$lib/i18n';
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
	<p>dont</p>
	<p>forget</p>
	<p>about part</p>
</section>




<Skills data={data}/>

<Development />

<Projects data={data}/>

<div>
	<h1>{$t('menu.experience')}</h1>
	<p>vasddddddddd</p>
	<p>vasddddddddd</p>
	<p>vasddddddddd</p>
	<p>vasddddddddd</p>
</div>

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
