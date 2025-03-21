<template>
    <div>
        <h1>Aula de Inglês {{ curso }} - Página {{ pagina }}</h1>

        <!-- Renderiza a página dinamicamente -->
        <component :is="currentPageComponent" :key="pagina" />

        <!-- Botões de navegação -->
        <div class="navigation-buttons">
            <!-- Botão de voltar (só aparece se a página não for a primeira) -->
            <router-link v-if="parseInt(pagina) > 1"
                :to="`/ingles/${curso}/pag/${formatPageNumber(parseInt(pagina) - 1)}`" class="prev-button">
                <i class="fas fa-arrow-left"></i>
                <span>Voltar</span>
            </router-link>

            <!-- Botão de avançar -->
            <router-link
                :to="pagina === '03' ? '/Parabens' : `/ingles/${curso}/pag/${formatPageNumber(parseInt(pagina) + 1)}`"
                class="next-button">
                <span>Avançar</span>
                <i class="fas fa-arrow-right"></i>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, shallowRef, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Criar variáveis reativas para curso e página
const curso = ref(route.params.curso as string);
const pagina = ref(route.params.pagina as string);

// Função para formatar número da página (adiciona zero à esquerda se necessário)
const formatPageNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`);

// Mapeamento das páginas disponíveis
const pageComponents: Record<string, Record<string, () => Promise<any>>> = {
    "01": {
        "01": () => import("../views/Ingles01/Pag01.vue"),
        "02": () => import("../views/Ingles01/Pag02.vue"),
        "03": () => import("../views/Ingles01/Pag03.vue"),
    },
    "02": {
        "01": () => import("../views/Ingles02/Pag01.vue"),
        "02": () => import("../views/Ingles02/Pag02.vue"),
        "03": () => import("../views/Ingles02/Pag03.vue"),
    },
};

// Definir a página específica dinamicamente
const currentPageComponent = shallowRef(defineAsyncComponent(
    pageComponents[curso.value]?.[pagina.value] || (() => import("../views/NotFound.vue"))
));

// **Atualiza automaticamente quando a rota muda**
watchEffect(() => {
    curso.value = route.params.curso as string;
    pagina.value = route.params.pagina as string;

    currentPageComponent.value = defineAsyncComponent(
        pageComponents[curso.value]?.[pagina.value] || (() => import("../views/NotFound.vue"))
    );
});
</script>


<style scoped>
.navigation-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.prev-button,
.next-button {
    display: flex;
    align-items: center;
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.prev-button i,
.next-button i {
    margin: 0 5px;
    font-size: 20px;
}

.next-button:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

.prev-button {
    background-color: #6c757d;
}

.prev-button:hover {
    background-color: #6c757c;
    transform: scale(1.05);
}

@media (max-width: 600px) {

    .prev-button,
    .next-button {
        font-size: 16px;
        padding: 10px 16px;
    }

    .prev-button i,
    .next-button i {
        font-size: 18px;
    }
}
</style>
