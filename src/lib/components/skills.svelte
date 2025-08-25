<script lang="ts">
	import { t } from '$lib/i18n';
	import { type Skill, type LayoutData } from '$lib/types';

  let activeIndex = 0;

	export let data: LayoutData;

	// Extract unique categories from DB results
	const categories = [...new Set(data.skills.map((s: Skill) => s.category))];

	// Filtered list based on active tab
	$: filteredSkills = data.skills.filter(
		(s: Skill) => s.category === categories[activeIndex]
	);
</script>

<h1>{$t('menu.skills')}</h1>
<!-- Category Tabs -->
<div class="tabs">
	{#each categories as category, i (category)}
		<button
			type="button"
			class="tab {i === activeIndex ? 'active' : ''}"
			on:click={() => (activeIndex = i)}
		>
			{$t(`skills.${category}`)}
		</button>
	{/each}
</div>

<!-- Skills for selected category -->
<div class="skills-grid">
	{#each filteredSkills as skill (skill.id)}
		<a
			class="skill-item"
			href={skill.url || "#"}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="bubble">
				{#if skill.image}
					<img src={skill.image} alt={skill.name} />
				{/if}
			</div>
			<span class="skill-name">{skill.name}</span>
		</a>
	{/each}
</div>

<style>

	.tabs {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tab {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.4rem;
		background: var(--color-bg-blue);
		color: var(--color-text);
		cursor: pointer;
		font-weight: 600;
		transition: color 0.2s linear, background-color 0.2s linear;
	}

	.tab.active {
		background: var(--color-text);
		color: var(--color-bg-blue);
	}

	.tab:hover {
		color: var(--color-theme-dark-pink);
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 1.5rem;
		justify-items: center;
		margin-top: 1rem;
	}

	.skill-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s;
	}

	.skill-item:hover {
		transform: scale(1.05);
	}

	.bubble {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: rgba(0, 123, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.5rem;
	}

	.bubble img {
		width: 60%;
		height: 60%;
		object-fit: contain;
	}

	.skill-name {
		font-size: 0.9rem;
		font-weight: 500;
		text-align: center;
	}
</style>