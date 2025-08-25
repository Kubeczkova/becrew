<script lang="ts">
  import { t } from '$lib/i18n';

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "VŠB – Technical University of Ostrava",
      short: "VSB-TUO FEI",
      years: "2018 – 2022",
      thesisUrl: "https://example.com/bachelor-thesis",
      linkText: "View Bachelor"
    },
    {
      degree: "Engineer of Applied Mathematics",
      school: "VŠB – Technical University of Ostrava",
      short: "VSB-TUO FEI",
      years: "2022 – 2024",
      thesisUrl: "https://example.com/master-thesis",
      linkText: "View Thesis"
    }
  ];
</script>

<div class="education">
  <h1>{$t('menu.education')}</h1>

  <div class="edu-grid">
    {#each education as item (item)}
      <div class="edu-item">
        <h2 class="edu-title">{item.degree}</h2>
        <p class="edu-years">{item.short}</p>
        <p class="edu-school">{item.school}</p>
        <p class="edu-years">{item.years}</p>
        <a class="edu-link" href={item.thesisUrl} target="_blank">
          <img src="https://flagcdn.com/w40/cz.png" alt="Czech Republic" /> {item.linkText} →
        </a>
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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.edu-item {
  text-align: center;
}

.edu-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: var(--color-text);
}

.edu-school {
  font-size: 0.95rem;
  color: var(--color-text-muted, #555);
  margin-bottom: 0.3rem;
}

.edu-years {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-theme-dark-pink, #e91e63);
  margin-bottom: 0.8rem;
}

.edu-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-theme-dark-pink, #e91e63);
  text-decoration: none;
}

.edu-link img {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}

.edu-link:hover {
  text-decoration: underline;
}
</style>
