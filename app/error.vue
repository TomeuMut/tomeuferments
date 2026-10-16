<script setup lang="ts">
import type { NuxtError } from '#app';
import { errorContent, isLanguage, languageOptions, project } from '../src/data/content';

const props = defineProps<{ error: NuxtError }>();
const requestedLanguage = useRequestURL().pathname.split('/')[1];
const language = isLanguage(requestedLanguage) ? requestedLanguage : 'es';
const t = errorContent[language];
const missing = computed(() => props.error.statusCode === 404);
useHead(() => ({
  htmlAttrs: { lang: language },
  title: `${missing.value ? t.title : t.unavailable} | ${project.name}`,
  meta: [{ name: 'robots', content: 'noindex, follow' }],
}));
</script>

<template>
  <div class="error-page shell">
    <header class="error-header"><a :href="`/${language}/`"><img src="/brand/logo.svg" alt="Tomeu Ferments" width="300" height="69" /></a></header>
    <main class="error-content">
      <p class="error-code">{{ error.statusCode || 500 }}</p>
      <h1>{{ missing ? t.title : t.unavailable }}</h1>
      <p class="body-copy">{{ missing ? t.text : t.retry }}</p>
      <div class="error-actions">
        <a class="button button-primary" :href="`/${language}/`">{{ t.home }}</a>
        <a class="text-link" :href="`/${language}/#elaboraciones`">{{ t.gallery }}</a>
      </div>
      <a class="text-link" :href="`mailto:${project.email}`">{{ t.contact }}</a>
    </main>
    <footer class="error-footer"><nav class="language-switcher" aria-label="Language"><a v-for="option in languageOptions" :key="option.code" :href="`/${option.code}/`" :lang="option.code" :hreflang="option.code">{{ option.name }}</a></nav></footer>
  </div>
</template>
