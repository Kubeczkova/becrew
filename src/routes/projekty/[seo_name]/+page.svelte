<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import Contact from '$lib/components/contact.svelte';
	import { defaultTheme } from '$lib/data/projects';

	let { data } = $props();

	const lang = $derived(($locale ?? 'en') as 'cs' | 'en');
	const theme = $derived(data.theme ?? defaultTheme);
	const projectTitle = $derived(data.project.title[lang]);
	const projectDesc = $derived(data.project.description[lang]);
</script>

<svelte:head>
	<title>{projectTitle} – {$t('meta.site_name')}</title>
	<meta name="description" content={projectDesc} />
</svelte:head>

<div
	class="project-page"
	style="
		--theme-page-bg:   {theme.pageBg};
		--theme-form-bg:   {theme.formBg};
		--theme-page-text: {theme.pageText};
		--theme-form-text: {theme.formText};
	"
>
	<section class="project-hero">
		<div class="project-hero-image">
			<img src={data.project.image} alt={projectTitle} />
		</div>
		<div class="project-hero-content">
			<h1 class="project-hero-title">{projectTitle}</h1>
			<p class="project-hero-desc">{projectDesc}</p>
		</div>
	</section>

	<Contact />
</div>
