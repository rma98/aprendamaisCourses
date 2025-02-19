import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Pagina from '../views/Pagina.vue'; // Um único componente para todas as páginas

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    // Rota dinâmica para cursos e páginas
    { path: "/ingles/:curso/pag:pagina", component: Pagina, name: "CursoPagina" },
    // Redirecionamento para Home se a rota não existir
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
