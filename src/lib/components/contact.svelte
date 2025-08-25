<script lang="ts">
  import { t } from '$lib/i18n';

  const contact = {
    phone: "+420 770 105 939",
    email: "me@example.com",
    github: "https://github.com/Kubeczkova",
    linkedin: "https://www.linkedin.com/in/username/",
    ico: "11851554",
    location: "Ostrava, Czech Republic"
  };
</script>

<div class="contact-card">
  <h1>{$t('menu.contact')}</h1>

  <ul>
    <li>
      <!-- Phone -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
    </li>
    <li>
      <!-- Mail -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </li>
    <li>
      <!-- GitHub -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.28 9.28 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.04.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.26 10.26 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
      <a href={contact.github} target="_blank">GitHub</a>
    </li>
    <li>
      <!-- LinkedIn -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14zM8.34 17.34v-7.2H6.25v7.2h2.09zm-1.05-8.22a1.21 1.21 0 1 1 0-2.42 1.21 1.21 0 0 1 0 2.42zm10.26 8.22v-3.87c0-2.07-1.1-3.04-2.56-3.04-1.18 0-1.7.65-1.99 1.1v-0.95h-2.09s.03.62 0 7.76h2.09v-4.34c0-.23.02-.47.09-.64.19-.47.63-.96 1.36-.96 0.96 0 1.35.73 1.35 1.8v4.14h2.09z"/></svg>
      <a href={contact.linkedin} target="_blank">LinkedIn</a>
    </li>
    <li>
      <!-- ico -->
      IČO:<a href={contact.ico} target="_blank">{contact.ico}</a>
    </li>
    <li>
      <!-- Location -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
      <span>{contact.location}</span>
    </li>
  </ul>
</div>

<style>
.contact-card {
  color: var(--color-text);
  padding-bottom: 2rem;
  width: 100%;
}

/* Responsive grid */
ul {
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: 1fr;  /* mobile default: 1 col */
  gap: 1rem;
}

@media (min-width: 768px) {
  ul {
    grid-template-columns: repeat(3, 1fr); /* desktop: 3 cols */
    grid-template-rows: repeat(2, auto);   /* 2 rows */
  }
}

li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

li a {
  color: var(--color-theme-dark-pink);
  text-decoration: none;
  transition: color 0.2s ease;
}

li a:hover {
  color: var(--color-theme-light-pink);
}
</style>
