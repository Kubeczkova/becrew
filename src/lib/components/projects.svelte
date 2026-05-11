<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import type { Project } from '$lib/data/projects';

	let { projects = [], wantMore = false }: { projects: Project[]; wantMore?: boolean } = $props();

	const currentLocale = $derived(($locale || 'en') as 'cs' | 'en');
</script>

<section class="projects" id="projects">
	<h1><strong>{$t('projects.title')}</strong></h1>

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
						<a href={project.github} target="_blank" rel="noopener noreferrer" class="btn-github">
							{$t('projects.github')}
						</a>
					{/if}
					{#if project.live}
						<a href={project.live} target="_blank" rel="noopener noreferrer" class="btn-live">
							{$t('projects.live')}
						</a>
					{/if}
					{#if project.demo}
						<a href={project.demo} target="_blank" rel="noopener noreferrer" class="btn-demo">
							{$t('projects.demo')}
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	{#if wantMore}
		<div class="more-projects">
			<a href="/projekty" class="more">
				<span>{$t('projects.more_projects')}</span>
			</a>
		</div>
	{/if}
</section>
