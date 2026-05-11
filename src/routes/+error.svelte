<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/i18n';
	import ContactForm from '$lib/components/contact-form.svelte';

	$: status = $page.status;

	$: title = status === 404
		? $t('error.404_title')
		: status === 500
			? $t('error.500_title')
			: $t('error.generic_title');

	$: subtitle = status === 404
		? $t('error.404_subtitle')
		: status === 500
			? $t('error.500_subtitle')
			: ($page.error?.message ?? $t('error.generic_subtitle'));
</script>

<svelte:head>
	<title>{status} – {$t('meta.site_name')}</title>
</svelte:head>

<section class="error-page">
	<div class="error-card">
		<span class="error-code">{status}</span>
		<div class="error-divider"></div>
		<h1 class="error-title">{title}</h1>
		<p class="error-subtitle">{subtitle}</p>
		{#if status !== 500}
			<div class="contact">
				<ContactForm />
			</div>
		{/if}
		<a href="/" class="btn-landing error-btn">{$t('error.back_home')}</a>
	</div>
</section>
