<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import { type Project, type Skill, type LayoutData } from '$lib/types';

	export let data: LayoutData;

	let activeProject: Project | null = null;

	function getDescription(project: Project, lang: string | null | undefined) {
		return project.translations?.[lang ?? 'en']?.description ?? '';
	}

	function getProjectSkills(project: Project) {
		return data.skills.filter((skill: Skill) => project.skills.includes(skill.id));
	}

	function openModal(project: Project) {
		activeProject = project;
		document.body.style.overflow = 'hidden'; // prevent background scroll
	}

	function closeModal() {
		activeProject = null;
		document.body.style.overflow = '';
	}
</script>

<div>
	<h1>{$t('menu.projects')}</h1>

	<div class="projects-grid">
		{#each data.projects as project (project.id)}
			<div class="project-card">
				<!-- Project name -->
				<h2>{project.name}</h2>

				<!-- Project image -->
				{#if project.image}
					<img src={project.image} alt={project.name} class="project-img" />
				{/if}

				<!-- Related skills -->
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

				<!-- Show more button -->
				<button class="show-more" on:click={() => openModal(project)}>
					{$t('common.showMore')}
				</button>
			</div>
		{/each}
	</div>
</div>

<!-- Modal -->
{#if activeProject}
	<div class="modal-overlay" on:click={closeModal}>
		<div class="modal" on:click|stopPropagation>
			<h2>{activeProject.name}</h2>

			<p>{getDescription(activeProject, $locale)}</p>

			<h3>{$t('projects.myRole')}</h3>
			<p>Static text: I was responsible for frontend, backend integration, and deployment.</p>

			<div class="modal-links">
				<a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
				<a href="https://example.com" target="_blank" rel="noopener noreferrer">
					Live Demo
				</a>
			</div>

			<button class="close-btn" on:click={closeModal}>
				{$t('common.close')}
			</button>
		</div>
	</div>
{/if}

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.project-card {
		background: var(--color-bg-blue);
		color: var(--color-text);
		padding: 1rem;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.project-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.project-img {
		width: 100%;
		height: 160px;
		object-fit: cover;
		border-radius: 0.4rem;
		margin-bottom: 0.75rem;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0.5rem 0;
	}

	.skill-tag {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.25rem 0.5rem;
		background: var(--color-text);
		color: var(--color-bg-blue);
		border-radius: 0.25rem;
		font-size: 0.85rem;
		text-decoration: none;
		transition: background 0.2s;
	}

	.skill-tag:hover {
		background: var(--color-theme-dark-pink);
		color: white;
	}

	.skill-icon {
		width: 16px;
		height: 16px;
		object-fit: contain;
	}

	.show-more {
		margin-top: auto;
		padding: 0.5rem 1rem;
		border: none;
		background: var(--color-theme-dark-pink);
		color: white;
		border-radius: 0.3rem;
		cursor: pointer;
		transition: background 0.2s;
	}

	.show-more:hover {
		background: var(--color-theme-light-pink);
	}

	/* Modal styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.modal {
		background: var(--color-bg-blue);
		color: var(--color-text);
		padding: 2rem;
		border-radius: 0.5rem;
		width: 90%;
		max-width: 600px;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
		animation: fadeIn 0.2s ease-out;
	}

	.close-btn {
		margin-top: 1rem;
		background: var(--color-theme-dark-pink);
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 0.3rem;
		cursor: pointer;
	}

	.close-btn:hover {
		background: var(--color-theme-light-pink);
	}

	.modal-links {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}
</style>
