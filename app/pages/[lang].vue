<script setup lang="ts">
import { isLanguage } from '../../src/data/content';
const route = useRoute();
const language = computed(() => route.params.lang);
if (!isLanguage(language.value)) throw createError({ statusCode: 404, statusMessage: 'Page not found' });
</script>

<template>
  <ProjectPage v-if="isLanguage(language)" :language="language" />
</template>
