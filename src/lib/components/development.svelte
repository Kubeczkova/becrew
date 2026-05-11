<script lang="ts">
	import { t } from '$lib/i18n';

	const steps = ['brief', 'draft', 'development', 'deployment'] as const;
</script>

<section class="development" id="development">
	<h1><strong>{$t('development.title')}</strong></h1>
	<div class="timeline">
		<div class="timeline-line"></div>

		{#each steps as step, i (step)}
			<div class="timeline-step">
				<div class="circle">{i + 1}</div>
				<div>
					<h3>{$t(`development.${step}.title`)}</h3>
					<p>{$t(`development.${step}.desc`)}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
