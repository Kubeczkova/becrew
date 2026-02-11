<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import { ChevronRight, ChevronLeft } from '@lucide/svelte';
	import { resolveRoute } from '$app/paths';
	import type { Project } from '$lib/data/projects';

	export let projects: Project[] = [];
	export let want_more: boolean = false;

	$: currentLocale = ($locale || 'en') as 'cs' | 'en';
</script>

<section class="projects">
	<h1>{$t('projects.title')}</h1>

	<div class="projects-grid">
		{#each projects as project (project.id)}
			<div class="project-content">
				<div class="project-image">
					<img src={project.image} alt={project.title[currentLocale]} />
				</div>
				<h3>{project.title[currentLocale]}</h3>
				<p>{project.description[currentLocale]}</p>
				<div class="project-links">
					{#if project.github}
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							data-sveltekit-reload
						>
							{$t('projects.github')}
						</a>
					{/if}
					{#if project.live}
						<a href={project.live} target="_blank" rel="noopener noreferrer" data-sveltekit-reload>
							{$t('projects.live')}
						</a>
					{/if}
					{#if project.demo}
						<a href={project.demo} target="_blank" rel="noopener noreferrer" data-sveltekit-reload>
							{$t('projects.demo')}
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<!--{#if want_more}-->
	<!--	<a href={resolveRoute('/projekty')} class="more">-->
	<!--		<ChevronRight size={30} />-->
	<!--		<span>{$t('projects.more_projects')}</span>-->
	<!--		<ChevronLeft size={30} />-->
	<!--	</a>-->
	<!--{/if}-->
</section>
