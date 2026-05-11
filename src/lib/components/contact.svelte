<script lang="ts">
	import { t } from '$lib/i18n';
	import ContactForm from '$lib/components/contact-form.svelte'
</script>

<section class="project-contact-section">
	<div class="contact">
		<h2 class="project-contact-heading">{$t('projects.contact_title')}</h2>
		<p class="project-contact-sub">{$t('projects.contact_subtitle')}</p>
		<ContactForm />
	</div>
</section>