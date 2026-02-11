<script>
	import { onMount } from 'svelte';

	let tx = $state(50);
	let ty = $state(50);

	let idleT = 0;

	onMount(() => {
		function tick() {
			idleT += 0.02;

			const targetX = 50 + Math.sin(idleT) * 20;
			const targetY = 50 + Math.cos(idleT * 0.8) * 20;

			tx += (targetX - tx) * 0.03;
			ty += (targetY - ty) * 0.03;

			requestAnimationFrame(tick);
		}
		tick();
	});
</script>

<div class="ambient" role="presentation" aria-hidden="true" style="--ax:{tx}; --ay:{ty};"></div>

<style>
	.ambient {
		position: fixed;
		inset: -20%;
		z-index: 0;
		pointer-events: none;

		background: radial-gradient(
			700px circle at calc(var(--ax) * 1%) calc(var(--ay) * 1%),
			rgba(255, 204, 0, 0.22),
			transparent 65%
		);

		filter: blur(20px);
	}

	@media (max-width: 768px) {
		.ambient {
			background: radial-gradient(
				400px circle at calc(var(--ax) * 1%) calc(var(--ay) * 1%),
				rgba(255, 204, 0, 0.18),
				transparent 70%
			);
		}
	}
</style>