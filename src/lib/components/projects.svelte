<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import type { Project, Skill, LayoutData } from '$lib/types';

	export let data: LayoutData;

	let activeProject: Project | null = null;
	let currentIndex = 0;
	const visibleCount = 3;

	function getDescription(project: Project, lang: string | null | undefined) {
		return project.translations?.[lang ?? 'en']?.description ?? '';
	}

	function getContribution(project: Project, lang: string | null | undefined) {
		return project.translations?.[lang ?? 'en']?.contribution ?? '';
	}

	function getProjectSkills(project: Project) {
		return data.skills.filter((skill: Skill) => project.skills.includes(skill.id));
	}

	function openModal(project: Project) {
		activeProject = project;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		activeProject = null;
		document.body.style.overflow = '';
	}

	function next() {
		currentIndex = (currentIndex + 1) % data.projects.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + data.projects.length) % data.projects.length;
	}

	$: visibleProjects = data.projects
		.slice(currentIndex, currentIndex + visibleCount)
		.concat(
			currentIndex + visibleCount > data.projects.length
				? data.projects.slice(0, (currentIndex + visibleCount) % data.projects.length)
				: []
		);
</script>

<div>
	<h1>{$t('menu.projects')}</h1>

	<div class="carousel-container">
		<button class="carousel-btn left" on:click={prev} aria-label={$t('projects.previous')}>
			‹
		</button>

		<div class="carousel-track">
			{#each visibleProjects as project (project.id)}
				<div class="project-card">
					<div class="project-header">
						<h2 class="project-title">{project.name}</h2>
						<span class="project-cooperation">{project.cooperation}</span>
					</div>

					{#if project.image}
						<img src={project.image} alt={project.name} class="project-img" />
					{/if}

					<div class="skills">
						{#each getProjectSkills(project) as skill (skill.id)}
							<a
								href={skill.url}
								target="_blank"
								rel="noopener noreferrer"
								class="skill-tag"
							>
								{#if skill.image}
									<img src={skill.image} alt={skill.name} class="skill-icon" />
								{/if}
								<span>{skill.name}</span>
							</a>
						{/each}
					</div>

					<button class="show-more" on:click={() => openModal(project)}>
						{$t('projects.show_more')}
					</button>
				</div>
			{/each}
		</div>

		<button class="carousel-btn right" on:click={next} aria-label={$t('projects.next')}>
			›
		</button>
	</div>
</div>

{#if activeProject}
	<div
		class="modal-overlay"
		role="presentation"
		on:click|self={closeModal}
		on:keydown={(e) => e.key === 'Escape' && closeModal()}
		tabindex="-1"
	>
		<div
			class="modal"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<button class="modal-close" on:click={closeModal} aria-label={$t('projects.close')}>
				&times;
			</button>

			<h2 id="modal-title" class="modal-title">{activeProject.name}</h2>

			<p>{getDescription(activeProject, $locale)}</p>

			<h3>{$t('projects.my_role')}</h3>
			<p>{getContribution(activeProject, $locale)}</p>

			<div class="modal-links">
				<a
					href="https://github.com/example"
					target="_blank"
					rel="noopener noreferrer"
				>
					{$t('projects.github')}
				</a>
				<a
					href="https://example.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					{$t('projects.live_demo')}
				</a>
			</div>
		</div>
	</div>
{/if}



<style>
	.project-header {
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			gap: 0.5rem;
	}

	.project-title {
			font-size: 1.25rem;
			font-weight: bold;
			margin: 0;
	}

	.project-cooperation {
			font-size: 0.9rem;
			color: var(--color-text);
			font-style: italic;
	}

	.project-card {
			display: flex;
			flex-direction: column;
			gap: 0.75rem; padding: 0.5rem;
	}

	.project-title {
			font-size: 1.2rem;
			font-weight: 600;
			color: var(--color-text);
	}

	.project-img {
			width: 100%;
			height: 180px;
			object-fit: cover;
			border-radius: 0.3rem;
	}

	.skills {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
	}

	.skill-tag {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			padding: 0.25rem 0.6rem;
			border: 1px solid var(--color-text);
			border-radius: 0.25rem;
			font-size: 0.85rem;
			text-decoration: none;
			color: var(--color-text);
			transition: border-color 0.2s;
	}

	.skill-tag:hover {
			border-color: var(--color-theme-pink);
			color: var(--color-theme-pink);
	}

	.skill-icon {
			width: 16px;
			height: 16px;
			object-fit: contain;
	}

	.show-more {
			align-self: flex-start;
			padding: 0.4rem 0.8rem;
			border: 1px solid var(--color-text);
			background: transparent;
			color: var(--color-text);
			border-radius: 0.25rem;
			cursor: pointer;
			font-size: 0.85rem;
			transition: all 0.2s;
	}

	.show-more:hover {
			border-color: var(--color-theme-pink);
			color: var(--color-theme-pink);
	}

	.modal-overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1000;
	}

	.modal {
			background: var(--color-bg-blue);
			color: var(--color-text);
			padding: 2rem;
			border-radius: 1rem;
			max-width: 600px;
			width: 90%;
			margin: auto;
			position: relative;
			box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
	}

	.modal-title {
			margin-top: 0;
			font-size: 1.5rem;
			font-weight: bold;
	}

	.modal-links {
			display: flex;
			gap: 1rem;
			margin-top: 1rem;
	}

	.modal-links a {
			color: var(--color-theme-pink);
			text-decoration: none;
			font-weight: 600;
			transition: color 0.2s;
	}

	.modal-links a:hover {
			color: var(--color-text);
	}

	.modal-close {
			position: absolute;
			top: 1rem;
			right: 1rem;
			background: none;
			border: none;
			font-size: 1.5rem;
			cursor: pointer;
			color: var(--color-text);
			transition: color 0.2s;
	}

	.modal-close:hover {
			color: var(--color-theme-pink);
	}

	.carousel-container {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.carousel-track {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		flex: 1;
	}

	.carousel-btn {
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: var(--color-text);
		transition: color 0.2s;
	}

	.carousel-btn:hover {
		color: var(--color-theme-pink);
	}
</style>
