<script lang="ts">
	import { t } from '$lib/i18n';
	import { ChevronDown } from '@lucide/svelte';
</script>

<section class="landing">
	<div class="hero">
		<img class="logo" src="/favicon.svg" alt="Beeebooo Crew" />

		<div class="content">
			<h1 class="name">{$t('landing.name')}</h1>
			<h2 class="tagline"><strong>{$t('landing.tagline')}</strong></h2>
			<p class="intro">{$t('landing.intro')}</p>

			<div class="call-to-action">
				<ChevronDown size={30} />
				<span>{$t('landing.call-to-action')}</span>
				<ChevronDown size={30} />
			</div>
		</div>
	</div>
</section>
