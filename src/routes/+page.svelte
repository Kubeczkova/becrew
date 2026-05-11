<script lang="ts">
	import { t } from '$lib/i18n';

	import Contact from '$lib/components/contact.svelte';
	import Landing from '$lib/components/landing.svelte';
	import Development from '$lib/components/development.svelte';
	import Practices from '$lib/components/practices.svelte';
	import Projects from '$lib/components/projects.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{$t('meta.home_title')}</title>
	<meta name="description" content={$t('meta.home_description')} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('meta.home_title')} />
	<meta property="og:description" content={$t('meta.home_description')} />
	<meta property="og:site_name" content={$t('meta.site_name')} />
	<meta property="og:image" content="/favicon.svg" />
</svelte:head>

<Landing />
<Development />
<Practices />
<Projects projects={data.projects} wantMore={true} />
<Contact />
