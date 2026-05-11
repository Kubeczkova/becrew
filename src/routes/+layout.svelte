<script lang="ts">
	import '../app.css';
	import { resolveRoute } from '$app/paths';

	let { children } = $props();
	import { locale } from '$lib/i18n';

	const contact = {
		name: 'Ing. Nikola Kubeczková',
		phone: '+420 770 105 939',
		email: 'kubeczkova.n@gmail.com',
		ico: '11851554'
	};

	function toggleLocale() {
		locale.set($locale === 'cs' ? 'en' : 'cs');
	}
</script>

<div class="app">
	<header class="header">
		<div class="corner">
			<a href={resolveRoute('/')}>
				<img src="/favicon.svg" alt="Beeebooo Crew" />
				<span class="logo-text">Beeebooo Crew</span>
			</a>
		</div>
		<div class="corner lang">
			<button class="lang-btn" onclick={toggleLocale}>
				{#if $locale === 'cs'}
					<span class="lang-text">EN</span>
				{:else}
					<span class="lang-text">CZ</span>
				{/if}
			</button>
		</div>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="footer-left">
			<div class="contact-item">
				<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
					><defs></defs><g id="ic-actions-user">
						<path d="M3,22l.79-2.88c2.61-9.5,13.81-9.5,16.42,0L21,22"></path><circle
							cx="12"
							cy="6.98"
							r="5"
						></circle></g
					>
				</svg>
				<span>{contact.name}</span>
			</div>
			<div class="contact-item">
				<span><strong>IČO</strong> {contact.ico}</span>
			</div>
		</div>

		<div class="footer-center">
			<div class="contact-item">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="20"
					height="20"
					fill="currentColor"
				>
					<path
						d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
					/>
				</svg>
				<a href={`mailto:${contact.email}`}>{contact.email}</a>
			</div>
			<div class="contact-item">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="20"
					height="20"
					fill="currentColor"
				>
					<path
						d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
					/>
				</svg>
				<a href={`tel:${contact.phone}`}>{contact.phone}</a>
			</div>
		</div>

		<div class="footer-right">
			<div class="footer-logo">
				<span class="t top">Beeebooo</span>
				<span class="t bottom">Crew</span>
				<img src="/favicon.svg" alt="Beeebooo Crew" />
			</div>
		</div>
	</footer>
</div>
