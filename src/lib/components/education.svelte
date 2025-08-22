<script lang="ts">
  import { t } from '$lib/i18n';

  const education = [
    {
      degree: "Bachelor of Information Technology",
      school: "VŠB – Technical University of Ostrava",
      short: "VSB-TUO IT",
      years: "2018 – 2021"
    },
    {
      degree: "Engineer of Automation and Robotics",
      school: "VŠB – Technical University of Ostrava",
      short: "VSB-TUO VAM",
      years: "2021 – 2023"
    }
  ];
</script>

<div class="education">
  <h1>{$t('menu.education')}</h1>

  <div class="edu-grid">
    {#each education as item (item)}
      <div class="edu-item">
        <h2>{item.degree}</h2>
        <p class="school">{item.school} <span class="short">({item.short})</span></p>
        <p class="years">{item.years}</p>
      </div>
    {/each}
  </div>
</div>

<style>
.education {
  width: 100%;
  padding: 2rem 0;
}

.edu-grid {
  display: grid;
  grid-template-columns: 1fr; /* mobile: 1 col */
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .edu-grid {
    grid-template-columns: repeat(2, 1fr); /* desktop: 2 cols */
  }
}

.edu-item {
  background: var(--color-bg);
  color: var(--color-text);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.edu-item h2 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.edu-item .school {
  margin: 0 0 0.25rem;
  font-size: 0.95rem;
  opacity: 0.9;
}

.edu-item .short {
  font-style: italic;
  font-size: 0.9rem;
  color: var(--color-theme-dark-pink);
}

.edu-item .years {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-theme-dark-pink);
}
</style>
