<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div>
	<h1>{$t('development.title')}</h1>
	<div class="practices-grid">
		<div class="practice">
			<h2 class="practice-title">{$t('development.responsive_design.title')}</h2>
			<div class="practice-header">
				<img
					src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
					alt="Responsive Design"
				/>
				<span class="practice-text">{$t('development.responsive_design.text')}</span>
			</div>
			<p class="practice-desc">
				{$t('development.responsive_design.desc')}
			</p>
		</div>

		<div class="practice">
			<h2 class="practice-title">{$t('development.api_integration.title')}</h2>
			<div class="practice-header">
				<img
					src="https://cdn-icons-png.flaticon.com/512/950/950394.png"
					alt="API Integration"
				/>
				<span class="practice-text">{$t('development.api_integration.text')}</span>
			</div>
			<p class="practice-desc">
				{$t('development.api_integration.desc')}
			</p>
		</div>

		<div class="practice">
			<h2 class="practice-title">{$t('development.agile_workflow.title')}</h2>
			<div class="practice-header">
				<img
					src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
					alt="Agile Workflow"
				/>
				<span class="practice-text">{$t('development.agile_workflow.text')}</span>
			</div>
			<p class="practice-desc">
				{$t('development.agile_workflow.desc')}
			</p>
		</div>

		<div class="practice">
			<h2 class="practice-title">{$t('development.testing_debugging.title')}</h2>
			<div class="practice-header">
				<img
					src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
					alt="Testing & Debugging"
				/>
				<span class="practice-text">{$t('development.testing_debugging.text')}</span>
			</div>
			<p class="practice-desc">
				{$t('development.testing_debugging.desc')}
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
  color: var(--color-theme-pink);
}

.practice-desc {
  font-size: 0.9rem;
  color: var(--color-text);
  line-height: 1.4;
  max-width: 240px;
  margin: 0 auto;
}
</style>
