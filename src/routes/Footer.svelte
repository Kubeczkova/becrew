<script>
	// import { t } from '$lib/i18n';
	import Contact from '$lib/components/contact.svelte';
	import logo from '$lib/images/left-octopus.png';
</script>

<footer>
  <div class="corner">
    <span class="t top">Beeebooo</span>
    <span class="t bottom">Crew</span>
    <img src={logo} alt="Beeebooo Crew" />
  </div>
</footer>

<style>


.corner {
  margin-left: auto;
  display: grid;
  grid-template-columns: auto max-content;
  grid-template-rows: 1fr 1fr;
  column-gap: 0.5rem;
}

.corner img {
  grid-column: 2;
  grid-row: 1 / span 2;
  width: 3.5rem;
  height: 3.5rem;
  object-fit: contain;
  padding: 0.25rem;
}

.corner .t {
  grid-column: 1;
  text-align: right;
  color: var(--color-theme-dark-pink);
  font-weight: 600;
  line-height: 1;
}
.corner .top { grid-row: 1; align-self: end; }
.corner .bottom { grid-row: 2; align-self: start; }
</style>