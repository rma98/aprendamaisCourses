import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Pagina from '../views/Pagina.vue';
import Parabens from '../views/Parabens.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/parabens', name: 'Parabens', component: Parabens },
    // Rota dinâmica para cursos e páginas
    { path: "/ingles/:curso/pag/:pagina", component: Pagina, name: "CursoPagina" },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
