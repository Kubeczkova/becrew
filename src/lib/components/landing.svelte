<script lang="ts">
	import { t } from '$lib/i18n';

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (!el) return;
		const y = el.getBoundingClientRect().top + window.scrollY - 80;
		window.scrollTo({ top: y, behavior: 'smooth' });
	}
</script>

<section class="landing">
	<div class="hero">

		<img class="logo" src="/favicon.svg" alt="Beeebooo Crew" />

		<div class="content">
			<h1><strong>{$t('landing.name')}</strong></h1>
			<p class="intro">{$t('landing.intro')}</p>
			<div class="landing-buttons">
				<button class="btn-landing" onclick={() => scrollTo('development')}>
					{$t('landing.cta_primary')} →
				</button>
				<button class="btn-landing-underline" onclick={() => scrollTo('projects')}>
					{$t('landing.cta_secondary')} →
				</button>
			</div>
		</div>

	</div>
</section>
