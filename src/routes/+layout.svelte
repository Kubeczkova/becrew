<script lang="ts">
  import Header from './Header.svelte';
  import { categories, type Skill } from '$lib/stores/skills';
  import '../app.css';

  import { waitLocale } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import Footer from './Footer.svelte';

  let { children } = $props();
  let ready = $state(false);

	interface Bubble {
		skill: Skill;
		x: number;
		y: number;
		speed: number;
		amplitude: number;
		frequency: number;
		phase: number;
		size: number;
	}

	function makeBubble(skill: Skill): Bubble {
		return {
			skill: skill,
			x: Math.random() * window.innerWidth,
			y: window.innerHeight + Math.random() * 200, // spawn below bottom
			speed: 0.5 + Math.random() * 1.9,            // vertical speed
			amplitude: 1 + Math.random() * 2,          // horizontal sway
			frequency: 0.001 + Math.random() * 0.002,      // wiggle frequency
			phase: Math.random() * Math.PI * 2,          // random phase
			size: 40 + Math.random() * 60                // bubble size
		};
	}

  let bubbles = $state<Bubble[]>([]);

	// Animation loop for floating
	function animate() {
		const t = Date.now(); // ms since start

		bubbles = bubbles.map(b => {
			let y = b.y - b.speed; // rise
			let x = b.x + Math.sin(t * b.frequency + b.phase) * b.amplitude;

			// reset bubble when it leaves top
			if (y + b.size < 0) {
				return makeBubble(b.skill);
			}

			return { ...b, x, y };
		});

		requestAnimationFrame(animate);
	}

  onMount(async () => {
    await waitLocale();
    ready = true;
    bubbles = categories[0].list.map(skill => makeBubble(skill));
		animate();
  });
</script>

<div class="app">
	  <div class="bubble-container">
    {#each bubbles as b (b.skill.name)}
      <div
        class="bubble"
        style="transform: translate({b.x}px, {b.y}px); width: {b.size}px; height: {b.size}px;"
      >
        <img src={b.skill.image} alt={b.skill.name} />
      </div>
    {/each}
  </div>
	{#if ready}
		<Header />

		<main>
			{@render children()}
		</main>

		<Footer />

	{:else}
		<p>Loading translations...</p>
	{/if}
</div>

<style>
	.app {
		display: flex;
		position: relative;
		z-index: 1;
		flex-direction: column;
		min-height: 100vh;
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

	.bubble-container {
		position: fixed; /* instead of relative */
		top: 0;
		left: 0;
		width: 100vw;   /* full viewport width */
		height: 100vh;  /* full viewport height */
		overflow: hidden;
		pointer-events: none; /* so bubbles don’t block clicks */
		z-index: -100; /* stay in background */
	}

	.bubble {
		position: absolute;
		border-radius: 50%;
		background: rgba(0, 123, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		/*transition: transform 0.1s;*/
	}

	.bubble img {
		width: 60%;
		height: 60%;
		object-fit: contain;
	}
</style>
