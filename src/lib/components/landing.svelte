<script lang="ts">
	import { t } from '$lib/i18n';
	import { ChevronDown } from '@lucide/svelte';

</script>

<section>
	<h1>{$t('landing.name')}</h1>
	<h3>{$t('landing.tagline')}</h3>
	<p>{$t('landing.intro')}</p>
	<h3>
		<ChevronDown size={30} />
		{$t('landing.call-to-action')}
		<ChevronDown size={30} />
</h3>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
