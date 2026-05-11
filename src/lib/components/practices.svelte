<script lang="ts">
	import { t } from '$lib/i18n';

	type Practice = 'responsive_design' | 'agile_workflow' | 'testing_debugging';

	const practices: Practice[] = ['responsive_design', 'agile_workflow', 'testing_debugging'];

	let active: Practice | null = $state(null);
</script>

<section class="practices-section">
	<h1><strong>{$t('practices.title')}</strong></h1>

	<div class="practices-grid">
		{#each practices as p, i (p)}
			<div
				class="practice-card"
				class:is-active={active === p}
				onmouseenter={() => (active = p)}
				onmouseleave={() => (active = null)}
				role="presentation"
			>
				<span class="practice-number">0{i + 1}</span>
				<div class="practice-body">
					<h3 class="practice-title">{$t(`practices.${p}.title`)}</h3>
					<p class="practice-desc">{$t(`practices.${p}.desc`)}</p>
				</div>
				<div class="practice-bar"></div>
			</div>
		{/each}
	</div>
</section>
