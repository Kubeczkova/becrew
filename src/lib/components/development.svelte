<!--<script lang="ts">-->
<!--  import { t } from '$lib/i18n';-->
<!--</script>-->

<div>
 <h1>Development Practices</h1>
  <div class="practices-grid">
    <div class="practice">
      <h2 class="practice-title">Responsive Design</h2>
      <div class="practice-header">
        <img src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png" alt="Responsive Design" />
        <span class="practice-text">Adaptive layouts</span>
      </div>
      <p class="practice-desc">
        Mobile-first, accessible, and consistent across all devices.
      </p>
    </div>

    <div class="practice">
      <h2 class="practice-title">API Integration</h2>
      <div class="practice-header">
        <img src="https://cdn-icons-png.flaticon.com/512/950/950394.png" alt="API Integration" />
        <span class="practice-text">Seamless data flow</span>
      </div>
      <p class="practice-desc">
        REST & GraphQL integration with secure, efficient connections.
      </p>
    </div>

    <div class="practice">
      <h2 class="practice-title">Agile Workflow</h2>
      <div class="practice-header">
        <img src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" alt="Agile Workflow" />
        <span class="practice-text">Iterative delivery</span>
      </div>
      <p class="practice-desc">
        Scrum & Kanban methods to stay flexible and focused on value.
      </p>
    </div>

    <div class="practice">
      <h2 class="practice-title">Testing & Debugging</h2>
      <div class="practice-header">
        <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="Testing & Debugging" />
        <span class="practice-text">Quality code</span>
      </div>
      <p class="practice-desc">
        Unit and E2E tests with proactive debugging for reliability.
      </p>
    </div>
  </div>
</div>

<style>
.practices-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.practice {
  text-align: center;
}

.practice-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: var(--color-text);
}

.practice-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.6rem;
}

.practice-header img {
  width: 52px;
  height: 52px;
  margin-bottom: 0.3rem;
}

.practice-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-theme-dark-pink, #e91e63);
}

.practice-desc {
  font-size: 0.9rem;
  color: var(--color-text-muted, #555);
  line-height: 1.4;
  max-width: 240px;
  margin: 0 auto;
}
</style>
