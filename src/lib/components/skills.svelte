<script lang="ts">
  import { categories } from '$lib/stores/skills';
  import { t } from '$lib/i18n';

  let activeIndex = 0;

</script>

<div>
  <h1>{$t('menu.skills')}</h1>
  <div class="tabs">
    {#each categories as category, i (category)}
      <button
        type="button"
        class="tab {i === activeIndex ? 'active' : ''}"
        on:click={() => (activeIndex = i)}
      >
        { $t(category.title) }
      </button>
    {/each}
  </div>
</div>

<style>
.tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.tab {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.4rem;
  background: var(--color-bg-blue);
  color: var(--color-text);
  cursor: pointer;
  font-weight: 600;
  transition: color 0.2s linear, background-color 0.2s linear;
}

.tab.active {
  background: var(--color-text);
  color: var(--color-bg-blue);
}

.tab:hover {
  color: var(--color-theme-dark-pink);
}
</style>
