<script lang="ts">
	import '../app.css';
	import Fog from '$lib/components/fog.svelte';
	import { resolveRoute } from '$app/paths';

	let { children } = $props();
	import { locale } from '$lib/i18n';

	import 'flag-icons/css/flag-icons.min.css'

	const contact = {
		name: 'Ing. Nikola Kubeczková',
		phone: '+420 770 105 939',
		email: 'kubeczkova.n@gmail.com',
		ico: '11851554'
		// location: "Ostrava, Czech Republic"
	};

	function toggleLocale() {
		locale.set($locale === 'cs' ? 'en' : 'cs');
	}
</script>

<Fog />

<div class="app">
	<header>
		<a href={resolveRoute('/')} class="corner">
			<img src="/favicon.svg" alt="Beeebooo Crew" />
		</a>
		<div class="corner lang">
			<button class="lang-btn" onclick={toggleLocale}>
				{#if $locale === 'cs'}
					<span class="fi fi-gb"></span>
				{:else}
					<span class="fi fi-cz"></span>
				{/if}
			</button>
		</div>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="corner-left">
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
			<div class="contact-item">
				<span><strong>IČO</strong> {contact.ico}</span>
			</div>
			<!--			<div class="contact-item">-->
			<!--				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">-->
			<!--					<path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>-->
			<!--				</svg>-->
			<!--				<span>{contact.location}</span>-->
			<!--			</div>-->
		</div>
		<div class="corner-right">
			<span class="t top">Beeebooo</span>
			<span class="t bottom">Crew</span>
			<img src="/favicon.svg" alt="Beeebooo Crew" />
		</div>
	</footer>
</div>


<style>
	.app {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 2rem 1rem;
		gap: 2rem;
		backdrop-filter: blur(10px);
	}

	.corner-left {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-start;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-text);
		font-size: 0.95rem;
	}

	.contact-item svg {
		flex-shrink: 0;
	}

	.contact-item a {
		color: var(--color-text);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.contact-item a:hover {
		color: var(--color-bg-yellow);
		text-decoration: underline;
	}

	.corner-right {
		position: absolute;
		right: 1rem;
		bottom: 1rem;

		display: grid;
		grid-template-columns: auto max-content;
		grid-template-rows: 1fr 1fr;
		column-gap: 0.5rem;
	}

	.corner-right img {
		grid-column: 2;
		grid-row: 1 / span 2;
		width: 3.5rem;
		height: 3.5rem;
		object-fit: contain;
		padding: 0.25rem;
	}

	.corner-right .t {
		grid-column: 1;
		text-align: right;
		color: var(--color-text);
		font-weight: 600;
		line-height: 1;
	}

	.corner-right .top {
		grid-row: 1;
		align-self: end;
	}

	.corner-right .bottom {
		grid-row: 2;
		align-self: start;
	}

	@media (max-width: 768px) {
		footer {
			flex-direction: column;
			align-items: flex-start;
		}

		.corner-left {
			align-items: flex-start;
			width: 100%;
			text-align: left;
		}

		.contact-item {
			justify-content: flex-start;
		}

		.corner-right {
			margin-left: 0;
		}
	}

	.corner.lang {
		display: flex;
		align-items: center;
		border-radius: 20px;
		justify-content: center;
	}

	/* circular badge */
	.lang-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.lang-btn:active {
		transform: scale(0.97);
	}
</style>