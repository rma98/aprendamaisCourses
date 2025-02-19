<template>
    <div>
        <h1>Aula de Inglês {{ curso }} - Página {{ pagina }}</h1>
        <component :is="currentPageComponent" />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

// Obtendo os parâmetros da rota
const curso: string = route.params.curso as string;
const pagina: string = route.params.pagina as string;

// Definir a página específica com base no curso e na página
const currentPageComponent = defineAsyncComponent(() => {
    /* @vite-ignore */
    return import(`./views/Ingles${curso}/Pag${pagina}.vue`);
});
</script>

<style scoped></style>