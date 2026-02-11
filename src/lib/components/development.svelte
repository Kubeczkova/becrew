<script lang="ts">
	import { t } from '$lib/i18n';

	type Practice = 'responsive_design' | 'api_integration' | 'agile_workflow' | 'testing_debugging';

	let activePractice = $state<Practice>('responsive_design');

	const practices = [
		{
			key: 'responsive_design' as Practice,
			icon: 'https://cdn-icons-png.flaticon.com/512/1829/1829586.png'
		},
		{
			key: 'api_integration' as Practice,
			icon: 'https://cdn-icons-png.flaticon.com/512/950/950394.png'
		},
		{
			key: 'agile_workflow' as Practice,
			icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png'
		},
		{
			key: 'testing_debugging' as Practice,
			icon: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png'
		}
	];

	function setActive(practice: Practice) {
		activePractice = practice;
	}
</script>

<section class="development">
	<h1>{$t('development.title')}</h1>

	<div class="practices-grid">
		{#each practices as practice (practice.key)}
			<button
				type="button"
				class="practice"
				class:active={activePractice === practice.key}
				onclick={() => setActive(practice.key)}
			>
				<img src={practice.icon} alt={$t(`development.${practice.key}.title`)} />
				<span>{$t(`development.${practice.key}.title`)}</span>
			</button>
		{/each}
	</div>

	<div class="practice-description">
		<h2>{$t(`development.${activePractice}.title`)}</h2>
		<p>{$t(`development.${activePractice}.desc`)}</p>
	</div>
</section>
