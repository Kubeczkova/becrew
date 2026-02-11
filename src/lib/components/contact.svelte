<script lang="ts">
	import { t } from '$lib/i18n';
	import { enhance } from '$app/forms';
	import { Send } from '@lucide/svelte';

	let formState = $state<{
		submitting: boolean;
		success: boolean;
		error: string | null;
	}>({
		submitting: false,
		success: false,
		error: null
	});

	let formData = $state({
		name: '',
		contact: '',
		message: ''
	});

	let errors = $state<{
		name?: string;
		contact?: string;
		message?: string;
	}>({});

	function validateForm() {
		const newErrors: typeof errors = {};

		if (!formData.name.trim()) {
			newErrors.name = $t('contact.required');
		}

		if (!formData.contact.trim()) {
			newErrors.contact = $t('contact.required');
		}

		if (!formData.message.trim()) {
			newErrors.message = $t('contact.required');
		}

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function resetForm() {
		formData = {
			name: '',
			contact: '',
			message: ''
		};
		errors = {};
	}
</script>

<section class="contact">
	<h1>{$t('contact.title')}</h1>
	<div class="contact-container">
		<form
			method="POST"
			action="?/submitContact"
			use:enhance={() => {
				if (!validateForm()) {
					return async () => {};
				}

				formState.submitting = true;
				formState.success = false;
				formState.error = null;

				return async ({ result, update }) => {
					formState.submitting = false;

					if (result.type === 'success') {
						formState.success = true;
						resetForm();
						setTimeout(() => {
							formState.success = false;
						}, 5000);
					} else if (result.type === 'failure') {
						const errorMsg = result.data?.error;
						formState.error =
							(typeof errorMsg === 'string' ? errorMsg : null) || $t('contact.error');
					}

					await update();
				};
			}}
		>
			<div class="form-group">
				<label for="name">{$t('contact.name')}</label>
				<input
					type="text"
					id="name"
					name="name"
					bind:value={formData.name}
					placeholder={$t('contact.name_placeholder')}
					class:error={errors.name}
					disabled={formState.submitting}
				/>
				{#if errors.name}
					<span class="error-message">{errors.name}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="contact">{$t('contact.contact')}</label>
				<input
					type="text"
					id="contact"
					name="contact"
					bind:value={formData.contact}
					placeholder={$t('contact.contact_placeholder')}
					class:error={errors.contact}
					disabled={formState.submitting}
				/>
				{#if errors.contact}
					<span class="error-message">{errors.contact}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="message">{$t('contact.message')}</label>
				<textarea
					id="message"
					name="message"
					bind:value={formData.message}
					placeholder={$t('contact.message_placeholder')}
					class:error={errors.message}
					disabled={formState.submitting}
					rows="6"
				></textarea>
				{#if errors.message}
					<span class="error-message">{errors.message}</span>
				{/if}
			</div>

			{#if formState.success}
				<div class="success-message">
					{$t('contact.success')}
				</div>
			{/if}

			{#if formState.error}
				<div class="error-message-box">
					{formState.error}
				</div>
			{/if}

			<button type="submit" class="submit-btn" disabled={formState.submitting}>
				<Send />
				{formState.submitting ? '...' : $t('contact.send')}
			</button>
		</form>
	</div>
</section>
